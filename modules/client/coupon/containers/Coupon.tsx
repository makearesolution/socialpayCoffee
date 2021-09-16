import Coupon from '../components/Coupon';
import { gql, useQuery } from '@apollo/client';
import React, { useContext } from 'react';
import { ApiApolloClientContext } from '../../../ApiContext';
import { couponsQuery } from '../graphql/queries';
import { Loader } from 'rsuite';
import EmptyState from '../../../common/EmptyState';
import { IUser } from '../../../types';
import { ClientConsumer } from '../../layout/containers/ClientContext';

type Props = {
  currentCustomer?: IUser;
};

const CouponContainer = ({ currentCustomer }, props: Props) => {
  const apiClient = useContext(ApiApolloClientContext);

  const { loading, data = {}, error } = useQuery(gql(couponsQuery), {
    variables: { customerId: currentCustomer.erxesCustomerId, page: 0, perPage: 20 },
    skip: currentCustomer.erxesCustomerId === null ? true : false,
    client: apiClient,
  });

  if (loading) {
    return <Loader size="lg" center />;
  }

  if (error) {
    return <EmptyState title={`${error.message}`} type="error" />;
  }

  return <Coupon coupons={data.coupons} />;
};

const WithConsumer = () => {
  return (
    <ClientConsumer>
      {(values) => {
        return <CouponContainer currentCustomer {...values} />;
      }}
    </ClientConsumer>
  );
};

export default WithConsumer;
