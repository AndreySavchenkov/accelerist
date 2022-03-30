import React, { FC } from 'react';

import styled from 'styled-components';

import { LinkedInIcon } from 'assets/svg';
import { LoginForm, RegisterForm } from 'components';
import { Toggle } from 'components/Search/containers/filter/components/Toggle';
import { useToggle } from 'hooks/useToggle';

export const MainForm: FC = () => {
  const [isRegister, isLogin, onToggleItemClick] = useToggle();

  return (
    <Container>
      <Title>Welcome to Accelerist</Title>
      <Toggle
        firstItemTitle="Register"
        isFirstItem={isRegister}
        secondItemTitle="Login"
        isSecondItem={isLogin}
        widthContainer="100"
        onToggleItemClick={onToggleItemClick}
      />
      <FormContainer>{!isRegister ? <LoginForm /> : <RegisterForm />}</FormContainer>
      <SomeText>or continue with</SomeText>
      <RegistrationLink>
        <LinkedInIcon width={24} height={24} />
      </RegistrationLink>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 374px;
  padding: 40px;
  background: #ffffff;
  border-radius: 6px;
  @media (max-width: 600px) {
    width: 263px;
  }
`;
const Title = styled.span`
  font-weight: 600;
  font-size: 24px;
  line-height: 148%;
  color: #122434;
`;
const FormContainer = styled.div`
  width: 100%;
`;
const SomeText = styled.span`
  margin-top: 32px;
  display: block;
  font-size: 12px;
  line-height: 150%;
  text-align: center;
  color: #737373;
`;
const RegistrationLink = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 24px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 10px solid #f8f8f8;
  cursor: pointer;
`;
