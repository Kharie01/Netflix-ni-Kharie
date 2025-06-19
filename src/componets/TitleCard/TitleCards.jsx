import React, { useEffect, useRef, useState } from "react";
import './TitleCards.css';
import { Link } from "react-router-dom";


const TitleCards = ({title, category}) => {
    const [apiData, setApiData] = useState([]);
    const cardsRef = useRef();

    const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNjRjNmUyOWYxNjg2NWU2MjE0MjkwZTIwZWRiYmVkZiIsIm5iZiI6MTc1MDE0MzQ0Ni43NTcsInN1YiI6IjY4NTExMWQ2MmU0NjdhNjAxOWJiZDY2NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.03Y0YVCBJGBfSufLimC2hHiQ5j_SBEq3lo2PctNdaAo'
    }
    };

    const handleWheel = (event) =>{
        event.preventDefault();
        cardsRef.current.scrollLeft += event.deltaY;
    }

    useEffect(() => {

        fetch(`https://api.themoviedb.org/3/movie/${category ? category:"now_playing"}?language=en-US&page=1`, options)
        .then(res => res.json())
        .then(res => setApiData(res.results))
        .catch(err => console.error(err));

        cardsRef.current.addEventListener('wheel', handleWheel);
    },[])
    
    return (
        <div className="titlecards">
            <h2>{title?title:"Popular on Netflix"}</h2>
             <div className="card-list" ref={cardsRef}>
                {apiData.map((card, index) => {
                    return <Link to = {`/player/${card.id}`}className="card" key={index}>
                        <img src={`https://image.tmdb.org/t/p/w500/`+ card.poster_path} alt="poster" />
                        <p>{card.original_title}</p>
                    </Link>
                })}
             </div>
        </div>
    )
}

export default TitleCards;