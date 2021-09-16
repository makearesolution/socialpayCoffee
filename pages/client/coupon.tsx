import React from 'react';
import Layout from '../../modules/client/layout/containers/Layout';
import Coupon from '../../modules/client/coupon/containers/Coupon';

export default function Page() {
  return (
    <Layout>
      {props => {
        return <Coupon {...props} />;
      }}
    </Layout>
  );
}
