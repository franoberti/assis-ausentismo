import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from '../components/Home/Home'

import Login from '../components/Login/Login'

const Rutas = () => {
  return (
    <BrowserRouter>
      
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/home' element={<Home/>} />
      </Routes>
      
    </BrowserRouter>
  )
}

export default Rutas
