import React, {FC, memo} from "react";
import styled from "styled-components";
import {Field} from "react-final-form";
import Autocomplete from "@mui/material/Autocomplete";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

type Props = {
    name: string
    label: string
    data: { title: string }[]
    setLocalValue: (localValue: any) => void
    localValue: { title: string }[] | undefined
}

export const AutocompleteField: FC<Props> = memo(({localValue, setLocalValue, data, name, label}) => {

    const icon = <CheckBoxOutlineBlankIcon fontSize="small"/>;
    const checkedIcon = <CheckBoxIcon fontSize="small"/>;

    return (
        <OneForm>
            <Field
                name={name}
                type="select"
                render={({...input}) => (
                    <>
                        <Label>{label}</Label>
                        <Autocomplete
                            multiple
                            id={name}
                            options={data}
                            disableCloseOnSelect
                            getOptionLabel={(option) => option.title}
                            isOptionEqualToValue={(option, value) => option.title === value.title}
                            renderOption={(props, option, {selected}) => (
                                <li {...props} >
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
                                <TextField  {...params} placeholder={"Select"}
                                />
                            )}
                            value={localValue}
                            onChange={(_event, option) => {
                                setLocalValue(option)
                            }}
                        />
                    </>
                )}
            />
        </OneForm>
    )
})

const OneForm = styled.div`
  width: 49%;
  margin-bottom: 16px;
  @media (max-width: 750px) {
    width: 100%;
  }
`
const Label = styled.span`
  font-size: 12px;
  line-height: 150%;
  color: #737373;
  padding-bottom: 4px;
`