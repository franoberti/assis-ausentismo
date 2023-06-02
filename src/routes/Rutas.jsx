import React, {useEffect} from 'react'
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
import {app} from "../services/index.js"

const Rutas = () => {

  const [user, setUser] = useState(null)
  useEffect(()=>{

    app.auth().onAuthStateChanged((firebaseUser) => {
      console.log("ya tienes sesion iniciada con: ", firebaseUser)
      setUser(firebaseUser)
    } )

  } , [])

  return (
    <BrowserRouter>
      
      <Routes>
        <Route path='/' element={user? <Home/> : <Login setUser={setUser}/>}/>
        {/* <Route path='/home' element={<Home/>} /> */}
        {/* <Route path='/register' element={<SignUp/>} /> */}
        <Route path='/guardia' element={<Guardia/>} />
        <Route path='/fabrica' element={<Fabrica/>} />
        <Route path='/clinica' element={<Clinica/>} />
        <Route path='/reportes' element={<Reportes/>} />
        <Route path='/rrhh' element={<Rrhh/>} />

      </Routes>
      
    </BrowserRouter>
  )
}

export default Rutas

