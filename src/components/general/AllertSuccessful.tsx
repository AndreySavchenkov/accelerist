import React, {FC, memo, useEffect, useState} from "react";
import styled from "styled-components";
import {EMPTY_STRING} from "constance";
import {CloseIcon, WellDoneIcon} from "assets/svg";

type Props = {
    text: string
}

export const AllertSuccessful: FC<Props> = memo(({text}) => {
    const [isShow, setIsShow] = useState(true);

    useEffect(() => {
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
                            <WellDoneIcon/>
                            <TextContainer>
                                <Title>Well Done!</Title>
                                <SubTitle>{text}</SubTitle>
                            </TextContainer>
                        </InnerContainer>
                        <CloseButton onClick={onCloseButtonClick}>
                            <CloseIcon/>
                        </CloseButton>
                    </Container>
                    : EMPTY_STRING
            }
        </>

    )
})

const Container = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  justify-content: space-between;
  width: 300px;
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
const CloseButton = styled.div`
  margin-top: 10px;
  margin-right: 10px;
`