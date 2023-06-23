import React from 'react'
import Navbar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import './style.css'

const Clinica = (props) => {
    return (
        <>
            <Navbar  setUser={props.setUser}/>

            <Footer/>
        </>
    )
}

export default Clinica
