import React from 'react';
import logo from '../../images/barca.png';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
           <div>
           <img src={logo} alt=""/>
           <h1 className="title">Team Barcelona</h1>
           </div>
           <nav>
               <a href="/latest">Latest</a>
               <a href="/schedule">Schedule</a>
               <a href="/results">Results</a>
               <a href="/standing">Standings</a>
               <a href="/players">Players</a>
               <a href="/photos">Photos</a>
               </nav>
        </div>
    );
};

export default Header;