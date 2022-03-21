import React, {useEffect, useState} from "react";
import {Header} from "../general/Header";
import styled from "styled-components";
import {HighPanel} from "../general/HighPanel";
import {Race} from "./Race";
import {Favorites} from "./Favorites";
import {Reports} from "./Reports";
import {Navigator} from "./Navigator";
import {useDispatch} from "react-redux";
import {getFavoriteCompaniesAction} from "../../redux/companies/companiesSaga";
import {Link} from "react-router-dom";

export const Dashboard = () => {
    const [isShowMenu, setShowMenu] = useState(false);
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getFavoriteCompaniesAction(1))
    },[dispatch])

    return (
        <>
            <Header isShowMenu={isShowMenu} setShowMenu={setShowMenu}/>
            <HighPanel text={'Dashboard'}/>
            <Container>
                <InnerContainer>
                    <DashboardContainer>
                        <TitleContainer>
                            <Title>Prospecting Sessions</Title>
                            <TextButton to={'/prospects'}>see more</TextButton>
                        </TitleContainer>
                        <RowContainer>
                            <Race/>
                            <Race/>
                        </RowContainer>
                        <RowContainer>
                            <Favorites/>
                            <Reports/>
                        </RowContainer>
                        <TitleContainer>
                            <Title>Prospect Navigator</Title>
                            <TextButton to={'#'}>see more</TextButton>
                        </TitleContainer>
                        <Navigator/>
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
const TextButton = styled(Link)`
  font-size: 12px;
  color: #2BAEE0;
  cursor: pointer;
  text-decoration: none;
`
const Title = styled.span`
  font-weight: 600;
  font-size: 24px;
  color: #122434;
`
const TitleContainer = styled.div`
  margin-top: 32px;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`
const Container = styled.main`
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