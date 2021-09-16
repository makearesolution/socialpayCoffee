import React, { useContext, useState } from 'react';
import CouponSearch from '../components/CouponSearch';
import { gql, useQuery, useMutation } from '@apollo/client';
import { ApiApolloClientContext } from '../../../ApiContext';
import { queries, mutations } from '../graphql';
import { promotionCorsQuery } from '../../layout/graphql/queries';
import { Loader } from 'rsuite';
import { IUser } from '../../../types';
import EmptyState from '../../../common/EmptyState';
import { Alert } from 'rsuite';
type Props = {
  token: string;
  searchValue: string;
  showModal: boolean;
  currentUser: IUser;
};
function CouponSearchContainer({ currentUser, searchValue, showModal }, props: Props) {
  const apiClient = useContext(ApiApolloClientContext);

  const { loading: loading, data = {}, error: error } = useQuery(gql(promotionCorsQuery), {
    variables: { customerId: currentUser.customerId },
    client: apiClient,
  });

  if (loading) {
    return <Loader size="lg" center />;
  }

  if (error) {
    return <EmptyState type="error" title={error} />;
  }

  const promotion = data && data.promotionCors ? data.promotionCors : null;

  const [foundPromotion] = promotion.length ? promotion : [];

  const id = foundPromotion ? foundPromotion.companyId : null;

  const updatedProps = {
    ...props,
    currentUser,
    id,
    searchValue,
    showModal,
  };

  return <CouponSearchForm {...updatedProps} />;
}

const CouponSearchForm = ({ searchValue, showModal, currentUser, id }, props: Props) => {
  const apiClient = useContext(ApiApolloClientContext);
  const [couponUpdatedData, setCouponUpdatedData] = useState(null);

  const responseMessage = 'Cannot edit coupon, you are not owner!';

  const [couponsEdit, { data: couponEditData, error: couponEditError }] = useMutation(gql(mutations.couponsEdit), { client: apiClient });

  const editCoupon = (_id, status) => {
    couponsEdit({
      variables: {
        _id,
        status,
        updatedCustomer: currentUser.customerId,
      },
    }).then((data) => {
      setCouponUpdatedData(data);
      if (data.data.couponsEdit.responseMessage == responseMessage) {
        Alert.error(responseMessage);
      } else {
        Alert.success('Амжилттай хадгаллаа.');
      }
    });
  };

  if (couponEditError) {
    return <EmptyState title={`${couponEditError.message}`} type="error" />;
  }

  const { loading, data = {}, error } = useQuery(gql(queries.couponsQuery), {
    variables: { couponCode: searchValue, companyId: id },
    client: apiClient,
  });

  if (loading) {
    return <Loader size="lg" center />;
  }

  if (error) {
    return <EmptyState title={`${error.message}`} type="error" />;
  }

  const coupons = data.coupons;

  const updatedProps = {
    coupons,
    searchValue,
    editCoupon,
    showModal,
    couponUpdatedData,
  };

  return <CouponSearch {...updatedProps} />;
};

export default CouponSearchContainer;
