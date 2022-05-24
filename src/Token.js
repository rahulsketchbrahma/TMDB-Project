import React,{useState,useEffect} from "react";
import axios from "axios";
import {login} from './helper'

function Token(){
    const [TokenValue, setTokenValue] = useState([]);

    useEffect(()=>{
        const TokenValues = 'https://api.themoviedb.org/3/authentication/guest_session/new?api_key=8612aaeb857886e801ddfca868da9cf3';
        async function fetchToken(){
            const request= await axios.get(TokenValues);
            setTokenValue(request.data.guest_session_id);
            console.log('token',request.data.guest_session_id)
              return request;
        }
        
        fetchToken();
        

    },[]);
    return(
        <>
        
       
        </>
    )

}
export default Token;
