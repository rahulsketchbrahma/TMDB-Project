import React from "react";
import './SigninScreen.css'


function signIn(){

        return(
            <>
            <div className="signin-wrapper">
                <form>
                    <h1 className="sign-in-title">SIGN IN</h1>
                    <input placeholder="Email" type="email" className="Input" />
                    <input placeholder="Password" type="password" className="Input" />
                    <button type="submit" className="button-signin">SIGN IN</button>
                </form>
            </div>
            </>
        )

}
export default signIn