import React, {FC, memo} from "react";
import styled from "styled-components";
import {formatNumber} from "helpers/functions";
import {Donut, SecondaryDonut, Structure} from "components";
import {GlobeIcon, PhoneIcon, MapIcon, Goal1, Goal2, Goal5, Goal4, Goal3} from "assets/svg";
import {CompanyT} from "redux/companies/companiesSlice";

type Props = {
    company: CompanyT
}

export const CompanyDescription: FC<Props> = memo(({company}) => {

    const {
        city,
        state,
        phone,
        street,
        revenue,
        website,
        country,
        employeeCount,
        descriptionList,
    } = company

    const revenueFormat = formatNumber(revenue);
    const employeeFormat = formatNumber(employeeCount);
    const link = `https://${website}`

    return (
        <Container>
            <Title>Business Description Products</Title>
            <Description>Description</Description>
            <Text>{descriptionList}</Text>
            <Structure/>
            <Description>Reported</Description>
            <ReportedContainer>
                <RevenueContainer>
                    <ReportedTitle>Revenue Reported</ReportedTitle>
                    <ReportedData>$ {revenueFormat}</ReportedData>
                </RevenueContainer>
                <EmploueeContainer>
                    <ReportedTitle>Employees Reported</ReportedTitle>
                    <ReportedData>{employeeFormat}</ReportedData>
                </EmploueeContainer>
            </ReportedContainer>
            <Description>Company Ticker</Description>
            <TickersItems>
                <TickerItem>
                    <TickerTitle>WMT</TickerTitle>
                    <TickerSubtitle>London Stock Exchange</TickerSubtitle>
                </TickerItem>
                <TickerItem>
                    <TickerTitle>WMR</TickerTitle>
                    <TickerSubtitle>Nasdaq</TickerSubtitle>
                </TickerItem>
                <TickerItem>
                    <TickerTitle>WLMT</TickerTitle>
                    <TickerSubtitle>Stock Exchange of Singapore</TickerSubtitle>
                </TickerItem>
            </TickersItems>
            <Description>Contacts</Description>
            <ContactsContainer>
                <Contact>
                    <NameContainer>
                        <Name>Ronald Richards</Name>
                        <Subtitle>Human Resources</Subtitle>
                    </NameContainer>
                    <Phone>(270) 555-0117</Phone>
                    <Phone>ronald23@gmail.com</Phone>
                    <ButtonContact>Pitch</ButtonContact>
                </Contact>
                <ContactLine> </ContactLine>
                <Contact>
                    <NameContainer>
                        <Name>Ronald Richards</Name>
                        <Subtitle>Marketing</Subtitle>
                    </NameContainer>
                    <Phone>(270) 555-0117</Phone>
                    <Phone>ronald23@gmail.com</Phone>
                    <ButtonContact>Pitch</ButtonContact>
                </Contact>
                <ContactLine> </ContactLine>
                <Contact>
                    <NameContainer>
                        <Name>Ronald Richards</Name>
                        <Subtitle>Social Impact</Subtitle>
                    </NameContainer>
                    <Phone>(270) 555-0117</Phone>
                    <Phone>ronald23@gmail.com</Phone>
                    <ButtonContact>Pitch</ButtonContact>
                </Contact>
            </ContactsContainer>
            <Description>Company Contacts</Description>
            <CompanyContactsContainer>
                <CompanyContactsInner>
                    <CompanyContactsItem>
                        <GlobeIcon/>
                        <ContactsItemText>
                            {website}
                        </ContactsItemText>
                    </CompanyContactsItem>
                    <CompanyContactsItem style={{marginLeft: '25px'}}>
                        <PhoneIcon/>
                        <ContactsItemText>
                            {phone}
                        </ContactsItemText>
                    </CompanyContactsItem>
                </CompanyContactsInner>
                <CompanyContactsItem style={{marginTop: '16px'}}>
                    <MapIcon/>
                    <ContactsItemText>
                        {country} {state} {city} {street}
                    </ContactsItemText>
                </CompanyContactsItem>
            </CompanyContactsContainer>
            <Title style={{marginTop: '60px', marginBottom: '24px'}}>Social Impact</Title>
            <InvestmentAndFocusContainer>
                <InvestmentAndFocusItem>
                    <Description>Type of Investment</Description>
                    <InnerContainer>
                        <ListItem>
                            <Circle> </Circle> Grant
                        </ListItem>
                        <ListItem>
                            <Circle> </Circle> Employee Engagement
                        </ListItem>
                        <ListItem>
                            <Circle> </Circle> Cause Marketing
                        </ListItem>
                        <ListItem>
                            <Circle> </Circle> Sponsorship
                        </ListItem>
                    </InnerContainer>
                </InvestmentAndFocusItem>
                <InvestmentAndFocusItem>
                    <Description>CRS Focus</Description>
                    <InnerContainer>
                        <ListItem>
                            <Circle> </Circle> Environment
                        </ListItem>
                        <ListItem>
                            <Circle> </Circle> Greening cities
                        </ListItem>
                        <ListItem>
                            <Circle> </Circle> Separate garbage collection
                        </ListItem>
                    </InnerContainer>
                </InvestmentAndFocusItem>
            </InvestmentAndFocusContainer>
            <Description>SDG Goal Alignment</Description>
            <GoalContainer>
                <Goal1/>
                <Goal2/>
                <Goal3/>
                <Goal4/>
                <Goal5/>
            </GoalContainer>
            <Description>Contributions</Description>
            <ContributionsContainer>
                <ContributionsInnerContainer style={{borderBottom: '1px solid #E8E8E8'}}>
                    <RevenueContainer>
                        <ReportedTitle>Cash Contributions</ReportedTitle>
                        <ReportedData>$ {revenueFormat}</ReportedData>
                    </RevenueContainer>
                    <EmploueeContainer>
                        <ReportedTitle>Employee Contributions</ReportedTitle>
                        <ReportedData>$ {employeeFormat}</ReportedData>
                    </EmploueeContainer>
                </ContributionsInnerContainer>
                <ContributionsInnerContainer>
                    <RevenueContainer>
                        <ReportedTitle>Total Social Contributions</ReportedTitle>
                        <ReportedData>$ {revenueFormat}</ReportedData>
                    </RevenueContainer>
                    <EmploueeContainer>
                        <ReportedTitle>In-Kind Contributions</ReportedTitle>
                        <ReportedData>$ {employeeFormat}</ReportedData>
                    </EmploueeContainer>
                </ContributionsInnerContainer>
            </ContributionsContainer>
            <Description>Charitable partners</Description>
            <PartnersContainer>
                <InnerPartnersContainer>
                    <ListItem>
                        <Circle> </Circle> Grant
                    </ListItem>
                    <ListItem>
                        <Circle> </Circle> Employee Engagement
                    </ListItem>
                    <ListItem>
                        <Circle> </Circle> Cause Marketing
                    </ListItem>
                    <ListItem>
                        <Circle> </Circle> Sponsorship
                    </ListItem>
                </InnerPartnersContainer>
                <InnerPartnersContainer>
                    <ListItem>
                        <Circle> </Circle> Environment
                    </ListItem>
                    <ListItem>
                        <Circle> </Circle> Greening cities
                    </ListItem>
                    <ListItem>
                        <Circle> </Circle> Separate garbage collection
                    </ListItem>
                </InnerPartnersContainer>
            </PartnersContainer>
            <Description>Partnership and Program Details</Description>
            <LinkToCompany href={link} target="_blank">Go to the company's website</LinkToCompany>
            <Title style={{marginTop: '60px'}}>Customer Demographics</Title>
            <DemographicsText>
                Consumer data is representative of this brand’s consumers that follow them on social media. The rankings
                and lists represent the highest indexing (or most above average) attributes and preferences of this
                dataset.
            </DemographicsText>
            <Description style={{marginTop: '32px'}}>Primary Information</Description>
            <Donut/>
            <Description style={{marginTop: '32px'}}>Secondary Information</Description>
            <SecondaryDonut/>
        </Container>
    )
})

const DemographicsText = styled.p`
  font-size: 16px;
  line-height: 155%;
  color: #122434;
`
const LinkToCompany = styled.a`
  margin-top: 16px;
  font-size: 16px;
  line-height: 155%;
  text-decoration-line: underline;
  color: #2BAEE0;
`
const InnerPartnersContainer = styled.div`
  padding: 12px 24px 24px;
  width: 48%;
`
const PartnersContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
  border: 1px solid #E8E8E8;
  border-radius: 6px;
`
const ContributionsInnerContainer = styled.div`
  display: flex;
`
const ContributionsContainer = styled.div`
  margin-top: 16px;
  border: 1px solid #E8E8E8;
  border-radius: 6px;
`
const GoalContainer = styled.div`
  margin-top: 16px;
  display: flex;
  justify-content: space-between;
`
const Circle = styled.div`
  margin-right: 8px;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #2BAEE0;
`
const ListItem = styled.div`
  margin-top: 12px;
  display: flex;
  align-items: center;
  font-size: 16px;
  line-height: 155%;
  color: #122434;
`
const InnerContainer = styled.div`
  height: 100%;
  margin-top: 16px;
  padding: 12px 24px 24px;
  border: 1px solid #E8E8E8;
  border-radius: 6px;
`
const InvestmentAndFocusItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 48%;
`
const InvestmentAndFocusContainer = styled.div`
  display: flex;
  justify-content: space-between;
`
const ContactsItemText = styled.span`
  margin-left: 10px;
  font-size: 12px;
  line-height: 150%;
  color: #122434;
`
const CompanyContactsItem = styled.div`
  display: flex;
  align-items: center;
`
const CompanyContactsInner = styled.div`
  display: flex;
`
const CompanyContactsContainer = styled.div`
  margin-top: 16px;
  padding: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
  border: 1px solid #E8E8E8;
  border-radius: 6px;
`
const ContactLine = styled.div`
  margin-top: 16px;
  width: 96%;
  height: 1px;
  background: #EBEBEB;
`
const ButtonContact = styled.button`
  padding: 5px 33px;
  font-size: 12px;
  color: #122434;
  border: 1px solid #2BAEE0;
  border-radius: 6px;
  background: #fff;
  cursor: pointer;

  &:hover {
    background: #EBF9FF;
    color: #2BAEE0;
  }

  &:active {
    background: #CAF0FF;
  }
`
const Phone = styled.span`
  font-size: 12px;
  line-height: 150%;
  color: #122434;
`
const Subtitle = styled.span`
  margin-top: 4px;
  font-size: 12px;
  line-height: 150%;
  color: #737373;
`
const Name = styled.span`
  font-weight: 600;
  font-size: 12px;
  line-height: 150%;
  text-align: center;
  color: #122434;
`
const NameContainer = styled.div`
  display: flex;
  flex-direction: column;
`
const Contact = styled.div`
  margin-top: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const ContactsContainer = styled.div`
  display: flex;
  flex-direction: column;
`
const Container = styled.div`
  display: flex;
  flex-direction: column;
`
const Title = styled.span`
  font-size: 24px;
  line-height: 148%;
  font-weight: 600;
  color: #122434;
`
const Description = styled.span`
  margin-top: 24px;
  font-size: 16px;
  line-height: 145%;
  font-weight: 600;
  color: #122434;
`
const Text = styled.p`
  margin: 16px 0 0;
  font-size: 16px;
  font-weight: 500;
  line-height: 155%;
  color: #122434;
`
const ReportedContainer = styled.div`
  display: flex;
  margin-top: 16px;
  border: 1px solid #E8E8E8;
  border-radius: 6px;
`
const RevenueContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  border-right: 1px solid #EBEBEB;
`
const EmploueeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
`
const ReportedTitle = styled.span`
  margin-top: 16px;
  font-size: 12px;
  line-height: 150%;
  color: #737373;
`
const ReportedData = styled.span`
  margin-top: 4px;
  font-size: 16px;
  font-weight: 600;
  line-height: 145%;
  color: #122434;
  margin-bottom: 16px;
`
const TickersItems = styled.div`
  margin-top: 16px;
  display: flex;
  justify-content: space-between;
  width: 100%;
`
const TickerItem = styled.div`
  padding: 26px;
  display: flex;
  flex-direction: column;
  border: 1px solid #E8E8E8;
  border-radius: 6px;
  width: 25%;
`
const TickerTitle = styled.span`
  font-weight: 600;
  font-size: 24px;
  line-height: 148%;
  color: #122434;
`
const TickerSubtitle = styled.span`
  font-size: 12px;
  line-height: 150%;
  color: #737373;
`

