import React from 'react'
import classes from './SelectField.module.css'
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

const SelectField = ({ id, label, value, options, onChangeHandler }) => {

    const handleChange = (event) => {
        onChangeHandler(event.target)
    };

    return (
        <FormControl className={classes.formWrapper} >
            <InputLabel id={id}>{label}</InputLabel>
            <Select
                name={label}
                labelId={id}
                id={id}
                value={value}
                label={label}
                onChange={handleChange}
            >
                {options.map((option, key) => (

                    <MenuItem key={key} value={options[key]}>{option}</MenuItem>
                ))}
            </Select>
        </FormControl>
    )
}

export default SelectField
