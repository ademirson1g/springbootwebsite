import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios"


const Login = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const navigate = useNavigate()

    const submitLogin = (data) => {
        axios.post('http://localhost:8080/login/', data
     
      ).then(response =>{
            console.log(response.data)
            navigate("/songs")
            }).catch(error => {
                console.log(error)})
    }
    return (

     
        <div class="container" >
            <div id="login-form-container" class="row">
                <div class="col-md-4 col-md-offset-4">
                    <div class="login-panel panel panel-default">
                        <div class="panel-heading" >
                            <h3 class="panel-title" >Please Sign In </h3>
                        </div>
                        <div class="panel-body">
                            
                            <form id="login-form" role="form" onSubmit={handleSubmit(submitLogin)}>
                                <fieldset>
                                    <div class="form-group" >
                                        <input class="form-control" placeholder="Username" {...register("username", { required: true })} type="username" autofocus />
                                    </div>
                                    {errors.username && <small style={{ color: "red" }}>Username is not valid</small>}
                                    <div class="form-group">
                                        <input class="form-control" placeholder="Password" {...register("password", { required: true })} type="password"/>
                                    </div>
                                   <div class="form-group">
                                      <button id="login-link" class="btn btn-lg btn-success btn-block">Login</button>
                                     </div>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            </div>
   
            

    )
}

export default Login
