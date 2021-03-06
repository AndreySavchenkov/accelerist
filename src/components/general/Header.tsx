import React, { FC, memo } from 'react';

import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import {
  MainHeaderLogo,
  MainLittleHeaderLogo,
  UserIcon,
  MenuIcon,
  CloseIcon,
} from 'assets/svg';
import { EMPTY_STRING } from 'constance';
import { getUserEmail } from 'redux/selectors/selectors';

type Props = {
  isShowMenu: boolean;
  setShowMenu: (isShowMenu: boolean) => void;
};

export const Header: FC<Props> = memo(({ isShowMenu, setShowMenu }) => {
  const email = useSelector(getUserEmail);

  const toggleShowMenu = (): void => setShowMenu(!isShowMenu);

  return (
    <Container>
      <InnerContainer>
        <LogoAndMenu>
          <Logo>
            <Link to="/">
              <MainHeaderLogo />
            </Link>
          </Logo>
          <LogoSmall>
            <Link to="/">
              <MainLittleHeaderLogo />
            </Link>
          </LogoSmall>
          <Nav>
            <CustomLink to="/dashboard">Dashboard</CustomLink>
            {/* <CustomLink to={''}>Audience</CustomLink> */}
            {/* <CustomLink to={''}>Pricing</CustomLink> */}
            <CustomLink to="/prospects">Prospecting</CustomLink>
            {/* <CustomLink to={''}>ROI</CustomLink> */}
            {/* <CustomLink to={''}>Upgrade Membership</CustomLink> */}
          </Nav>
        </LogoAndMenu>
        <Profile>
          <ProfileLogoContainer>
            <UserIcon />
          </ProfileLogoContainer>
          <ProfileText>{email}</ProfileText>
        </Profile>
        <MenuBurgerIcon onClick={toggleShowMenu}>
          <MenuIcon />
        </MenuBurgerIcon>
        {isShowMenu ? (
          <BackgroundMenu>
            <MenuBurgerContainer>
              <CloseButton onClick={toggleShowMenu}>
                <CloseIcon />
              </CloseButton>
              <MenuBurgerNav>
                <CustomLink to="/dashboard">Dashboard</CustomLink>
                {/* <CustomLink to={''}>Audience</CustomLink> */}
                {/* <CustomLink to={''}>Pricing</CustomLink> */}
                <CustomLink to="/prospects">Prospecting</CustomLink>
                {/* <CustomLink to={''}>ROI</CustomLink> */}
                {/* <CustomLink to={''}>Upgrade Membership</CustomLink> */}
              </MenuBurgerNav>
              <MenuBurgerProfile>
                <ProfileLogoContainer>
                  <UserIcon />
                </ProfileLogoContainer>
                <ProfileText>{email}</ProfileText>
              </MenuBurgerProfile>
            </MenuBurgerContainer>
          </BackgroundMenu>
        ) : (
          EMPTY_STRING
        )}
      </InnerContainer>
    </Container>
  );
});

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 80px;
  background: #d5f3ff;
`;
const InnerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  width: 1440px;
  @media (max-width: 1330px) {
    padding: 0 5px;
  }
`;
const LogoAndMenu = styled.div`
  display: flex;
  align-items: center;
`;
const Logo = styled.div`
  margin-left: 60px;
  @media (max-width: 450px) {
    display: none;
  }
`;
const LogoSmall = styled.div`
  margin-left: 16px;
  @media (min-width: 450px) {
    display: none;
  }
`;
const Nav = styled.nav`
  margin-left: 50px;
  @media (max-width: 1040px) {
    display: none;
  }
`;
const CustomLink = styled(Link)`
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

  &:active,
  &:hover {
    color: #000;
    border-bottom: 1px solid #000;
  }
`;
const Profile = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  @media (max-width: 1040px) {
    display: none;
  }
`;
const ProfileLogoContainer = styled.div`
  background-color: #fff;
  margin-right: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 6px;
`;
const ProfileText = styled.span`
  font-size: 12px;
  margin-right: 60px;
  line-height: 150%;
  color: #122434;
`;
const MenuBurgerIcon = styled.div`
  margin-right: 28px;
  cursor: pointer;
  @media (min-width: 1040px) {
    display: none;
  }
  @media (max-width: 650px) {
    margin-right: 16px;
  }
`;
const MenuBurgerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  width: 330px;
  top: 0;
  right: 0;
  z-index: 999;
  height: 100vh;
  background: #fff;
  @media (max-width: 440px) {
    width: 100%;
  }
`;
const CloseButton = styled.div`
  position: absolute;
  top: 31px;
  right: 38px;
  text-align: right;
  width: 12px;
  height: 12px;
  cursor: pointer;
`;
const MenuBurgerNav = styled.nav`
  margin-top: 130px;
  margin-left: 40px;
  display: flex;
  flex-direction: column;
`;
const MenuBurgerProfile = styled.div`
  display: flex;
  margin-bottom: 32px;
  margin-left: 40px;
  align-items: center;
  cursor: pointer;
`;
const BackgroundMenu = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
`;
