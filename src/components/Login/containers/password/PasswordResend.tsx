import React, { FC, useEffect, useState } from 'react';

import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import { Button, ButtonTimer, LinkToSupport, LinkToLogin } from 'components';
import { ONE, TIMER, ZERO } from 'constance';
import { sendEmailAction } from 'redux/login/loginSaga';

export const PasswordResend: FC = () => {
  const [timer, setTimer] = useState(TIMER);

  const dispatch = useDispatch();

  useEffect(() => {
    if (timer >= ONE) {
      setTimeout(() => setTimer(timer - ONE), 1000);
    }
  });

  const clickHandler = (): void => {
    const email = localStorage.getItem('emailReset');
    if (email) {
      dispatch(sendEmailAction(email));
      setTimer(TIMER);
    }
  };

  return (
    <>
      <MainContainer>
        <Container>
          <Title>Password Reset</Title>
          <Text>
            A link was sent to your email to confirm password reset and create a new one
          </Text>
          {timer === ZERO ? (
            <Button clickHandler={clickHandler} text="Resend" />
          ) : (
            <ButtonTimer text={`00:${timer}`} />
          )}
        </Container>
        <LinkToSupport />
      </MainContainer>
      <LinkToLogin />
    </>
  );
};
const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
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
const Text = styled.p`
  margin-top: 8px;
  font-size: 16px;
  line-height: 155%;
  color: #122434;
`;
