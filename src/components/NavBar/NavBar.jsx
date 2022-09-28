import React from 'react'
import './style.css'
import logo from '../../assets/logoAssis.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'


const NavBar = () => {
  return (
    <div className='d-flex justify-content-between align-items-center navBar'>

      <div className='d-flex justify-content-center align-items-center inv'>
        <div className='d-flex justify-content-center align-items-center inv' style={{width: '40px', height: '40px', cursor: 'pointer'}}>
          <FontAwesomeIcon className='inv icono' icon={faBars}/>
        </div>
        <img src={logo} alt="logo" className='inv' width={38} style={{margin: '8px'}} />
        <h6 style={{marginBottom: '0px'}} className='inv'>Assis Software</h6>
      </div>

      <div className='d-flex justify-content-center align-items-center inv'>
        <p className='inv text5' style={{marginBottom: '0px', marginRight: '10px'}}>nombre usuario</p>
        <div className='divisor'></div>
        <FontAwesomeIcon icon={faCircleUser} className='inv icono' style={{color: '#616161'}}/>
      </div>
      
    </div>
  )
}

export default NavBar
