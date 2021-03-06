import React, { FC, memo } from 'react';

import styled from 'styled-components';

import {
  LinkedInIcon,
  FacebookIcon,
  TwitterIcon,
  AppleLogo,
  FavoriteIcon,
  UnfavoriteIcon,
} from 'assets/svg';

type Props = {
  like: boolean;
  name: string;
  primaryIndustry: string[];
};

const FIRST_INDUSTRY = 0;

export const Company: FC<Props> = memo(({ name, primaryIndustry, like }) => (
  <Container>
    <InnerContainer>
      <AppleLogo />
      <InfoContainer>
        <NameContainer>
          <Name>{name}</Name>
          {like ? <FavoriteIcon /> : <UnfavoriteIcon />}
        </NameContainer>
        <Subtitle>{primaryIndustry[FIRST_INDUSTRY]}</Subtitle>
        <SocialContainer>
          <TwitterIcon />
          <FacebookIcon />
          <LinkedInIcon height={24} width={24} />
        </SocialContainer>
      </InfoContainer>
    </InnerContainer>
    <Button>Block</Button>
  </Container>
));

const Container = styled.article`
  display: flex;
  padding: 40px;
  justify-content: space-between;
  align-items: center;
  background: #f2f2f2;
  border-radius: 6px 6px 0 0;
`;
const InnerContainer = styled.div`
  display: flex;
  align-items: center;
`;
const InfoContainer = styled.div`
  margin-left: 24px;
  min-height: 100px;
  justify-content: space-between;
  display: flex;
  flex-direction: column;
`;
const Name = styled.span`
  margin-right: 10px;
  font-weight: 600;
  font-size: 24px;
  line-height: 148%;
  color: #122434;
`;
const Subtitle = styled.span`
  font-size: 12px;
  line-height: 150%;
  color: #737373;
`;
const NameContainer = styled.div`
  display: flex;
  align-items: center;
`;
const SocialContainer = styled.div`
  display: flex;
  align-items: center;
`;
const Button = styled.button`
  padding: 10px 37px;
  font-size: 12px;
  line-height: 150%;
  text-align: center;
  color: #f05658;
  border: 1px solid #e8e8e8;
  background: #fff;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    border: 1px solid #bfbfbf;
  }

  &:active {
    border: 1px solid #f05658;
  }
`;
