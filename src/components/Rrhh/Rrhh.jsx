import React from 'react'
import Navbar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import './style.css'

const Rrhh = (props) => {
    return (
        <>
            <Navbar  setUser={props.setUser}/>

            <Footer/>
        </>
    )
}

export default Rrhh