import axios from "axios"

import { API_URL } from "../config"

export const getSongs = (setSongs) => {
    axios.get(`${API_URL}/hw`).then(response => {
        console.log(response.data)
        setSongs(response.data)
    }).catch(error => {
        console.log(error)
    })
}