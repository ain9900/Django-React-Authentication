import '../App.css'
import {Box} from '@mui/material'
import MyTextField from './forms/MyTextField'
import MyPasswordField from './forms/MyPasswordField'
import MyButton from './forms/MyButton'
import {Link, useNavigate} from 'react-router-dom'
import { useForm } from 'react-hook-form'
import AxiosInstance from './AxiosInstance'


const Login = () =>{

        const {handleSubmit, control} =useForm()
        const navigate = useNavigate();

        const submission = (data) => {                
                AxiosInstance.post('login/', {        
                  email: data.email,
                  password: data.password,
                })
                .then((response) => {
                        //console.log(response.data)
                        localStorage.setItem('Token', response.data.token)
                        navigate('/home');
                })
                .catch((error) => {
                  console.error("Error During Login", error);
                });
              };


    return (

        <div className={"myBackground"}>
        <form onSubmit={handleSubmit(submission)}>
            <Box className={"whiteBox"}>

                <Box className={"itemBox"}>
                        <Box className={"title"}>
                        Login for Auth App
                        </Box>
                </Box>

                <Box className={"itemBox"}>
                        <MyTextField 
                        label={"Enter Email"}
                        name={"email"}
                        control={control}

                        />
                </Box>

                <Box className={"itemBox"}>
                        <MyPasswordField 
                        label={"Enter Password"} 
                        name={"password"}   
                        control={control}                               
                        />
                </Box>

                <Box className={"itemBox"}>
                        <MyButton
                                label={"Login"}
                                type ={"submit"}
                                
                        />
                </Box>

                <Box className={"itemBox"}>
                        <Link to="/register">New here? Register Now</Link>
                </Box>

            </Box>
            </form>
        </div>
    )
}

export default Login