import React from "react";
import './Header.css'
import { Link } from "react-router-dom";
import { ImHome3 } from 'react-icons/im';
import { BiCaretRight } from 'react-icons/bi';

const Header: React.FC = () => {
  return (
    <div className="header">
      <div className="header-left">
        <Link to='/' className="icon"><ImHome3 /><BiCaretRight /></Link>
        <Link to='/movies/popular' style={{ textDecoration: 'none' }}><span>Popular</span></Link>
        <Link to='/movies/top_rated' style={{ textDecoration: 'none' }}><span>TOP Rated</span></Link>
        <Link to='/movies/upcoming' style={{ textDecoration: 'none' }}><span>Upcoming</span></Link>
      </div>
    </div>
  )
}

export default Header