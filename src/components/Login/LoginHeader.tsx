import React, { FC } from 'react';

import styled from 'styled-components';

import { HeaderLogo } from 'assets/svg/HeaderLogo';

export const LoginHeader: FC = () => (
  <Container>
    <HeaderLogo />
  </Container>
);

const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 80px;
  background-color: #122434;
`;
