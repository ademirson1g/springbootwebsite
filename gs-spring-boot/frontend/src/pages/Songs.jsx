import React, { useState, useEffect } from 'react'
import { useNavigate, Link } from "react-router-dom";
import Song from '../components/Song';
import { getSongs } from '../services/songsService';


import axios from "axios"

function Songs() {

    const [songs, setSongs] = useState([])

    useEffect(() => {
        getSongs(setSongs) 
    }, [])
    

    

    return (
      
        <div style={{color:'black', textAlign:"center"}}>
            <h1>Your Music App List</h1>
       
            {
                
                songs && songs.length && songs.map(song => (
                    <>
                        <Song
                            songName={song.song_name}
                            artistName={song.artist_name}
                            songUrl={song.song_url}
                            songRating={song.song_rating}
                            songId={song.song_id}
                        />                  
                    </>
                   

                ))
            }

</div>
            
       
    )
}

export default Songs
