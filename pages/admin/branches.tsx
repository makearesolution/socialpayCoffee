// export { default } from '../../components/admin/containers/branches';
import { useRouter } from 'next/router';
import React from 'react';
import Branches from '../../modules/admin/branches/containers/Branches';
import Layout from '../../modules/admin/layout/containers/Layout';

export default function BranchesPage() {
  const router = useRouter();

  return (
    <Layout>
      {(props) => {
        return <Branches {...props} queryParams={router.query} />;
      }}
    </Layout>
  );
}
