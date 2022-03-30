import React, { FC, useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { UploadFileIcon } from 'assets/svg';
import { Card, HighPanel, Header, Pagination } from 'components';
import { ONE } from 'constance';
import { getCompaniesAction } from 'redux/companies/companiesSaga';
import { getCompanies } from 'redux/selectors/selectors';

const FIRST_ELEMENT = 1;
const END_ELEMENT = 6;
const TOTAL_ELEMENTS = 6;

export const ProspectsListPage: FC = () => {
  const [isShowMenu, setShowMenu] = useState(false);

  const cards = useSelector(getCompanies);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCompaniesAction(ONE));
  }, [dispatch]);

  const cardsList = cards?.map(card => <Card key={card.id} company={card} />);

  return (
    <>
      <Header isShowMenu={isShowMenu} setShowMenu={setShowMenu} />
      <HighPanel text="Race for the Cure" />
      <Container>
        <InnerContainer>
          <ProspectsListContainer>
            <CountCompanies>6 Pages</CountCompanies>
            <Filters>Filters</Filters>
            <FiltersContainer>
              <Filter>Travel Industry</Filter>
              <Filter>$500-$1B</Filter>
              <Filter>National</Filter>
              <Filter>Health</Filter>
              <Filter>World Wide Fund</Filter>
              <Filter>National</Filter>
              <Filter>United Nations</Filter>
              <Filter>National</Filter>
            </FiltersContainer>
            <SettingsContainer>
              <ExelContainer>
                <UploadFileIcon />
                Export to Exel
              </ExelContainer>
              <div style={{ paddingTop: '22px' }}>
                <Pagination
                  endElement={END_ELEMENT}
                  totalItems={TOTAL_ELEMENTS}
                  firstElement={FIRST_ELEMENT}
                />
              </div>
            </SettingsContainer>
            <Cards>{cardsList}</Cards>
          </ProspectsListContainer>
        </InnerContainer>
      </Container>
    </>
  );
};
const Cards = styled.main`
  margin-top: 16px;
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 932px) {
    justify-content: center;
    margin-left: 0;
  }
`;
const ExelContainer = styled.div`
  margin-top: 24px;
  display: flex;
  align-items: center;
  font-size: 12px;
  line-height: 150%;
  color: #122434;
`;
const SettingsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.span`
  margin-right: 8px;
  padding: 6px 10px;
  font-size: 12px;
  line-height: 150%;
  color: #122434;
  background: #ffffff;
  border: 1px solid #caf0ff;
  border-radius: 6px;
`;
const FiltersContainer = styled.div`
  margin-left: 15px;
  margin-top: 8px;
  display: flex;
  align-items: center;
`;
const Filters = styled.span`
  margin-top: 24px;
  font-size: 12px;
  line-height: 150%;
  color: #737373;
`;
const CountCompanies = styled.span`
  margin-top: 32px;
  font-size: 16px;
  line-height: 145%;
  font-weight: 600;
  color: #122434;
`;
const Container = styled.div`
  display: flex;
  background: #f9f9f9;
`;
const InnerContainer = styled.div`
  display: flex;
  margin: 0 auto;
  width: 1440px;
`;
const ProspectsListContainer = styled.main`
  padding-left: 60px;
  padding-right: 60px;
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  width: 100%;
  min-height: 100vh;
`;
