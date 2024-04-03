import React, { useEffect } from 'react'
import { Routes, Route,useNavigate } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './Pages/Home'
import Auth from './Pages/Auth'
import "./App.css"
import axios from 'axios'

const App = () => {

  axios.defaults.baseURL = "https://mern-server-h65f.onrender.com"
  // axios.defaults.baseURL = "http://localhost:4500"

  const token = localStorage.getItem("token")

  const nav = useNavigate()

  useEffect(() => {
    if (token === 0 || token === undefined || token === null) {
     nav("/auth")
    }
  }, [])



  console.log("token" , token)

  return (
    <div>
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route
          path="/"
          element={<Home />}
        />
      </Routes>
    </div>
  )
}

export default App
