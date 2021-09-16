import React, { useState } from 'react';
import { DashboardContainer, ProductItem, UsedCouponList } from '../../../styles/main';
import { Row, Col, Modal, FlexboxGrid, ButtonToolbar, Button, Form, FormGroup, FormControl, ControlLabel } from 'rsuite';
import CouponSearch from '../containers/CouponSearch';
import { IUser } from '../../../types';
import Moment from 'moment';
type Props = {
  promotions: any;
  currentUser: IUser;
};

function Index({ promotions, currentUser }, props: Props) {
  const [show, setShow] = useState(false);
  const [showCouponModal, setShowCouponModal] = useState(false);
  const [code, setCode] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [modalContent, setModalContent] = useState({ title: '', couponLimit: '', couponNewCount: '', couponUsedCount: '', couponUsed: [] });

  const toggleCouponModal = (promotion) => {
    setModalContent({
      title: promotion.promotion.title,
      couponLimit: promotion.couponLimit,
      couponNewCount: promotion.couponNew.length,
      couponUsedCount: promotion.couponUsed.length,
      couponUsed: promotion.couponUsed,
    });
    setShowCouponModal((value) => !value);
  };

  const closeCouponModal = () => {
    setModalContent({
      title: '',
      couponLimit: '',
      couponNewCount: '',
      couponUsedCount: '',
      couponUsed: [],
    });
    setShowCouponModal((value) => !value);
  };

  const productItem = (promotion) => {
    return (
      <FlexboxGrid.Item colspan={6} componentClass={Col} key={promotion._id} xs={24} sm={12} md={8} lg={6}>
        <ProductItem>
          <div className="thumbnail" style={{ background: 'url(' + promotion.promotion.imageDir + ')' }} />
          <div className="caption">
            <h5>{promotion.promotion.title}</h5>
            <div className="details">
              <span>{promotion.promotion.discountPercent}%</span>
              <span>{promotion.couponLimit}ш</span>
              <span>{promotion.promotion.mainPrice}</span>
            </div>
            <div className="coupon-btn">
              <Button onClick={() => toggleCouponModal(promotion)} appearance="primary">
                Купоны мэдээлэл харах
              </Button>
            </div>
          </div>
        </ProductItem>
      </FlexboxGrid.Item>
    );
  };

  const handleSubmit = () => {
    setShow(true);
    setSearchValue(code);
  };

  const handleChange = (values) => {
    setCode(values.code);
  };

  return (
    <DashboardContainer>
      {currentUser.isOwner ? null : promotions && promotions.length ? (
        <Row>
          <Col md={9}>
            <Form className="search-form" onChange={handleChange} onSubmit={handleSubmit}>
              <FormGroup>
                <ControlLabel>Купон код</ControlLabel>
                <FormControl name="code" />
              </FormGroup>
              <FormGroup>
                <ButtonToolbar>
                  <Button type="submit" appearance="primary">
                    Хайх
                  </Button>
                </ButtonToolbar>
              </FormGroup>
            </Form>
          </Col>
          <Col md={15}>
            <CouponSearch currentUser={currentUser} searchValue={searchValue} showModal={show} />
          </Col>
        </Row>
      ) : null}
      <h4 style={{ marginBottom: '2rem' }}>{promotions && promotions.length ? 'Зарлагдсан урамшууллууд' : 'Зарлагдсан урамшуулал байхгүй байна.'}</h4>
      <FlexboxGrid justify="start">{promotions.map((promotion) => productItem(promotion))}</FlexboxGrid>

      <Modal show={showCouponModal} onHide={closeCouponModal}>
        <Modal.Header>
          <Modal.Title>{modalContent.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <UsedCouponList>
            <div className="coupon-count">
              <span>
                Нийт: <strong>{modalContent.couponLimit}ш</strong>
              </span>
              <span>
                Идэвхтэй: <strong>{modalContent.couponNewCount}ш</strong>
              </span>
              <span>
                Ашгилсан: <strong>{modalContent.couponUsedCount}ш</strong>
              </span>
            </div>
            <h5>Ашгилсан купонууд</h5>
            <div className="coupon-scroll">
              {modalContent.couponUsed.map((item) => (
                <div className="coupon-item" key={item._id}>
                  <h6>Купон код: {item.couponCode}</h6>
                  <div className="flex">
                    <span>
                      Хэргэлэгч: {item.customer.firstName} &nbsp;
                      {item.customer.lastName}
                    </span>
                    <span>Ашгилсан огноо: {Moment(item.updatedDate).format('YYYY/MM/DD hh:mm:ss')}</span>
                  </div>
                </div>
              ))}
            </div>
          </UsedCouponList>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={closeCouponModal} appearance="primary">
            Хаах
          </Button>
        </Modal.Footer>
      </Modal>
    </DashboardContainer>
  );
}

export default Index;
