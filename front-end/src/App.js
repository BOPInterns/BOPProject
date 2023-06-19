import { React } from 'react';
import { Login } from './Components/Login.js';
import { Register } from './Components/Register.js';
import { Routes, Route } from 'react-router-dom';
import { LandingPage } from './Components/LandingPage.js';
import { ForgotPassword } from './Components/ForgotPassword.js';
import { ResetPassword } from './Components/ResetPassword.js'
import { CampaignCenter } from './Components/CampaignCenter/CampaignCenter.js';
import { MyAccount } from './Components/MyAccount.js';
import { CreateCampaignS0 } from './Components/CreateCampaign/CreateCampaignS0.js';
import { CreateCampaignS1 } from './Components/CreateCampaign/CreateCampaignS1.js';
import { CreateCampaignS2 } from './Components/CreateCampaign/CreateCampaignS2.js';
import { CreateCampaignS3 } from './Components/CreateCampaign/CreateCampaignS3.js';
import { CreateCampaignS4 } from './Components/CreateCampaign/CreateCampaignS4.js';
import { CreateCampaignS5 } from './Components/CreateCampaign/CreateCampaignS5.js';
import { CreateCampaignS6 } from './Components/CreateCampaign/CreateCampaignS6.js';
import { KYCVerificationAbout } from './Components/KYCVerification/KYCVerificationAbout.js';
import { KYCVerificationForm } from './Components/KYCVerification/KYCVerificationForm.js';
import { KYCVerificationSubmit } from './Components/KYCVerification/KYCVerificationSubmit.js';
import { RegisterSuccess  } from './Components/RegisterSuccess.js';
import { MarketPlace } from './Components/MarketPlace/MarketPlace.js';
import { MarketPlaceFilters } from './Components/MarketPlace/MarketPlaceFilters.js';
import { OrgPage } from './Components/OrganizationCenter/OrgPage.js';
import { SolutionPage } from './Components/SolutionCenter/SolutionPage.js';
import Private from './Components/Private.js';


const App = () => {
   const loginState = window.localStorage.getItem('loginState');
  return (
     <>
        <Routes>
         <Route element={<Private />}>
           <Route path="/" element={<LandingPage />} />
           <Route path="/my-account" element={<MyAccount />} />
           <Route path="/create-campaign-step-1" element={<CreateCampaignS1 />} />
           <Route path="/create-campaign-step-2" element={<CreateCampaignS2 />} />
           <Route path="/create-campaign-step-3" element={<CreateCampaignS3 />} />
           <Route path="/create-campaign-step-4" element={<CreateCampaignS4 />} />
           <Route path="/create-campaign-step-5" element={<CreateCampaignS5 />} />
           <Route path="/create-campaign-step-6" element={<CreateCampaignS6 />} />
           <Route path="/kyc-verification-about" element={<KYCVerificationAbout />} />
           <Route path="/kyc-verification-form" element={<KYCVerificationForm />} />
           <Route path="/kyc-verification-submitted" element={<KYCVerificationSubmit />} />
           <Route path="/market-place/filters" element={<MarketPlaceFilters />} />
         </Route>
           <Route path="/org-page" element={<OrgPage />} />
           <Route path="/solution-page" element={<SolutionPage />} />
           <Route path="/market-place" element={<MarketPlace />} />
           <Route path="/campaign-center" element={<CampaignCenter />} />
           <Route path="/login" element={<Login />} />
           <Route path="/register" element={<Register />} />
           <Route path="/register-success" element={<RegisterSuccess />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/resetpassword/:token" element={<ResetPassword />} />
           <Route path="/create-campaign-introduction" element={<CreateCampaignS0 />} />
        </Routes>
     </>
  );
 };
export default App;