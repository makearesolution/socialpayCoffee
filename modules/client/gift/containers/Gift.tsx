import React, { useContext, useState } from 'react';
import Gift from '../components/Gift';
import { ClientConsumer } from '../../layout/containers/ClientContext';
import { IUser } from '../../../types';
import { ApiApolloClientContext } from '../../../ApiContext';
import mutations from '../graphql/mutations';
import { promotionPullDatas } from '../graphql/queries';
import { gql, useMutation, useQuery } from '@apollo/client';
import { Alert, Loader } from 'rsuite';
import EmptyState from '../../../common/EmptyState';
type Props = {
  currentCustomer?: IUser;
};

const GiftContainer = ({ currentCustomer }, props: Props) => {
  const apiClient = useContext(ApiApolloClientContext);
  const [giftData, setGiftData] = useState(null);

  const [couponsAdd, { data: addedData, error: addedError, loading: addedLoading }] = useMutation(gql(mutations.couponsAdd), { client: apiClient });

  const createCoupon = (dataId: string) => {
    couponsAdd({
      variables: {
        dataId,
      },
    }).then((data) => {
      setGiftData(data);
    });
  };

  const { loading, data = {}, error } = useQuery(gql(promotionPullDatas), {
    variables: { customerId: currentCustomer.erxesCustomerId },
    client: apiClient,
  });

  const promotionData = data.promotionPullDatas || [];

  if (loading) {
    return <Loader size="lg" center />;
  }

  if (error) {
    return <EmptyState title={`${error.message}`} type="error" />;
  }

  if (addedError) {
    return <EmptyState title={`${addedError.message}`} type="error" />;
  }

  const updatedProps = {
    createCoupon,
    promotionData,
    giftData: giftData,
    error,
  };

  return <Gift {...updatedProps} />;
};

const WithConsumer = () => {
  return (
    <ClientConsumer>
      {(values) => {
        return <GiftContainer currentCustomer {...values} />;
      }}
    </ClientConsumer>
  );
};

export default WithConsumer;
