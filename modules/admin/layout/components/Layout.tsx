import React from 'react';
import { Container, MainContent, MainDashboard } from '../../../styles/main';
import Header from '../containers/Header';
import SideBar from '../containers/SideBar';
import { IUser } from '../../../types';
import { Row, Col } from 'rsuite';

type Props = {
  children: any;
  currentUser: IUser;
};

function Layout({ children, currentUser }: Props) {
  return (
    <MainDashboard>
      <Header currentUser={currentUser} />
      <Row>
        <Col md={4} sm={6} xsHidden>
          <SideBar currentUser={currentUser} />
        </Col>
        <Col md={20} sm={18} xs={24}>
          <MainContent>
            <Container>{children({ currentUser })}</Container>
          </MainContent>
        </Col>
      </Row>
    </MainDashboard>
  );
}

export default Layout;
