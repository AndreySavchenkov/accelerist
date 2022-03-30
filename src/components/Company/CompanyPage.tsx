import React, { FC, memo, useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import { Header, ProfilePanel, Company, CompanyDescription, AsideMenu } from 'components';
import { getCompanyByIdAction } from 'redux/companies/companiesSaga';
import { getCompany } from 'redux/selectors/selectors';

const Box = styled.div`
  display: flex;
  width: 100%;
`;
const Container = styled.div`
  display: flex;
  background: #f9f9f9;
`;
const InnerContainer = styled.div`
  display: flex;
  margin: 0 auto;
  width: 1440px;
  min-height: 100vh;
`;
const ProfileContainer = styled.main`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  width: 100%;
  background: #fff;
  margin-left: 60px;
  margin-bottom: 50px;
`;
const CompanyContainer = styled.div`
  max-width: 790px;
  width: 100%;
  border-right: 1px solid #ebebeb;
  padding: 40px;
`;

export const CompanyPage: FC = memo(() => {
  const [isShowMenu, setShowMenu] = useState(false);

  const dispatch = useDispatch();

  const { id } = useParams();

  const company = useSelector(getCompany);

  useEffect(() => {
    id && dispatch(getCompanyByIdAction(id));
  }, [dispatch, id]);

  return (
    <>
      <Header isShowMenu={isShowMenu} setShowMenu={setShowMenu} />
      <ProfilePanel />
      <Container>
        <InnerContainer>
          {company ? (
            <ProfileContainer>
              <Company
                name={company.name}
                primaryIndustry={company.primaryIndustry}
                like={company.like}
              />
              <Box>
                <CompanyContainer>
                  <CompanyDescription company={company} />
                </CompanyContainer>
                <AsideMenu />
              </Box>
            </ProfileContainer>
          ) : (
            '**********************Wait Please**********************'
          )}
        </InnerContainer>
      </Container>
    </>
  );
});
