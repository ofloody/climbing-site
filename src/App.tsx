import React from 'react';
import logo from './logo.svg';
import './App.css';
import StatsMainApp from './pages/stats-main';
import Login from './pages/login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <StatsMainApp />
      </div>

      <Routes>
        <Route path='/' element={<StatsMainApp/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
