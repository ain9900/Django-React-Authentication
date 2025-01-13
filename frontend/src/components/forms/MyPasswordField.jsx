import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import '../../App.css';
import { Controller } from 'react-hook-form';
import { FormHelperText } from '@mui/material';

export default function MyPasswordField(props) {
  const [showPassword, setShowPassword] = React.useState(false);
  const { label, name, control } = props;

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <FormControl variant="outlined" className={"myForm"} error={!!error}>
          <InputLabel htmlFor="outlined-adornment-password">{label}</InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? 'text' : 'password'}
                value={value}
                onChange={onChange}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label={showPassword ? 'hide the password' : 'display the password'}
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      onMouseUp={handleMouseUpPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label={label}
              />
          {error && (
            <FormHelperText sx={{ color: "#d32f2f" }}>
              {error.message}
            </FormHelperText>
          )}
        </FormControl>
      )}
    />
  );
}
