import React, {FC, useEffect, useState} from "react";
import styled from "styled-components";
import leftArray from "assets/img/arrayLeft.png";
import rightArray from "assets/img/arrayRight.png";
import exelLogo from "assets/img/upload.png"
import {getCompaniesAction} from "redux/companies/companiesSaga";
import {useDispatch, useSelector} from "react-redux";
import {Card, HighPanel, Header} from "components";
import {getCompanies} from "selectors/selectors";

export const ProspectsListPage: FC = () => {
    const [isShowMenu, setShowMenu] = useState(false);

    const cards = useSelector(getCompanies);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCompaniesAction(1))
    }, [dispatch])

    const cardsList = cards?.map(card => <Card id={card.id}
                                               key={card.id}
                                               like={card.like}
                                               name={card.name}
                                               city={card.city}
                                               phone={card.phone}
                                               score={card.score}
                                               country={card.country}
                                               revenue={card.revenue}
                                               primaryIndustry={card.primaryIndustry[0]}/>)

    const firstElement = 1;
    const endElement = 6;
    const totalItems = 6;

    return (
        <>
            <Header isShowMenu={isShowMenu} setShowMenu={setShowMenu}/>
            <HighPanel text={'Race for the Cure'}/>
            <Container>
                <InnerContainer>
                    <ProspectsListContainer>
                        <CountCompanies>6 Pages</CountCompanies>
                        <Filters>Filters</Filters>
                        <FiltersContainer>
                            <Filter>Travel Industry</Filter>
                            <Filter>$500-$1B</Filter>
                            <Filter>National</Filter>
                            <Filter>Health</Filter>
                            <Filter>World Wide Fund</Filter>
                            <Filter>National</Filter>
                            <Filter>United Nations</Filter>
                            <Filter>National</Filter>
                        </FiltersContainer>
                        <SettingsContainer>
                            <ExelContainer>
                                <Logo src={exelLogo}/>
                                Export to Exel
                            </ExelContainer>
                            <Navigation>
                                <LeftArray src={leftArray}/>
                                <TextNavigation>{firstElement} - {endElement} of {totalItems}</TextNavigation>
                                <RightArray src={rightArray}/>
                            </Navigation>
                        </SettingsContainer>
                        <Cards>
                            {cardsList}
                        </Cards>
                    </ProspectsListContainer>
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
const Logo = styled.img`
  margin-right: 8px;
  width: 24px;
  height: 24px;
`
const ExelContainer = styled.div`
  margin-top: 24px;
  display: flex;
  align-items: center;
  font-size: 12px;
  line-height: 150%;
  color: #122434;
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
  align-items: center;
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
`
const Filter = styled.span`
  margin-right: 8px;
  padding: 6px 10px;
  font-size: 12px;
  line-height: 150%;
  color: #122434;
  background: #FFFFFF;
  border: 1px solid #CAF0FF;
  border-radius: 6px;
`
const FiltersContainer = styled.div`
  margin-left: 15px;
  margin-top: 8px;
  display: flex;
  align-items: center;
`
const Filters = styled.span`
  margin-top: 24px;
  font-size: 12px;
  line-height: 150%;
  color: #737373;
`
const CountCompanies = styled.span`
  margin-top: 32px;
  font-size: 16px;
  line-height: 145%;
  font-weight: 600;
  color: #122434;
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
const ProspectsListContainer = styled.main`
  padding-left: 60px;
  padding-right: 60px;
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  width: 100%;
  min-height: 100vh;
`