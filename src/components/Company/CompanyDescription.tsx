import React, {FC} from "react";
import styled from "styled-components";
import {formatNumber} from "../../helpers/functions";

type Props = {
    descriptionList: string
    revenue: string
    employeeCount:number
}

export const CompanyDescription: FC<Props> = ({descriptionList, revenue,employeeCount}) => {


    const revenueFormat = formatNumber(revenue);
    const employeeFormat = formatNumber(employeeCount)

    return (
        <Container>
            <Title>Business Description Products</Title>
            <Description>Description</Description>
            <Text>{descriptionList}</Text>
            <Description>Reported</Description>
            <ReportedContainer>
                <RevenueContainer>
                    <ReportedTitle>Revenue Reported</ReportedTitle>
                    <ReportedData>$ {revenueFormat}</ReportedData>
                </RevenueContainer>
                <EmploueContainer>
                    <ReportedTitle>Employees Reported</ReportedTitle>
                    <ReportedData>{employeeFormat}</ReportedData>
                </EmploueContainer>
            </ReportedContainer>
        </Container>
    )
}
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
const EmploueContainer = styled.div`
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