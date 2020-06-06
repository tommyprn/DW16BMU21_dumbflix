import React, {Component, useState} from 'react';
import './loginmodul.css';
import{
    Link,
} from "react-router-dom";
import {Nav,Modal, Button, FormControl, Form, ModalDialog} from 'react-bootstrap';
  

function Login() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <button onClick={handleShow} className="login">
          Login
        </button>
  
        <Modal size="sm" show={show} onHide={handleClose}>
            <Modal.Body className="modaldasar">
                <Modal.Title>
                    <p className="judulmodal">
                        Login 
                    </p>
                </Modal.Title>
                <Form>
                    <Form.Group controlId="formBasicEmail" className="email">
                        <Form.Control type="email" placeholder="Email" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword" className="pass">
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                    <button type="submit" className="tombollogin" >
                        Login
                    </button>
                    <p className="kalimat-baru">New on Dumbflix?
                    <Link to="/Regis" className="redirect-regis">Click Here</Link>
                    </p>
                </Form>
            </Modal.Body>
        </Modal>
      </>
    );
  }
  export default Login;