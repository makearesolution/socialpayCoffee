import { gql, useQuery } from '@apollo/client';
import React, { createContext } from 'react';
import { UserQueryResponse } from './types';
import { currentUser } from './admin/user/graphql/queries';

const AppContext = createContext({});

export const AppConsumer = AppContext.Consumer;

type Props = {
  children: any;
};

function AppProvider({ children }: Props) {
  const { data } = useQuery<UserQueryResponse>(gql(currentUser));

  return (
    <AppContext.Provider value={{ currentUser: (data || {}).currentUser }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;
