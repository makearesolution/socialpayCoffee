import request from 'request';

export const getBankCustomer = async golomtToken => {
  if (golomtToken === 'test') {
    return {
      firstName: 'Даваа',
      lastName: 'Мягмар',
      phone: '99117766',
      registrationNumber: 'УБ99010101',
      individualId: '123456',
      golomtToken
    };
  }

  return await new Promise(async (resolve, reject) => {
    request.post(
      {
        url: process.env.SMART_TOKEN_URL,
        body: JSON.stringify({
          method: 'checkAdditionalToken',
          params: [golomtToken]
        })
      },
      (err, res, body) => {
        if (err) {
          console.log('get customer error: ', err);
          return reject(err);
        }

        const { result } = JSON.parse(body);

        console.log('get customer result: ', result);

        const {
          FirstName,
          LastName,
          MobileNumber,
          Email,
          RegisterId,
          Result,
          IndividualId
        } = result;

        if (!result || Result !== 'SUCCESS') {
          return reject({ message: 'Харилцагчийн мэдээлэл олдсонгүй' });
        }

        const registrationNumber = RegisterId.replace(/\s/g, '').toUpperCase();

        return resolve({
          firstName: FirstName.toUpperCase(),
          lastName: LastName.toUpperCase(),
          phone: MobileNumber,
          email: Email,
          registrationNumber,
          golomtToken,
          individualId: IndividualId
        });
      }
    );
  });
};
