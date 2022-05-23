import React from 'react';
import { Navigate } from 'react-router-dom';
import{ isLogin} from '../helper';


const Public = ({component:Component , ...rest}) => {
    if(isLogin()){
        return <Navigate to='/Home'/>;
    }
    return <Component {...rest}/>;
}

export default Public