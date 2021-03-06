import React, { FC, useState } from 'react';

import Chart from 'react-apexcharts';
import styled from 'styled-components';

export const Donut: FC = () => {
  const [isActive, setIsActive] = useState('Gender');

  const changeActiveElement = (element: string): void => {
    setIsActive(element);
  };

  const getCurrentState = (): any => {
    if (isActive === 'Gender') {
      return {
        options: {
          series: [35, 65],
          labels: ['Male', 'Female'],
          colors: ['#54A4FA', '#1D7CF7'],
          legend: {
            show: false,
          },
        },
      };
    }
    if (isActive === 'Income') {
      return {
        options: {
          series: [45, 55],
          labels: ['Male', 'Female'],
          colors: ['#54A4FA', '#1D7CF7'],
          legend: {
            show: false,
          },
        },
      };
    }
    if (isActive === 'Age') {
      return {
        options: {
          series: [15, 35, 20, 15, 5],
          labels: ['18-25', '26-35', '36-45', '46-55', '55+'],
          colors: ['#0E47B1', '#112764', '#09318F', '#1560D4', '#1D7CF7'],
          legend: {
            show: false,
          },
        },
      };
    }
    return {
      options: {
        series: [25, 25, 30, 20],
        labels: ['Asia', 'India', 'America', 'Europe'],
        colors: ['#0E47B1', '#112764', '#09318F', '#1560D4'],
        legend: {
          show: false,
        },
      },
    };
  };

  return (
    <>
      <Main>
        <Header>
          {isActive === 'Gender' ? (
            <HeaderItemsActive>Gender</HeaderItemsActive>
          ) : (
            <HeaderItems onClick={() => changeActiveElement('Gender')}>
              Gender
            </HeaderItems>
          )}
          {isActive === 'Income' ? (
            <HeaderItemsActive>Income</HeaderItemsActive>
          ) : (
            <HeaderItems onClick={() => changeActiveElement('Income')}>
              Income
            </HeaderItems>
          )}
          {isActive === 'Age' ? (
            <HeaderItemsActive>Age</HeaderItemsActive>
          ) : (
            <HeaderItems onClick={() => changeActiveElement('Age')}>Age</HeaderItems>
          )}
          {isActive === 'Ethnicity' ? (
            <HeaderItemsActive>Ethnicity</HeaderItemsActive>
          ) : (
            <HeaderItems onClick={() => changeActiveElement('Ethnicity')}>
              Ethnicity
            </HeaderItems>
          )}
        </Header>

        <div className="donut" style={{ margin: '30px 0' }}>
          <Chart
            options={getCurrentState()?.options}
            series={getCurrentState()?.options.series}
            type="donut"
            width="400px"
          />
        </div>
      </Main>
      <Footer>
        {getCurrentState()?.options.labels.map((item: any, index: number) => (
          <FooterItem
            key={index}
            style={{ backgroundColor: `${getCurrentState()?.options.colors[index]}` }}
          >
            <ItemText>{getCurrentState()?.options.labels[index]}</ItemText>
            <ItemNumber>{getCurrentState()?.options.series[index]}%</ItemNumber>
          </FooterItem>
        ))}
      </Footer>
    </>
  );
};

const ItemNumber = styled.span`
  font-weight: 600;
  font-size: 12px;
  color: #ffffff;
`;
const ItemText = styled.span`
  margin-right: 8px;
  font-weight: 400;
  font-size: 12px;
  color: #ffffff;
`;
const FooterItem = styled.div`
  margin-right: 6px;
  padding: 6px 20px;
  border-radius: 19px;
`;
const Footer = styled.footer`
  display: flex;
  background: #f7fcff;
  border-radius: 0px 0px 6px 6px;
  border: 1px solid #e8e8e8;
  padding: 20px 40px;
`;
const Main = styled.main`
  margin-top: 16px;
  padding-top: 32px;
  padding-left: 40px;
  padding-right: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: 1px solid #e8e8e8;
  border-radius: 6px 6px 0px 0px;
`;
const Header = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
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
    color: #2baee0;
    border-bottom: 4px solid #2baee0;
    padding-bottom: 9px;
  }
`;
const HeaderItemsActive = styled.p`
  margin: 0;
  text-align: center;
  width: 100%;
  border-bottom: 4px solid #2baee0;
  font-size: 12px;
  line-height: 150%;
  color: #2baee0;
  cursor: pointer;
  padding-bottom: 9px;
`;
