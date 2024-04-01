import React, { useState } from 'react'
import Signup from '../components/Signup'
import Login from '../components/Login'

const Auth = () => {

const [toggleAuth, settoggleAuth] = useState(true)

  if(toggleAuth === false){
    return <Signup settoggleAuth = {settoggleAuth} />
  }
  return (
    <Login settoggleAuth = {settoggleAuth} />
  )
}

export default Auth