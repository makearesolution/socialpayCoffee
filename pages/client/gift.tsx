import React from 'react';
import Layout from '../../modules/client/layout/containers/Layout';
import Gift from '../../modules/client/gift/containers/Gift';

export default function Page() {
  return (
    <Layout>
      {props => {
        return <Gift {...props} />;
      }}
    </Layout>
  );
}
