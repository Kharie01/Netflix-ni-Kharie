import React from "react";
import './Home.css';
import NavBar from '../../componets/navbar/Navbar';
import Footer from '../../componets/Footer/Footer';
import Hero from '../../assets/banner.jpg';
import Herotitle from '../../assets/title.png';
import PlayIcons from '../../assets/play_icon.png';
import InfoIcon from '../../assets/info_icon.png';
import Titlecards from '../../componets/TitleCard/TitleCards';




const Home = () => {
    return(
        <div className="home">
            <NavBar/>
            <div className="Hero">
                <img src={Hero} alt="pictureBanner" className="banner-img" />
                <div className="hero-caption">
                    <img src={Herotitle} alt="caption-img" />
                    <p>Iron Man, Thor, the Hulk and the rest of the Avengers unite to battle their most powerful enemy yet -- the evil Thanos. 
                        On a mission to collect all six Infinity Stones, Thanos plans to use the artifacts to inflict his twisted will on reality. 
                        The fate of the planet and existence itself has never been more uncertain as everything the Avengers have fought for has led up to this moment.
                    </p>
                    <div className="hero-btns">
                        <button className="btn"><img src={PlayIcons} alt="" />Play</button>
                        <button className="btn dark-btn"><img src={InfoIcon} alt="" />More Info</button>
                    </div>
                    <div className="hide-card">
                        <Titlecards/>   
                    </div>
                    
                </div>
            </div>
            <div className="more-cards">
                <Titlecards title={"Blockbuster Movie"} category={"top_rated"}/>
                <Titlecards title={"Only on Netflix"} category={"popular"}/>
                <Titlecards title={"Upcoming"} category={"upcoming"}/>
                <Titlecards title={"For you"} category={"now_playing"}/>
            </div>
            <Footer/>
        </div>
        
    )
}

export default Home;