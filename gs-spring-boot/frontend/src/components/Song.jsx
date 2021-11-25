import React from 'react'
import { useNavigate, Link, } from "react-router-dom";
import PropTypes from 'prop-types';
import Songs from '../pages/Songs';


function Song(props) {

    const { songName, artistName, songUrl, songRating, songId  } = props


    async function DeleteSong(songId) {
        window.location.reload(false);
        let result=await fetch('http://localhost:8080/delete/' + songId, {
            method:'Delete'
        });
        result=await result.json();
        console.warn(result)
    }
    
    return (
        <div class="card">
            <div class="card-body">
                <h5 class="card-title" style={{color:"red"}}>{songName}</h5>

                <h4 class="card-title" style={{color:"red"}}>{artistName}</h4>

                <p class="card-text" style={{color:"red"}} >{songUrl}</p>

                <p class="card-text" style={{color:"red"}}>Rating {songRating}</p>

                <Link to={`/Home/`} class="btn btn-primary" >Add New Song</Link>

                <button className="btn btn-danger" onClick={() =>DeleteSong(songId)}>Delete</button>
                <Link to={`/songAdd/`} className="btn btn-secondary" onClick={() =>(songId)} >Edit Song</Link>
    </div>
    </div>
    

  );
  
}

Song.propTypes = {
    songName: PropTypes.string.isRequired,
    artistName: PropTypes.string.isRequired,
    songUrl: PropTypes.string.isRequired,
    songRating: PropTypes.number.isRequired,
    songId: PropTypes.number.isRequired,

}

export default Song
