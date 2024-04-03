import React, { useEffect, useState } from 'react'
import { Routes, Route, Navigate } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './Pages/Home'
import Auth from './Pages/Auth'
import "./App.css"
import axios from 'axios'

const App = () => {


 
  axios.defaults.baseURL = "https://mern-server-h65f.onrender.com"
  // axios.defaults.baseURL = "http://localhost:4500"

   const token = localStorage.getItem("token")

  console.log(token)  

  return (
    <div>
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route
          path="/"
          element={token !== null ? <Home /> : <Navigate to="/auth" />}
        />
      </Routes>
    </div>
  )
}

export default App
