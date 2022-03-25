import React, {FC, useState} from "react";
import styled from "styled-components";
import {Field, Form} from "react-final-form";
import {LinkToSupport, Button} from "components";
import {composeValidators, minValue, required} from "helpers/validation";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {ShowPasswordIcon, HidePasswordIcon} from "assets/svg";

type Values = {
    password: string,
}

export const PasswordNew: FC = () => {
    const [isShowPassword, setIsShowPassword] = useState(false);

    const navigate = useNavigate();

    const params = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop: any) => searchParams.get(prop),
    });

    //@ts-ignore
    let passwordResetToken = params.passwordResetToken;
    localStorage.setItem('passwordResetToken', passwordResetToken)

    const instanceResetPassword = axios.create({
        baseURL: `https://accelerist.herokuapp.com/api/v1`,
        timeout: 60000,
        headers: {'Authorization': `Bearer ${passwordResetToken}`},
    })

    const resetPassword = (password: string) => {
        return instanceResetPassword.post('/auth/change_password/change', {password, passwordConfirmation: password})
    }

    const onSubmit = async (values: Values) => {
        await resetPassword(values.password)
        localStorage.setItem('passwordReset', values.password)
        navigate("/", {replace: true});
    }

    const onShowPasswordClick = () => {
        setIsShowPassword(!isShowPassword)
    }

    return (
        <>
            <MainContainer>
                <Container>
                    <Title>New Password</Title>
                    <Text>Сome up with a new password</Text>
                    <Form
                        onSubmit={onSubmit}
                        render={({handleSubmit}) => (
                            <FormContainer onSubmit={handleSubmit}>
                                <FormItem>
                                    <Label>Password</Label>
                                    <Field
                                        name="password"
                                        validate={composeValidators(required, minValue(6))}
                                        render={({input, meta}) => (
                                            <>
                                                <InputPassword placeholder='Enter password' {...input}
                                                               type={isShowPassword ? "password" : "text"}
                                                               style={meta.touched && meta.error ?
                                                                   {
                                                                       outline: '1px solid #F05658',
                                                                       backgroundColor: 'rgb(255, 242, 242)'
                                                                   }
                                                                   : undefined}/>
                                                {meta.touched && meta.error &&
                                                <ErrorMessage>{meta.error}</ErrorMessage>}
                                            </>
                                        )}
                                    />
                                    <ShowPassword onClick={onShowPasswordClick}>
                                        {!isShowPassword ? <HidePasswordIcon/> : <ShowPasswordIcon/>}
                                    </ShowPassword>
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

  &:focus {
    outline: 1px solid #2BAEE0;
  }
`
const ShowPassword = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
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
const ErrorMessage = styled.span`
  color: #F05658;
  font-size: 12px;
  line-height: 150%;
  position: absolute;
  bottom: 19px;
  left: 0;
`
