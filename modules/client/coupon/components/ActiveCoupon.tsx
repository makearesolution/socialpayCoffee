import React from 'react';
import { CouponItem, BlankText } from '../../../styles/client';
import { Row, Col } from 'rsuite';
type Props = {
  coupons: any;
};

function Coupon({ coupons }, props: Props) {
  const item = (coupon) => {
    if (!coupon.promotionCor) {
      return null;
    }
    return (
      <CouponItem className="animate__fadeInUp animate__animated">
        <Row gutter={10}>
          <Col xs={8}>
            <div className="thumbnail">
              <img src={coupon.promotionCor.promotion.imageDir || '/default.jpeg'} alt="" />
            </div>
          </Col>
          <Col xs={16}>
            <div className="caption">
              <h6 className="branch-title">{coupon.promotionCor.companies[0].primaryName}</h6>
              <h4>{coupon.promotionCor.promotion.title}</h4>
              <span className="coupon-code">Купон код: {coupon.couponCode}</span>
              <div className="details">
                <span>{coupon.promotionCor.promotion.discountPercent}%</span>
                <span>{coupon.promotionCor.promotion.mainPrice}</span>
              </div>
            </div>
          </Col>
        </Row>
      </CouponItem>
    );
  };

  return <>{coupons && coupons.length ? coupons.map((coupon) => item(coupon)) : <BlankText>Танд одоогоор идэвхтэй купон байхгүй байна.</BlankText>}</>;
}

export default Coupon;
