import React from "react";
import'./Navbar.css';
import{Link} from 'react-router-dom'
import { logout } from "../../helper";
import { Navigate } from "react-router-dom";

const onSubmitt = () => {
    logout();
    Navigate('/SignIn');
}
function Navbar(){
    return(
        
        <div className='Navbar-wrapper'>
        <div className='Navbar'>
        <h1  className="logo">.INFI.</h1>
        </div>
        <div className='search-button'>
            <Link to='/Search'><p className='Navbar-search'>SEARCH</p></Link>
        </div>
        <form className='sign-out' onSubmit={onSubmitt}>
            <button type="submit" className='Navbar-signout'>SIGN OUT</button>
        </form>
    </div>
        
    )
}
export default Navbar;