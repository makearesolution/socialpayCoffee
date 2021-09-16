import { gql, useMutation, useQuery } from '@apollo/client';
import React, { useContext } from 'react';
import CompanyEdit from '../components/CompanyEdit';
import { IUser } from '../../../types';
import { csEditRequestsAddMutation } from '../../layout/graphql/mutations';
import { promotionCorsQuery } from '../../layout/graphql/queries';
import { getPluginCompanies } from '../../layout/graphql/queries';
import { Alert, Loader } from 'rsuite';
import EmptyState from '../../../common/EmptyState';
import { ApiApolloClientContext } from '../../../ApiContext';

type Props = {
  currentUser: IUser;
};

function CompanyEditContainer({ currentUser }, props: Props) {
  const apiClient = useContext(ApiApolloClientContext);

  const { loading: loading, data = {}, error: error } = useQuery(gql(promotionCorsQuery), {
    variables: { customerId: currentUser.customerId },
    client: apiClient,
  });

  if (loading) {
    return <Loader size="lg" center />;
  }

  if (error) {
    return <EmptyState type="error" title={error} />;
  }

  const promotion = data && data.promotionCors ? data.promotionCors : null;

  const [foundPromotion] = promotion.length ? promotion : [];

  const id = foundPromotion ? foundPromotion.companyId : null;

  const updatedProps = {
    ...props,
    currentUser,
    id,
  };

  return <GetCompany {...updatedProps} />;
}

export const GetCompany = ({ currentUser, id }, props: Props) => {
  const apiClient = useContext(ApiApolloClientContext);

  const [csEditRequestsAdd, { data: editData, error: editError }] = useMutation(gql(csEditRequestsAddMutation), { client: apiClient });

  const { loading, data = {}, error } = useQuery(gql(getPluginCompanies), {
    variables: { listCompanyId: id },
    client: apiClient,
  });

  const editCompany = (timeTable: string, address: string, description: string, phone: string, email: string, web: string, facebook: string) => {
    csEditRequestsAdd({
      variables: {
        companyId: id,
        timeTable,
        address,
        description,
        createdCustomer: currentUser.customerId,
        phone,
        email,
        web,
        facebook,
      },
    }).then(() => {
      Alert.success('Таны хүсэлт амжилттай илгээгдлээ.');
    });
  };

  if (loading) {
    return <Loader size="lg" center />;
  }

  if (error) {
    return <EmptyState type="error" title={error} />;
  }

  if (editError) {
    return <EmptyState type="error" title={editError} />;
  }

  const companyDetail = data.getPluginCompanies || [];

  const updatedProps = {
    currentUser,
    companyDetail,
    editCompany,
  };

  if (id === null) {
    return <h4>Компани олдсонгүй</h4>;
  }

  return <CompanyEdit {...updatedProps} />;
};

export default CompanyEditContainer;
