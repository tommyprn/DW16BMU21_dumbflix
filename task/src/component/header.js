import React, {Component, useState} from 'react';
import logo from '../logo.png';
import '../App.css';
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
                    <p className="tombol-baru">New on Dumbflix? Make account</p>
                </Form>
            </Modal.Body>
        </Modal>
      </>
    );
  }

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
                    <p className="tombol-baru">Already have an account? Login</p>
                </Form>
            </Modal.Body>
        </Modal>
      </>
    );
  }

class Header extends Component {
    render(){
        return (
                <div className="header">
                    <div className="header-left">
                        <Nav.Link href="">Home</Nav.Link>
                        <Nav.Link href="">TV Shows</Nav.Link>
                        <Nav.Link href="">Movies</Nav.Link>
                    </div>

                    <div className="header-middle">
                        <img src={logo} alt="Logo"/>
                    </div>
                    
                    <div className="header-right">
                        <Register />
                        <Login/>
                    </div>
                </div>
        )
    }
}   

export default Header;