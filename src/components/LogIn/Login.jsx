import React, { useState } from 'react'
import './style.css'
import logo from '../../assets/logoAssis.png'
import {NavLink} from 'react-router-dom'
import SignUp from '../SignUp/SignUp'
import { app } from "../../services/index.js"

const Login = (props) => {

  const [isRegistering, setIsRegistering] = useState(false)

  const submitHandler = (e) => {
    e.preventDefault()
    const email = e.target.emailField.value
    const password = e.target.passField.value

    app.auth().signInWithEmailAndPassword(email, password).then((firebaseUser) => {
      console.log("Sesion iniciado con: ", firebaseUser.user)
      props.setUser(firebaseUser.user)
    })
  }

  return (

    <>
      {
        isRegistering?
        <SignUp setIsRegistering={setIsRegistering}/>
        :
        <div>
          <div className='loginContainer'>
            <div className='inv'>
              <div className='inv d-flex align-items-center justify-content-center'>
                <img src={logo} alt="logo" className='inv' width={70} style={{margin: '8px', paddingTop: '30px'}} />
              </div>
              <h1 className='inv text-center'>Assis Software</h1>
            </div>

            <form onSubmit={submitHandler} className='inv'>

              <div className='inv d-flex align-items-center justify-content-center' style={{height: '300px'}}>


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

                  <div className='col-12 inv'>
                    <button type='submit' className=' col-12 btn btn-success' style={{marginTop: '10px'}}>
                      Log In
                    </button>
                  </div>

                  <div className='col-12 inv'>
                    <button onClick={() => setIsRegistering(!isRegistering)} className=' col-12 btn btn-secondary' style={{marginTop: '10px'}}>
                      Sign Up
                    </button>
                  </div>


                  <div className='col-12 inv'>
                    <p className='inv text-center' style={{marginTop: '10px', fontSize: '12px', color: '#3dc9c8', cursor: 'pointer'}}>Forgot Username or Password</p>
                  </div>

                </div>

              </div>
            </form>
          </div>
        </div>
      }
    </>
  )
}

export default Login
