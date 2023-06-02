import React from 'react'
import './style.css'
import logo from '../../assets/logoAssis.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import {NavLink} from 'react-router-dom'
import { app } from "../../services/index.js"



const NavBar = () => {

  const logOut = ( ) => {
    app.auth().signOut()
  }

  const [popUpSesion, setSopUpSesion] = useState(false)

  const handlePopUpSesion = () => {
    if (popUpSesion === false){
      setSopUpSesion(true)
    }
    else{
      setSopUpSesion(false)
    }
  }



  return (
    <>
      <div className='d-flex justify-content-between align-items-center navBar'>
        <div className='d-flex justify-content-center align-items-center inv'>
          <div className='d-flex justify-content-center align-items-center inv' style={{width: '40px', height: '40px', cursor: 'pointer'}}>
            <FontAwesomeIcon className='inv icono' icon={faBars}/>
          </div>
          <NavLink to={'/'} style={{color: 'black'}} className='inv'>
            <div className='d-flex justify-content-center align-items-center inv'>
              <img src={logo} alt="logo" className='inv' width={38} style={{margin: '8px'}} />
              <h6 style={{marginBottom: '0px', textDecoration: 'none'}} className='inv' >Assis Software</h6>
            </div>
          </NavLink>
        </div>
        
        

        <div className='d-flex justify-content-center align-items-center inv'>
          <p className='inv text5' style={{marginBottom: '0px', marginRight: '10px'}}>nombre usuario</p>
          <div className='divisor'></div>
          <div className='inv' onClick={() => handlePopUpSesion()}><FontAwesomeIcon icon={faCircleUser} className='inv icono' style={{color: '#616161'}}/></div>
          
        </div>
      
      </div>


      {popUpSesion?
      <div className='popUpSesion'>
        <NavLink to={'/'} className='col-12 inv'>
              <div className='col-12 inv'>
                <button onClick={logOut} className=' col-12 btn btn-secondary' style={{marginTop: '5px'}}>
                  Log Out
                </button>
              </div>
        </NavLink>
      </div>
      :
      <></>

      }
      
    </>
    
  )
}

export default NavBar
