import React, {FC, memo} from "react";
import styled from "styled-components";
import {Field, Form} from "react-final-form";
import {Link} from "react-router-dom";
import {EMPTY_STRING} from "constance";
import {ZoomIcon, FilterIcon} from "assets/svg";

type Props = {
    isShowMenu: boolean;
}
export const SearchPanel: FC<Props> = memo(({isShowMenu}) => {

    const onSubmit = () => {
    }

    return (
        <Container>
            <InnerContainer>
                <Text>Search</Text>
                <Form
                    onSubmit={onSubmit}
                    render={({handleSubmit}) => (
                        <FormContainer onSubmit={handleSubmit}>
                            <Field
                                name="search"
                                render={({input, meta}) => (
                                    !isShowMenu ?
                                        <>
                                            <InputText {...input}
                                                       type={"text"}
                                                       style={meta.touched && meta.error ?
                                                           {
                                                               outline: '1px solid #F05658',
                                                               backgroundColor: 'rgb(255, 242, 242)'
                                                           }
                                                           : undefined}
                                            />
                                            {meta.touched && meta.error && <ErrorMessage>{meta.error}</ErrorMessage>}
                                            <LogoZoom>
                                                <ZoomIcon/>
                                            </LogoZoom>
                                            <Link to="filter"><LogoSlider><FilterIcon/></LogoSlider></Link>
                                        </> : EMPTY_STRING
                                )}
                            />
                        </FormContainer>
                    )}
                />
            </InnerContainer>

        </Container>
    )
})

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 96px;
  background: #fff;
  @media (max-width: 650px) {
    background: #F9F9F9;
  }
`
const InnerContainer = styled.header`
  display: flex;
  align-items: center;
  margin: 0 auto;
  width: 1440px;
  @media (max-width: 1040px) {
    width: 100%;
  }
  @media (max-width: 650px) {
    flex-direction: column;
    align-items: flex-start;
  }
`
const Text = styled.span`
  margin-left: 60px;
  font-weight: 600;
  font-size: 32px;
  line-height: 150%;
  color: #122434;
  @media (max-width: 650px) {
    font-size: 16px;
    margin-left: 16px;
  }
`
const FormContainer = styled.form`
  position: relative;
  display: flex;
  margin-left: 82px;
  margin-right: 40px;
  @media (max-width: 1040px) {
    flex-grow: 1;
  }
  @media (max-width: 650px) {
    width: calc(100% - 32px);
    margin-left: 16px;
    margin-right: 16px;
    margin-bottom: 20px;
  }
`
const InputText = styled.input`
  display: flex;
  padding-left: 24px;
  padding-right: 70px;
  width: 621px;
  height: 36px;
  background: #F1F4F5;
  border-radius: 6px;
  border: none;
  font-size: 12px;
  line-height: 150%;
  color: #737373;
  @media (max-width: 1040px) {
    width: 100%;
  }
`
const LogoSlider = styled.div`
  position: absolute;
  top: 7px;
  right: 40px;
  cursor: pointer;
`
const LogoZoom = styled.div`
  position: absolute;
  top: 7px;
  right: 10px;
  cursor: pointer;
`
const ErrorMessage = styled.span`
  color: #F05658;
  font-size: 12px;
  line-height: 150%;
  position: absolute;
  bottom: 19px;
  left: 0;
`