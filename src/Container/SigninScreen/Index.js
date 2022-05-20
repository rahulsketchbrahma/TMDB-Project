import React from "react";
import './SigninScreen.css'
import {Link} from 'react-router-dom'



function signIn(){

        return(
            <>
            <div className="signin-wrapper">
                <div className="signin" />
                <div className="signin-wrappers">
                   <h1 className="signin-title"><span className="Alien">Alien</span> back</h1> 
                   <p className="signin-content">Join the world's largest community</p>   
                   
                   <form className="signin_form">
                    <input type="email" placeholder="Email ID" className="input_value"/>    
                    <input type="password" placeholder="Password" className="input_value"/>    
                    <button type="submit" className="signin_button">Sign in</button>
                    <h6 className="signin-contents">Don't have an account ? <Link to='/SignUp'><span className="Sign_up">SIGN UP</span></Link></h6>
                   </form>
                   </div>
                   
               </div>
            
            </>
        )

}
export default signIn