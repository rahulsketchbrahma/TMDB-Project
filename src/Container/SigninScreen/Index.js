import React,{useState} from "react";
import './SigninScreen.css'
import {Link} from 'react-router-dom'
import  {login} from '../../helper'
import { Navigate } from "react-router-dom";

const onSubmit = () => {
    login();
    Navigate('/Home');
}


function SignIn(){

    const [focus,setFocus] = useState(false);
    const [focusEmail,setFocusEmail] = useState(false);

    const handleFocus = (e) =>{
        setFocus(true);
    }
    const handleFocusEmail = (e) =>{
        setFocusEmail(true);
    }
        return(
            <>
            <div className="signin-wrapper">
                <div className="signin" />
                <div className="signin-wrappers">
                   <h1 className="signin-title"><span className="Alien">Alien</span> back</h1>
                   <p className="signin-content">Join the world's largest community</p>   
                   
                   <form className="signin_form" onSubmit={onSubmit}>      
                    <input type="text" placeholder="Name" className="input_value" required pattern="^[A-Za-z0-9]{3,16}$" onBlur={handleFocus} focused={focus.toString()}/> <span className="form_error">Username should be 3-16 characters</span>
                    <input type="email" placeholder="Email ID" className="input_value" required onBlur={handleFocusEmail} focusedEmail={focusEmail.toString()}/>  <span className="form_error_email">It should be valid Email address</span>  
                    <button type="submit" className="signin_button">Sign in</button>
                    <h6 className="signin-contents">Don't have an account ? <Link to='/SignUp'><span className="Sign_up">SIGN UP</span></Link></h6>
                   </form>
                   
                   
                   </div>
                   
               </div>
            
            </>
        )

}
export default SignIn