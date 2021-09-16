import React from 'react';
import { ListItem } from '../../../styles/client';
import { Row, Col } from 'rsuite';
import Link from 'next/link';
import { ICompany } from '../types';
import { useRouter } from 'next/router';

type Props = {
  companies: ICompany[];
};

function Orgs({ companies }: Props) {
  const router = useRouter();
  const { token } = router.query;
  const childCompanies = companies.filter((company) => company.parentCompanyId !== '');

  const item = (company) => {
    return (
      <Link key={company._id} href={`/client/details?token=${token}&id=${company._id}`}>
        <ListItem onClick={() => document.body.classList.remove('list-open')} className="animate__fadeInUp animate__animated">
          <Row gutter={10}>
            <Col xs={8}>
              <div className="thumbnail">
                <img src={company.avatar || '/default.jpeg'} alt="" />
              </div>
            </Col>
            <Col xs={16}>
              <div className="caption">
                <h6>{company.primaryName}</h6>
                <span>{company.timeTable}</span>
              </div>
            </Col>
          </Row>
        </ListItem>
      </Link>
    );
  };

  return <>{childCompanies.map((company) => item(company))}</>;
}

export default Orgs;
