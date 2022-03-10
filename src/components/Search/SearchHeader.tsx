import React, {useState} from "react";
import styled from "styled-components";
import bigLogo from "assets/img/searchBigLogo.png";
import smallLogo from "assets/img/searchSmallLogo.png"
import profileLog from "assets/img/profileLogo.png"
import menuIcon from "assets/img/menu.png"
import closeButton from "assets/img/closeButton.png"

export const SearchHeader = () => {

    const [isShowMenu, setShowMenu] = useState(false);

    const showMenu = () => {
        setShowMenu(!isShowMenu);
    }

    return (
        <Container>
            <InnerContainer>
                <LogoAndMenu>
                    <Logo src={bigLogo}/>
                    <LogoSmall src={smallLogo}/>
                    <Nav>
                        <Link href="#">Dashboard</Link>
                        <Link href="#">Audience</Link>
                        <Link href="#">Pricing</Link>
                        <Link href="#">Prospecting</Link>
                        <Link href="#">ROI</Link>
                        <Link href="#">Upgrade Membership</Link>
                    </Nav>
                </LogoAndMenu>
                <Profile>
                    <ProfileLogoContainer>
                        <ProfileLogo src={profileLog}/>
                    </ProfileLogoContainer>
                    <ProfileText>United Nations</ProfileText>
                </Profile>
                <MenuBurgerIcon src={menuIcon} onClick={showMenu}/>
                {
                    isShowMenu ?
                        <BackgroundMenu>
                            <MenuBurgerContainer>
                                <CloseButton src={closeButton} onClick={showMenu}/>
                                <MenuBurgerNav>
                                    <Link href="#">Dashboard</Link>
                                    <Link href="#">Audience</Link>
                                    <Link href="#">Pricing</Link>
                                    <Link href="#">Prospecting</Link>
                                    <Link href="#">ROI</Link>
                                    <Link href="#">Upgrade Membership</Link>
                                </MenuBurgerNav>
                                <MenuBurgerProfile>
                                    <ProfileLogoContainer>
                                        <ProfileLogo src={profileLog}/>
                                    </ProfileLogoContainer>
                                    <ProfileText>United Nations</ProfileText>
                                </MenuBurgerProfile>
                            </MenuBurgerContainer>
                        </BackgroundMenu> : ''
                }

            </InnerContainer>
        </Container>
    )
}

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 80px;
  background: #D5F3FF;
`
const InnerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  width: 1440px;
  @media (max-width: 1330px) {
    padding: 0 5px;
  }
`
const LogoAndMenu = styled.div`
  display: flex;
  align-items: center;
`
const Logo = styled.img`
  margin-left: 60px;
  @media (max-width: 450px) {
    display: none;
  }
`
const LogoSmall = styled.img`
  margin-left: 16px;
  @media (min-width: 450px) {
    display: none;
  }
`
const Nav = styled.nav`
  margin-left: 50px;
  @media (max-width: 1040px) {
    display: none;
  }

`
const Link = styled.a`
  margin-right: 28px;
  font-weight: 400;
  text-decoration: none;
  font-size: 12px;
  line-height: 150%;
  color: #122434;
  @media (max-width: 1040px) {
    margin-bottom: 32px;
    font-size: 16px;
    line-height: 155%;
  }

  &:active, &:hover {
    color: #000;
  }
`
const Profile = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  @media (max-width: 1040px) {
    display: none;
  }
`
const ProfileLogoContainer = styled.div`
  background-color: #fff;
  margin-right: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 6px;
`
const ProfileLogo = styled.img`

`
const ProfileText = styled.span`
  font-size: 12px;
  margin-right: 60px;
  line-height: 150%;
  color: #122434;
`
const MenuBurgerIcon = styled.img`
  margin-right: 28px;
  cursor: pointer;
  @media (min-width: 1040px) {
    display: none;
  }
  @media (max-width: 650px) {
    margin-right: 16px;
  }
`
const MenuBurgerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  width: 330px;
  top: 0;
  right: 0;
  z-index: 10;
  height: 100vh;
  background: #fff;
  @media (max-width: 440px) {
    width: 100%;
  }
`
const CloseButton = styled.img`
  position: absolute;
  top: 31px;
  right: 38px;
  text-align: right;
  width: 12px;
  height: 12px;
  cursor: pointer;
`
const MenuBurgerNav = styled.nav`
  margin-top: 130px;
  margin-left: 40px;
  display: flex;
  flex-direction: column;
`
const MenuBurgerProfile = styled.div`
  display: flex;
  margin-bottom: 32px;
  margin-left: 40px;
  align-items: center;
  cursor: pointer;
`
const BackgroundMenu = styled.div`
    position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(0,0,0,.5);
`