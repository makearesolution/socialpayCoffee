import React, { useState } from 'react';
import { CouponDetail } from '../../../styles/main';
import { Row, Col, Button, Modal } from 'rsuite';
type Props = {
  coupons: any;
  editCoupon: (_id: string, status: string) => void;
  showModal: boolean;
  couponUpdatedData: any;
};

function CouponSearch({ editCoupon, coupons, showModal }, props: Props) {
  const [show, setShow] = useState(showModal);
  const toggleModal = () => setShow((value) => !value);

  const coupon = coupons && coupons.length ? coupons[0] : [];

  const updateCoupon = () => {
    editCoupon(coupon._id, 'Used');
    setShow(false);
  };

  const salePrice = (main, discount) => {
    return Math.abs((parseInt(main) * parseInt(discount)) / 100 - parseInt(main));
  };

  if (coupons.length == 0) {
    return <>{show && <p className="not-found-coupon">Хайлт олдсонгүй.</p>}</>;
  }

  if (!coupon) {
    return <h4>Идэвхтэй купон байхгүй байна</h4>;
  }

  return (
    <Modal className="coupon-modal" show={show} onHide={toggleModal}>
      <Modal.Header>
        <Modal.Title>Урамшууллын дугаар</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <CouponDetail>
          <h5>
            Купон: <strong>{coupon.couponCode}</strong>
          </h5>
          <Row gutter={20}>
            <Col xs={24} sm={12}>
              <img src={(coupon.promotionCor && coupon.promotionCor.promotion.imageDir) || '../../../../static/logos/coffee.png'} alt="" />
            </Col>
            <Col xs={24} sm={12}>
              <h6 className="prom-title">{coupon.promotionCor && coupon.promotionCor.promotion.title}</h6>
              <span>
                Төлөв: <strong>{coupon.status}</strong>
              </span>
              {coupon.promotionCor ? (
                <>
                  <span>
                    Үндсэн үнэ: <strong>{coupon.promotionCor && coupon.promotionCor.promotion.mainPrice}</strong>
                  </span>
                  <span>
                    Хямдралын хувь: <strong>{coupon.promotionCor && coupon.promotionCor.promotion.discountPercent}%</strong>
                  </span>
                  <span>
                    Хямдарсан үнэ: <strong>{coupon.promotionCor && salePrice(coupon.promotionCor && coupon.promotionCor.promotion.mainPrice, coupon.promotionCor.promotion.discountPercent)}</strong>
                  </span>
                  <span>
                    Үлдсэн тоо ширхэг: <strong>{coupon.promotionCor && coupon.promotionCor.couponLimit}ш</strong>
                  </span>
                </>
              ) : (
                <h4>Урамшууллын мэдээлэл байхгүй байна.</h4>
              )}
            </Col>
          </Row>
        </CouponDetail>
      </Modal.Body>
      <Modal.Footer>
        {coupon.status == 'Used' || (
          <Button onClick={updateCoupon} appearance="primary">
            Ашиглах
          </Button>
        )}

        <Button onClick={toggleModal} appearance="subtle">
          Цуцлах
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default CouponSearch;
