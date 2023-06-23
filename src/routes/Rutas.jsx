import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from '../components/Home/Home'
import SignUp from '../components/SignUp/SignUp'
import Login from '../components/LogIn/Login'
import Fabrica from '../components/Fabrica/Fabrica'
import Guardia from '../components/Guardia/Guardia'
import Clinica from '../components/Clinica/Clinica'
import Reportes from '../components/Reportes/Reportes'
import Rrhh from '../components/Rrhh/Rrhh'
import { useState } from 'react'

const Rutas = () => {

  const [user, setUser] = useState(null)



  return (
    <BrowserRouter>
      
      <Routes>
        <Route path='/' element={user? <Home setUser={setUser}/>  : <Login setUser={setUser}/>}/>
        <Route path='/singUp' element={<SignUp setUser={setUser}/>} />
        <Route path='/guardia' element={<Guardia setUser={setUser}/>} />
        <Route path='/fabrica' element={<Fabrica setUser={setUser}/>} />
        <Route path='/clinica' element={<Clinica setUser={setUser}/>} />
        <Route path='/reportes' element={<Reportes setUser={setUser}/>} />
        <Route path='/rrhh' element={<Rrhh setUser={setUser}/>} />

      </Routes>
      
    </BrowserRouter>
  )
}

export default Rutas

