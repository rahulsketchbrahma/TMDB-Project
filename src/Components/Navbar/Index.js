import React from "react";
import'./Navbar.css';
import{Link} from 'react-router-dom'



function Navbar(){
    return(
        
        <div className='Navbar-wrapper'>
        <div className='Navbar'>
        <h1  className="logo">.INFI.</h1>
        </div>
        <div className='search-button'>
            <Link to='/Search'><p className='Navbar-search'>SEARCH</p></Link>
        </div>
        <div className='sign-out'>
            <Link to='/Warning'><button type="text" className='Navbar-signout'>SIGN OUT</button></Link>
        </div>
    </div>
        
    )
}
export default Navbar;