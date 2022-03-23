import React, {FC} from "react";
import styled from "styled-components";
import heart from "assets/img/bigHeart.png";
import {Link, useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {LittleCard} from "../../general/LittleCard";
import {getFavoriteCompanies} from "../../../selectors/selectors";

export const Favorites: FC = () => {
    const navigate = useNavigate();

    const cards = useSelector(getFavoriteCompanies)

    const cardsList = cards?.map(card => <LittleCard key={card.id}
                                                     name={card.name}
                                                     ranking={card.score}/>)

    return (
        <MainContainer>
            {cardsList ?
                <TitleContainer>
                    <Title to={'/favorites'}>Favorites</Title>
                    <TextButton to={'/favorites'}>see more</TextButton>
                </TitleContainer> : <Title to={'/favorites'}>Favorites</Title>}
            {(cardsList?.length > 0) ?
                <CardsContainer>
                    {cardsList}
                </CardsContainer>
                :
                <Container>
                    <Icon src={heart}/>
                    <Label>No favorite company</Label>
                    <Info>Go to the search page and add to favorites</Info>
                    <Button onClick={() => navigate('/')}>Search</Button>
                </Container>
            }
        </MainContainer>
    )
}
const TextButton = styled(Link)`
  margin-top: 52px;
  font-size: 12px;
  color: #2BAEE0;
  cursor: pointer;
  text-decoration: none;
`
const TitleContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`
const CardsContainer = styled.div`
  margin-top: 16px;
  justify-content: space-between;
  flex-wrap: wrap;
  display: flex;
`
const Button = styled.div`
  margin-top: 32px;
  //margin-bottom: 120px;
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
  //margin-top: 80px;
  width: 128px;
  height: 128px;
`
const Title = styled(Link)`
  margin-top: 40px;
  font-weight: 600;
  font-size: 24px;
  color: #122434;
  text-decoration: none;
`
const Container = styled.div`
  min-height: 401px;
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 24px;
  background-color: #fff;
  border-radius: 6px;
`
const MainContainer = styled.section`
  display: flex;
  width: calc(49% + 3px);
  flex-direction: column;
`
