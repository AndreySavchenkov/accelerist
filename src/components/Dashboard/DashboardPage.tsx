import React, { FC, useEffect, useState } from 'react';

import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { Header, HighPanel, Race, Favorites, Reports, Navigator } from 'components';
import { getFavoriteCompaniesAction } from 'redux/companies/companiesSaga';

export const DashboardPage: FC = () => {
  const [isShowMenu, setShowMenu] = useState(false);

  const dispatch = useDispatch();

  const FIRST_PAGE = 1;

  useEffect(() => {
    dispatch(getFavoriteCompaniesAction(FIRST_PAGE));
  }, []);

  return (
    <>
      <Header isShowMenu={isShowMenu} setShowMenu={setShowMenu} />
      <HighPanel text="Dashboard" />
      <Container>
        <InnerContainer>
          <DashboardContainer>
            <TitleContainer>
              <Title>Prospecting Sessions</Title>
              <TextButton to="/prospects">see more</TextButton>
            </TitleContainer>
            <RowContainer>
              <Race />
              <Race />
            </RowContainer>
            <RowContainer>
              <Favorites />
              <Reports />
            </RowContainer>
            <TitleContainer>
              <Title>Prospect Navigator</Title>
              <TextButton to="#">see more</TextButton>
            </TitleContainer>
            <Navigator />
          </DashboardContainer>
        </InnerContainer>
      </Container>
    </>
  );
};

const RowContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const TextButton = styled(Link)`
  font-size: 12px;
  color: #2baee0;
  cursor: pointer;
  text-decoration: none;
`;
const Title = styled.span`
  font-weight: 600;
  font-size: 24px;
  color: #122434;
`;
const TitleContainer = styled.div`
  margin-top: 32px;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;
const Container = styled.main`
  display: flex;
  background: #f9f9f9;
`;
const InnerContainer = styled.div`
  display: flex;
  margin: 0 auto;
  width: 1440px;
`;
const DashboardContainer = styled.div`
  padding-left: 60px;
  padding-right: 60px;
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  width: 100%;
  min-height: 100vh;
`;

