import React, {useEffect, useState} from "react";
import {Header} from "../general/Header";
import {HighPanel} from "../general/HighPanel";
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {getCompaniesAction, getFavoriteCompaniesAction} from "../../redux/companies/companiesSaga";
import {RootState} from "../../redux/store";
import leftArray from "../../assets/img/arrayLeft.png";
import rightArray from "../../assets/img/arrayRight.png";
import {Card} from "../general/Card";

export const FavoritesPage = () => {
    const [isShowMenu, setShowMenu] = useState(false);
    const totalItems = useSelector((state: RootState) => state.companies.favoriteMeta.totalItems);
    const totalPage = useSelector((state: RootState) => state.companies.favoriteMeta.totalPages);
    const itemCount = useSelector((state: RootState) => state.companies.favoriteMeta.itemCount);
    const cards = useSelector((state: RootState) => state.companies.favoriteCompanies)

    const [localPage, setLocalPage] = useState(1);

    const showNextPage = () => {
        if(localPage < totalPage){
            setLocalPage(localPage + 1)
            dispatch(getFavoriteCompaniesAction(localPage + 1))
        }
    }
    const showPreviousPage = () => {
        setLocalPage(localPage - 1)
        if (localPage <= 1) {
            setLocalPage(1)
        }
        dispatch(getFavoriteCompaniesAction(localPage - 1))
    }

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getFavoriteCompaniesAction(localPage))
    }, [])

    const firstElement = ((itemCount * localPage) - itemCount) + 1
    const endElement = (itemCount * localPage)

    const cardsList = cards?.map(card => <Card key={card.id}
                                               id={card.id}
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
                                <LeftArray src={leftArray} onClick={showPreviousPage}/>
                                <TextNavigation>{firstElement} - {endElement} of {totalItems}</TextNavigation>
                                <RightArray src={rightArray} onClick={showNextPage}/>
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
const Cards = styled.div`
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
const Navigation = styled.div`
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