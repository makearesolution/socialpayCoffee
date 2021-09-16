import { gql, useQuery } from '@apollo/client';
import React, { useContext } from 'react';
import { ApiApolloClientContext } from '../../../ApiContext';
import ChildOrgs from '../components/ChildOrgs';
import { getPluginCompanies } from '../graphql/queries';
import { Loader } from 'rsuite';
import EmptyState from '../../../common/EmptyState';
type Props = {
  parentId: string;
};

const ChildOrgsContainer = ({ parentId }, props: Props) => {
  const apiClient = useContext(ApiApolloClientContext);

  const { loading, data = {}, error } = useQuery(gql(getPluginCompanies), {
    variables: { page: 0, perPage: 1, listParentCompanyId: parentId },
    client: apiClient,
  });

  const childCompanies = data.getPluginCompanies || [];

  if (loading) {
    return <Loader size="lg" center />;
  }

  if (error) {
    return <EmptyState title={`${error.message}`} type="error" />;
  }
  return <ChildOrgs companies={childCompanies} />;
};

export default ChildOrgsContainer;
