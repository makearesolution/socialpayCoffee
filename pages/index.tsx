import React from 'react';
import Orgs from '../modules/client/orgs/containers/Orgs';
import Admin from '../modules/admin/coupons/containers/Index';
import ClientLayout from '../modules/client/layout/containers/Layout';
import Layout from '../modules/admin/layout/containers/Layout';

export default function Home({ router }) {
  const { token } = router.query;

  if (!token) {
    return (
      <Layout>
        {props => {
          return <Admin {...props} />;
        }}
      </Layout>
    );
  }

  return (
    <ClientLayout>
      {props => {
        return <Orgs {...props} />;
      }}
    </ClientLayout>
  );
}
