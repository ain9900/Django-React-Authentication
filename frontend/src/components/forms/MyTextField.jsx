import * as React from 'react';
import TextField from '@mui/material/TextField';
import '../../App.css';
import { Controller } from 'react-hook-form';

export default function MyTextField(props) {
    const { label, name, control } = props;

    return (
        <Controller
            name={name}
            control={control}
            render={({
                field: { onChange, value },
                fieldState: { error },
                formState,
            }) => (
                <TextField
                    id={name} // Use the name as the ID for uniqueness
                    onChange={onChange}
                    value={value}
                    error={!!error}
                    label={label}
                    variant="outlined"
                    className={"myForm"}
                    //helperText={error?error.message : ''} // Show error message if exists, otherwise empty string
                />
            )}
            />
    );
}
