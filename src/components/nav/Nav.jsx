import React, { useState } from 'react'
import "./nav.scss"
import { RiMovie2Fill } from 'react-icons/ri';
import { BiSearchAlt2 } from 'react-icons/bi';
import { CgMenuRight } from 'react-icons/cg';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { NavLink, Link } from 'react-router-dom'

const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className='nav'>
        <div className="container">
            <Link className="logo link"><RiMovie2Fill/> <span>Watch hour</span></Link>
            <ul className={`links ${showMenu && "show-menu"}`}>
                <li><NavLink to="/" className="link">Trending</NavLink></li>
                <li><NavLink to="/top-rated" className="link">Top rated</NavLink></li>
                <li><NavLink to="/popular" className="link">Popular</NavLink></li>
                <li><NavLink to="/upcoming" className="link">Upcoming</NavLink></li>
                {showMenu && <div className='close-btn' onClick={() => setShowMenu(!showMenu)}><div><AiOutlineCloseCircle /></div></div>}
            </ul>
            <Link className="search-btn link" to='/search'><BiSearchAlt2 /></Link>
            <div className="toggle-menu" onClick={() => setShowMenu(!showMenu)}>
              {!showMenu && <div className="open-menu"><CgMenuRight /></div>}
            </div>
        </div>
    </nav>
  )
}

export default Nav