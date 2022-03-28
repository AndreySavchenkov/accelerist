import React, {FC, useState} from "react";
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {getFavoriteCompaniesAction} from "redux/companies/companiesSaga";
import {Card, HighPanel, Header, Pagination} from "components";
import {
    getFavoriteCompanies,
    getFavoriteItemCount,
    getFavoriteTotalItems,
    getFavoriteTotalPages
} from "selectors/selectors";


export const FavoritesPage: FC = () => {
    const [isShowMenu, setShowMenu] = useState(false);
    const [localPage, setLocalPage] = useState(1);

    const totalItems = useSelector(getFavoriteTotalItems);
    const totalPage = useSelector(getFavoriteTotalPages);
    const itemCount = useSelector(getFavoriteItemCount);
    const cards = useSelector(getFavoriteCompanies);

    const dispatch = useDispatch();

    const onRightArrowClick = () => {
        if (localPage < totalPage) {
            setLocalPage(localPage + 1)
            dispatch(getFavoriteCompaniesAction(localPage + 1))
        }
    }

    const onLeftArrowClick = () => {
        setLocalPage(localPage - 1)
        if (localPage <= 1) {
            setLocalPage(1)
        }
        dispatch(getFavoriteCompaniesAction(localPage - 1))
    }

    let firstElement = ((itemCount * localPage) - itemCount) + 1
    if (itemCount < 6) {
        firstElement = totalItems - itemCount;
    }

    let endElement = (itemCount * localPage);
    if (itemCount < 6) {
        endElement = totalItems
    }

    const cardsList = cards?.map(card => <Card key={card.id} company={card}/>)

    return (
        <>
            <Header isShowMenu={isShowMenu} setShowMenu={setShowMenu}/>
            <HighPanel text={'Favorites'}/>
            <Container>
                <InnerContainer>
                    <DashboardContainer>
                        <SettingsContainer>
                            <Text>{totalItems} companies</Text>
                            <div style={{marginTop: '27px'}}>
                                <Pagination endElement={endElement}
                                            totalItems={totalItems}
                                            firstElement={firstElement}
                                            onLeftArrowClick={onLeftArrowClick}
                                            onRightArrowClick={onRightArrowClick}/>
                            </div>
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