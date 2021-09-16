import { gql, useQuery } from '@apollo/client';
import React, { useContext } from 'react';
import { ApiApolloClientContext } from '../../../ApiContext';
import Orgs from '../components/Orgs';
import { getPluginParentCompanies } from '../graphql/queries';
import { Loader } from 'rsuite';
import EmptyState from '../../../common/EmptyState';
type Props = {};

const Companies = (props: Props) => {
  const apiClient = useContext(ApiApolloClientContext);

  const { loading, data = {}, error } = useQuery(gql(getPluginParentCompanies), {
    variables: { page: 0, perPage: 20 },
    client: apiClient,
  });

  const parentCompanies = data.getPluginParentCompanies || [];

  if (loading) {
    return <Loader size="lg" center />;
  }

  if (error) {
    return <EmptyState title={`${error.message}`} type="error" />;
  }

  return <Orgs parentCompanies={parentCompanies} />;
};

export default Companies;
