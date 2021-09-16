import React from 'react';
import Orgs from '../../modules/client/orgs/containers/Orgs';
import Layout from '../../modules/client/layout/containers/Layout';

export default function OrgsPage() {
  return (
    <Layout>
      {props => {
        return <Orgs {...props} />;
      }}
    </Layout>
  );
}
