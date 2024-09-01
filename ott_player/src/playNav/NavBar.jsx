import React from 'react'
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <>
        <div className='nav'>
            <h1 className='nav-logo'>Movie Player</h1>
            <div className='nav-tab'>
                <Link className='nav-tab-link' to="/">
                    <span className='nav-tab-options'>Home</span>
                </Link>
                <Link className='nav-tab-link' to="/subscription">
                    <span className='nav-tab-options'>Subscription</span>
                </Link>
                <Link className='nav-tab-link' to="/down&watch">
                    <span className='nav-tab-options'>WatchList</span>
                </Link>
                <Link className='nav-tab-link' to="/account">
                    <span className='nav-tab-options'>Account</span>
                </Link>
            </div>
        </div>
    </>
  )
}

export default NavBar