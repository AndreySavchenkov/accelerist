import React, {useEffect} from "react";
import styled from "styled-components";
import folderPlus from "assets/img/folder-plus.png"
import mail from "assets/img/mail.png"
import upload from "assets/img/upload.png"
import leftArray from "assets/img/arrayLeft.png"
import rightArray from "assets/img/arrayRight.png"
import {Card} from "./Card";
import {useDispatch} from "react-redux";
import {getCompaniesAction} from "../../../redux/companies/companiesSaga";


export const SearchFoundPanel = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCompaniesAction())
    }, [dispatch])

    return (
        <>
            <Text>Found 32 companies</Text>
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
                    <TextNavigation>1-12 of 32</TextNavigation>
                    <LeftArray src={leftArray}/>
                    <RightArray src={rightArray}/>
                </Navigation>
            </SettingsPanel>
            <Cards>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </Cards>
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
  @media (max-width: 650px) {
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
  position: relative;
  @media (max-width: 650px) {
    display: none;
  }
`
const TextNavigation = styled.span`
  margin-right: 60px;
  font-weight: 600;
  font-size: 12px;
  line-height: 150%;
  color: #122434;
`
const LeftArray = styled.img`
  position: absolute;
  top: 0;
  left: -25px;
  cursor: pointer;
`
const RightArray = styled.img`
  position: absolute;
  top: 0;
  left: 65px;
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