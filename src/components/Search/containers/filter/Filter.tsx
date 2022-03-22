import React, {FC, memo, useState} from "react";
import styled from "styled-components";
import {ToggleContainer, ToggleItem} from "components/Login/containers/main/MainForm";
import {Field, Form} from "react-final-form";
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import {Box, Slider} from "@mui/material";
import {Link} from "react-router-dom";


export const Filter: FC = memo(() => {
    const [isAdvanced, setAdvanced] = useState(true);
    const [isCustomize, setCustomize] = useState(false);

    const [isSingle, setIsSingle] = useState(true);
    const [isMarried, setIsMarried] = useState(false)

    const [isMale, setIsMale] = useState(true);
    const [isFemale, setIsFemale] = useState(false);
    const [isBoth, setIsBoth] = useState(false);

    const showGender = (name: string) => {
        if (name === 'male') {
            setIsMale(true);
            setIsFemale(false);
            setIsBoth(false);
        }
        if (name === 'female') {
            setIsMale(false);
            setIsFemale(true);
            setIsBoth(false);
        }
        if (name === 'both') {
            setIsMale(false);
            setIsFemale(false);
            setIsBoth(true);
        }
    }
    const consoleGender = (male: boolean, female: boolean, both: boolean) => {
        if (isMale) {
            return 'male'
        }
        if (isFemale) {
            return 'female'
        }
        if (isBoth) {
            return 'both'
        }
    }


    const [value, setValue] = React.useState<number[]>([10000000, 75000000]);

    const handleChange = (event: Event, newValue: number | number[]) => {
        setValue(newValue as number[]);
    };


    const [age, setAge] = React.useState<number[]>([30, 45]);

    const handleChangeAge = (event: Event, newValue: number | number[]) => {
        setAge(newValue as number[]);
    };


    const clickHandler = () => {
        setAdvanced(!isAdvanced);
        setCustomize(!isCustomize);
    }
    const clickHandlerGender = () => {
        setIsSingle(!isSingle);
        setIsMarried(!isMarried);
    }


    const onSubmit = (values: any) => {
        console.log('Form values ->', values)
        console.log('Industry ->', industry)
        console.log('Revenue ->', value)
        console.log('Relations ->', isSingle ? 'single' : 'married')
        console.log('Gender ->', consoleGender(isMale, isFemale, isBoth))
        console.log('Location ->', location)
        console.log('Scope ->', scope)
        console.log('Goals ->', goals)
        console.log('Focus ->', focus)
        console.log('Contributions ->', contributions)
        console.log('Household ->', household)
        console.log('Ethnicity ->', ethnicity)
        console.log('Age ->', age)
    }


    const icon = <CheckBoxOutlineBlankIcon fontSize="small"/>;
    const checkedIcon = <CheckBoxIcon fontSize="small"/>;
    const industryData = [
        {title: 'Agriculture'},
        {title: 'Entertainment and Recrea..'},
        {title: 'Bars and Food Sevices'},
    ];
    const primaryIndustryData = [
        {title: "Food & Beverage"},
        {title: "Restaurants"},
        {title: "Electricity, Oil & Gas"},
        {title: "Freight & Logistics Services"},
        {title: "Barber Shops & Beauty Salons"},
        {title: "Grocery Retail"},
        {title: "Mobile App Developement"},
        {title: "Record, Video & Book Stores"},
        {title: "Freight & Logistics Services"},
        {title: "Chemicals & Related Products"},
        {title: "Car & Truck Rental"},
        {title: "Apparel & Accessories Retail"},
        {title: "Internet Service Providers, Website Hosting & Internet-related Services"},
        {title: "Publishing"},
        {title: "Broadcasting"},
        {title: "Customer Relationship Management (CRM) Software"},
        {title: "Motor Vehicles"},
        {title: "Investment Banking"},
        {title: "Office Products Retail & Distribution"},
        {title: "Home Improvement & Hardware Retail"},
        {title: "Management Consulting"},
        {title: "Medical & Surgical Hospitals"},
        {title: "Medical & Surgical Hospitals"},
    ]

    const [industry, setIndustry] = useState([{title: ''}])
    const [location, setLocation] = useState([{title: ''}])
    const [scope, setScope] = useState([{title: ''}])
    const [goals, setGoals] = useState([{title: ''}])
    const [focus, setFocus] = useState([{title: ''}])
    const [contributions, setContributions] = useState([{title: ''}])
    const [household, setHousehold] = useState([{title: ''}])
    const [ethnicity, setEthnicity] = useState([{title: ''}])

    const marksAge = [
        {
            value: 18,
            label: '18',
        },
        {
            value: 20,
            label: '20',
        },
        {
            value: 25,
            label: '25',
        },
        {
            value: 30,
            label: '30',
        },
        {
            value: 35,
            label: '35',
        },
        {
            value: 40,
            label: '40',
        },
        {
            value: 45,
            label: '45',
        },
        {
            value: 50,
            label: '50',
        },
        {
            value: 55,
            label: '55',
        },
        {
            value: 60,
            label: '60',
        },
        {
            value: 65,
            label: '65',
        },
        {
            value: 70,
            label: '70',
        },
        {
            value: 80,
            label: '70+',
        },
    ]

    const revenueMarks = [
        {
            value: 10000,
            label: '10K',
        },
        {
            value: 10000000,
            label: '10M',
        },
        {
            value: 25000000,
            label: '25M',
        },
        {
            value: 50000000,
            label: '50M',
        },
        {
            value: 75000000,
            label: '75M',
        },
        {
            value: 100000000,
            label: '100M',
        },
        {
            value: 150000000,
            label: '100M+',
        },
    ]

    return (
        <Container>
            <Title>Filters</Title>
            <ToggleContainer>
                <ToggleItem onClick={clickHandler} isToggle={isAdvanced}>Advanced</ToggleItem>
                <ToggleItem onClick={clickHandler} isToggle={isCustomize}>Customize</ToggleItem>
            </ToggleContainer>
            <Form
                onSubmit={onSubmit}
                render={({handleSubmit}) => {

                    return (
                        <MainForm onSubmit={handleSubmit}>
                            <CompanyTitle>Company</CompanyTitle>
                            <CompanyContainer>
                                <InnerContainer>
                                    <OneForm>
                                        <Field
                                            name="industry"
                                            type="select"
                                            render={({...input}) => (
                                                <>
                                                    <Label>Industry</Label>
                                                    <Autocomplete
                                                        multiple
                                                        id="industry"
                                                        options={primaryIndustryData}
                                                        isOptionEqualToValue={(option, value) => option.title === value.title}
                                                        getOptionLabel={(option) => option.title}
                                                        renderOption={(props, option, {selected}) => (
                                                            <li {...props}>
                                                                <Checkbox
                                                                    icon={icon}
                                                                    checkedIcon={checkedIcon}
                                                                    style={{marginRight: 10}}
                                                                    checked={selected}
                                                                />
                                                                {option.title}
                                                            </li>
                                                        )}
                                                        style={{width: '100%'}}
                                                        renderInput={(params) => (
                                                            <TextField {...params}
                                                            />
                                                        )}
                                                        value={industry}
                                                        onChange={(_event, option) => {
                                                            setIndustry(option);
                                                            input.onChange(option)
                                                        }}
                                                    />
                                                </>
                                            )}
                                        />
                                    </OneForm>
                                    <OneForm>
                                        <Field
                                            name="location"
                                            type="select"
                                            render={({...input}) => (
                                                <>
                                                    <Label>Geographic Location</Label>
                                                    <Autocomplete
                                                        multiple
                                                        id="location"
                                                        options={industryData}
                                                        disableCloseOnSelect
                                                        getOptionLabel={(option: any) => option.title}
                                                        renderOption={(props, option, {selected}) => (
                                                            <li {...props}>
                                                                <Checkbox
                                                                    icon={icon}
                                                                    checkedIcon={checkedIcon}
                                                                    style={{marginRight: 10}}
                                                                    checked={selected}
                                                                />
                                                                {option.title}
                                                            </li>
                                                        )}
                                                        style={{width: '100%'}}
                                                        renderInput={(params) => (
                                                            <TextField {...params}
                                                            />
                                                        )}
                                                        value={location}
                                                        onChange={(_event, option) => {
                                                            setLocation(option);
                                                            input.onChange(option)
                                                        }}
                                                    />
                                                </>
                                            )}
                                        />
                                    </OneForm>
                                </InnerContainer>
                                <InnerContainer>
                                    <OneForm>
                                        <Field
                                            name="scope"
                                            type="select"
                                            render={({...input}) => (
                                                <>
                                                    <Label>Scope</Label>
                                                    <Autocomplete
                                                        multiple
                                                        id="scope"
                                                        options={industryData}
                                                        disableCloseOnSelect
                                                        getOptionLabel={(option) => option.title}
                                                        renderOption={(props, option, {selected}) => (
                                                            <li {...props}>
                                                                <Checkbox
                                                                    icon={icon}
                                                                    checkedIcon={checkedIcon}
                                                                    style={{marginRight: 10}}
                                                                    checked={selected}
                                                                />
                                                                {option.title}
                                                            </li>
                                                        )}
                                                        style={{width: '100%'}}
                                                        renderInput={(params) => (
                                                            <TextField {...params} />
                                                        )}
                                                        value={scope}
                                                        onChange={(_event, option) => {
                                                            setScope(option);
                                                            input.onChange(option)
                                                        }}
                                                    />
                                                </>
                                            )}
                                        />
                                    </OneForm>
                                    <OneForm>
                                        <Field
                                            name="goals"
                                            type="select"
                                            render={({...input}) => (
                                                <>
                                                    <Label>SDG Goals</Label>
                                                    <Autocomplete
                                                        multiple
                                                        id="goals"
                                                        options={industryData}
                                                        disableCloseOnSelect
                                                        getOptionLabel={(option) => option.title}
                                                        renderOption={(props, option, {selected}) => (
                                                            <li {...props}>
                                                                <Checkbox
                                                                    icon={icon}
                                                                    checkedIcon={checkedIcon}
                                                                    style={{marginRight: 10}}
                                                                    checked={selected}
                                                                />
                                                                {option.title}
                                                            </li>
                                                        )}
                                                        style={{width: '100%'}}
                                                        renderInput={(params) => (
                                                            <TextField {...params} />
                                                        )}
                                                        value={goals}
                                                        onChange={(_event, option) => {
                                                            setGoals(option);
                                                            input.onChange(option)
                                                        }}
                                                    />
                                                </>
                                            )}
                                        />
                                    </OneForm>
                                </InnerContainer>
                                <InnerContainer>
                                    <OneForm>
                                        <Field
                                            name="focus"
                                            type="select"
                                            render={({...input}) => (
                                                <>
                                                    <Label>CDR Focus</Label>
                                                    <Autocomplete
                                                        multiple
                                                        id="focus"
                                                        options={industryData}
                                                        disableCloseOnSelect
                                                        getOptionLabel={(option) => option.title}
                                                        renderOption={(props, option, {selected}) => (
                                                            <li {...props}>
                                                                <Checkbox
                                                                    icon={icon}
                                                                    checkedIcon={checkedIcon}
                                                                    style={{marginRight: 10}}
                                                                    checked={selected}
                                                                />
                                                                {option.title}
                                                            </li>
                                                        )}
                                                        style={{width: '100%'}}
                                                        renderInput={(params) => (
                                                            <TextField {...params} />
                                                        )}
                                                        value={focus}
                                                        onChange={(_event, option) => {
                                                            setFocus(option);
                                                            input.onChange(option)
                                                        }}
                                                    />
                                                </>
                                            )}
                                        />
                                    </OneForm>
                                    <OneForm>
                                        <Field
                                            name="contributions"
                                            type="select"
                                            render={({...input}) => (
                                                <>
                                                    <Label>Total Annual Contributions</Label>
                                                    <Autocomplete
                                                        multiple
                                                        id="contributions"
                                                        options={industryData}
                                                        disableCloseOnSelect
                                                        getOptionLabel={(option) => option.title}
                                                        renderOption={(props, option, {selected}) => (
                                                            <li {...props}>
                                                                <Checkbox
                                                                    icon={icon}
                                                                    checkedIcon={checkedIcon}
                                                                    style={{marginRight: 10}}
                                                                    checked={selected}
                                                                />
                                                                {option.title}
                                                            </li>
                                                        )}
                                                        style={{width: '100%'}}
                                                        renderInput={(params) => (
                                                            <TextField {...params} />
                                                        )}
                                                        value={contributions}
                                                        onChange={(_event, option) => {
                                                            setContributions(option);
                                                            input.onChange(option)
                                                        }}
                                                    />
                                                </>
                                            )}
                                        />
                                    </OneForm>
                                </InnerContainer>
                                <InnerContainer>
                                    <OneForm>
                                        <Field
                                            name="revenue"
                                            type="select"
                                            render={({...input}) => (
                                                <>
                                                    <Label>Revenue</Label>
                                                    <Box sx={{width: '100%'}}>
                                                        <Slider
                                                            value={value}
                                                            onChange={handleChange}
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
                                            render={({...input}) => (
                                                <>
                                                    <Label>Gender</Label>
                                                    <ToggleContainer style={{width: '100%'}}>
                                                        <ToggleItem onClick={() => showGender('male')}
                                                                    isToggle={isMale}>Male</ToggleItem>
                                                        <ToggleItem onClick={() => showGender('female')}
                                                                    isToggle={isFemale}>Female</ToggleItem>
                                                        <ToggleItem onClick={() => showGender('both')}
                                                                    isToggle={isBoth}>Both</ToggleItem>
                                                    </ToggleContainer>
                                                </>
                                            )}
                                        />
                                    </OneForm>
                                    <OneForm>
                                        <Field
                                            name="relations"
                                            type="select"
                                            render={({...input}) => (
                                                <>
                                                    <Label>Relations</Label>
                                                    <ToggleContainer style={{width: '100%'}}>
                                                        <ToggleItem onClick={clickHandlerGender}
                                                                    isToggle={isSingle}>Single</ToggleItem>
                                                        <ToggleItem onClick={clickHandlerGender}
                                                                    isToggle={isMarried}>Married</ToggleItem>
                                                    </ToggleContainer>
                                                </>
                                            )}
                                        />
                                    </OneForm>
                                </InnerContainer>
                                <InnerContainer>
                                    <OneForm>
                                        <Field
                                            name="household"
                                            type="select"
                                            render={({...input}) => (
                                                <>
                                                    <Label>Household Income</Label>
                                                    <Autocomplete
                                                        multiple
                                                        id="household"
                                                        options={industryData}
                                                        disableCloseOnSelect
                                                        getOptionLabel={(option) => option.title}
                                                        renderOption={(props, option, {selected}) => (
                                                            <li {...props}>
                                                                <Checkbox
                                                                    icon={icon}
                                                                    checkedIcon={checkedIcon}
                                                                    style={{marginRight: 10}}
                                                                    checked={selected}
                                                                />
                                                                {option.title}
                                                            </li>
                                                        )}
                                                        style={{width: '100%'}}
                                                        renderInput={(params) => (
                                                            <TextField {...params} />
                                                        )}
                                                        value={household}
                                                        onChange={(_event, option) => {
                                                            setHousehold(option);
                                                            input.onChange(option)
                                                        }}
                                                    />
                                                </>
                                            )}
                                        />
                                    </OneForm>
                                    <OneForm>
                                        <Field
                                            name="ethnicity"
                                            type="select"
                                            render={({...input}) => (
                                                <>
                                                    <Label>Ethnicity</Label>
                                                    <Autocomplete
                                                        multiple
                                                        id="ethnicity"
                                                        options={industryData}
                                                        disableCloseOnSelect
                                                        getOptionLabel={(option) => option.title}
                                                        renderOption={(props, option, {selected}) => (
                                                            <li {...props}>
                                                                <Checkbox
                                                                    icon={icon}
                                                                    checkedIcon={checkedIcon}
                                                                    style={{marginRight: 10}}
                                                                    checked={selected}
                                                                />
                                                                {option.title}
                                                            </li>
                                                        )}
                                                        style={{width: '100%'}}
                                                        renderInput={(params) => (
                                                            <TextField {...params} />
                                                        )}
                                                        value={ethnicity}
                                                        onChange={(_event, option) => {
                                                            setEthnicity(option);
                                                            input.onChange(option)
                                                        }}
                                                    />
                                                </>
                                            )}
                                        />
                                    </OneForm>
                                </InnerContainer>
                                <InnerContainer>
                                    <OneForm>
                                        <Field
                                            name="age"
                                            type="select"
                                            render={({...input}) => (
                                                <>
                                                    <Label>Age</Label>
                                                    <Box sx={{width: '100%'}}>
                                                        <Slider
                                                            value={age}
                                                            onChange={handleChangeAge}
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
                                <Link to="/"><ButtonClose>Close</ButtonClose></Link>
                                <ButtonSearch type={"submit"}>Search</ButtonSearch>
                            </ButtonContainer>
                        </MainForm>
                    )
                }}
            />
        </Container>
    )
})

const Container = styled.div`
  margin: 30px 60px 60px;
  padding: 40px;
  background: #ffffff;
  @media (max-width: 750px) {
    margin-left: 5px;
    margin-right: 5px;
  }
`
const Title = styled.span`
  font-weight: 600;
  font-size: 24px;
  line-height: 148%;
  color: #122434;
`
const MainForm = styled.form`
  display: flex;
  flex-direction: column;
`
const CompanyContainer = styled.div`
  display: flex;
  flex-direction: column;
`
const CustomerContainer = styled.div`
  display: flex;
  flex-direction: column;
`
const InnerContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
  @media (max-width: 750px) {
    flex-direction: column;
  }
`
const OneForm = styled.div`
  width: 49%;
  margin-bottom: 16px;
  @media (max-width: 750px) {
    width: 100%;
  }
`
const CompanyTitle = styled.span`
  padding-top: 34px;
  padding-bottom: 16px;
  font-size: 16px;
  font-weight: 600;
  line-height: 145%;
  color: #122434;
`
const Label = styled.span`
  font-size: 12px;
  line-height: 150%;
  color: #737373;
  padding-bottom: 4px;
`
const ButtonContainer = styled.div`
  @media (max-width: 500px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }
`
const ButtonSearch = styled.button`
  padding: 12px 0;
  width: 146px;
  font-size: 16px;
  line-height: 145%;
  text-align: center;
  font-weight: 600;
  color: #FFFFFF;
  background: #2BAEE0;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  @media (max-width: 500px) {
    width: 100px;
  }

  &:hover {
    background: #51C2EE;
  }

  &:focus {
    background: #1DA7DC;
  }

  &:disabled {
    background: #CEEDF9;
    color: #2BAEE0;
  }
`
const ButtonClose = styled.button`
  margin-right: 8px;
  padding: 12px 0;
  width: 146px;
  font-size: 16px;
  line-height: 145%;
  text-align: center;
  font-weight: 600;
  color: #122434;
  background: #FFF;
  border: 1px solid #E8E8E8;
  border-radius: 6px;
  cursor: pointer;
  @media (max-width: 500px) {
    width: 100px;
  }

  &:hover {
    border: 1px solid #BFBFBF;
  }

  &:focus {
    border: 1px solid #2BAEE0;
  }

  &:disabled {
    border: 1px solid #E8E8E8;
    color: #E8E8E8;
  }
`

