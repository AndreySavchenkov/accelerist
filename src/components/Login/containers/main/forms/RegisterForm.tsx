import React, {useState} from "react";
import styled from "styled-components";
import {Field, Form} from "react-final-form";
import showPassword from "assets/img/showPassword.png";
import hiddenPassword from "assets/img/hiddenPassword.svg";
import {Button} from "../../../../general/Button";

type Values = {
    email: string,
    password: string,
}

export const RegisterForm = () => {

    const [isShowPassword, setIsShowPassword] = useState(false);

    const togglePasswordShow = () => {
        setIsShowPassword(!isShowPassword)
    }

    const onSubmit = (values: Values) => {
        console.log(values)
    }

    return (
        <>
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
                        <Text>
                            I agree that by clicking <Link>“Registration”</Link> I accept the <Link>Terms Of
                            Service</Link> and <Link>Privacy Policy</Link>
                        </Text>
                        <Button text={"Registration"}/>
                    </FormContainer>
                )}
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
