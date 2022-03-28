import React, {FC, useEffect, useState} from "react";
import styled from "styled-components";
import {getCompaniesAction} from "redux/companies/companiesSaga";
import {useDispatch, useSelector} from "react-redux";
import {Card, HighPanel, Header, Pagination} from "components";
import {getCompanies} from "selectors/selectors";
import {UploadFileIcon} from "assets/svg";

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
                                <UploadFileIcon/>
                                Export to Exel
                            </ExelContainer>
                            <div style={{paddingTop: '22px'}}>
                                <Pagination endElement={endElement} totalItems={totalItems} firstElement={firstElement}/>
                            </div>
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
const ExelContainer = styled.div`
  margin-top: 24px;
  display: flex;
  align-items: center;
  font-size: 12px;
  line-height: 150%;
  color: #122434;
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