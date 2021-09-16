import React from 'react';
import Link from 'next/link';
import { Header as Head, HeadProfile, HeaderTop, HeaderLogo, Search, SupportMenus, HeaderLeft, HeaderRight, CouponDetail } from '../../../styles/main';
import { IUser } from '../../../types';
import { withRouter } from 'next/router';
import { Row, Col, Icon } from 'rsuite';
import CompanyEditContainer from '../../branches/containers/CompanyEdit';

type Props = {
  currentUser: IUser;
  logout: () => void;
  router: any;
};

function Header({ logout, currentUser }: Props) {
  return (
    <>
      <Head>
        <HeaderTop>
          <Row style={{ display: 'flex' }}>
            <Col sm={4} xs={12}>
              <HeaderLeft>
                <HeaderLogo>
                  <Link href="/">
                    <img src={'/static/logos/golomt_logo.png'} />
                  </Link>
                </HeaderLogo>
              </HeaderLeft>
            </Col>
            <Col xs={10} sm={20}>
              <HeaderRight>
                {currentUser.isOwner && (
                  <Search>
                    <CompanyEditContainer currentUser={currentUser} />
                  </Search>
                )}

                <SupportMenus>
                  <HeadProfile>
                    {/* <img src="/static/logos/avatar.png" alt="" /> */}
                    <div>
                      <h4>{currentUser.firstName}</h4>
                      <span title="Гарах" onClick={() => logout()}>
                        <Icon icon="user" /> &nbsp; Гарах
                      </span>
                    </div>
                  </HeadProfile>
                </SupportMenus>
              </HeaderRight>
            </Col>
          </Row>
        </HeaderTop>
      </Head>
    </>
  );
}

export default withRouter(Header);
