import React, {useState} from "react";
import styled from "styled-components";
import {Field, Form} from "react-final-form";
import showPassword from "assets/img/showPassword.png";
import hiddenPassword from "assets/img/hiddenPassword.svg";
import {useDispatch} from "react-redux";
import {signInAction} from "../../../../../redux/login/loginSaga";



type Values = {
    email: string,
    password: string,
    remember: boolean
}

export const LoginForm = () => {

    const [isShowPassword, setIsShowPassword] = useState(false);
    const dispatch = useDispatch();

    const togglePasswordShow = () => {
        setIsShowPassword(!isShowPassword)
    }

    const onSubmit = (values: Values) => {
        dispatch(signInAction(values.email,values.password))
    }

    return (
        <>
            <Form
                onSubmit={onSubmit}
                render={({handleSubmit}) => {
                    return (
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
                            <CheckboxContainer>
                                <CheckboxItems>
                                    <Field
                                        name="remember"
                                        render={({input, meta}) => (
                                            <>
                                                <InputCheckbox {...input} type="checkbox"/>
                                                {meta.touched && meta.error && <span>{meta.error}</span>}
                                            </>
                                        )}
                                    />
                                    <LabelCheckbox>Remember</LabelCheckbox>
                                </CheckboxItems>
                                <CheckboxText>Forgot Password?</CheckboxText>
                            </CheckboxContainer>
                            <Text>
                                I agree that by clicking <Link>“Registration”</Link> I accept the <Link>Terms Of
                                Service</Link> and <Link>Privacy Policy</Link>
                            </Text>
                            <ButtonBody type="submit">Login</ButtonBody>
                        </FormContainer>
                    );
                }}
            />
        </>
    )
}

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
const InputPassword = styled.input`
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
const Text = styled.div`
  margin-top: 40px;
  margin-bottom: 16px;
  text-align: center;
  font-size: 12px;
  line-height: 150%;
  color: #737373;
`
const Link = styled.span`
  font-weight: 600;
  color: #122434;
`
const ShowPassword = styled.img`
  position: absolute;
  bottom: 13px;
  right: 16px;
  z-index: 1;
  cursor: pointer;
`
const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 13px;
`
const InputCheckbox = styled.input`

`
const LabelCheckbox = styled.label`
  display: block;
  padding-left: 10px;
  font-size: 12px;
  line-height: 150%;
  color: #122434;
`
const CheckboxItems = styled.div`
  display: flex;
  align-items: center;
`
const CheckboxText = styled.div`
  font-size: 12px;
  line-height: 150%;
  color: #737373;
`
const ButtonBody = styled.button`
  padding: 12px 0;
  width: 100%;
  font-size: 16px;
  line-height: 145%;
  text-align: center;
  font-weight: 600;
  color: #FFFFFF;
  background: #2BAEE0;
  border: none;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background: #51C2EE;
  }

  &:focus {
    background: #1DA7DC;
  }

  &:disabled {
    background: #CEEDF9;
    color: #2BAEE0;
  }
`