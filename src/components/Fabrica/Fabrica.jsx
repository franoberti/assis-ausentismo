import React from 'react'
import Navbar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import './style.css'

const Fabrica = (props) => {
    return (
        <>
            <Navbar  setUser={props.setUser}/>

            <Footer/>
        </>
    )
}

export default Fabrica
