import React, { useState } from 'react'
import './styles.css'
import logo from '../../assets/logoAssis.png'
import { NavLink } from 'react-router-dom'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import axios from 'axios';


const SignUp = () => {

  const [show, setShow] = useState(false);
  const [errorMail, setErrorMail] = useState("none")

  const handleClose = () => {
    setShow(false)
  };

  const submitHandler = async (e) => {
    e.preventDefault()
    const name = e.target.nameField.value
    const lastName = e.target.lastNameField.value
    const email = e.target.emailField.value
    const pass1 = e.target.pass1Field.value
    const pass2 = e.target.pass2Field.value

    if (pass1 === pass2) {
      console.log(name, lastName, email, pass1, pass2)
      try {
        const response = await axios.post('http://localhost:3001/api/users', {
            name: name,
            lastName: lastName,
            email: email,
            password: pass1,
          });
          console.log("El post se hizo")
          console.log(response.data);
          setShow(true);
      } catch (error) {
          console.error('Error al obtener los datos:', error);
          if(error.response.data.msg === "Something went wrong :("){
            setErrorMail("")
          }
      }
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
            <NavLink to={'/'} className='inv'>
              <Button variant="primary" onClick={handleClose}>
                  Close
              </Button>
            </NavLink>
        </Modal.Footer>
      </Modal>
      :
      
      <div>
        <div className='signUpContainer'>
          <div className='inv'>
            <div className='inv d-flex align-items-center justify-content-center'>
              <img src={logo} alt="logo" className='inv' width={70} style={{ margin: '8px', paddingTop: '30px' }} />
            </div>
            <h1 className='inv text-center'>Assis Solutions</h1>
          </div>

          <div className='col-12 inv' style={{display: errorMail}}>
            <p className='inv text-center' style={{marginBottom: '0px' , fontSize: '12px', color: 'rgb(223, 57, 57)'}}>
              Email already in use
            </p>
          </div>

          <form onSubmit={submitHandler} className='inv'>
            <div className='inv d-flex align-items-center justify-content-center'>
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

              </div>
            </div>
          </form>

          <NavLink to={'/'} className='col-12 inv'>
          <div className='col-12 inv'>
            <button className=' col-12 btn btn-secondary' style={{ marginTop: '10px' }}>
              Cancel
            </button>
          </div>
          </NavLink>
        </div>
      </div>
      }

    </>

  )
}

export default SignUp
