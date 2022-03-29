import React, { FC } from 'react';

import { ArrowLeftIcon } from '@material-ui/pickers/_shared/icons/ArrowLeftIcon';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export const ProfilePanel: FC = () => {
  const navigate = useNavigate();

  const goBack = (): void => navigate(-1);

  return (
    <div>
      <Container>
        <InnerContainer>
          <ArrowLeft onClick={goBack}>
            <ArrowLeftIcon />
          </ArrowLeft>
          <Title>Corparate Profile</Title>
        </InnerContainer>
      </Container>
    </div>
  );
};

const ArrowLeft = styled.div`
  margin-left: 60px;
  cursor: pointer;
  @media (max-width: 450px) {
    margin-left: 16px;
  }
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 96px;
  background: #fff;
  @media (max-width: 650px) {
    background: #f9f9f9;
  }
`;
const InnerContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  width: 1440px;
  @media (max-width: 1040px) {
    width: 100%;
  }
  @media (max-width: 450px) {
    padding-left: 16px;
  }
`;
const Title = styled.span`
  padding-left: 25px;
  font-size: 32px;
  line-height: 150%;
  font-weight: 600;
  color: #122434;
  @media (max-width: 450px) {
    font-size: 24px;
  }
`;
