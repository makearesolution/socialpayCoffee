// export { default } from '../../components/admin/containers/branches';
import { useRouter } from 'next/router';
import React from 'react';
import Index from '../../modules/admin/coupons/containers/Index';
import Layout from '../../modules/admin/layout/containers/Layout';

export default function IndexPage() {
  const router = useRouter();

  return (
    <Layout>
      {(props) => {
        return <Index {...props} queryParams={router.query} />;
      }}
    </Layout>
  );
}
