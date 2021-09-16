import React, { useState } from 'react';
import Link from 'next/link';
import { Footer as Foot, Menu, MenuItem } from '../../../styles/client';
import { withRouter } from 'next/router';
import { useRouter } from 'next/router';
import { orgSvg, couponSvg } from '../../../common/Svg';

type Props = {
  router: any;
};

function Footer({ router }: Props) {
  const route = useRouter();
  const token = route.query.token;
  const [dayCoupon, setDayCoupon] = useState(true);

  return (
    <Foot>
      <Menu>
        <Link href={`/client/?token=${token}`}>
          <MenuItem className={` animate__pulse  animate__animated ${route.pathname === `/client` || route.pathname === '/' || route.pathname === '/client/details' ? 'active' : ''}`}>
            {orgSvg}
            <span>Байгууллага</span>
          </MenuItem>
        </Link>
        <Link href={`/client/gift/?token=${token}`}>
          <MenuItem className={` animate__pulse  animate__animated ${route.pathname === `/client/gift` ? 'active' : ''}`}>
            <img src={'../../../../static/logos/gift.png'} alt="Org" className={dayCoupon && 'day-coupon'} />
          </MenuItem>
        </Link>
        <Link href={`/client/coupon/?token=${token}`}>
          <MenuItem className={` animate__pulse  animate__animated ${route.pathname === `/client/coupon` ? 'active' : ''}`}>
            {couponSvg}
            <span>Миний купон</span>
          </MenuItem>
        </Link>
      </Menu>
    </Foot>
  );
}

export default withRouter(Footer);
