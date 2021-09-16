import React from 'react';
import { useRouter } from 'next/router';
import Layout from '../../modules/client/layout/containers/Layout';
import OrgDetail from '../../modules/client/orgs/containers/OrgDetail';

export default function Page() {
  const router = useRouter();
  return (
    <Layout>
      {props => {
        return <OrgDetail {...props} queryParams={router.query}/>;
      }}
    </Layout>
  );
}
