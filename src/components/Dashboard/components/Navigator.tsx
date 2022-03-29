import React, { FC } from 'react';

import styled from 'styled-components';

import navigator1 from 'assets/img/navigator1.png';
import navigator2 from 'assets/img/navigator2.png';
import navigator3 from 'assets/img/navigator3.png';
import navigator4 from 'assets/img/navigator4.png';

export const Navigator: FC = () => (
  <Container>
    <Item>
      <Img src={navigator1} />
      <Title>The Decline of Clothing Retail</Title>
      <Text>
        The apparel industry’s appeal has been dwindling for a while: “In 1977, clothing{' '}
      </Text>
      <Date>2 Sep 2020, 13:23</Date>
    </Item>
    <Item>
      <Img src={navigator2} />
      <Title>The Decline of Clothing Retail</Title>
      <Text>
        The apparel industry’s appeal has been dwindling for a while: “In 1977, clothing{' '}
      </Text>
      <Date>2 Sep 2020, 13:23</Date>
    </Item>
    <Item>
      <Img src={navigator3} />
      <Title>The Decline of Clothing Retail</Title>
      <Text>
        The apparel industry’s appeal has been dwindling for a while: “In 1977, clothing{' '}
      </Text>
      <Date>2 Sep 2020, 13:23</Date>
    </Item>
    <Item>
      <Img src={navigator4} />
      <Title>The Decline of Clothing Retail</Title>
      <Text>
        The apparel industry’s appeal has been dwindling for a while: “In 1977, clothing{' '}
      </Text>
      <Date>2 Sep 2020, 13:23</Date>
    </Item>
  </Container>
);
const Date = styled.span`
  font-size: 12px;
  color: #737373;
`;
const Text = styled.p`
  margin-top: 4px;
  padding: 0;
  font-size: 12px;
  line-height: 150%;
  color: #122434;
`;
const Title = styled.span`
  margin-top: 16px;
  font-weight: 600;
  font-size: 16px;
  color: #122434;
`;
const Img = styled.img`
  width: 256px;
  height: 187px;
`;
const Item = styled.article`
  width: 256px;
  display: flex;
  flex-direction: column;
`;
const Container = styled.section`
  margin-top: 16px;
  margin-bottom: 25px;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
