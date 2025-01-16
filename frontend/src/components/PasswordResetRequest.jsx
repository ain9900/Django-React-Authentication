import '../App.css'
import {Box} from '@mui/material'
import MyTextField from './forms/MyTextField'
import MyButton from './forms/MyButton'
import {Link, useNavigate} from 'react-router-dom'
import { useForm } from 'react-hook-form'
import AxiosInstance from './AxiosInstance'
import MyMessage from './MyMessage'
import { useState, React } from 'react'


const PasswordResetRequest = () =>{

        const {handleSubmit, control} =useForm()
        const navigate = useNavigate();
        const [ShowMessage, setShowMessage] =useState(false)

        const submission = (data) => {                
                AxiosInstance.post('api/password_reset/', {        
                  email: data.email,                  
                })
                .then((response) => {
                        setShowMessage(true)
                })
                .catch((error) => {
                  console.error("Error During Login", error);
                });
              };


    return (

        <div className={"myBackground"}>
        {ShowMessage ? <MyMessage text={"If you are a registered user then you will receive an Email with instructions for resetting the password"}/> : null}
        <form onSubmit={handleSubmit(submission)}>
       
            <Box className={"whiteBox"}>

                <Box className={"itemBox"} sx={{flexDirection:'column'}}>
                        <Box className={"title"}>
                        Reset Password
                        </Box>
                        <Box >
                        We will email you a password Reset Link
                        </Box>
                </Box>

                <Box className={"itemBox"}>
                        <MyTextField 
                        label={"Enter your Account Email"}
                        name={"email"}
                        control={control}

                        />
                </Box>

                
                <Box className={"itemBox"}>
                        <MyButton
                                label={"Request Password Reset"}
                                type ={"submit"}
                                
                        />
                </Box>

                <Box className={"itemBox"} sx={{flexDirection:'column'}}>
                        <Link to="/register">New here? Register Now</Link>
                        <Link to="/">Already Registered? Login</Link>
                </Box>

            </Box>
            </form>
        </div>
    )
}

export default PasswordResetRequest