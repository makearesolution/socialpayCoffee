import React, { useContext } from 'react';
import Index from '../components/Index';
import { gql, useQuery } from '@apollo/client';
import { ApiApolloClientContext } from '../../../ApiContext';
import { queries } from '../graphql';
import { Loader } from 'rsuite';
import { IUser } from '../../../types';
import EmptyState from '../../../common/EmptyState';
type Props = {
  token: string;
  currentUser: IUser;
};

const IndexContainer = ({ currentUser }, props: Props) => {
  const apiClient = useContext(ApiApolloClientContext);

  const { loading, data = {}, error } = useQuery(gql(queries.promotionCorsQuery), {
    variables: { customerId: currentUser.customerId },
    client: apiClient,
  });

  const promotions = data.promotionCors || [];

  const updatedProps = {
    promotions,
    currentUser,
  };

  if (loading) {
    return <Loader size="lg" center />;
  }

  if (error) {
    return <EmptyState title={`${error.message}`} type="error" />;
  }

  return <Index {...updatedProps} />;
};
export default IndexContainer;
