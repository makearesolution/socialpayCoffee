import { gql, useMutation } from '@apollo/client';
import React from 'react';
import { mutations } from '../../user/graphql';
import SideBar from '../components/SideBar';
import { IUser } from '../../../types';

type Props = {
  currentUser: IUser;
};

function SideBarContainer(props: Props) {
  const [logout, { data, error }] = useMutation(gql(mutations.logout));

  if (error) {
    return <div>{error.message}</div>;
  }

  if (data) {
    window.location.href = '/';
  }

  const updatedProps = {
    ...props,
    logout
  };

  return <SideBar {...updatedProps} />;
}

export default SideBarContainer;
