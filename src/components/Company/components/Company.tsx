import React, {FC} from "react";
import styled from "styled-components";
import logo from "assets/img/apple.png"
import unfavorite from "assets/img/heart.png"
import favorite from "assets/img/fullHeart.png"
import linkedIn from "assets/img/registraionLink.png"
import twitter from "assets/img/twitter.png"
import facebook from "assets/img/facebook.png"

type Props = {
    like: boolean
    name: string
    primaryIndustry: string[]
}

export const Company: FC<Props> = ({name, primaryIndustry,like}) => {


    return (
        <Container>
            <InnerContainer>
                <Logo src={logo}/>
                <InfoContainer>
                    <NameContainer>
                        <Name>{name}</Name>
                        {like ?
                            <FavoriteIcon  src={favorite}/> :
                            <FavoriteIcon  src={unfavorite}/>
                        }
                    </NameContainer>
                    <Subtitle>{primaryIndustry[0]}</Subtitle>
                    <SocialContainer>
                        <SocialItem src={twitter}/>
                        <SocialItem src={facebook}/>
                        <SocialItem src={linkedIn}/>
                    </SocialContainer>
                </InfoContainer>
            </InnerContainer>
            <Button>Block</Button>
        </Container>
    )
}

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
const Logo = styled.img`
  width: 100px;
  height: 100px;
  background: #fff;
  border-radius: 8px;
`
const InfoContainer = styled.div`
  margin-left: 24px;
  min-height: 100px;
  justify-content: space-between;
  display: flex;
  flex-direction: column;
`
const Name = styled.span`
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
const FavoriteIcon = styled.img`
  margin-left: 10px;
  width: 24px;
  height: 24px;
  cursor: pointer;
`
const SocialContainer = styled.div`

`
const SocialItem = styled.img`
  margin-right: 10px;
  width: 20px;
  height: 20px;
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
  &:hover{
    border: 1px solid #BFBFBF;
  }
  &:active{
    border: 1px solid #F05658;
  }
`