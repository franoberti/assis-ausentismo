import React from 'react'
import Navbar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import './style.css'

const Reportes = (props) => {
    return (
        <>
            <Navbar  setUser={props.setUser}/>

            <Footer/>
        </>
    )
}

export default Reportes