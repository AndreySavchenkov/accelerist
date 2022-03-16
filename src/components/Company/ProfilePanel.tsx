import React from "react";
import arrayLeft from "assets/img/arrayLeft.png"
import styled from "styled-components";
import {Link} from "react-router-dom";

export const ProfilePanel = () => {
    return (
        <div>
            <Container>
                <InnerContainer>
                    <Link to={'/'}><ArrayLeft src={arrayLeft}/></Link>
                    <Title>Corparate Profile</Title>
                </InnerContainer>
            </Container>
        </div>
    )
}

const ArrayLeft = styled.img`
  margin-left: 60px;
  @media (max-width: 450px) {
    margin-left: 16px;
  }
`
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
  padding-left: 25px;
  font-size: 32px;
  line-height: 150%;
  font-weight: 600;
  color: #122434;
  @media (max-width: 450px) {
    font-size: 24px  ;
  }
`