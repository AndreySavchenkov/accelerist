import React, {FC, useState} from "react";
import {SearchHeader} from "../Search/SearchHeader";
import styled from "styled-components";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {RootState} from "../../redux/store";
import {ProfilePanel} from "./ProfilePanel";
import {Company} from "./Company";
import {CompanyDescription} from "./CompanyDescription";


export const CompanyPage: FC = () => {

    const [isShowMenu, setShowMenu] = useState(false);
    const companies = useSelector((state: RootState) => state.companies?.companies)

    const params = useParams();

    const company = companies.find(item => item.id === params.id)
    console.log('company->', company)


    return (
        <>
            <SearchHeader isShowMenu={isShowMenu} setShowMenu={setShowMenu}/>
            <ProfilePanel/>
            <Container>
                <InnerContainer>
                        {company ?

                                <ProfileContainer>
                                    <Company name={company.name} primaryIndustry={company.primaryIndustry}/>
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
                                </ProfileContainer> : '***profile not found***'

                        }
                </InnerContainer>
            </Container>
        </>
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
  min-height: 100vh;
`
const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  width: 100%;
  background: #fff;
  margin-left: 60px;
`
const CompanyContainer = styled.div`
  max-width: 790px;
  width: 100%;
  border-right: 1px solid #EBEBEB;
  padding: 40px;
`