import React, {FC} from "react";
import styled from "styled-components";
import logo1 from "assets/img/logo01.png";
import logo2 from "assets/img/logo02.png";
import logo3 from "assets/img/logo03.png";
import logo4 from "assets/img/logo04.png";
import ava1 from "assets/img/ava1.png";
import ava2 from "assets/img/ava2.png";
import ava3 from "assets/img/ava3.png";

export const Reports:FC = () => {

    return (
        <MainContainer>
            <Title>Reports</Title>
            <Container>
                <StatContainer>
                    <StatItem>
                        <StatTitle>Search Sessions</StatTitle>
                        <NumberContainer>
                            <NumberTitle>Total</NumberTitle>
                            <Number>43</Number>
                        </NumberContainer>
                    </StatItem>
                    <StatItem>
                        <StatTitle>Sent Pitches</StatTitle>
                        <NumberContainer>
                            <NumberTitle>Company</NumberTitle>
                            <Number>44</Number>
                        </NumberContainer>
                    </StatItem>
                </StatContainer>
                <InnerTitle>Top Matched</InnerTitle>
                <Items>
                    <Item src={logo1}/>
                    <Item src={logo2}/>
                    <Item src={logo3}/>
                    <Item src={logo4}/>
                </Items>
                <InnerTitle style={{marginBottom: '8px'}}>Last Login</InnerTitle>
                <LoginsContainer>
                    <LoginItem>
                        <LoginInnerContainer>
                            <Avatar src={ava1}/>
                            <Name>Frank Lampard</Name>
                        </LoginInnerContainer>
                        <Date>12 Aug 2020</Date>
                    </LoginItem>
                    <Line> </Line>
                    <LoginItem>
                        <LoginInnerContainer>
                            <Avatar src={ava2}/>
                            <Name>Cody Fisher</Name>
                        </LoginInnerContainer>
                        <Date>12 Aug 2020</Date>
                    </LoginItem>
                    <Line> </Line>
                    <LoginItem>
                        <LoginInnerContainer>
                            <Avatar src={ava3}/>
                            <Name>Leslie Alexander</Name>
                        </LoginInnerContainer>
                        <Date>12 Aug 2020</Date>
                    </LoginItem>
                </LoginsContainer>
            </Container>
        </MainContainer>
    )
}
const Line = styled.div`
  margin-left: 42px;
  width: 92%;
  height: 1px;
  background: #EEEEEE;
`
const Date = styled.span`
  font-size: 12px;
  color: #737373;
`
const Name = styled.span`
  font-weight: 600;
  font-size: 12px;
  color: #122434;
`
const Avatar = styled.img`
  margin-right: 10px;
`
const LoginInnerContainer = styled.div`
  align-items: center;
  display: flex;
`
const LoginItem = styled.div`
  margin-top: 8px;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const LoginsContainer = styled.div`
  display: flex;
  flex-direction: column;
`
const Item = styled.img`
  margin-right: 12px;
`
const Items = styled.div`
  margin-top: 16px;
  display: flex;
`
const InnerTitle = styled.span`
  margin-top: 24px;
  font-size: 16px;
  color: #122434;
  font-weight: 600;
`
const Number = styled.span`
  margin-top: 8px;
  margin-bottom: 8px;
  font-size: 24px;
  color: #122434;
  font-weight: 600;
`
const NumberTitle = styled.span`
  margin-top: 5px;
  font-size: 12px;
  color: #737373;
`
const NumberContainer = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #F9F9F9;
  border-radius: 4px;
`
const StatTitle = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: #122434;
`
const StatItem = styled.div`
  width: 48%;

`
const StatContainer = styled.div`
  display: flex;
  justify-content: space-between;
`
const Title = styled.span`
  margin-top: 40px;
  font-weight: 600;
  font-size: 24px;
  color: #122434;
`
const Container = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  padding: 24px;
  background-color: #fff;
  border-radius: 6px;
`
const MainContainer = styled.section`
  display: flex;
  width: calc(49% + 3px);
  flex-direction: column;
`