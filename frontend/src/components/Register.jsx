import '../App.css';
import { Box } from '@mui/material';
import MyTextField from './forms/MyTextField';
import MyPasswordField from './forms/MyPasswordField';
import MyButton from './forms/MyButton';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import AxiosInstance from './AxiosInstance';

const Register = () => {
  const navigate = useNavigate();
  const { handleSubmit, control, formState: { errors } } = useForm(); // Fix for useForm

  const submission = (data) => {
    // Make sure to handle response errors as well
    AxiosInstance.post('register/', {        
      email: data.email,
      password: data.password,
    })
    .then(() => {
        console.log(data.email, data.password)
      navigate('/'); // Correct usage of navigate
    })
    .catch((err) => {
      console.error("Registration failed", err);
    });
  };

  return (
    <div className={"myBackground"}>
      <form onSubmit={handleSubmit(submission)}>
        <Box className={"whiteBox"}>

          <Box className={"itemBox"}>
            <Box className={"title"}>
              Register for Auth App
            </Box>
          </Box>

          <Box className={"itemBox"}>
            <MyTextField 
              label={"Enter Email"}
              name={"email"}
              control={control}
              error={errors.email} // Handling validation errors for email
            />
          </Box>

          <Box className={"itemBox"} >
            <MyPasswordField 
              label={"Enter Password"}    
              name={"password"}   
              control={control}
              error={errors.password} // Handling validation errors for password
            />
          </Box>

          <Box className={"itemBox"} >
            <MyPasswordField 
              label={"Confirm Password"}  
              name={"password2"}        
              control={control}
              error={errors.password2} // Handling validation errors for confirm password
            />
          </Box>

          <Box className={"itemBox"} >
            <MyButton
                type ={"submit"}
                label={"Register"}  // Label for the button
            />
          </Box>

          <Box className={"itemBox"} >
            <Link to="/"> Already Registered? Please Login </Link>
          </Box>

        </Box>
      </form>
    </div>
  );
};

export default Register;
