import React, {FC, useState} from "react";
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {getFavoriteCompaniesAction} from "redux/companies/companiesSaga";
import leftArray from "assets/img/arrayLeft.png";
import rightArray from "assets/img/arrayRight.png";
import {Card, HighPanel,Header } from "components";
import {
    getFavoriteCompanies,
    getFavoriteItemCount,
    getFavoriteTotalItems,
    getFavoriteTotalPages
} from "selectors/selectors";

export const FavoritesPage:FC = () => {
    const [isShowMenu, setShowMenu] = useState(false);
    const [localPage, setLocalPage] = useState(1);

    const totalItems = useSelector(getFavoriteTotalItems);
    const totalPage = useSelector(getFavoriteTotalPages);
    const itemCount = useSelector(getFavoriteItemCount);
    const cards = useSelector(getFavoriteCompanies);

    const dispatch = useDispatch();

    const onRightArrayClick = () => {
        if(localPage < totalPage){
            setLocalPage(localPage + 1)
            dispatch(getFavoriteCompaniesAction(localPage + 1))
        }
    }

    const onLeftArrayClick = () => {
        setLocalPage(localPage - 1)
        if (localPage <= 1) {
            setLocalPage(1)
        }
        dispatch(getFavoriteCompaniesAction(localPage - 1))
    }

    let firstElement = ((itemCount * localPage) - itemCount) + 1
    if(itemCount < 6){
        firstElement = totalItems - itemCount;
    }

    let endElement = (itemCount * localPage);
    if(itemCount < 6){
        endElement = totalItems
    }

    const cardsList = cards?.map(card => <Card key={card.id}
                                               id={card.id}
                                               like={card.like}
                                               name={card.name}
                                               city={card.city}
                                               phone={card.phone}
                                               score={card.score}
                                               country={card.country}
                                               revenue={card.revenue}
                                               primaryIndustry={card.primaryIndustry[0]}/>)

    return (
        <>
            <Header isShowMenu={isShowMenu} setShowMenu={setShowMenu}/>
            <HighPanel text={'Favorites'}/>
            <Container>
                <InnerContainer>
                    <DashboardContainer>
                        <SettingsContainer>
                            <Text>{totalItems} companies</Text>
                            <Navigation>
                                <LeftArray src={leftArray} onClick={onLeftArrayClick}/>
                                <TextNavigation>{firstElement} - {endElement} of {totalItems}</TextNavigation>
                                <RightArray src={rightArray} onClick={onRightArrayClick}/>
                            </Navigation>
                        </SettingsContainer>
                        <Cards>
                            {cardsList}
                        </Cards>
                    </DashboardContainer>
                </InnerContainer>
            </Container>
        </>
    )
}
const Cards = styled.main`
  margin-top: 16px;
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 932px) {
    justify-content: center;
    margin-left: 0;
  }
`
const TextNavigation = styled.span`
  text-align: center;
  margin-left: 10px;
  margin-right: 10px;
  font-weight: 600;
  font-size: 12px;
  line-height: 150%;
  color: #122434;
`
const RightArray = styled.img`
  cursor: pointer;
`
const LeftArray = styled.img`
  cursor: pointer;
`
const Navigation = styled.nav`
  margin-top: 32px;
  display: flex;
  margin-right: 60px;
  @media (max-width: 730px) {
    margin-right: 16px;
  }
  @media (max-width: 650px) {
    display: none;
  }
`
const SettingsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const Text = styled.span`
  margin-top: 32px;
  font-size: 16px;
  font-weight: 600;
  line-height: 145%;
  color: #122434;
  @media (max-width: 650px) {
    font-size: 12px;
    margin-left: 16px;
    margin-top: 0;
  }
`
const Container = styled.div`
  display: flex;
  background: #F9F9F9;
`
const InnerContainer = styled.div`
  display: flex;
  margin: 0 auto;
  width: 1440px;
`
const DashboardContainer = styled.div`
  padding-left: 60px;
  padding-right: 60px;
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  width: 100%;
  min-height: 100vh;
`