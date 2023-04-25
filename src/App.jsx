import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Main from './components/main';
import Navbar from './components/Navbar';
import Register from './components/Register';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={ <Main /> } />
        <Route path='/login' element={ <Login /> } />
        <Route path='/register' element={ <Register /> } />
      </Routes>
    </div>
  )
}

export default App