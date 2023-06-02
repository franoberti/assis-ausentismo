import React, { useState } from 'react'
import './styles.css'
import logo from '../../assets/logoAssis.png'
import { NavLink, useParams } from 'react-router-dom'
import { app } from "../../services/index.js"
import Login from '../LogIn/Login'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


const SignUp = (props) => {

  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false)
    props.setIsRegistering(false)
  };
  const handleShow = () => setShow(true);

  const submitHandler = (e) => {
    e.preventDefault()
    const name = e.target.nameField.value
    const lastName = e.target.lastNameField.value
    const email = e.target.emailField.value
    const pass1 = e.target.pass1Field.value
    const pass2 = e.target.pass2Field.value

    if (pass1 === pass2) {
      console.log(name, lastName, email, pass1, pass2)
      app
        .auth()
        .createUserWithEmailAndPassword(email, pass1)
        .then((firebaseUser) => {
          console.log("usuario creado: ", firebaseUser)
        })
      
        setShow(true);

      
    }
    else {
      console.log("Las contrasenas no coinciden")
    }

  };

  return (

    <>
      {
      show?
      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
            <Modal.Title>Usuario Creado Con Exito</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            Muchas gracias por registrarte, ahora puedes inciar sesion y comenzar a gestionar tu fabrica!
        </Modal.Body>
        <Modal.Footer>
            <Button variant="primary" onClick={handleClose}>
                Close
            </Button>
        </Modal.Footer>
      </Modal>
      :
      <div>
        <div className='signUpContainer'>
          <div className='inv'>
            <div className='inv d-flex align-items-center justify-content-center'>
              <img src={logo} alt="logo" className='inv' width={70} style={{ margin: '8px', paddingTop: '30px' }} />
            </div>
            <h1 className='inv text-center'>Assis Software</h1>
          </div>

          <form onSubmit={submitHandler} className='inv'>
            <div className='inv d-flex align-items-center justify-content-center' style={{ height: '350px' }}>
              <div className='row inv'>
                <div className='col-12 inv'>
                  <input
                    type="text"
                    name="name"
                    id='nameField'
                    placeholder="name*"
                    required
                    className='form-control'
                    style={{ marginTop: '10px' }}
                  />
                </div>

                <div className='col-12 inv'>
                  <input
                    type="text"
                    name="lastName"
                    id='lastNameField'
                    placeholder="last name*"
                    required
                    className='form-control'
                    style={{ marginTop: '10px' }}
                  />
                </div>

                <div className='col-12 inv'>
                  <input
                    type="email"
                    name="email"
                    id='emailField'
                    placeholder="email*"
                    required
                    className='form-control'
                    style={{ marginTop: '10px' }}
                  />
                </div>

                <div className='col-12 inv'>
                  <input
                    type="password"
                    name="password"
                    id='pass1Field'
                    placeholder="password*"
                    required
                    className='form-control'
                    style={{ marginTop: '10px' }}
                  />
                </div>

                <div className='col-12 inv'>
                  <input
                    type="password"
                    name="repeat password"
                    id='pass2Field'
                    placeholder="password*"
                    required
                    className='form-control'
                    style={{ marginTop: '10px' }}
                  />
                </div>


                <div className='col-12 inv'>
                  <button  type='submit' className=' col-12 btn btn-success' style={{ marginTop: '10px' }}>
                    Sign Up
                  </button>
                </div>

                {/* <NavLink to={'/'} className='col-12 inv'> */}
                <div className='col-12 inv'>
                  <button onClick={() => props.setIsRegistering(false) } className=' col-12 btn btn-secondary' style={{ marginTop: '10px' }}>
                    Cancel
                  </button>
                </div>
                {/* </NavLink> */}
              </div>
            </div>
          </form>


        </div>
      </div>

      
      }

    </>

  )
}

export default SignUp
