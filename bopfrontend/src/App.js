import React, { useState } from 'react';
import { Login } from './Components/Login.js';
import { Register } from './Components/Register.js';

function App() {
  const [currentForm, setCurrentFrom] = useState('login');
  return (
    <div className="App">
      {
        currentForm === "login" ? <Login /> : <Register />
      }
    </div>
  );
}
export default App;