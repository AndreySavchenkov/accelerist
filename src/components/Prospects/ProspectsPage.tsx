import React, {FC, useState} from "react";
import styled from "styled-components";
import {Race, HighPanel, Header} from "components";
import {LeftArrowIcon, RightArrowIcon} from "assets/svg";

export const ProspectsPage: FC = () => {
    const [isShowMenu, setShowMenu] = useState(false);
    const [activeName, setActiveName] = useState('alphabet');

    const onMethodClick = (name: string) => setActiveName(name);

    const totalItems = 6;
    const firstElement = 1;
    const endElement = 6;

    return (
        <>
            <Header isShowMenu={isShowMenu} setShowMenu={setShowMenu}/>
            <HighPanel text={'Prospects'}/>
            <Container>
                <InnerContainer>
                    <ProspectsContainer>
                        <Sorting>
                            <SortMethodContainer>
                                <Title>Sort by</Title>
                                {!(activeName === 'alphabet') ?
                                    <Method onClick={() => onMethodClick('alphabet')}>Alphabet</Method> :
                                    <MethodActive>Alphabet</MethodActive>}
                                {!(activeName === 'available') ?
                                    <Method onClick={() => onMethodClick('available')}>Prospects Available</Method> :
                                    <MethodActive>Prospects Available</MethodActive>}
                                {!(activeName === 'activity') ?
                                    <Method onClick={() => onMethodClick('activity')}>Last Activity</Method> :
                                    <MethodActive>Last Activity</MethodActive>}
                            </SortMethodContainer>
                            <Navigation>
                                <LeftArrow>
                                    <LeftArrowIcon/>
                                </LeftArrow>
                                <TextNavigation>{firstElement} - {endElement} of {totalItems}</TextNavigation>
                                <RightArrow>
                                    <RightArrowIcon/>
                                </RightArrow>
                            </Navigation>
                        </Sorting>
                        <RaceContainer>
                            <Race/>
                            <Race/>
                            <Race/>
                            <Race/>
                            <Race/>
                            <Race/>
                        </RaceContainer>
                    </ProspectsContainer>
                </InnerContainer>
            </Container>
        </>
    )
}
const RaceContainer = styled.div`
  margin-top: 23px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
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
const LeftArrow = styled.div`
  cursor: pointer;
`
const RightArrow = styled.div`
  cursor: pointer;
`
const Navigation = styled.div`
  display: flex;
  @media (max-width: 730px) {
    margin-right: 16px;
  }
  @media (max-width: 650px) {
    display: none;
  }
`
const Method = styled.span`
  margin-right: 22px;
  font-size: 12px;
  line-height: 150%;
  color: #122434;
  cursor: pointer;
  padding-bottom: 4px;
`
const MethodActive = styled.span`
  margin-right: 22px;
  font-size: 12px;
  line-height: 150%;
  color: #122434;
  cursor: pointer;
  padding-bottom: 2px;
  border-bottom: 2px solid #2BAEE0;
`
const Title = styled.span`
  margin-right: 26px;
  font-size: 12px;
  line-height: 150%;
  color: #737373;
`
const SortMethodContainer = styled.div`
  display: flex;
  align-items: center;
`
const Sorting = styled.div`
  margin-top: 35px;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
const ProspectsContainer = styled.div`
  padding-left: 60px;
  padding-right: 60px;
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  width: 100%;
  min-height: 100vh;
`