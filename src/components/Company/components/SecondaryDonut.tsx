import React, {useState} from "react";
import Chart from "react-apexcharts";
import styled from "styled-components";

export const SecondaryDonut = () => {

    const [isActive, setIsActive] = useState('Nonprofits');

    const changeActiveElement = (element: string) => {
        setIsActive(element)
    }

    const getCurrentState = () => {
        if (isActive === 'Affinities') {
            return {
                options: {
                    series: [65, 25,10],
                    labels: ['affinit 1', 'affinit 2', 'affinit 3'],
                    colors: ['#54A4FA', '#1D7CF7', '#1560D4'],
                    fontColors:['#fff','#fff', '#fff'],
                    legend: {
                        show: false
                    }
                }
            }
        }
        if (isActive === 'Nonprofits') {
            return {
                options: {
                    series: [30, 15,12,10,8,7,6,5,3,3],
                    labels: ['Peta', 'Pastafits','Morris Animal','Animal Quality','Oregon Humane Society','Baltimore Humane Society','Austin Pets Alive','The Climate Project','Creative Commons','Other'],
                    colors: ['#112764', '#09318F','#0E47B1','#1560D4','#1D7CF7','#54A4FA','#76BCFC','#A4D7FE','#D1EDFE','#EAEAEA'],
                    fontColors:['#fff','#fff','#fff','#fff','#fff','#fff','#fff','#000','#000','#000'],
                    legend: {
                        show: false
                    }
                }
            }
        }
        if (isActive === 'Purchasing') {
            return {
                options: {
                    series: [15, 35, 20, 15, 5],
                    labels: ['item1', 'item2', 'item3', 'item4', 'item5'],
                    colors: ['#0E47B1', '#112764', '#09318F', '#1560D4', '#1D7CF7'],
                    fontColors:['#fff','#fff','#fff','#fff','#fff'],
                    legend: {
                        show: false
                    }
                }
            }
        }
        if (isActive === 'Brands') {
            return {
                options: {
                    series: [25, 25, 30, 20],
                    labels: ['item1', 'item2', 'item3', 'item4'],
                    colors: ['#0E47B1', '#112764', '#09318F', '#1560D4'],
                    fontColors:['#fff','#fff','#fff','#fff'],
                    legend: {
                        show: false
                    }
                }
            }
        }
        if (isActive === 'Interests') {
            return {
                options: {
                    series: [35, 25, 20, 30],
                    labels: ['item1', 'item2', 'item3', 'item4'],
                    colors: ['#0E47B1', '#112764', '#09318F', '#1560D4'],
                    fontColors:['#fff','#fff','#fff','#fff'],
                    legend: {
                        show: false
                    }
                }
            }
        }
    }

    return (
        <>
            <Main>
                <Header>
                    {(isActive === 'Affinities') ? <HeaderItemsAcive>Affinities</HeaderItemsAcive> :
                        <HeaderItems onClick={() => changeActiveElement('Affinities')}>Affinities</HeaderItems>}
                    {(isActive === 'Nonprofits') ? <HeaderItemsAcive>Nonprofits</HeaderItemsAcive> :
                        <HeaderItems onClick={() => changeActiveElement('Nonprofits')}>Nonprofits</HeaderItems>}
                    {(isActive === 'Purchasing') ? <HeaderItemsAcive>Purchasing</HeaderItemsAcive> :
                        <HeaderItems onClick={() => changeActiveElement('Purchasing')}>Purchasing</HeaderItems>}
                    {(isActive === 'Brands') ? <HeaderItemsAcive>Brands</HeaderItemsAcive> :
                        <HeaderItems onClick={() => changeActiveElement('Brands')}>Brands</HeaderItems>}
                    {(isActive === 'Interests') ? <HeaderItemsAcive>Interests</HeaderItemsAcive> :
                        <HeaderItems onClick={() => changeActiveElement('Interests')}>Interests</HeaderItems>}
                </Header>

                <div className="donut" style={{margin: '30px 0'}}>
                    <Chart options={getCurrentState()?.options}
                           series={getCurrentState()?.options.series} type="donut"
                           width="400px"/>
                </div>
            </Main>
            <Footer>
                {
                    getCurrentState()?.options.labels.map((item, index) =>
                        <FooterItem key={index}
                                    style={{backgroundColor: `${getCurrentState()?.options.colors[index]}`, color: `${getCurrentState()?.options?.fontColors[index]}`}}>
                            <ItemText>{getCurrentState()?.options.labels[index]}</ItemText>
                            <ItemNumber>{getCurrentState()?.options.series[index]}%</ItemNumber>
                        </FooterItem>)
                }
            </Footer>
        </>
    )
}

const ItemNumber = styled.span`
  font-weight: 600;
  font-size: 12px;
`
const ItemText = styled.span`
  margin-right: 8px;
  font-weight: 400;
  font-size: 12px;
`
const FooterItem = styled.div`
  margin-right: 6px;
  margin-bottom: 8px;
  padding: 6px 20px;
  border-radius: 19px;
`
const Footer = styled.footer`
  display: flex;
  flex-wrap: wrap;
  background: #F7FCFF;
  border-radius: 0px 0px 6px 6px;
  border: 1px solid #E8E8E8;
  padding: 20px 40px;
`
const Main = styled.main`
  margin-top: 16px;
  padding-top: 32px;
  padding-left: 40px;
  padding-right: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: 1px solid #E8E8E8;
  border-radius: 6px 6px 0px 0px;
`
const Header = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
`
const HeaderItems = styled.p`
  margin: 0;
  padding-bottom: 12px;
  text-align: center;
  width: 100%;
  border-bottom: 1px solid #737373;
  font-size: 12px;
  line-height: 150%;
  color: #737373;
  cursor: pointer;

  &:hover {
    color: #2BAEE0;
    border-bottom: 4px solid #2BAEE0;
    padding-bottom: 9px;
  }
`
const HeaderItemsAcive = styled.p`
  margin: 0;
  text-align: center;
  width: 100%;
  border-bottom: 4px solid #2BAEE0;
  font-size: 12px;
  line-height: 150%;
  color: #2BAEE0;
  cursor: pointer;
  padding-bottom: 9px;
`
