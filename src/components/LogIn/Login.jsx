import React, { useState } from 'react'
import './style.css'
import logo from '../../assets/logoAssis.png'
import {NavLink} from 'react-router-dom'
import axios from 'axios';

const Login = (props) => {

  const [isError, setIsError] = useState("none")

  const userLocalStorage = localStorage.getItem('usuario')
  const usuario = JSON.parse(userLocalStorage)
  if(usuario !== null || usuario !== undefined){
    props.setUser(usuario)
  }

  const submitHandler = async (e) => {
    e.preventDefault()
    const email = e.target.emailField.value
    const password = e.target.passField.value
    try {
      const response = await axios.get('http://localhost:3001/api/users', {
        params: {
          email: email,
          pass: password,
        },
      })
      const user = response.data.data[0]
      localStorage.setItem('usuario', JSON.stringify(user))
      props.setUser(user)

    } catch (error) {
      console.error('Error al obtener los datos:', error);
      if(error.response.data.msg === "something went wrong :("){
        setIsError("")
      }
    }

  }


  return (

    <>
        <div>
          <div className='loginContainer'>
            <div className='inv'>
              <div className='inv d-flex align-items-center justify-content-center'>
                <img src={logo} alt="logo" className='inv' width={70} style={{margin: '8px', paddingTop: '30px'}} />
              </div>
              <h1 className='inv text-center'>Assis Solutions</h1>
            </div>

            <form onSubmit={submitHandler} className='inv'>

              <div className='inv d-flex align-items-center justify-content-center' >


                <div className='row inv'>
                  <div className='col-12 inv'>
                    <input 
                        type="email"
                        id='emailField'
                        name="email" 
                        placeholder="email*" 
                        required 
                        className='form-control' 
                        style={{marginTop: '10px'}}
                    />
                  </div>
                  
                  <div className='col-12 inv'>
                    <input 
                        type="password"
                        id='passField'
                        name="password" 
                        placeholder="password*" 
                        required 
                        className='form-control' 
                        style={{marginTop: '10px'}}
                    />
                  </div>

                  <div className='col-12 inv' style={{display: isError}}>
                    <p className='inv text-center' style={{marginTop: '10px', marginBottom: '0px', fontSize: '12px', color: 'rgb(223, 57, 57)'}}>
                      Incorrect Username or Password
                    </p>
                  </div>


                  <div className='col-12 inv'>
                    <button type='submit' className=' col-12 btn btn-success' style={{marginTop: '10px'}}>
                      Log In
                    </button>
                  </div>
                </div>
              </div>
            </form>
            <div className='col-12 inv'>
              <NavLink to={'/singUp'} className='inv'>
                <button /* onClick={() => setIsRegistering(!isRegistering)} */ className=' col-12 btn btn-secondary' style={{marginTop: '10px'}}>
                  Sign Up
                </button>
              </NavLink>
            </div>

            <div className='col-12 inv'>
              <p className='inv text-center' style={{marginTop: '10px', fontSize: '12px', color: '#3dc9c8', cursor: 'pointer'}}>Forgot Username or Password</p>
            </div>
          </div>
        </div>
    </>
  )
}

export default Login
