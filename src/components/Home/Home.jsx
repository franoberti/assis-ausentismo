import React from 'react'
import iconGuardia from '../../assets/iconGuardia.png'
import iconFabrica from '../../assets/IconFabrica.png'
import iconClinica from '../../assets/IconClinica.png'
import iconReporte from '../../assets/IconReporte.png'
import iconRrhh from '../../assets/iconRrhh.png'
import Navbar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import {NavLink} from 'react-router-dom'
import './style.css'

const Home = (props) => {

  const userLocalStorage = localStorage.getItem('usuario')
  const user = JSON.parse(userLocalStorage)
  const userName = user.name

  return (

    <>
      <Navbar setUser={props.setUser}/>

      <div>
        <div className='d-flex justify-content-center align-items-center'>
          <h2 className='titulo'>Hola {userName}, Bienvenido!</h2>
        </div>
        
        <div className='container'>

          <div className='row justify-content-center'>

            <div className='d-flex justify-content-center align-items-center inv col-md-5 col-12 botonMenu'>
              <NavLink to={'/fabrica'} style={{color: 'black'}} className='inv'>
                <div className='d-flex justify-content-center align-items-center inv'>
                  <img src={iconFabrica} alt="iconFabrica" className='inv' width={38} style={{margin: '8px'}} />
                </div>
                <h5 className='text-center inv' style={{marginTop: '1rem'}}>Fábrica</h5>
              </NavLink>
            </div>

            <div className='d-flex justify-content-center align-items-center inv col-md-5 col-12 botonMenu'>
              <NavLink to={'/rrhh'} style={{color: 'black'}} className='inv'>
                <div className='d-flex justify-content-center align-items-center inv'>
                  <img src={iconRrhh} alt="iconRrhh" className='inv' width={38} style={{margin: '8px'}} />
                </div>
                <h5 className='text-center inv' style={{marginTop: '1rem'}}>Recursos Humanos</h5>
              </NavLink>
            </div>

            <div className='d-flex justify-content-center align-items-center inv col-md-5 col-12 botonMenu'>
              <NavLink to={'/clinica'} style={{color: 'black'}} className='inv'>
                <div className='d-flex justify-content-center align-items-center inv'>
                  <img src={iconClinica} alt="iconClinica" className='inv' width={38} style={{margin: '8px'}} />
                </div>
                <h5 className='text-center inv' style={{marginTop: '1rem'}}>Clinica</h5>
              </NavLink>
            </div>

            <div className='d-flex justify-content-center align-items-center inv col-md-5 col-12 botonMenu'>
              <NavLink to={'/guardia'} style={{color: 'black'}} className='inv'>
                <div className='d-flex justify-content-center align-items-center inv'>
                  <img src={iconGuardia} alt="iconGuardia" className='inv' width={38} style={{margin: '8px'}} />
                </div>
                <h5 className='text-center inv' style={{marginTop: '1rem'}}>Guardia</h5>
              </NavLink>
            </div>


            <div className='d-flex justify-content-center align-items-center inv col-md-5 col-12 botonMenu'>
              <NavLink to={'/reportes'} style={{color: 'black'}} className='inv'>
                <div className='d-flex justify-content-center align-items-center inv'>
                  <img src={iconReporte} alt="iconReporte" className='inv' width={38} style={{margin: '8px'}} />
                </div>
                <h5 className='text-center inv' style={{marginTop: '1rem'}}>Reportes</h5>
             </NavLink>
            </div>

          </div>

        </div>

      </div>

      <Footer/>
    
    </>
    
    

    
  )
}

export default Home
