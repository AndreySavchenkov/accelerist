import React, {FC, useState} from "react";
import styled from "styled-components";
import wellDone from "assets/img/wellDone.png"
import close from "assets/img/closeButton.png"

type Props = {
    text: string
}

export const AllerSuccessful: FC<Props> = ({text}) => {

    const [isShow, setIsShow] = useState(true);

    const clickHandler = () => {
        setIsShow(false);
    }

    setTimeout(()=>clickHandler(),5000)

    return (
        <>
            {
                isShow ?
                    <Container>
                        <InnerContainer>
                            <Icon src={wellDone}/>
                            <TextContainer>
                                <Title>Well Done!</Title>
                                <SubTitle>{text}</SubTitle>
                            </TextContainer>
                        </InnerContainer>
                        <CloseButton onClick={clickHandler} src={close}/>
                    </Container>
                    : ''
            }
        </>

    )
}

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