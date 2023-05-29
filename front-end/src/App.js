import React, { useState } from 'react';
import { Login } from './Components/Login.js';
import { Register } from './Components/Register.js';
import { Routes, Route } from 'react-router-dom';
import { LandingPage } from './Components/LandingPage.js';
import { ForgotPassword } from './Components/ForgotPassword.js';
import { CampaignCenter } from './Components/CampaignCenter.js'
import { CreateCampaignS0 } from './Components/Create Campaign/CreateCampaignS0.js';
import { CreateCampaignS1 } from './Components/Create Campaign/CreateCampaignS1.js';
import { CreateCampaignS2 } from './Components/Create Campaign/CreateCampaignS2.js';
import { CreateCampaignS3 } from './Components/Create Campaign/CreateCampaignS3.js';
import { CreateCampaignS4 } from './Components/Create Campaign/CreateCampaignS4.js';
import { CreateCampaignS5 } from './Components/Create Campaign/CreateCampaignS5.js';
import { CreateCampaignS6 } from './Components/Create Campaign/CreateCampaignS6.js';
import { ResetPassword } from './Components/ResetPassword.js';    //only added for testing and might want to remove later for security differences

const App = () => {
  return (
     <>
        <Routes>
           <Route path="/" element={<LandingPage />} />
           <Route path="/Login" element={<Login />} />
           <Route path="/Register" element={<Register />} />
           <Route path="/forgotpassword" element={<ForgotPassword />} />
           <Route path="/campaign-center" element={<CampaignCenter />} />
           <Route path="/create-campaign-introduction" element={<CreateCampaignS0 />} />
           <Route path="/create-campaign-step-1" element={<CreateCampaignS1 />} />
           <Route path="/create-campaign-step-2" element={<CreateCampaignS2 />} />
           <Route path="/create-campaign-step-3" element={<CreateCampaignS3 />} />
           <Route path="/create-campaign-step-4" element={<CreateCampaignS4 />} />
           <Route path="/create-campaign-step-5" element={<CreateCampaignS5 />} />
           <Route path="/create-campaign-step-6" element={<CreateCampaignS6 />} />

           <Route path="/resetpassword" element={<ResetPassword />} />
        </Routes>
     </>
  );
 };
export default App;