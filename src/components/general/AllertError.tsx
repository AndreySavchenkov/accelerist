import React, {FC, memo, useEffect, useState} from "react";
import styled from "styled-components";
import error from "assets/img/error.png"
import close from "assets/img/closeButton.png"
import {EMPTY_STRING} from "../../constance";

type Props = {
    text: string
}

export const AllerError: FC<Props> = memo(({text}) => {
    const [isShow, setIsShow] = useState(true);

    useEffect(()=> {
        setTimeout(()=>onCloseButtonClick(),5000)
    })

    const onCloseButtonClick = () => {
        setIsShow(false);
    }

    return (
        <>
            {
                isShow ?
                    <Container>
                        <InnerContainer>
                            <Icon src={error}/>
                            <TextContainer>
                                <Title>Error!</Title>
                                <SubTitle>{text}</SubTitle>
                            </TextContainer>
                        </InnerContainer>
                        <CloseButton onClick={onCloseButtonClick} src={close}/>
                    </Container>
                    : EMPTY_STRING
            }
        </>

    )
})

const Container = styled.div`
  position: absolute;
  top: 0;
  right: 10px;
  display: flex;
  justify-content: space-between;
  width: 350px;
  border-radius: 6px;
  background: #EAEAEA;
`
const InnerContainer = styled.div`
  display: flex;
`
const TextContainer = styled.div`
  margin-bottom: 11px;
  margin-top: 16px;
  margin-right: 20px;
  display: flex;
  flex-direction: column;
`
const Title = styled.span`
  font-size: 12px;
  font-weight: 600;
  line-height: 150%;
  color: #122434;
`
const SubTitle = styled.span`
  font-size: 12px;
  font-weight: 400;
  line-height: 150%;
  color: #122434;
`
const Icon = styled.img`
  width: 30px;
  height: 30px;
  margin: 16px;
`
const CloseButton = styled.img`
  margin-top: 16px;
  margin-right: 21px;
  width: 10px;
  height: 10px;
`