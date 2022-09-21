import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from '../components/Home/Home'
import Navbar from '../components/NavBar/NavBar'
import Footer from '../components/Footer/Footer'

const Rutas = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default Rutas
