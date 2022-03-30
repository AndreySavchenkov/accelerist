import React, { FC, useState } from 'react';

import { Box, Slider } from '@mui/material';
import { Field, Form } from 'react-final-form';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { marksAge, primaryIndustryData, revenueMarks } from './data/data';

import { AutocompleteField } from 'components';
import { ToggleContainer, ToggleItem } from 'components/Login/containers/main/MainForm';
import { useGenderToggle } from 'hooks/useGenderToggle';

export const Filter: FC = () => {
  const [isAdvanced, setAdvanced] = useState(true);
  const [isCustomize, setCustomize] = useState(false);

  const [isSingle, setIsSingle] = useState(true);
  const [isMarried, setIsMarried] = useState(false);

  const [industry, setIndustry] = useState();
  const [location, setLocation] = useState();
  const [scope, setScope] = useState();
  const [goals, setGoals] = useState();
  const [focus, setFocus] = useState();
  const [contributions, setContributions] = useState();
  const [household, setHousehold] = useState();
  const [ethnicity, setEthnicity] = useState();

  const [age, setAge] = React.useState<number[]>([30, 45]);
  const [value, setValue] = React.useState<number[]>([10000000, 75000000]);

  const { isMale, isFemale, isBoth, onGenderClick, showGenderResult } = useGenderToggle();

  const onRevenueChange = (event: Event, newValue: number | number[]): void => {
    setValue(newValue as number[]);
  };

  const onAgeChange = (event: Event, newValue: number | number[]): void => {
    setAge(newValue as number[]);
  };

  const onToggleItemClick = (): void => {
    setAdvanced(!isAdvanced);
    setCustomize(!isCustomize);
  };

  const onRelationsClick = (): void => {
    setIsSingle(!isSingle);
    setIsMarried(!isMarried);
  };

  const onSubmit = (values: any): void => {
    console.log('Form values ->', values);
    console.log('Industry ->', industry);
    console.log('Revenue ->', value);
    console.log('Relations ->', isSingle ? 'single' : 'married');
    console.log('Gender ->', showGenderResult());
    console.log('Location ->', location);
    console.log('Scope ->', scope);
    console.log('Goals ->', goals);
    console.log('Focus ->', focus);
    console.log('Contributions ->', contributions);
    console.log('Household ->', household);
    console.log('Ethnicity ->', ethnicity);
    console.log('Age ->', age);
  };

  return (
    <Container>
      <Title>Filters</Title>
      <ToggleContainer>
        <ToggleItem onClick={onToggleItemClick} isToggle={isAdvanced}>
          Advanced
        </ToggleItem>
        <ToggleItem onClick={onToggleItemClick} isToggle={isCustomize}>
          Customize
        </ToggleItem>
      </ToggleContainer>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit }) => (
          <MainForm onSubmit={handleSubmit}>
            <CompanyTitle>Company</CompanyTitle>
            <CompanyContainer>
              <InnerContainer>
                <AutocompleteField
                  name="industry"
                  label="Industry"
                  localValue={industry}
                  data={primaryIndustryData}
                  setLocalValue={setIndustry}
                />

                <AutocompleteField
                  name="location"
                  localValue={location}
                  data={primaryIndustryData}
                  setLocalValue={setLocation}
                  label="Geographic Location"
                />
              </InnerContainer>
              <InnerContainer>
                <AutocompleteField
                  name="scope"
                  label="Scope"
                  localValue={scope}
                  setLocalValue={setScope}
                  data={primaryIndustryData}
                />

                <AutocompleteField
                  name="goals"
                  label="SDG Goals"
                  localValue={goals}
                  setLocalValue={setGoals}
                  data={primaryIndustryData}
                />
              </InnerContainer>
              <InnerContainer>
                <AutocompleteField
                  name="focus"
                  label="CDR Focus"
                  localValue={focus}
                  setLocalValue={setFocus}
                  data={primaryIndustryData}
                />

                <AutocompleteField
                  name="contributions"
                  localValue={contributions}
                  data={primaryIndustryData}
                  setLocalValue={setContributions}
                  label="Total Annual Contributions"
                />
              </InnerContainer>
              <InnerContainer>
                <OneForm>
                  <Field
                    name="revenue"
                    type="select"
                    render={() => (
                      <>
                        <Label>Revenue</Label>
                        <Box sx={{ width: '100%' }}>
                          <Slider
                            value={value}
                            onChange={onRevenueChange}
                            step={null}
                            min={10000}
                            defaultValue={[10000000, 50000000]}
                            max={150000000}
                            valueLabelDisplay="auto"
                            marks={revenueMarks}
                          />
                        </Box>
                      </>
                    )}
                  />
                </OneForm>
              </InnerContainer>
            </CompanyContainer>
            <CompanyTitle>Customer Demographics</CompanyTitle>
            <CustomerContainer>
              <InnerContainer>
                <OneForm>
                  <Field
                    name="gender"
                    type="select"
                    render={() => (
                      <>
                        <Label>Gender</Label>
                        <ToggleContainer style={{ width: '100%' }}>
                          <ToggleItem
                            onClick={() => onGenderClick('male')}
                            isToggle={isMale}
                          >
                            Male
                          </ToggleItem>
                          <ToggleItem
                            onClick={() => onGenderClick('female')}
                            isToggle={isFemale}
                          >
                            Female
                          </ToggleItem>
                          <ToggleItem
                            onClick={() => onGenderClick('both')}
                            isToggle={isBoth}
                          >
                            Both
                          </ToggleItem>
                        </ToggleContainer>
                      </>
                    )}
                  />
                </OneForm>
                <OneForm>
                  <Field
                    name="relations"
                    type="select"
                    render={() => (
                      <>
                        <Label>Relations</Label>
                        <ToggleContainer style={{ width: '100%' }}>
                          <ToggleItem onClick={onRelationsClick} isToggle={isSingle}>
                            Single
                          </ToggleItem>
                          <ToggleItem onClick={onRelationsClick} isToggle={isMarried}>
                            Married
                          </ToggleItem>
                        </ToggleContainer>
                      </>
                    )}
                  />
                </OneForm>
              </InnerContainer>
              <InnerContainer>
                <AutocompleteField
                  name="household"
                  localValue={ethnicity}
                  label="Household Income"
                  data={primaryIndustryData}
                  setLocalValue={setEthnicity}
                />

                <AutocompleteField
                  name="ethnicity"
                  localValue={household}
                  label="Ethnicity"
                  data={primaryIndustryData}
                  setLocalValue={setHousehold}
                />
              </InnerContainer>
              <InnerContainer>
                <OneForm>
                  <Field
                    name="age"
                    type="select"
                    render={() => (
                      <>
                        <Label>Age</Label>
                        <Box sx={{ width: '100%' }}>
                          <Slider
                            value={age}
                            onChange={onAgeChange}
                            step={null}
                            min={18}
                            max={80}
                            valueLabelDisplay="auto"
                            marks={marksAge}
                          />
                        </Box>
                      </>
                    )}
                  />
                </OneForm>
              </InnerContainer>
            </CustomerContainer>
            <ButtonContainer>
              <Link to="/">
                <ButtonClose>Close</ButtonClose>
              </Link>
              <ButtonSearch type="submit">Search</ButtonSearch>
            </ButtonContainer>
          </MainForm>
        )}
      />
    </Container>
  );
};

const Container = styled.div`
  margin: 30px 60px 60px;
  padding: 40px;
  background: #ffffff;
  @media (max-width: 750px) {
    margin-left: 5px;
    margin-right: 5px;
  }
`;
const Title = styled.span`
  font-weight: 600;
  font-size: 24px;
  line-height: 148%;
  color: #122434;
`;
const MainForm = styled.form`
  display: flex;
  flex-direction: column;
`;
const CompanyContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const CustomerContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const InnerContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
  @media (max-width: 750px) {
    flex-direction: column;
  }
`;
const OneForm = styled.div`
  width: 49%;
  margin-bottom: 16px;
  @media (max-width: 750px) {
    width: 100%;
  }
`;
const CompanyTitle = styled.span`
  padding-top: 34px;
  padding-bottom: 16px;
  font-size: 16px;
  font-weight: 600;
  line-height: 145%;
  color: #122434;
`;
const Label = styled.span`
  font-size: 12px;
  line-height: 150%;
  color: #737373;
  padding-bottom: 4px;
`;
const ButtonContainer = styled.div`
  @media (max-width: 500px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }
`;
const ButtonSearch = styled.button`
  padding: 12px 0;
  width: 146px;
  font-size: 16px;
  line-height: 145%;
  text-align: center;
  font-weight: 600;
  color: #ffffff;
  background: #2baee0;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  @media (max-width: 500px) {
    width: 100px;
  }

  &:hover {
    background: #51c2ee;
  }

  &:focus {
    background: #1da7dc;
  }

  &:disabled {
    background: #ceedf9;
    color: #2baee0;
  }
`;
const ButtonClose = styled.button`
  margin-right: 8px;
  padding: 12px 0;
  width: 146px;
  font-size: 16px;
  line-height: 145%;
  text-align: center;
  font-weight: 600;
  color: #122434;
  background: #fff;
  border: 1px solid #e8e8e8;
  border-radius: 6px;
  cursor: pointer;
  @media (max-width: 500px) {
    width: 100px;
  }

  &:hover {
    border: 1px solid #bfbfbf;
  }

  &:focus {
    border: 1px solid #2baee0;
  }

  &:disabled {
    border: 1px solid #e8e8e8;
    color: #e8e8e8;
  }
`;
