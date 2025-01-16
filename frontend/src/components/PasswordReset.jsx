import '../App.css'
import {Box} from '@mui/material'
import MyButton from './forms/MyButton'
import {Link, useNavigate} from 'react-router-dom'
import { useForm } from 'react-hook-form'
import AxiosInstance from './AxiosInstance'
import MyMessage from './MyMessage'
import { useState, React } from 'react'
import { useParams } from 'react-router-dom'
import MyPasswordField from './forms/MyPasswordField'

const PasswordReset = () =>{

        const {handleSubmit, control} =useForm()
        const navigate = useNavigate();
        const [ShowMessage, setShowMessage] =useState(false)
        const {token} = useParams()

        const submission = (data) => {                
                AxiosInstance.post(`api/password_reset/confirm`, {        
                  password: data.email,
                  token : token,                  
                })
                .then((response) => {
                        setShowMessage(true)
                        setTimeout(() =>{
                                navigate('/')
                        })
                })
                
              };


    return (

        <div className={"myBackground"}>
        {ShowMessage ? <MyMessage text={"Your password reset was Successful!!! You will be redirected to Login Page"}/> : null}
        <form onSubmit={handleSubmit(submission)}>
       
            <Box className={"whiteBox"}>

                <Box className={"itemBox"} sx={{flexDirection:'column'}}>
                        <Box className={"title"}>
                        Reset Password
                        </Box>                        
                </Box>

                <Box className={"itemBox"}>
                        <MyPasswordField 
                                label={"Enter new Password"} 
                                name={"password"}   
                                control={control}                               
                        />
                </Box>

                <Box className={"itemBox"}>
                        <MyPasswordField 
                                label={"Re-Enter new Password"} 
                                name={"password2"}   
                                control={control}                               
                        />
                </Box>

                
                <Box className={"itemBox"}>
                        <MyButton
                                label={"Change Password"}
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

export default PasswordReset