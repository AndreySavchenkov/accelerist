import React from "react";
import styled from "styled-components";


export const DashboardPanel = () => {
    return (
        <div>
            <Container>
                <InnerContainer>
                    <Title>Dashboard</Title>
                </InnerContainer>
            </Container>
        </div>
    )
}

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 96px;
  background: #fff;
  @media (max-width: 650px) {
    background: #F9F9F9;
  }
`
const InnerContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  width: 1440px;
  @media (max-width: 1040px) {
    width: 100%;
  }
  @media (max-width: 450px) {
    padding-left: 16px;
  }
`
const Title = styled.span`
  margin-left: 60px;
  font-size: 32px;
  line-height: 150%;
  font-weight: 600;
  color: #122434;
  @media (max-width: 450px) {
    font-size: 24px  ;
  }
`