import React, {useState} from "react";
import {SearchHeader} from "../Search/SearchHeader";
import styled from "styled-components";
import {DashboardPanel} from "./DashboardPanel";
import {Race} from "./Race";
import {Favorites} from "./Favorites";
import {Reports} from "./Reports";

export const Dashboard = () => {
    const [isShowMenu, setShowMenu] = useState(false);


    return (
        <>
            <SearchHeader isShowMenu={isShowMenu} setShowMenu={setShowMenu}/>
            <DashboardPanel/>
            <Container>
                <InnerContainer>
                    <DashboardContainer>
                        <HeaderTitleContainer>
                            <Title>Prospecting Sessions</Title>
                            <TextButton>see more</TextButton>
                        </HeaderTitleContainer>
                        <RowContainer>
                            <Race/>
                            <Race/>
                        </RowContainer>
                        <RowContainer>
                            <Favorites/>
                            <Reports/>
                        </RowContainer>
                    </DashboardContainer>
                </InnerContainer>
            </Container>

        </>

    )
}

const RowContainer = styled.div`
  display: flex;
  justify-content: space-between;
`
const TextButton = styled.span`
  font-size: 12px;
  color: #2BAEE0;
  cursor: pointer;
`
const Title = styled.span`
  font-weight: 600;
  font-size: 24px;
  color: #122434;
`
const HeaderTitleContainer = styled.div`
  margin-top: 32px;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
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
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  width: 100%;
  min-height: 100vh;
`