import React, { useEffect, useState } from "react";
import './PLayer.css';
import Backarrow from '../../assets/back_arrow_icon.png'
import { Link, useParams } from "react-router-dom";

const Player = () => {

    const { id } = useParams();

    const [apiData, setapiData] = useState({
        name: "",
        key: "",
        published_at: "",
        type: ""
    });

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNjRjNmUyOWYxNjg2NWU2MjE0MjkwZTIwZWRiYmVkZiIsIm5iZiI6MTc1MDE0MzQ0Ni43NTcsInN1YiI6IjY4NTExMWQ2MmU0NjdhNjAxOWJiZDY2NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.03Y0YVCBJGBfSufLimC2hHiQ5j_SBEq3lo2PctNdaAo'
        }
    };

    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
        .then(res => res.json())
        .then(response => setapiData(response.results[0]))
        .catch(err => console.error(err));
    },[id])

    return(
        <div className="player">
            <Link to = {`/`}> 
                <img src={Backarrow} alt="" />
            </Link>
            <iframe width="90%" height="90%"
            src={`https://www.youtube.com/embed/${apiData.key}`}
            title="Trailer"
            frameBorder="0"
            allowFullScreen
            ></iframe>
            <div className="player-info">
                <p>{apiData.published_at.slice(0,10)}</p>
                <p>{apiData.name}</p>
                <p>{apiData.type}</p>
            </div>
        </div>
    )
}

export default Player;