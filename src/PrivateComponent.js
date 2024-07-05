import React from 'react'
//private componet is a wraper 
//outlet delas as the components as a props
import { Navigate,Outlet } from 'react-router-dom'
const PrivateComponent = () => {
  
    const auth = localStorage.getItem('user');
    return auth?<Outlet/>:<Navigate to = "/signup"/>

}

export default PrivateComponent