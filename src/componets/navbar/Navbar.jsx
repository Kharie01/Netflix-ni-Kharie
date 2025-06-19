import React, { use, useState } from "react";
import './navbar.css';
import Logo from '../../assets/logo.png'
import SearchIcon from '../../assets/search_icon.svg';
import BellIcon from '../../assets/bell_icon.svg';
import ProfileIcon from '../../assets/profile_img.png';
import DropdownIcon from '../../assets/caret_icon.svg';



const Navbar = () => {
    const [SearchInput, setSearchInput] = useState(false);

    const showInput = () => {
        setSearchInput(prev => !prev);
    }

    return(
        <div className="navbar">
            <div className="navbar-left">
                <img src={Logo} alt="logo" 
                className="icons" 
                onClick={showInput} 
                style={{cursor:"pointer"}}/>

                <input className="searchInput" type="text" 
                    placeholder="Search Movie"
                    style={{display: SearchInput ? "block" : "none"}}
                />
                <ul>
                    <li>Home</li>
                    <li>TV shows</li>
                    <li>Movies</li>
                    <li>New & Popular</li>
                    <li>My List</li>
                    <li>Browse by Languages</li>
                </ul>
            </div>
            <div className="navbar-right">
                <img src={SearchIcon} alt="search" className="icons" />
                <p>Children</p>
                <img src={BellIcon} alt="search" className="icons" />
                <div className="navbar-profile">
                    <img src={ProfileIcon} alt="search" className="profile" />
                    <img src={DropdownIcon} alt="dropdown"/>
                    <div className="dropdown">
                        <div className="accounts">
                            <img src={ProfileIcon} alt="search" className="profile" />
                            <p>Kharie</p>
                        </div>
                        <div className="accounts">
                            <img src={ProfileIcon} alt="search" className="profile" />
                            <p>Kim</p>
                        </div>
                        <div className="accounts">
                            <img src={ProfileIcon} alt="search" className="profile" />
                            <p>Dray</p>
                        </div>
                        <div className="accounts">
                            <img src={ProfileIcon} alt="search" className="profile" />
                            <p>Pedro</p>
                        </div>
                            <p>Sign out of Netflix</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;