import React from "react";
import styled from "styled-components";
import bigLogo from "assets/img/searchBigLogo.png";
import profileLog from "assets/img/profileLogo.png"


export const SearchHeader = () => {
    return(
        <Container>
            <InnerContainer>
                <LogoAndMenu>
                    <Logo src={bigLogo}/>
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
  width: 1320px;
`
const LogoAndMenu = styled.div`

`
const Logo = styled.img`

`
const Nav = styled.nav`

`
const Link = styled.a`

`
const Profile = styled.div`

`
const ProfileLogoContainer = styled.div`

`
const ProfileLogo = styled.img`

`
const ProfileText = styled.span`

`