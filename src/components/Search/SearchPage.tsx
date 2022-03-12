import React from "react";
import styled from "styled-components";
import {SearchHeader} from "./SearchHeader";
import {SearchPanel} from "./SearchPanel";
import {Outlet} from "react-router-dom";


export const SearchPage = () => {
    return (
        <div>
            <SearchHeader/>
            <SearchPanel/>
            <Container>
                <InnerContainer>
                    <SearchContainer>
                        <Outlet/>
                    </SearchContainer>
                </InnerContainer>
            </Container>
        </div>
    )
}

const Container = styled.div`
  display: flex;
  background: #F9F9F9;
`
const InnerContainer = styled.div`
  display: flex;
  margin: 0 auto;
  width: 1440px;
`
const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  width: 100%;
`