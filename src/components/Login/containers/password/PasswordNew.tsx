import React, {useState} from "react";
import styled from "styled-components";
import {Field, Form} from "react-final-form";
import {Button} from "../../../general/Button";
import showPassword from "../../../../assets/img/showPassword.png";
import hiddenPassword from "../../../../assets/img/hiddenPassword.svg";
import {LinkToSupport} from "../../../general/LinkToSapport";

type Values = {
    password: string,
}

export const PasswordNew = () => {

    const [isShowPassword, setIsShowPassword] = useState(false);

    const togglePasswordShow = () => {
        setIsShowPassword(!isShowPassword)
    }

    const onSubmit = (values: Values) => {
        console.log(values)
    }

    return (
        <>
            <MainContainer>
                <Container>
                    <Title>New Password</Title>
                    <Text>Сome up with a new password</Text>
                    <Form
                        onSubmit={onSubmit}
                        // validate={validate}
                        render={({handleSubmit}) => (
                            <FormContainer onSubmit={handleSubmit}>
                                <FormItem>
                                    <Label>Password</Label>
                                    <Field
                                        name="password"
                                        render={({input, meta}) => (
                                            <>
                                                <InputPassword {...input} type={isShowPassword ? "password" : "text"}/>
                                                {meta.touched && meta.error && <span>{meta.error}</span>}
                                            </>
                                        )}
                                    />
                                    <ShowPassword onClick={togglePasswordShow}
                                                  src={!isShowPassword ? showPassword : hiddenPassword}/>
                                </FormItem>
                                <Button text={"Done"}/>
                            </FormContainer>
                        )}
                    />
                </Container>
                <LinkToSupport/>
            </MainContainer>
        </>

    )
}

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 374px;
  padding: 40px;
  background: #FFFFFF;
  border-radius: 6px;
  @media (max-width: 600px) {
    width: 263px;
  }
`
const InputPassword = styled.input`
  margin-bottom: 40px;
  padding: 10px 40px 10px 16px;
  width: 100%;
  height: 46px;
  border: 1px solid #E8E8E8;
  box-sizing: border-box;
  border-radius: 6px;
  font-size: 16px;
  font-weight: 400;
  line-height: 155%;
  color: #122434;
`
const ShowPassword = styled.img`
  position: absolute;
  bottom: 53px;
  right: 16px;
  z-index: 1;
  cursor: pointer;
`
const Title = styled.span`
  font-weight: 600;
  font-size: 24px;
  line-height: 148%;
  color: #122434;
`
const Text = styled.p`
  margin-top: 8px;
  font-size: 16px;
  line-height: 155%;
  color: #122434;
`
const FormContainer = styled.form`
  width: 100%;
`
const FormItem = styled.div`
  position: relative;
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`
const Label = styled.label`
  margin-bottom: 4px;
  font-size: 12px;
  line-height: 150%;
  font-weight: 400;
  color: #737373;
`
