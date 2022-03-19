import React from "react";
import styled from "styled-components";
import heart from "assets/img/bigHeart.png";

export const Favorites = () => {
    return (
        <MainContainer>
            <Title>Favorites</Title>
            <Container>
                <Icon src={heart}/>
                <Label>No favorite company</Label>
                <Info>Go to the search page and add to favorites</Info>
                <Button>Search</Button>
            </Container>
        </MainContainer>
    )
}
const Button = styled.div`
  margin-top: 32px;
  margin-bottom: 120px;
  padding: 10px 100px;
  font-size: 12px;
  text-align: center;
  color: #122434;
  border: 1px solid #2BAEE0;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    color: #2BAEE0;
    background: #EBF9FF;
  }

  &:active {
    background: #CAF0FF;
  }
`
const Info = styled.span`
  margin-top: 8px;
  font-size: 12px;
  color: #BFBFBF;
`
const Label = styled.span`
  font-weight: 600;
  font-size: 16px;
  color: #122434;
`
const Icon = styled.img`
  margin-top: 80px;
  width: 128px;
  height: 128px;
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
  align-items: center;
  padding: 24px;
  background-color: #fff;
  border-radius: 6px;
`
const MainContainer = styled.div`
  display: flex;
  width: 49%;
  flex-direction: column;
`