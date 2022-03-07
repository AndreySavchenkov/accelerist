import React, {useState} from "react";
import styled from "styled-components";
import {Field, Form} from "react-final-form";
import showPassword from "assets/img/showPassword.png";
import hiddenPassword from "assets/img/hiddenPassword.svg";
import {Button} from "../../../../general/Button";
import {signUpAction} from "../../../../../redux/login/loginSaga";
import {useDispatch} from "react-redux";

type Values = {
    email: string,
    password: string,
}

export const RegisterForm = () => {

    const dispatch = useDispatch();

    const [isShowPassword, setIsShowPassword] = useState(false);

    const togglePasswordShow = () => {
        setIsShowPassword(!isShowPassword)
    }

    const onSubmit = (values: Values) => {
        dispatch(signUpAction(values.email, values.password))
    }

    const required = (value:any) => (value ? undefined : 'Required')
    const minValue = (min: any) => (value: any) =>
        value.length >= min ? undefined : `Should be greater than ${min}`
    const composeValidators = (...validators: any) => (value:any) =>
        validators.reduce((error:any, validator:any) => error || validator(value), undefined)


    return (
        <>
            <Form
                onSubmit={onSubmit}
                // validate={composeValidators(required,minValue(6))
                // {
                //     const errors: any = {};
                //     if (!values.email) {
                //         errors.email = 'Required'
                //     }
                //     if (!values.password) {
                //         errors.password = 'Required'
                //     }
                //     return errors
                // }
               // }
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
                        <FormItem>
                            <Label>Password</Label>
                            <Field
                                name="password"
                                validate={composeValidators(required,minValue(6))}
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
                                        {meta.touched && meta.error && <ErrorMessage>{meta.error}</ErrorMessage>}
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
  &:focus {
    outline: 1px solid #2BAEE0;
  }
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
  &:focus {
    outline: 1px solid #2BAEE0;
  }
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
const ErrorMessage = styled.span`
  color: #F05658;
  font-size: 12px;
  line-height: 150%;
  position: absolute;
  bottom: -19px;
  left: 0;
`
