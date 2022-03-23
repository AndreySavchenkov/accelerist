import React, {FC, useState} from "react";
import styled from "styled-components";
import {Field, Form} from "react-final-form";
import showPassword from "assets/img/showPassword.png";
import hiddenPassword from "assets/img/hiddenPassword.svg";
import {useDispatch, useSelector} from "react-redux";
import {signInAction} from "redux/login/loginSaga";
import {Link, useNavigate} from "react-router-dom";
import {composeValidators, minValue, required} from "helpers/validation";
import {AllertError} from "components";
import {RootStateT} from "redux/store";
import {EMPTY_STRING} from "../../../../../constance";


type Values = {
    email: string,
    password: string,
    remember: boolean
}

export const LoginForm: FC = () => {
    const error = useSelector((state: RootStateT) => state.notifications.error);

    const [isShowPassword, setIsShowPassword] = useState(false);
    const dispatch = useDispatch();

    const togglePasswordShow = () => {
        setIsShowPassword(!isShowPassword)
    }

    const navigate = useNavigate();

    const onSubmit = (values: Values) => {
        dispatch(signInAction(values.email, values.password))
        navigate("/", {replace: true});
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
                                            {meta.touched && meta.error && <ErrorMessage>{meta.error}</ErrorMessage>}
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
                                <Link to="/reset" style={{textDecoration: "none"}}><ForgotText>Forgot
                                    Password?</ForgotText></Link>
                            </CheckboxContainer>
                            <Text>
                                I agree that by clicking <LinkCustom>“Registration”</LinkCustom> I accept
                                the <LinkCustom>Terms Of
                                Service</LinkCustom> and <LinkCustom>Privacy Policy</LinkCustom>
                            </Text>
                            <ButtonBody type="submit">Login</ButtonBody>
                        </FormContainer>
                    );
                }}
            />
            {error ? <AllertError text={'Email or password is incorrect'}/> : EMPTY_STRING}
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
const LinkCustom = styled.span`
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
const ForgotText = styled.div`
  font-size: 12px;
  line-height: 150%;
  color: #737373;
  cursor: pointer;
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
const ErrorMessage = styled.span`
  color: #F05658;
  font-size: 12px;
  line-height: 150%;
  position: absolute;
  bottom: -19px;
  left: 0;
`