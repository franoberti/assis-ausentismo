import React from 'react'
import Navbar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import './style.css'

const Guardia = (props) => {
    return (
        <>
            <Navbar setUser={props.setUser}/>

            <Footer/>
        </>
    )
}

export default Guardia
