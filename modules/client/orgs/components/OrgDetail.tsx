import React, { useState } from 'react';
import { Description, OrgDetailContainer, CouponItem, OrgCoupons } from '../../../styles/client';
import { useRouter } from 'next/router';
import Moment from 'moment';
import { Button, Row, Col } from 'rsuite';
type Props = {
  detail: any;
  companyDetail: any;
};

function OrgDetail({ detail, companyDetail }: Props) {
  const [more, setMore] = useState(false);

  const router = useRouter();
  const { token } = router.query;

  const item = (promotion) => {
    return (
      <CouponItem key={promotion._id} className="animate__fadeInUp animate__animated">
        <Row gutter={10}>
          <Col xs={8}>
            <div className="thumbnail">
              <img src={promotion.promotion.imageDir || '/default.jpeg'} alt="" />
            </div>
          </Col>
          <Col xs={16}>
            <div className="caption">
              <h6 className="branch-title"> {company.primaryName}</h6>
              <h4>{promotion.promotion.title}</h4>
              <span className="coupon-code">
                {Moment(promotion.promotion.startDate).format('MM/DD')} - {Moment(promotion.promotion.endDate).format('MM/DD')}
              </span>
            </div>
          </Col>
        </Row>
      </CouponItem>
    );
  };

  const company = companyDetail && companyDetail[0];

  return (
    <OrgDetailContainer>
      <div className="animate__fadeIn animate__animated">
        <div className="cover">
          <Button onClick={() => router.back()}>
            <i className="fas fa-arrow-left"></i> Буцах
          </Button>
          <img src={company.banner || '/default-cover.jpeg'} alt="" />
        </div>
        <div className="details">
          <h6>{company.primaryName}</h6>
          <span> {company.timeTable}</span>
          {company.address && (
            <address>
              {' '}
              <i className="fas fa-map-marker-alt"></i> {company.address}
            </address>
          )}
          <Description expand={more}>
            {company.description}
            <span className="readmore-btn" onClick={() => setMore(!more)}>
              <i className={`fas fa-chevron-${more === true ? 'up' : 'down'}`} />
            </span>
          </Description>
          <div className="links">
            <div className="socials">
              {company.website && (
                <a href={company.website} target="_blank">
                  <i className="fas fa-globe" />
                </a>
              )}
              {company.phones && (
                <a href={`tel:${company.phones}`} target="_blank">
                  <i className="fas fa-phone-alt" />
                </a>
              )}
              {company.facebook && (
                <a href={company.facebook} target="_blank">
                  <i className="fab fa-facebook-f" />
                </a>
              )}
              {company.primaryEmail && (
                <a href={`mailto:${company.primaryEmail}`} target="_blank">
                  <i className="fas fa-envelope" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
      {detail && detail.length ? (
        <OrgCoupons>
          <h4>Хожих боломжтой урамшууллууд</h4>
          {detail.map((promotion) => item(promotion))}
        </OrgCoupons>
      ) : (
        <OrgCoupons>
          <h6>Одоогоор уг салбарт зарлагдсан урамшуулал байхгүй байна.</h6>
        </OrgCoupons>
      )}
    </OrgDetailContainer>
  );
}

export default OrgDetail;
