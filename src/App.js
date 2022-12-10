import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './Componets/Dashboard';
import Login from './Componets/Login';
import SignIn from './Componets/SignIn';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/SignIn' element={<SignIn/>} />
        <Route path='/Dashboard' element={<Dashboard/>} />
      </Routes>
      </BrowserRouter>
      {/* <Dashboard/> */}
      {/* <Login/> */}
    </div>
  );
}

export default App;
