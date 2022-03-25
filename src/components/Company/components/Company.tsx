import React, {FC, memo} from "react";
import styled from "styled-components";
import {LinkedInIcon, FacebookIcon, TwitterIcon, AppleLogo, FavoriteIcon, UnfavoriteIcon} from "assets/svg";


type Props = {
    like: boolean
    name: string
    primaryIndustry: string[]
}

export const Company: FC<Props> = memo(({name, primaryIndustry, like}) => {

    return (
        <Container>
            <InnerContainer>
                <AppleLogo/>
                <InfoContainer>
                    <NameContainer>
                        <Name>{name}</Name>
                        {like ? <FavoriteIcon/> : <UnfavoriteIcon/>}
                    </NameContainer>
                    <Subtitle>{primaryIndustry[0]}</Subtitle>
                    <SocialContainer>
                        <TwitterIcon/>
                        <FacebookIcon/>
                        <LinkedInIcon height={24} width={24}/>
                    </SocialContainer>
                </InfoContainer>
            </InnerContainer>
            <Button>Block</Button>
        </Container>
    )
})

const Container = styled.article`
  display: flex;
  padding: 40px;
  justify-content: space-between;
  align-items: center;
  background: #F2F2F2;
  border-radius: 6px 6px 0 0;
`
const InnerContainer = styled.div`
  display: flex;
  align-items: center;
`
const InfoContainer = styled.div`
  margin-left: 24px;
  min-height: 100px;
  justify-content: space-between;
  display: flex;
  flex-direction: column;
`
const Name = styled.span`
  margin-right: 10px;
  font-weight: 600;
  font-size: 24px;
  line-height: 148%;
  color: #122434;
`
const Subtitle = styled.span`
  font-size: 12px;
  line-height: 150%;
  color: #737373;
`
const NameContainer = styled.div`
  display: flex;
  align-items: center;
`
const SocialContainer = styled.div`
  display: flex;
  align-items: center;
`
const Button = styled.button`
  padding: 10px 37px;
  font-size: 12px;
  line-height: 150%;
  text-align: center;
  color: #F05658;
  border: 1px solid #E8E8E8;
  background: #fff;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    border: 1px solid #BFBFBF;
  }

  &:active {
    border: 1px solid #F05658;
  }
`