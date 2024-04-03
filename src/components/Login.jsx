import axios from 'axios';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import { loginUser } from './ApiHelpers';

const Login = ({ settoggleAuth }) => {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [loader, setLoader] = useState(false)

   const nav = useNavigate()

   const handleSubmit = async (event) => {
      event.preventDefault();
      setLoader(true)
      loginUser(email, password).then((res) => {
         console.log(res)
         if(res?.status === 0){
            setLoader(false)
            alert(res?.message)
         }
         else {
            localStorage.setItem("token", res?.token)
            localStorage.setItem("userId", res?.userInfo?.id)
            localStorage.setItem("userName", res?.userInfo?.name)
            nav("/")
            setLoader(false)
         } 
      })
   };

   return (
      <div style={{ height: "18vh", marginTop: "100px" }} className='row px-3 d-flex flex-col align-items-center justify-content-center'>

         <h2 className='text-center' style={{ color: "#0096FF" }}>Login</h2>

         <Form onSubmit={handleSubmit} className='col-sm-10 col-md-6 col-lg-4 m-auto'>
            <Form.Group className="mb-3" controlId="formBasicEmail">
               <Form.Label>Email address</Form.Label>
               <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
               />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
               <Form.Label>Password</Form.Label>
               <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
               />
            </Form.Group>


            <div className='d-flex justify-content-around align-items-center'>
               <Button variant="primary" type="submit">
                  {loader ?
                     <span className='d-flex justify-content-center align-items-center gap-2'>
                        <div className="loader"> </div>
                        <small>please wait </small>
                     </span>
                     : 'Login'}
               </Button>

               <p>Dont have and account? <Link style={{ color: "#0096FF" }} onClick={() => settoggleAuth(false)}>please signup</Link> </p>
            </div>
         </Form>
      </div>

   );
};

export default Login;
