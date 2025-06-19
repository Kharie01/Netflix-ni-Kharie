import React from "react";
import yticon from'../../assets/youtube_icon.png';
import igicon from'../../assets/instagram_icon.png';
import fbicon from'../../assets/facebook_icon.png';
import twticon from'../../assets/twitter_icon.png';

import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-icons">
                <img src={fbicon} alt="" />
                <img src={igicon} alt="" />
                <img src={twticon} alt="" />
                <img src={yticon} alt="" />
            </div>
            <ul>
                <li>Audio Description</li>
                <li>Help Center</li>
                <li>Gifts Cards</li>
                <li>Media Center</li>
                <li>Jobs</li>
                <li>Terms of Use</li>
                <li>Privacy</li>
                <li>Cookie Preference</li>
                <li>Corporate Information</li>
                <li>Contact Us</li>
            </ul>
            <p className="copyrigth-text">
                © 1997-2025 Netflix, Inc.
            </p>
        </div>
    )
}

export default Footer;