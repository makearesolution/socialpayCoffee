import { gql, useQuery } from '@apollo/client';
import React, { useContext } from 'react';
import { ApiApolloClientContext } from '../../../ApiContext';
import OrgDetail from '../components/OrgDetail';
import { promotionCorsQuery, getPluginCompanies } from '../graphql/queries';
import { Loader } from 'rsuite';

type Props = {
  token: string;
  props: string;
  queryParams: any;
};

const OrgDetailContainer = ({ queryParams: { id }, ...props }: Props) => {
  const apiClient = useContext(ApiApolloClientContext);

  const { loading, data = {} } = id
    ? useQuery(gql(promotionCorsQuery), {
        variables: { companyId: id },
        client: apiClient,
        skip: !id,
      })
    : { loading: true };

  const { loading: loadingCompany, data: dataCompany = {} } = id
    ? useQuery(gql(getPluginCompanies), {
        variables: { listCompanyId: id },
        client: apiClient,
        skip: !id,
      })
    : { loading: true };

  if (loading || loadingCompany) {
    return <Loader size="lg" center />;
  }

  const detail = data.promotionCors || {};
  const companyDetail = dataCompany.getPluginCompanies;
  const updatedProps = {
    ...props,
    detail,
    companyDetail,
  };

  return <OrgDetail {...updatedProps} />;
};

export default OrgDetailContainer;
