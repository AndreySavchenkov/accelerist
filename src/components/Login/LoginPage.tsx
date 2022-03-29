import React, { FC } from 'react';

import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

import backgroundLogin from 'assets/img/loginBackground.jpg';
import { LoginHeader } from 'components';

export const LoginPage: FC = () => (
  <>
    <LoginHeader />
    <Container>
      <Outlet />
    </Container>
  </>
);

const Container = styled.main`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 72px;
  width: 100%;
  min-height: 100vh;
  background: center / cover no-repeat url(${backgroundLogin});
`;
