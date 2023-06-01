import React from 'react'
import './styles.css'
import logo from '../../assets/logoAssis.png'
import {NavLink} from 'react-router-dom'


const SignUp = () => {
  return (
    <div>
      <div className='loginContainer'>
        <div className='inv'>
          <div className='inv d-flex align-items-center justify-content-center'>
            <img src={logo} alt="logo" className='inv' width={70} style={{margin: '8px', paddingTop: '30px'}} />
          </div>
          <h1 className='inv text-center'>Assis Software</h1>
        </div>

        <div className='inv d-flex align-items-center justify-content-center' style={{height: '350px'}}>


          <div className='row inv'>
            <div className='col-12 inv'>
              <input 
                  type="text" 
                  name="name" 
                  placeholder="name*" 
                  required 
                  className='form-control' 
                  style={{marginTop: '10px'}}
              />
            </div>
            
            <div className='col-12 inv'>
              <input 
                  type="text" 
                  name="lastName" 
                  placeholder="last name*" 
                  required 
                  className='form-control' 
                  style={{marginTop: '10px'}}
              />
            </div>

            <div className='col-12 inv'>
              <input 
                  type="text" 
                  name="username" 
                  placeholder="email*" 
                  required 
                  className='form-control' 
                  style={{marginTop: '10px'}}
              />
            </div>

            <div className='col-12 inv'>
              <input 
                  type="password" 
                  name="password" 
                  placeholder="password*" 
                  required 
                  className='form-control' 
                  style={{marginTop: '10px'}}
              />
            </div>

            <div className='col-12 inv'>
              <input 
                  type="password2" 
                  name="repeat password" 
                  placeholder="password*" 
                  required 
                  className='form-control' 
                  style={{marginTop: '10px'}}
              />
            </div>

            
            <div className='col-12 inv'>
              <button className=' col-12 btn btn-success' style={{marginTop: '10px'}}>
                Sign Up
              </button>
            </div>

            <NavLink to={'/'} className='col-12 inv'>
                <div className='col-12 inv'>
                <button className=' col-12 btn btn-secondary' style={{marginTop: '10px'}}>
                    Cancel
                </button>
                </div>
            </NavLink>

          </div>
          
          

        </div>
        

      
      </div>
    </div>
  )
}

export default SignUp
