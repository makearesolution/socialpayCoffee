import React from 'react';
import Branches from '../components/Branches';
import { gql, useQuery } from '@apollo/client';
// import { getCustomer } from '../graphql/queries';
import { currentUser } from '../../user/graphql/queries';
import { UserQueryResponse } from '../../../types';

type Props = {
  token: string;
};

const BranchesContainer = (props: Props) => {
  const { data } = useQuery<UserQueryResponse>(
    gql(currentUser)
    // {
    //   variables: { token: props.token }
    // }
  );

  return <Branches />;
};

export default BranchesContainer;
