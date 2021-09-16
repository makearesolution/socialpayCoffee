import React from 'react';
import Layout from '../../modules/client/layout/containers/Layout';
import Orgs from '../../modules/client/orgs/containers/Orgs';

export default function Page() {
  return (
    <Layout>
      {props => {
        return <Orgs {...props} />;
      }}
    </Layout>
  );
}
