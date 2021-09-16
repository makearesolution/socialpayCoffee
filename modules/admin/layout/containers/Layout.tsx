import React from 'react';
import Head from 'next/head';
import DumbLayout from '../components/Layout';
import AppProvider, { AppConsumer } from '../../../appContext';
import { Store } from '../../../types';
import Login from '../../user/containers/Login';

type Props = {
  children: (values: any) => JSX.Element;
  headerBottomComponent?: React.ReactNode;
};

const Layout = (props: Props) => {
  return (
    <AppProvider>
      <AppConsumer>
        {({ currentUser, ...otherProps }: Store) => {
          if (!currentUser) {
            return <Login />;
          }

          return (
            <>
              <Head>
                <link rel="shortcut icon" href={''} type="image/x-icon" />
              </Head>
              <DumbLayout
                {...props}
                {...otherProps}
                currentUser={currentUser}
              />
            </>
          );
        }}
      </AppConsumer>
    </AppProvider>
  );
};

export default Layout;
