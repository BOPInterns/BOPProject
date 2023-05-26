import React, { useState } from 'react';
import { Login } from './Components/Login.js';
import { Register } from './Components/Register.js';
import { Routes, Route } from 'react-router-dom';
import { LandingPage } from './Components/LandingPage.js';
import { ForgotPassword } from './Components/ForgotPassword.js';

const App = () => {
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