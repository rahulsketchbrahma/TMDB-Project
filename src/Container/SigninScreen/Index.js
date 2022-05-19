import React from "react";
import './SigninScreen.css'



function signIn(){

        return(
            <>
            <div className="signin-wrapper">
                <div className="signin">
                <div>
                   <h1 className="signin-title">Welcome Back Alien</h1> 
                   <p className="signin-content">Join the world's largest community</p>   
                   </div> 
                </div>
                   <form className="signin_form">
                    <input type="email" placeholder="Email ID" className="input_value"/>    
                    <input type="password" placeholder="Password" className="input_value"/>    
                    <button type="submit" className="signin_button">Sign in</button>
                    <h6 className="signin-contents">Don't have an account ? <span className="Sign_up">SIGN UP</span></h6>
                   </form>
               </div>
            
            </>
        )

}
export default signIn