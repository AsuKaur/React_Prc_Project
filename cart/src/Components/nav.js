
import React from 'react';
import './compstyle.css';
import Logo from './logo';
import NavBar from './navbar';

const Nav = () => {
   
    return ( <>
    <header className='nav'>
       <Logo/>
        <NavBar/>
    </header>
    </> );
}
 
export default Nav;