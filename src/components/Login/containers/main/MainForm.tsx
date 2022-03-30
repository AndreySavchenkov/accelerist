import React, { FC } from 'react';

import styled from 'styled-components';

import { LinkedInIcon } from 'assets/svg';
import { LoginForm, RegisterForm } from 'components';
import { useToggle } from 'hooks/useToggle';

type toggleItemProps = {
  isToggle: boolean;
};

export const MainForm: FC = () => {
  const [isRegister, isLogin, onToggleItemClick] = useToggle();

  return (
    <Container>
      <Title>Welcome to Accelerist</Title>
      <ToggleContainer>
        <ToggleItem onClick={onToggleItemClick} isToggle={isRegister}>
          Register
        </ToggleItem>
        <ToggleItem onClick={onToggleItemClick} isToggle={isLogin}>
          Login
        </ToggleItem>
      </ToggleContainer>
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
export const ToggleContainer = styled.div`
  display: flex;
  margin-top: 25px;
  margin-bottom: 10px;
  width: 100%;
  height: 40px;
  background: #f8f8f8;
`;
export const ToggleItem = styled.div<toggleItemProps>`
  background-color: ${props => (props.isToggle ? '#CAF0FF' : '')};
  color: ${props => (props.isToggle ? '#122434' : '#737373')};
  border-radius: ${props => (props.isToggle ? '6px' : '')};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  font-weight: normal;
  font-size: 12px;
  line-height: 150%;
  cursor: pointer;

  &:hover {
    color: ${props => (props.isToggle ? '#122434' : '#122434')};
  }

  &:disabled {
    background-color: ${props => (props.isToggle ? '#DCF5FF' : '')};
    color: ${props => (props.isToggle ? '#A8BED2' : '#BFBFBF')};
  }
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
