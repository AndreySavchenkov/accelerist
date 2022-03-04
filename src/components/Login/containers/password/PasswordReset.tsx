import React from "react";
import styled from "styled-components";
import {Field, Form} from "react-final-form";
import {Button} from "../../../general/Button";
import {LinkToLogin} from "../../../general/LinkToLogin";

type Values = {
    email: string,
}

export const PasswordReset = () => {

    const onSubmit = (values: Values) => {
        console.log(values)
    }

    return (
        <>
            <Container>
                <Title>Password Reset</Title>
                <Text>Enter your email to receive instructions on how to reset your password.</Text>
                <Form
                    onSubmit={onSubmit}
                    // validate={validate}
                    render={({handleSubmit}) => (
                        <FormContainer onSubmit={handleSubmit}>
                            <FormItem>
                                <Label>Email</Label>
                                <Field
                                    name="email"
                                    render={({input, meta}) => (
                                        <>
                                            <InputEmail {...input} type={"email"}/>
                                            {meta.touched && meta.error && <span>{meta.error}</span>}
                                        </>
                                    )}
                                />
                            </FormItem>
                            <Button text={"Reset"}/>
                        </FormContainer>
                    )}
                />
            </Container>
            <LinkToLogin/>
        </>

    )
}

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
const InputEmail = styled.input`
  margin-bottom: 40px;
  padding: 10px 16px;
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