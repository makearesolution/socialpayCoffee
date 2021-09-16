import React from 'react';
import 'rsuite/lib/styles/index.less';
import '../styles/globals.less';
import '../styles/rsuite-custom.less';
import { ApolloProvider } from '@apollo/client';
import withApolloClient from './lib/withApolloClient';
import { ApiApolloClientContext } from '../modules/ApiContext';
import Head from 'next/head';
type Props = {
  apolloClient: any;
  apiClient: any;
  pageProps: any;
  Component: any;
  router: any;
};

function MyApp({ Component, pageProps, apolloClient, apiClient, router }: Props) {
  return (
    <ApiApolloClientContext.Provider value={apiClient}>
      <ApolloProvider client={apolloClient}>
        <Head>
          <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, user-scalable=0, minimum-scale=1.0, maximum-scale=1.0" />
        </Head>
        <Component {...pageProps} router={router} />
      </ApolloProvider>
    </ApiApolloClientContext.Provider>
  );
}

export default withApolloClient(MyApp);
