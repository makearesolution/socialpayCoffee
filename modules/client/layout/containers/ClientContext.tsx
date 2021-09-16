import React from 'react';
import { gql, useQuery } from '@apollo/client';
import { checkCustomer } from '../graphql/queries';
import { CustomerQueryResponse } from '../../../types';
import { useRouter } from 'next/router';
import { Loader } from 'rsuite';
import EmptyState from '../../../common/EmptyState';

const ClientContext = React.createContext({});

export const ClientConsumer = ClientContext.Consumer;

type Props = {
  children?: JSX.Element;
  // token?: string
};

const Client = ({ children }: Props) => {
  const router = useRouter();
  const { token } = router.query;

  if (!token) {
    return <EmptyState title={`Хэргэлэгч олдсонгүй`} type="error" />;
  }

  const { data, loading, error } = useQuery<CustomerQueryResponse>(gql(checkCustomer), {
    variables: { token },
  });

  if (error) {
    return <EmptyState title={`${error.message}`} type="error" />;
  }

  if (loading) {
    return <Loader size="lg" center />;
  }

  const currentCustomer = data.checkCustomer;

  if (!data || !currentCustomer) {
    return <EmptyState title="Хэргэлэгч олдсонгүй" />;
  }

  return <ClientContext.Provider value={{ currentCustomer }}>{children}</ClientContext.Provider>;
};

export default Client;
