import React, { useState } from "react";
import axios from 'axios'
import { Link } from "react-router-dom";
import Songs from "./Songs";
 

 
const Home = () => {
  const [songs, setSongs] = useState({
    song_name: "",
    ArtistName: "",
    SongUrl: ""
  });
 
  const { song_name, ArtistName, SongUrl} = songs;
   
  const onInputChange = e => {
    setSongs({ ...songs, [e.target.name]: e.target.value });
  };
   
  const onSubmit = async e => {
    e.preventDefault();
    await axios.post("http://localhost:8080/hw",songs);
    alert('Song Inserted');

  };

  
  return (
   
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-lg-8 col-xl-6">
          <div class="card rounded-3">
            <div class="card-body p-4 p-md-5">
              <h3 class="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">Add New Song</h3>
  
              <form class="px-md-2">
  
                <div class="form-outline mb-4">
                  <input type="text" id="form3Example1q" class="form-control" />
                  <label class="form-label" for="form3Example1q">Song Name</label>
                </div>
  
                <div class="row">
                  <div class="col-md-6 mb-4">
  
                    <div class="form-outline datepicker">
                      <input
                        type="text"
                        class="form-control"
                        id="exampleDatepicker1"
                      />
                      <label for="exampleDatepicker1" class="form-label">Artist Name</label>
                    </div>
  
                  </div>
                 
                </div>
  
                <div class="mb-4">
  
                
  
                </div>
  
                <div class="row mb-4 pb-2 pb-md-0 mb-md-5">
                  <div class="col-md-6">
  
                    <div class="form-outline">
                      <input type="text" id="form3Example1w" class="form-control" />
                      <label class="form-label" for="form3Example1w">Song Url</label>
                    </div>
  
                  </div>
                </div>
  
                <Link to={`/Songs/`}  className="btn btn-primary btn-block" >Add Song</Link>
  
              </form>
  
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};
 
export default Home;