import React from 'react'
import './styles.css'
import logo from '../../assets/logoAssis.png'

const Login = () => {
  return (
    <div>
      <div className='loginContainer'>
        <div className='inv'>
          <div className='inv d-flex align-items-center justify-content-center'>
            <img src={logo} alt="logo" className='inv' width={70} style={{margin: '8px', paddingTop: '30px'}} />
          </div>
          <h1 className='inv text-center'>ASSIS Software</h1>
        </div>

        <div className='inv d-flex align-items-center justify-content-center' style={{height: '300px'}}>


          <div className='row inv'>
            <div className='col-12 inv'>
              <input 
                  type="text" 
                  name="username" 
                  placeholder="username*" 
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
              <button className=' col-12 btn btn-success' style={{marginTop: '10px'}}>
                Login
              </button>
            </div>
            <div className='col-12 inv'>
              <button className=' col-12 btn btn-secondary' style={{marginTop: '10px'}}>
                Register
              </button>
            </div>

            <div className='col-12 inv'>
              <p className='inv text-center' style={{marginTop: '10px', fontSize: '12px', color: '#3dc9c8', cursor: 'pointer'}}>Forgot Username or Password</p>
            </div>

          </div>
          
          

        </div>
        

      
      </div>
    </div>
  )
}

export default Login
