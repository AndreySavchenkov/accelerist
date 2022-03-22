import React, {FC, useState} from "react";
import {Header} from "../general/Header";
import styled from "styled-components";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {RootState} from "../../redux/store";
import {ProfilePanel} from "./ProfilePanel";
import {Company} from "./Company";
import {CompanyDescription} from "./CompanyDescription";
import {AsideMenu} from "./AsideMenu";


export const CompanyPage: FC = () => {

    const [isShowMenu, setShowMenu] = useState(false);
    const companies = useSelector((state: RootState) => state.companies?.companies)

    const params = useParams();

    const company = companies.find(item => item.id === params.id)


    return (
        <>
            <Header isShowMenu={isShowMenu} setShowMenu={setShowMenu}/>
            <ProfilePanel/>
            <Container>
                <InnerContainer>
                    {company ?

                        <ProfileContainer>
                            <Company name={company.name} primaryIndustry={company.primaryIndustry}/>
                            <Box>
                                <CompanyContainer>
                                    <CompanyDescription employeeCount={company.employeeCount}
                                                        country={company.country}
                                                        state={company.state}
                                                        city={company.city}
                                                        street={company.street}
                                                        revenue={company.revenue}
                                                        descriptionList={company.descriptionList}
                                                        website={company.website}
                                                        phone={company.phone}/>


                                </CompanyContainer>
                                <AsideMenu/>
                            </Box>
                        </ProfileContainer> : '***profile not found***'
                    }

                </InnerContainer>
            </Container>
        </>
    )
}

const Box = styled.div`
  display: flex;
  width: 100%;
`
const Container = styled.div`
  display: flex;
  background: #F9F9F9;
`
const InnerContainer = styled.div`
  display: flex;
  margin: 0 auto;
  width: 1440px;
  min-height: 100vh;
`
const ProfileContainer = styled.main`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  width: 100%;
  background: #fff;
  margin-left: 60px;
  margin-bottom: 50px;
`
const CompanyContainer = styled.div`
  max-width: 790px;
  width: 100%;
  border-right: 1px solid #EBEBEB;
  padding: 40px;
`