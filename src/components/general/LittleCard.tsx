import React, {FC, memo} from "react";
import styled from "styled-components";
import logo from "assets/img/apple.png"

type Props = {
    name: string,
    ranking: number,
}

export const LittleCard:FC<Props> = memo(({name,ranking}) => {

    return (
        <Container>
            <HeaderContainer>
                <Logo src={logo}/>
                <DataContainer>
                    <Name>{name}</Name>
                    <Ranking>Priority Ranking {ranking}</Ranking>
                </DataContainer>
            </HeaderContainer>
            <Title>CSR Focus</Title>
            <Items>
                <Item>Health</Item>
                <Circle> </Circle>
                <Item>Animals</Item>
                <Circle> </Circle>
                <Item>Education</Item>
            </Items>
        </Container>
    )
})

const Circle = styled.div`
  margin-left: 6px;
  margin-right: 6px;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: #C4C4C4;
`
const Item = styled.span`
  font-size: 12px;
  font-weight: 600;
  line-height: 150%;
  color: #122434;
`
const Items = styled.div`
  margin-top: 4px;
  width: 100%;
  display: flex;
  align-items: center;
`
const Title = styled.span`
  margin-top: 20px;
  font-size: 12px;
  line-height: 150%;
  color: #737373;
`
const Ranking = styled.span`
  font-size: 12px;
  line-height: 150%;
  color: #737373;
`
const Name = styled.span`
  font-size: 12px;
  line-height: 150%;
  font-weight: 600;
  color: #122434;
`
const DataContainer = styled.div`
  margin-left: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const Logo = styled.img`
  width: 48px;
  height: 48px;
`
const HeaderContainer = styled.div`
  display: flex;
`
const Container = styled.article`
  margin-bottom: 16px;
  width: 40%;
  display: flex;
  flex-direction: column;
  padding: 24px;
  background: #fff;
  border-radius: 6px;
`