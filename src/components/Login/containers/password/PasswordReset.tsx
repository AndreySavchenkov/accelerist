import React, {FC} from "react";
import styled from "styled-components";
import {Field, Form} from "react-final-form";
import {Button} from "components/general/Button";
import {LinkToLogin} from "components/general/LinkToLogin";
import {composeValidators, required} from "helpers/validation";
import {useDispatch} from "react-redux";
import {sendEmailAction} from "redux/login/loginSaga";
import {useNavigate} from "react-router-dom";

type Values = {
    email: string,
}

export const PasswordReset: FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onSubmit = (values: Values) => {
        dispatch(sendEmailAction(values.email));
        localStorage.setItem('emailReset', values.email)
        navigate('/resend', {replace: true})
    }

    return (
        <>
            <Container>
                <Title>Password Reset</Title>
                <Text>Enter your email to receive instructions on how to reset your password.</Text>
                <Form
                    onSubmit={onSubmit}
                    render={({handleSubmit}) => (
                        <FormContainer onSubmit={handleSubmit}>
                            <FormItem>
                                <Label>Email</Label>
                                <Field
                                    name="email"
                                    validate={composeValidators(required)}
                                    render={({input, meta}) => (
                                        <>
                                            <InputEmail {...input} type={"email"}
                                                        placeholder='Enter email'
                                                        style={meta.touched && meta.error ?
                                                            {
                                                                outline: '1px solid #F05658',
                                                                backgroundColor: 'rgb(255, 242, 242)'
                                                            }
                                                            : undefined}/>
                                            {meta.touched && meta.error && <ErrorMessage>{meta.error}</ErrorMessage>}
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

  &:focus {
    outline: 1px solid #2BAEE0;
  }
`
const ErrorMessage = styled.span`
  color: #F05658;
  font-size: 12px;
  line-height: 150%;
  position: absolute;
  bottom: 19px;
  left: 0;
`