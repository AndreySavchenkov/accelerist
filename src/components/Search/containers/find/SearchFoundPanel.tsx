import React, { FC, useEffect, useState, Suspense } from 'react';

import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import {
  FolderPlusIcon,
  UploadFileIcon,
  MailIcon,
  LeftArrowIcon,
  RightArrowIcon,
} from 'assets/svg';
import { Card, Pagination } from 'components';
import { ONE } from 'constance';
import { getCompaniesAction } from 'redux/companies/companiesSaga';
import { getCompanies, getItemCount, getTotalItems } from 'redux/selectors/selectors';

export let instance: any = {};

export const SearchFoundPanel: FC = () => {
  const [localPage, setLocalPage] = useState(ONE);

  const cards = useSelector(getCompanies);
  const totalItems = useSelector(getTotalItems);
  const itemCount = useSelector(getItemCount);

  const dispatch = useDispatch();

  useEffect(() => {
    instance = axios.create({
      baseURL: `https://accelerist.herokuapp.com/api/v1`,
      timeout: 6000,
      headers: { Authorization: `Bearer ${localStorage.getItem('accessToken')}` },
    });
    dispatch(getCompaniesAction(localPage));
  }, []);

  const onRightArrowClick = (): void => {
    setLocalPage(localPage + ONE);
    dispatch(getCompaniesAction(localPage + ONE));
  };

  const onLeftArrowClick = (): void => {
    setLocalPage(localPage - ONE);
    if (localPage <= ONE) {
      setLocalPage(ONE);
    }
    dispatch(getCompaniesAction(localPage - ONE));
  };

  const firstElement = itemCount * localPage - itemCount + ONE;
  const endElement = itemCount * localPage;

  const cardsList = cards?.map(card => <Card key={card.id} company={card} />);

  return (
    <>
      <Text>Found {totalItems} companies</Text>
      <SettingsPanel>
        <Items>
          <Item>
            <FolderPlusIcon />
            Save <TextHiden>List</TextHiden>
          </Item>
          <Item>
            <UploadFileIcon />
            Export <TextHiden>to Excel</TextHiden>
          </Item>
          <Item>
            <MailIcon />
            Accelerist <TextHiden>Support</TextHiden>
          </Item>
        </Items>
        <Pagination
          endElement={endElement}
          totalItems={totalItems}
          firstElement={firstElement}
          onLeftArrowClick={onLeftArrowClick}
          onRightArrowClick={onRightArrowClick}
        />
      </SettingsPanel>

      <Cards>
        <Suspense fallback={<h1>Loading Companies..</h1>}>{cardsList}</Suspense>
      </Cards>

      <MobileNavigation>
        <LeftArrow onClick={onLeftArrowClick}>
          <LeftArrowIcon />
        </LeftArrow>
        <TextNavigation>
          {firstElement} - {endElement} of {totalItems}
        </TextNavigation>
        <RightArrow onClick={onRightArrowClick}>
          <RightArrowIcon />
        </RightArrow>
      </MobileNavigation>
    </>
  );
};

const Text = styled.span`
  margin-left: 60px;
  margin-top: 32px;
  margin-bottom: 26px;
  font-size: 16px;
  font-weight: 600;
  line-height: 145%;
  color: #122434;
  @media (max-width: 650px) {
    font-size: 12px;
    margin-left: 16px;
    margin-bottom: 20px;
    margin-top: 0;
  }
`;
const TextHiden = styled.span`
  @media (max-width: 460px) {
    display: none;
  }
`;
const SettingsPanel = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 25px;
`;
const Items = styled.div`
  display: flex;
  align-items: center;
  margin-left: 60px;

  @media (max-width: 730px) {
    margin-left: 16px;
  }
`;
const Item = styled.div`
  display: flex;
  align-items: center;
  margin-right: 40px;
  font-size: 12px;
  line-height: 150%;
  color: #122434;
  cursor: pointer;
`;
const TextNavigation = styled.span`
  padding-top: 3px;
  text-align: center;
  margin-left: 10px;
  margin-right: 10px;
  font-weight: 600;
  font-size: 12px;
  line-height: 150%;
  color: #122434;
`;
const LeftArrow = styled.div`
  cursor: pointer;
`;
const RightArrow = styled.div`
  cursor: pointer;
`;
const Cards = styled.div`
  margin-left: 60px;
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 932px) {
    justify-content: center;
    margin-left: 0;
  }
`;
const MobileNavigation = styled.div`
  display: none;
  @media (max-width: 650px) {
    display: flex;
    margin: 0 auto;
    margin-bottom: 30px;
  }
`;
