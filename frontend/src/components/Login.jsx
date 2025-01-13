import '../App.css'
import {Box} from '@mui/material'
import MyTextField from './forms/MyTextField'
import MyPasswordField from './forms/MyPasswordField'
import MyButton from './forms/MyButton'
import {Link} from 'react-router-dom'

const Login = () =>{
    return (
        <div className={"myBackground"}>
            <Box className={"whiteBox"}>

                <Box className={"itemBox"}>
                        <Box className={"title"}>
                        Login for Auth App
                        </Box>
                </Box>

                <Box className={"itemBox"}>
                        <MyTextField 
                        label={"Enter Email"}

                        />
                </Box>

                <Box className={"itemBox"}>
                        <MyPasswordField 
                        label={"Enter Password"}                                
                        />
                </Box>

                <Box className={"itemBox"}>
                        <MyButton
                                label={"Login"}
                        />
                </Box>

                <Box className={"itemBox"}>
                        <Link to="/register">New here? Register Now</Link>
                </Box>

            </Box>
        </div>
    )
}

export default Login