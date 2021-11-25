import {
    Routes,
    Route
  } from "react-router-dom";

import Login from "../pages/Login";
import Home from "../pages/Home";
import Song from "../pages/SongAdd";
import Songs from "../pages/Songs";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/songs" element={<Songs />} />
            <Route path="/songs/:id" element={<Song />} />
            <Route path="/SongAdd/" element={<Song />} />
            <Route path="/home/editID/:id" element={<Home />} />
            <Route
                path="*"
                element={
                    <main style={{ padding: "1rem" }}>
                    <p>There's nothing here!</p>
                    </main>
                }

                
            />

        </Routes>
    )
}

export default AppRoutes