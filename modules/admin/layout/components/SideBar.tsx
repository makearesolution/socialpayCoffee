import React from 'react';
import Link from 'next/link';
import { SideBar as Side, SideLink } from '../../../styles/main';
import { withRouter } from 'next/router';
import { IUser } from '../../../types';
import { useRouter } from 'next/router';

type Props = {
  router: any;
  currentUser: IUser;
};

function SideBar({ router, currentUser }: Props) {
  const route = useRouter();

  return (
    <>
      <Side>
        <SideLink>
          <li className={route.pathname === '/' ? 'active' : ''}>
            <Link href="/">Урамшуулал</Link>
          </li>
          {/* {currentUser.isOwner && (
            <li className={route.pathname === '/admin/branches' ? 'active' : ''}>
              <Link href="/admin/branches">Байгууллага</Link>
            </li>
          )} */}
        </SideLink>
      </Side>
    </>
  );
}

export default withRouter(SideBar);
