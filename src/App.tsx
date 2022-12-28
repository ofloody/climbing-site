import React from 'react';
import logo from './logo.svg';
import './App.css';
import StatsMainApp from './pages/stats-main';
import Login from './pages/login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LogSession from './pages/log-session';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      </div>

      <Routes>
        <Route path='/' element={<StatsMainApp/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/log-session' element={<LogSession/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
