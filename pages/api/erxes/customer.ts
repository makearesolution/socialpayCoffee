import { init } from '../db/connection';
import Users from '../db/models/Users';
import { sendGraphQLRequest } from '../utils';
import { fieldsGroup } from '../graphql/queries';

init();

// url: /erxes/customer
export default async function handler(req, res) {
  const { type, ...doc } = req.body;

  if (!type && req.headers['erxes-token']) {
    return res.status(200).send('success');
  }

  if (!type) {
    return res.status(400).send('Bad request');
  }

  const actions = ['create', 'update', 'delete'];

  if (type === 'customer') {
    const { action, text, data } = doc;
    if (!actions.includes(action)) {
      return res.status(400).send('Bad request');
    }

    const fieldGroup: any = await sendGraphQLRequest({
      query: fieldsGroup,
      name: 'clientPortalFieldsGroup',
      variables: { name: 'coffeeShop', type: 'customer' }
    });

    if (fieldGroup && fieldGroup.fields) {
      try {
        const customerObj = JSON.parse(data);

        if (action === 'delete') {
          const { object = {} } = customerObj;

          await Users.deleteErxesCustomer(object._id);
        }

        const fields: { _id: string; text: string; type: string }[] =
          fieldGroup.fields;

        const passwordField = fields.find(f => f.text === 'password');

        if (action === 'update' && passwordField) {
          const { updatedDocument, newData } = customerObj;

          if (!updatedDocument.primaryEmail) {
            return res.status(400).send('email empty');
          }

          const user = await Users.findOne({
            email: updatedDocument.primaryEmail,
            customerId: { $ne: updatedDocument._id }
          }).lean();

          if (user) {
            return res.status(400).send('duplicated email');
          }

          const fieldsData =
            newData.customFieldsData || updatedDocument.customFieldsData;

          const passwordValue = fieldsData.find(
            d => d.field === passwordField._id
          );

          if (passwordValue) {
            const ownerField = fields.find(f => f.type === 'check');
            const ownerValue = fieldsData.find(d => d.field === ownerField._id);

            await Users.createOrUpdate({
              customerId: updatedDocument._id,
              password: passwordValue.stringValue,
              isOwner: ownerValue && ownerValue.stringValue ? true : false,
              firstName: updatedDocument.firstName,
              lastName: updatedDocument.lastName,
              email: updatedDocument.primaryEmail
            });
          }
        }

        return res.status(200).send('success');
      } catch (e) {
        console.log(e.message);
        return res.status(400).send(e.message);
      }
    }
  }

  return res.status(400).send('Bad request');
}
