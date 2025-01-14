import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoute = () =>{
    const token = 'Token'
    return(
        token ? <Outlet/> : <Navigate to={"/"} />
    )
}

export default ProtectedRoute