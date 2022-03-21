import React, {FC, useState} from "react";
import styled from "styled-components";
import appleLogo from "assets/img/apple.png"
import heart from "assets/img/heart.png"
import fullHeart from "assets/img/fullHeart.png"
import {formatNumber} from "helpers/functions";
import {useNavigate} from "react-router-dom";
import {
    doDislikeCompanyAction,
    doLikeCompanyAction,
} from "../../redux/companies/companiesSaga";
import {useDispatch} from "react-redux";
import bigHeartFull from "../../assets/img/bigFullHeart.png";
import {Button} from "./Button";
import closeImg from "assets/img/closeBlack.png"

type Props = {
    id: string
    like: boolean
    name: string
    city: string
    phone: string
    score: number
    country: string
    revenue: string
    primaryIndustry: string
}

export const Card: FC<Props> = ({name, revenue, phone, score, country, city, primaryIndustry, id, like}) => {

    const [isModal, setIsModal] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const showProfile = () => {
        navigate(`/${id}`);
    }
    const showModal = () => {
        setIsModal(true)
    }
    const doLike = () => {
        dispatch(doLikeCompanyAction(id))
        setIsModal(false)
    }
    const doDislike = () => {
        dispatch(doDislikeCompanyAction(id))
    }

    return (
        <Container>
            <Ranking>
                <ContainerLogo>
                    <Logo src={appleLogo}/>
                </ContainerLogo>
                <ContainerInfo>
                    <Title>Priority Ranking</Title>
                    <Subtitle>{score}</Subtitle>
                </ContainerInfo>
            </Ranking>
            <MainContainer>
                <MainTitle>{name}</MainTitle>
                <MainAddress>{country}, {city}</MainAddress>
                <MainPhone>{phone}</MainPhone>
                <InnerContainer>
                    <FocusContainer>
                        <FocusTitle>CSR Focus</FocusTitle>
                        <FocusInfo>{primaryIndustry}</FocusInfo>
                    </FocusContainer>
                    <BorderLine> </BorderLine>
                    <RevenueContainer>
                        <RevenueTitle>Revenue</RevenueTitle>
                        <RevenuePrice>$ {formatNumber(revenue)}</RevenuePrice>
                    </RevenueContainer>
                </InnerContainer>
                <ButtonsContainer>
                    {
                        !like ?
                            <FavoriteButton onClick={showModal} src={heart}/> :
                            <FavoriteButton onClick={doDislike} src={fullHeart}/>
                    }
                    <ProfileButton onClick={showProfile}>Profile</ProfileButton>
                </ButtonsContainer>
            </MainContainer>
            {isModal ? <ModalContainer>
                <Modal>
                    <IconContainer>
                        <Icon src={bigHeartFull}/>
                    </IconContainer>
                    <TextContainer>
                        <TitleModal>{name} has been added to favorites</TitleModal>
                        <SubTitleModal> You can see the list of favorites on the dashboard page</SubTitleModal>
                    </TextContainer>
                    <ButtonContainer>
                        <Button clickHandler={doLike} text={'Done'}/>
                    </ButtonContainer>
                    <IconClose onClick={()=>setIsModal(false)} src={closeImg}/>
                </Modal>
            </ModalContainer> : null}
        </Container>
    )
}
const IconClose = styled.img`
  position: absolute;
  top: 18px;
  right: 18px;
  width: 24px;
  height: 24px;
  cursor: pointer;
`
const ButtonContainer = styled.div`
  margin-top: 32px;
  margin-bottom: 24px;
  width: 285px;
`
const SubTitleModal = styled.span`
  width: 195px;
  margin-top: 8px;
  font-size: 12px;
  line-height: 150%;
  text-align: center;
  color: #122434;
`
const TitleModal = styled.span`
  margin-top: 24px;
  width: 257px;
  font-size: 16px;
  font-weight: 600;
  line-height: 145%;
  text-align: center;
  color: #122434;
`
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Icon = styled.img`
  display: block;
  margin: 47px auto;
`
const IconContainer = styled.div`
  width: 100%;
  background: #F2F2F2;
  border-radius: 6px 6px 0 0;
`
const Modal = styled.div`
  position: relative;
  width: 333px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #fff;
  border-radius: 6px;
`
const ModalContainer = styled.div`
  z-index: 9999;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;

`
const Container = styled.article`
  position: relative;
  padding: 26px 32px;
  margin-bottom: 24px;
  margin-right: 24px;
  display: flex;
  max-width: 470px;
  width: 100%;
  background: #fff;
  @media (max-width: 1204px) {
    width: 340px;
    padding-bottom: 75px;
  }
  @media (max-width: 932px) {
    margin-right: 0;
  }
  @media (max-width: 460px) {
    padding-left: 10px;
    padding-right: 10px;
  }
`
const Ranking = styled.div`
  border: 1px solid #E8E8E8;
  border-radius: 6px;
`
const ContainerLogo = styled.div`
  padding: 26px 32px;
  border-bottom: 1px solid #E8E8E8;
`
const Logo = styled.img`
  @media (max-width: 1204px) {
    width: 80px;
    height: 80px;
  }
`
const ContainerInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Title = styled.span`
  font-size: 12px;
  margin-top: 8px;
  line-height: 150%;
  color: #737373;
`
const Subtitle = styled.span`
  margin-top: 2px;
  margin-bottom: 8px;
  font-size: 16px;
  font-weight: 600;
  line-height: 145%;
  color: #122434;
`
const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 16px;
  @media (max-width: 1204px) {
    max-width: 188px;
  }
`
const MainTitle = styled.span`
  font-size: 16px;
  font-weight: 600;
  line-height: 145%;
  color: #122434;
`
const MainAddress = styled.span`
  margin-top: 12px;
  font-size: 12px;
  line-height: 150%;
  color: #737373;
`
const MainPhone = styled.span`
  margin-top: 4px;
  font-size: 12px;
  line-height: 150%;
  color: #737373;
`
const InnerContainer = styled.div`
  display: flex;
  padding-bottom: 12px;
  border-bottom: 1px solid #E8E8E8;
  @media (max-width: 1204px) {
    flex-direction: column;
    border-bottom: none;
  }
`
const FocusContainer = styled.div`
  padding-right: 20px;
  @media (max-width: 1204px) {
    padding-right: 0;
  }
`
const FocusTitle = styled.span`
  display: block;
  margin-top: 28px;
  margin-bottom: 4px;
  font-size: 12px;
  line-height: 150%;
  color: #737373;
  @media (max-width: 1204px) {
    margin-top: 16px;
  }
`
const FocusInfo = styled.div`
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 12px;
  line-height: 150%;
  color: #122434;
  @media (max-width: 1204px) {
    display: flex;
    justify-content: space-between;
  }
`
const RevenueContainer = styled.div`
  margin-left: 20px;
  @media (max-width: 1204px) {
    margin-left: 0;
    display: flex;
    justify-content: space-between;
    padding-top: 16px;
    width: 100%;
  }
`
const RevenueTitle = styled.span`
  display: block;
  margin-top: 28px;
  margin-bottom: 4px;
  font-size: 12px;
  line-height: 150%;
  color: #737373;
  @media (max-width: 1204px) {
    margin-top: 0;
    margin-bottom: 0;
  }

`
const RevenuePrice = styled.span`
  font-weight: 600;
  font-size: 12px;
  line-height: 150%;
  color: #122434;
`
const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 24px;
  @media (max-width: 1204px) {
    position: absolute;
    bottom: 24px;
    left: 32px
  }
  @media (max-width: 458px) {
    left: 10px;
  }
`
const FavoriteButton = styled.img`
  margin-right: 8px;
  padding: 5px;
  border-radius: 6px;
  border: 1px solid #E8E8E8;
  cursor: pointer;

  &:hover {
    border: 1px solid #BFBFBF;
  }

  &:active {
    border: 1px solid #F05658;
  }

  @media (max-width: 1204px) {
    margin-right: 12px;
  }
`
const ProfileButton = styled.div`
  padding: 9px 96px;
  font-size: 12px;
  font-weight: 600;
  line-height: 150%;
  text-align: center;
  color: #122434;
  border: 1px solid #2BAEE0;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background: #EBF9FF;
    color: #2BAEE0;
  }

  &:active {
    background: #CAF0FF;
  }

  @media (max-width: 1204px) {
    padding: 9px 128px;
  }
  @media (max-width: 458px) {
    padding: 9px 126px;
  }

`
const BorderLine = styled.div`
  align-self: flex-end;
  width: 1px;
  height: 40px;
  background-color: #E8E8E8;
  @media (max-width: 1204px) {
    display: none;
  }
`
const Circle = styled.div`
  width: 4px;
  height: 4px;
  margin-left: 6px;
  margin-right: 6px;
  border-radius: 50%;
  background: #C4C4C4;
`