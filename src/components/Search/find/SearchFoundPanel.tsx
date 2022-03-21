import React, {useEffect, useState} from "react";
import styled from "styled-components";
import folderPlus from "assets/img/folder-plus.png"
import mail from "assets/img/mail.png"
import upload from "assets/img/upload.png"
import leftArray from "assets/img/arrayLeft.png"
import rightArray from "assets/img/arrayRight.png"
import {Card} from "../../general/Card";
import {useDispatch, useSelector} from "react-redux";
import {getCompaniesAction} from "redux/companies/companiesSaga";
import {RootState} from "redux/store";
import bigHeartFull from "assets/img/bigFullHeart.png"


export const SearchFoundPanel = () => {

    const [localPage, setLocalPage] = useState(1);

    const showNextPage = () => {
        setLocalPage(localPage + 1)
        dispatch(getCompaniesAction(localPage + 1))
    }
    const showPreviousPage = () => {
        setLocalPage(localPage - 1)
        if (localPage <= 1) {
            setLocalPage(1)
        }
        dispatch(getCompaniesAction(localPage - 1))
    }

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCompaniesAction(localPage))
    }, [])

    const cards = useSelector((state: RootState) => state.companies.companies)

    const totalItems = useSelector((state: RootState) => state.companies.meta?.totalItems)
    const itemCount = useSelector((state: RootState) => state.companies.meta?.itemCount)

    const firstElement = ((itemCount * localPage) - itemCount) + 1
    const endElement = (itemCount * localPage)


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
            <Text>Found {totalItems} companies</Text>
            <SettingsPanel>
                <Items>
                    <Item>
                        <ItemIcon src={folderPlus}/>
                        Save <TextHiden>List</TextHiden>
                    </Item>
                    <Item>
                        <ItemIcon src={upload}/>
                        Export <TextHiden>to Excel</TextHiden>
                    </Item>
                    <Item>
                        <ItemIcon src={mail}/>
                        Accelerist <TextHiden>Support</TextHiden>
                    </Item>
                </Items>
                <Navigation>
                    <LeftArray src={leftArray} onClick={showPreviousPage}/>
                    <TextNavigation>{firstElement} - {endElement} of {totalItems}</TextNavigation>
                    <RightArray src={rightArray} onClick={showNextPage}/>
                </Navigation>
            </SettingsPanel>
            <Cards>
                {cardsList}
            </Cards>
            <MobileNavigation>
                <LeftArray src={leftArray} onClick={showPreviousPage}/>
                <TextNavigation>{firstElement} - {endElement} of {totalItems}</TextNavigation>
                <RightArray src={rightArray} onClick={showNextPage}/>
            </MobileNavigation>
        </>
    )
}

const Text = styled.span`
  margin-left: 60px;
  margin-top: 32px;
  margin-bottom: 26px;
  font-size: 16px;
  font-weight: 600;
  line-height: 145%;
  color: #122434;
  @media (max-width: 650px) {
    font-size: 12px;
    margin-left: 16px;
    margin-bottom: 20px;
    margin-top: 0;
  }
`
const TextHiden = styled.span`
  @media (max-width: 460px) {
    display: none;
  }
`
const SettingsPanel = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 25px;
`
const Items = styled.div`
  display: flex;
  align-items: center;
  margin-left: 60px;

  @media (max-width: 730px) {
    margin-left: 16px;
  }
`
const Item = styled.div`
  display: flex;
  align-items: center;
  margin-right: 40px;
  font-size: 12px;
  line-height: 150%;
  color: #122434;
  cursor: pointer;
`
const ItemIcon = styled.img`
  margin-right: 10px;
`
const Navigation = styled.div`
  display: flex;
  margin-right: 60px;
  @media (max-width: 730px) {
    margin-right: 16px;
  }
  @media (max-width: 650px) {
    display: none;
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
const LeftArray = styled.img`

  cursor: pointer;
`
const RightArray = styled.img`

  cursor: pointer;
`
const Cards = styled.div`
  margin-left: 60px;
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 932px) {
    justify-content: center;
    margin-left: 0;
  }
`
const MobileNavigation = styled.div`
  display: none;
  @media (max-width: 650px) {
    display: flex;
    margin: 0 auto;
    margin-bottom: 30px;
  }
`