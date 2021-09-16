import React, { useState, useRef } from 'react';
import { SearchOrg, OrgContainer } from '../../../styles/client';
import { InputPicker } from 'rsuite';
import ChildOrgsContainer from '../containers/ChildOrgs';

type Props = {
  parentCompanies: any;
};

function Orgs({ parentCompanies }: Props) {
  const [parentCompany, setParentCompany] = useState('');
  const parentCompaniesData = parentCompanies.map((company) => ({ label: company.parentCompanyName, value: company.parentCompanyId }));

  const handleCompanies = (value) => {
    setParentCompany(value);
  };

  const openCompaniesList = () => {
    document.body.classList.add('list-open');
    var firstMove;

    window.addEventListener('touchstart', function (e) {
      firstMove = true;
    });

    window.addEventListener('touchmove', function (e) {
      if (firstMove) {
        e.preventDefault();

        firstMove = false;
      }
    });
  };

  const closeCompaniesList = () => {
    document.body.classList.remove('list-open');
  };

  const companyListContainerRef = useRef<HTMLDivElement>(null);

  return (
    <OrgContainer ref={companyListContainerRef}>
      <SearchOrg className="animate__fadeInDown animate__animated">
        <InputPicker onOpen={openCompaniesList} onClose={closeCompaniesList} preventOverflow={false} placeholder="Байгууллага хайх" data={parentCompaniesData} onChange={handleCompanies} />
      </SearchOrg>
      <ChildOrgsContainer parentId={parentCompany} />
    </OrgContainer>
  );
}

export default Orgs;
