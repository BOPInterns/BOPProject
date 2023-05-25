import React, { useState } from 'react';
import { Login } from './Components/Login.js';
import { Register } from './Components/Register.js';
import { Routes, Route } from 'react-router-dom';
import { LandingPage } from './Components/LandingPage.js';
import {ForgotPassword} from './Components/ForgotPassword.js';
import { useEffect } from 'react';
import jwt_decode from 'jwt-decode';

const App = () => {
   
   function handleCallbackResponse(response){
      console.log("Encoded JWT ID token: " + response.credential);
      var userObject = jwt_decode(response.credential);
      console.log(userObject);
   }
   
   useEffect(() => {
      /* global google */
      google.accounts.id.initialize({
         client_id: "818541063177-iqosu6guuons2sjudmsrt8hr010102qq.apps.googleusercontent.com",
         callback: handleCallbackResponse
      });
      
      google.accounts.id.renderButton(
         document.getElementById('signInGoogle'),
         {theme: "outline", size: "large"}
      );
      
      google.accounts.id.prompt();
   }, []);
   
  return (
     <>
        <Routes>
           <Route path="/" element={<LandingPage />} />
           <Route path="/Login" element={<Login />} />
           <Route path="/Register" element={<Register />} />
           <Route path="/forgotpassword" element={<ForgotPassword />} />
        </Routes>
     </>
  );
 };
export default App;