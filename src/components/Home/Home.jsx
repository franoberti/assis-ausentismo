import React from 'react'
import iconGuardia from '../../assets/iconGuardia.png'
import iconFabrica from '../../assets/IconFabrica.png'
import iconClinica from '../../assets/IconClinica.png'
import iconReporte from '../../assets/IconReporte.png'
import Navbar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import './style.css'

const Home = () => {
  return (

    <>
      <Navbar/>

      <div>
        <div className='d-flex justify-content-center align-items-center'>
          <h2 className='titulo'>Hello, Welcome!</h2>
        </div>
        
      
        <div className='contenedor'>

          <div className='container'>

            <div className='row justify-content-center'>

              <div className='justify-content-center align-items-center inv col-md-3 col-10 botonMenu'>
                <div className='d-flex justify-content-center align-items-center inv'>
                  <img src={iconFabrica} alt="iconFabrica" className='inv' width={38} style={{margin: '8px'}} />
                </div>
                <h5 className='text-center inv' style={{marginTop: '1rem'}}>Fábrica</h5>
              </div>

              <div className='justify-content-center align-items-center inv col-md-3 col-10 botonMenu'>
                <div className='d-flex justify-content-center align-items-center inv'>
                  <img src={iconReporte} alt="iconReporte" className='inv' width={38} style={{margin: '8px'}} />
                </div>
                <h5 className='text-center inv' style={{marginTop: '1rem'}}>Reportes</h5>
              </div>

              <div className='justify-content-center align-items-center inv col-md-3 col-10 botonMenu'>
                <div className='d-flex justify-content-center align-items-center inv'>
                  <img src={iconClinica} alt="iconClinica" className='inv' width={38} style={{margin: '8px'}} />
                </div>
                <h5 className='text-center inv' style={{marginTop: '1rem'}}>Clinica</h5>
              </div>

              <div className='justify-content-center align-items-center inv col-md-3 col-10 botonMenu'>
                <div className='d-flex justify-content-center align-items-center inv'>
                  <img src={iconGuardia} alt="iconGuardia" className='inv' width={38} style={{margin: '8px'}} />
                </div>
                <h5 className='text-center inv' style={{marginTop: '1rem'}}>Guardia</h5>
              </div>

            </div>

          </div>

        </div>
      </div>

      <Footer/>
    
    </>
    
    

    
  )
}

export default Home
