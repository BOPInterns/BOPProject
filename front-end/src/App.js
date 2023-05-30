import React from 'react';
import { Login } from './Components/Login.js';
import { Register } from './Components/Register.js';
import { Routes, Route } from 'react-router-dom';
import { LandingPage } from './Components/LandingPage.js';
import { ForgotPassword } from './Components/ForgotPassword.js';
import { ResetPassword } from './Components/ResetPassword.js';    //only added for testing and might want to remove later for security differences

const App = () => {

  return (
     <>
        <Routes>
           <Route path="/" element={<LandingPage />} />
           <Route path="/Login" element={<Login />} />
           <Route path="/Register" element={<Register />} />
           <Route path="/forgotpassword" element={<ForgotPassword />} />
           <Route path="/get-reset-link" element={<ResetPassword />} />
        </Routes>
     </>
  );
 };
export default App;