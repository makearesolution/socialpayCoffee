import React from 'react';
import Footer from '../components/Footer';
import { IUser } from '../../../types';
type Props = {
  currentCustomer?: IUser;
};

function FooterContainer(props: Props) {
  return <Footer />;
}

export default FooterContainer;
