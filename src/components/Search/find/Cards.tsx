import React from "react";
import styled from "styled-components";
import appleLogo from "assets/img/apple.png"
import heart from "assets/img/heart.png"


export const Cards = () => {
    return (
        <Container>
            <Card>
                <Ranking>
                    <ContainerLogo>
                        <Logo src={appleLogo}/>
                    </ContainerLogo>
                    <ContainerInfo>
                        <Title>Priority Ranking</Title>
                        <Subtitle>12</Subtitle>
                    </ContainerInfo>
                </Ranking>
                <MainContainer>
                    <MainTitle>Apple</MainTitle>
                    <MainAddress>4140 Parker Rd. Allentown,
                        New Mexico 31134</MainAddress>
                    <MainPhone>(671) 555-0110</MainPhone>
                    <InnerContainer>
                        <FocusContainer>
                            <FocusTitle>CSR Focus</FocusTitle>
                            <FocusInfo>Health <Circle></Circle> Animals <Circle></Circle> Education</FocusInfo>
                        </FocusContainer>
                        <BorderLine></BorderLine>
                        <RevenueContainer>
                            <RevenueTitle>Revenue</RevenueTitle>
                            <RevenuePrice>$ 4,434,476</RevenuePrice>
                        </RevenueContainer>
                    </InnerContainer>
                    <ButtonsContainer>
                        <FavoriteButton src={heart}/>
                        <ProfileButton>Profile</ProfileButton>
                    </ButtonsContainer>
                </MainContainer>
            </Card>
        </Container>
    )
}

const Container = styled.div`

`
const Card = styled.div`
  padding: 26px 32px;
  margin-bottom: 24px;
  display: flex;
  max-width: 536px;
  width: 100%;
  background: #fff;
`
const Ranking = styled.div`
  border: 1px solid #E8E8E8;
  border-radius: 6px;
`
const ContainerLogo = styled.div`
  padding: 26px 32px;
  border-bottom: 1px solid #E8E8E8;
`
const Logo = styled.img`

`
const ContainerInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Title = styled.span`
  font-size: 12px;
  margin-top: 8px;
  line-height: 150%;
  color: #737373;
`
const Subtitle = styled.span`
  margin-top: 2px;
  margin-bottom: 8px;
  font-size: 16px;
  font-weight: 600;
  line-height: 145%;
  color: #122434;
`
const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 16px;
`
const MainTitle = styled.span`
  font-size: 16px;
  font-weight: 600;
  line-height: 145%;
  color: #122434;
`
const MainAddress = styled.span`
  margin-top: 12px;
  font-size: 12px;
  line-height: 150%;
  color: #737373;
`
const MainPhone = styled.span`
  margin-top: 4px;
  font-size: 12px;
  line-height: 150%;
  color: #737373;
`
const InnerContainer = styled.div`
  display: flex;
  padding-bottom: 12px;
  border-bottom: 1px solid #E8E8E8;
`
const FocusContainer = styled.div`
  padding-right: 20px;
`
const FocusTitle = styled.span`
  display: block;
  margin-top: 28px;
  margin-bottom: 4px;
  font-size: 12px;
  line-height: 150%;
  color: #737373;
`
const FocusInfo = styled.div`
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 12px;
  line-height: 150%;
  color: #122434;
`
const RevenueContainer = styled.div`
  margin-left: 20px;
`
const RevenueTitle = styled.span`
  display: block;
  margin-top: 28px;
  margin-bottom: 4px;
  font-size: 12px;
  line-height: 150%;
  color: #737373;
`
const RevenuePrice = styled.span`
  font-weight: 600;
  font-size: 12px;
  line-height: 150%;
  color: #122434;
`
const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 24px;
`
const FavoriteButton = styled.img`
  padding: 5px;
  border-radius: 6px;
  border: 1px solid #E8E8E8;
  cursor: pointer;
`
const ProfileButton = styled.div`
  padding: 9px 96px;
  font-size: 12px;
  font-weight: 600;
  line-height: 150%;
  text-align: center;
  color: #122434;
  border: 1px solid #2BAEE0;
  border-radius: 6px;
  cursor: pointer;
`
const BorderLine = styled.div`
  align-self: flex-end;
  width: 1px;
  height: 40px;
  background-color: #E8E8E8;
`
const Circle = styled.div`
  width: 4px;
  height: 4px;
  margin-left: 6px;
  margin-right: 6px;
  border-radius: 50%;
  background: #C4C4C4;
`