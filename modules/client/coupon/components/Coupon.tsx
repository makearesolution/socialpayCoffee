import React, { useState } from 'react';
import { CouponContainer, SearchOrg, OrgCoupons } from '../../../styles/client';
import { Nav } from 'rsuite';
import ActiveCoupon from './ActiveCoupon';
import UsedCoupon from './UsedCoupon';
type Props = {
  props: string;
  coupons: any;
};

function Coupon({ coupons }, props: Props) {
  const [active, setActive] = useState(0);
  const activeCoupons = coupons && coupons.filter((coupon) => coupon.status === 'New');
  const usedCoupons = coupons && coupons.filter((coupon) => coupon.status === 'Used');

  return (
    <CouponContainer>
      <SearchOrg>
        <Nav activeKey={active}>
          <Nav.Item eventKey={0} onClick={() => setActive(0)}>
            Идэвхтэй
          </Nav.Item>
          <Nav.Item eventKey={1} onClick={() => setActive(1)}>
            Ашигласан
          </Nav.Item>
        </Nav>
      </SearchOrg>
      <OrgCoupons>{active === 0 ? <ActiveCoupon coupons={activeCoupons} /> : <UsedCoupon coupons={usedCoupons} />}</OrgCoupons>
    </CouponContainer>
  );
}

export default Coupon;
