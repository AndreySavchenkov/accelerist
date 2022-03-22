import React, {FC} from "react";
import styled from "styled-components";
import ava from "assets/img/ava.png";
import {Link} from "react-router-dom";

export const Race:FC = () => {
    return (
        <RaceContainer>
            <Title to={'/prospects/prospects-list'}>Race for the Cure</Title>
            <FiltersTitle>Filters</FiltersTitle>
            <FiltersContainer>
                <Filter>Travel Industry</Filter>
                <Filter>$500-$1B</Filter>
                <Filter>National</Filter>
            </FiltersContainer>
            <DataContainer>
                <DataItem>
                    <DataTitle>№ of Prospects Available</DataTitle>
                    <DataNumber>230</DataNumber>
                </DataItem>
                <DataItem>
                    <DataTitle>№ of Contacts Pursued</DataTitle>
                    <DataNumber>70</DataNumber>
                </DataItem>
            </DataContainer>
            <OwnerContainer>
                <InfoContainer>
                    <Avatar src={ava}/>
                    <TextContainer>
                        <Name>Jenny Wilson</Name>
                        <Status>Owner</Status>
                    </TextContainer>
                </InfoContainer>
                <DateContainer>
                    <Activity>Last Activity</Activity>
                    <Date>1 Jul 2020</Date>
                </DateContainer>
            </OwnerContainer>
        </RaceContainer>
    )
}
const Date = styled.span`
  font-size: 12px;
  color: #122434;
`
const Activity = styled.span`
  font-size: 12px;
  color: #737373;
`
const DateContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const Status = styled.span`
  font-size: 12px;
  color: #737373;
`
const Name = styled.span`
  font-size: 12px;
  font-weight: 600;
  color: #122434;
`
const TextContainer = styled.div`
  margin-left: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const Avatar = styled.img`

`
const InfoContainer = styled.div`
  display: flex;
`
const OwnerContainer = styled.div`
  margin-top: 24px;
  display: flex;
  justify-content: space-between;
`
const DataNumber = styled.span`
  margin-top: 8px;
  margin-bottom: 8px;
  font-weight: 600;
  font-size: 24px;
  color: #122434;
`
const DataTitle = styled.span`
  margin-top: 5px;
  font-size: 12px;
  color: #737373;
`
const DataItem = styled.div`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #F9F9F9;
  border-radius: 4px;
  width: 48%;
`
const DataContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`
const Filter = styled.span`
  padding: 6px 10px;
  margin-right: 8px;
  font-size: 12px;
  color: #122434;
  border-radius: 6px;
  border: 1px solid #CAF0FF;
`
const FiltersContainer = styled.div`
  margin-top: 8px;
  display: flex;
`
const FiltersTitle = styled.span`
  margin-top: 16px;
  font-size: 12px;
  color: #737373;
`
const Title = styled(Link)`
  font-size: 16px;
  font-weight: 600;
  color: #122434;
  padding-bottom: 9px;
  border-bottom: 1px solid #E8E8E8;
  text-decoration: none;
`
const RaceContainer = styled.div`
  margin-top: 16px;
  display: flex;
  width: 45%;
  flex-direction: column;
  padding: 24px;
  background-color: #fff;
  border-radius: 6px;
`