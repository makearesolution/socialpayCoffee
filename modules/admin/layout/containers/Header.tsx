import { gql, useMutation } from '@apollo/client';
import React from 'react';
import { mutations } from '../../user/graphql';
import Header from '../components/Header';
import { IUser } from '../../../types';
type Props = {
  currentUser: IUser;
  headerBottomComponent?: React.ReactNode;
};

function HeaderContainer({ currentUser }, props: Props) {
  const [logout, { data, error }] = useMutation(gql(mutations.logout));

  if (error) {
    return <div>{error.message}</div>;
  }

  if (data) {
    window.location.href = '/';
  }

  const updatedProps = {
    ...props,
    logout,
    currentUser
  };

  return <Header {...updatedProps} />;
}

export default HeaderContainer;
