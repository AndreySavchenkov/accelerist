import React, {useState} from "react";
import styled from "styled-components";
import {Form, Field} from 'react-final-form'
import {LoginForm} from "./LoginForm";
import registrationLink from "../../assets/img/registraionLink.png";

type toggleItemProps = {
    isToogle: boolean
}

export const MainForm = () => {
    const [isRegister, setRegister] = useState(true);
    const [isLogin, setLogin] = useState(false);

    const clickHandler = () => {
        setRegister(!isRegister);
        setLogin(!isLogin);
    }


    return (
        <Container>
            <Title>Welcome to Accelerist</Title>
            <ToggleContainer>
                <ToggleItem onClick={clickHandler} isToogle={isRegister}>Register</ToggleItem>
                <ToggleItem onClick={clickHandler} isToogle={isLogin}>Login</ToggleItem>
            </ToggleContainer>
            <FormContainer>
                <LoginForm/>
            </FormContainer>
            <SomeText>or continue with</SomeText>
            <RegistrationLink src={registrationLink}/>
        </Container>
    )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 374px;
  padding: 40px;
  background: #FFFFFF;
  border-radius: 6px;
  @media (max-width: 600px) {
    width: 263px;
  }
`
const Title = styled.span`
  font-weight: 600;
  font-size: 24px;
  line-height: 148%;
  color: #122434;
`
const ToggleContainer = styled.div`
  display: flex;
  margin-top: 25px;
  margin-bottom: 10px;
  width: 374px;
  height: 40px;
  background: #F8F8F8;
`
const ToggleItem = styled.div<toggleItemProps>`
  background-color: ${props => props.isToogle ? '#CAF0FF' : ''};
  color: ${props => props.isToogle ? '#122434' : '#737373'};
  border-radius: ${props => props.isToogle ? '6px' : ''};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  font-weight: normal;
  font-size: 12px;
  line-height: 150%;
  cursor: pointer;
`
const FormContainer = styled.div`
  width: 100%;
`
const SomeText = styled.span`
  margin-top: 32px;
  display: block;
  font-size: 12px;
  line-height: 150%;
  text-align: center;
  color: #737373;
`
const RegistrationLink = styled.img`
  margin-top: 24px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 10px solid #F8F8F8;
`



