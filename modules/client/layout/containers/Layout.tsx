import React from 'react';
import { IUser } from '../../../types';
import ClientLayout from '../components/Layout';
import ClientProvider, { ClientConsumer } from './ClientContext';
type Props = {
  children: (values: any) => JSX.Element;
  currentCustomer?: IUser;
};

const Layout = (props: Props) => {
  return (
    <ClientProvider>
      <ClientConsumer>
        {({ currentCustomer }: { currentCustomer: IUser }) => {
          if (!currentCustomer) {
            return `User not found`;
          }

          return <ClientLayout {...props} currentCustomer={currentCustomer} />;
        }}
      </ClientConsumer>
    </ClientProvider>
  );
};

export default Layout;
