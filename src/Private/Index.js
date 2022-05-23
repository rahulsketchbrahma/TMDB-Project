import React from 'react';
import { Navigate } from 'react-router-dom';
import{ isLogin} from '../helper'


const Private = ({component:Component , ...rest}) => {
    if(isLogin()){
        return <Component {...rest} />;
    }
    
    return <Navigate to='/SignIn' />;
}
export default Private