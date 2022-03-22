import React, {FC, useEffect, useState} from "react";
import {Header} from "components/general/Header";
import styled from "styled-components";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "redux/store";
import {ProfilePanel} from "components/Company/components/ProfilePanel";
import {Company} from "components/Company/components/Company";
import {CompanyDescription} from "components/Company/components/CompanyDescription";
import {AsideMenu} from "components/Company/components/AsideMenu";
import {getCompanyByIdAction} from "redux/companies/companiesSaga";


export const CompanyPage: FC = () => {
    const [isShowMenu, setShowMenu] = useState(false);
    const dispatch = useDispatch();
    const params = useParams();

    useEffect(() => {
        //@ts-ignore
        dispatch(getCompanyByIdAction(params.id))
    },[])

    const company = useSelector((state: RootState) => state.companies?.companyById)


    return (
        <>
            <Header isShowMenu={isShowMenu} setShowMenu={setShowMenu}/>
            <ProfilePanel/>
            <Container>
                <InnerContainer>
                    {company ?

                        <ProfileContainer>
                            <Company name={company.name} primaryIndustry={company.primaryIndustry}  like={company.like}/>
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