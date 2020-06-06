import React, {Component, useState} from 'react';
import './regismodul.css';
import{
    Link,
} from "react-router-dom";
import {Modal, Button, FormControl, Form, ModalDialog} from 'react-bootstrap';


function Register() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <button onClick={handleShow} className="regis">
          Register
        </button>
  
        <Modal size="sm" show={show} onHide={handleClose}>
            <Modal.Body className="modaldasar">
                <Modal.Title>
                    <p className="judulmodal">
                        Register
                    </p>
                </Modal.Title>
                <Form>
                    <Form.Group controlId="formBasicEmail" className="email">
                        <Form.Control type="email" placeholder="Email" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword" className="email">
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                    <Form.Group controlId="formBasicName" className="email">
                        <Form.Control placeholder="Full Name" />
                    </Form.Group>

                    <Form.Group controlId="formGridState" className="email">
                        <Form.Control as="select" defaultValue="Gender">
                            <option>Gender</option>
                            <option>Male</option>
                            <option>Female</option>
                        </Form.Control>
                    </Form.Group>


                    <Form.Group controlId="formBasicEmail" className="email">
                        <Form.Control type="number" placeholder="Phone Number" />
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail" className="pass">
                        <Form.Control type="textarea" placeholder="Address" />
                    </Form.Group>

                    <button type="submit" className="tombollogin" >
                        Register
                    </button>
                    <p className="kalimat-baru">Already have an account?
                    <Link to="/Login" className="redirect-login" >Login Here</Link>
                    </p>
                </Form>
            </Modal.Body>
        </Modal>
      </>
    );
  }
export default Register;