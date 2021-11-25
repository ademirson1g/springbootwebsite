import React from 'react'
import { useParams } from "react-router-dom";

function AddSong() {
    const params = useParams()

    return (
        <div>
            <h1>Song #{params.id}</h1>
        </div>
    )
}

export default AddSong
