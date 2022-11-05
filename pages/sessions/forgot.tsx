import type { ReactElement } from 'react';
import Layout from './../../components/layout';
import NestedLayout from './../../components/nested-layout';
import type { NextPageWithLayout } from './../_app';

const ForgotPass: NextPageWithLayout = () => {
  return (
    <div>
      <h3>Reset Password</h3>
      <p>Come here to reset your password</p>
    </div>
  );
};

ForgotPass.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <NestedLayout>{page}</NestedLayout>
    </Layout>
  );
};

export default ForgotPass;
