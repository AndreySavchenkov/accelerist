import React, {useState} from "react";
import styled from "styled-components";
import {ToggleContainer, ToggleItem} from "../../Login/containers/main/MainForm";
import {Field, Form} from "react-final-form";
import down from "assets/img/chevron-down.png"
import top from "assets/img/chevron-top.png"
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import {Box, Slider} from "@mui/material";

function valuetext(value: number) {
    return `${value}°C`;
}

export const Filter = () => {
    const [isAdvanced, setAdvanced] = useState(true);
    const [isCustomize, setCustomize] = useState(false);
    const [value, setValue] = React.useState<number[]>([20, 37]);

    const clickHandler = () => {
        setAdvanced(!isAdvanced);
        setCustomize(!isCustomize);
    }


    const onSubmit = () => {

    }


    const handleChange = (event: Event, newValue: number | number[]) => {
        setValue(newValue as number[]);
    };
    const icon = <CheckBoxOutlineBlankIcon fontSize="small"/>;
    const checkedIcon = <CheckBoxIcon fontSize="small"/>;
    const industryData = [
        {title: 'Agriculture'},
        {title: 'Entertainment and Recrea..'},
        {title: 'Bars and Food Sevices'},
    ];

    return (
        <Container>
            <Title>Filters</Title>
            <ToggleContainer>
                <ToggleItem onClick={clickHandler} isToggle={isAdvanced}>Advanced</ToggleItem>
                <ToggleItem onClick={clickHandler} isToggle={isCustomize}>Customize</ToggleItem>
            </ToggleContainer>
            <Form
                onSubmit={onSubmit}
                render={({handleSubmit}) => (
                    <MainForm onSubmit={handleSubmit}>
                        <CompanyTitle>Company</CompanyTitle>
                        <CompanyContainer>
                            <InnerContainer>
                                <OneForm>
                                    <Field
                                        name="industry"
                                        multiple
                                        type="select"
                                        render={({input, meta}) => (
                                            <>
                                                <Label>Industry</Label>
                                                <Autocomplete
                                                    multiple
                                                    id="industry"
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
                                                    style={{width: 500}}
                                                    renderInput={(params) => (
                                                        <TextField {...params} />
                                                    )}
                                                />
                                            </>
                                        )}
                                    />
                                </OneForm>
                                <OneForm>
                                    <Field
                                        name="location"
                                        multiple
                                        type="select"
                                        render={({input, meta}) => (
                                            <>
                                                <Label>Geographic Location</Label>
                                                <Autocomplete
                                                    multiple
                                                    id="location"
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
                                                    style={{width: 500}}
                                                    renderInput={(params) => (
                                                        <TextField {...params} />
                                                    )}
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
                                        multiple
                                        type="select"
                                        render={({input, meta}) => (
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
                                                    style={{width: 500}}
                                                    renderInput={(params) => (
                                                        <TextField {...params} />
                                                    )}
                                                />
                                            </>
                                        )}
                                    />
                                </OneForm>
                                <OneForm>
                                    <Field
                                        name="goals"
                                        multiple
                                        type="select"
                                        render={({input, meta}) => (
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
                                                    style={{width: 500}}
                                                    renderInput={(params) => (
                                                        <TextField {...params} />
                                                    )}
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
                                        multiple
                                        type="select"
                                        render={({input, meta}) => (
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
                                                    style={{width: 500}}
                                                    renderInput={(params) => (
                                                        <TextField {...params} />
                                                    )}
                                                />
                                            </>
                                        )}
                                    />
                                </OneForm>
                                <OneForm>
                                    <Field
                                        name="contributions"
                                        multiple
                                        type="select"
                                        render={({input, meta}) => (
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
                                                    style={{width: 500}}
                                                    renderInput={(params) => (
                                                        <TextField {...params} />
                                                    )}
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
                                        multiple
                                        type="select"
                                        render={({input, meta}) => (
                                            <>
                                                <Label>Revenue</Label>
                                                <Box sx={{width: 500}}>
                                                    <Slider
                                                        getAriaLabel={() => 'Temperature range'}
                                                        value={value}
                                                        onChange={handleChange}
                                                        valueLabelDisplay="auto"
                                                        getAriaValueText={valuetext}
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
                                    <Label>Gender</Label>

                                </OneForm>
                                <OneForm>
                                    <Label>Relations</Label>

                                </OneForm>
                            </InnerContainer>
                        </CustomerContainer>
                        {/*<Button text={"Registration"}/>*/}
                    </MainForm>
                )}
            />
        </Container>
    )
}
const Container = styled.div`
  margin-left: 60px;
  margin-top: 30px;
  padding: 40px;
  background: #ffffff;
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
`
const OneForm = styled.div`

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