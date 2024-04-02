import React from 'react'
import Auth from "./Pages/Auth"
import {Routes , Route} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './Pages/Home'
import "./App.css"
import axios from 'axios'

const App = () => {

  axios.defaults.baseURL = "http://localhost:4500"
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </div>
  )
}

export default App