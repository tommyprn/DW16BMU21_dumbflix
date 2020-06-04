import React, {useState, Component} from 'react';
import logo from '../logo.png';
import '../App.css';
import {Image, Col} from 'react-bootstrap';
import {Nav,Modal, ModalBody, ModalFooter, Button} from 'react-bootstrap';


function Example() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Launch demo modal
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

class Headlog extends Component {
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
                        <Image src="https://scontent-sin6-1.xx.fbcdn.net/v/t31.0-8/c327.0.653.653a/s851x315/27788476_1666342663405114_6988044667205497414_o.jpg?_nc_cat=111&_nc_sid=da31f3&_nc_eui2=AeHd8Q26p4qcZwig7VG9nrYWBcwA-R4HpB0FzAD5HgekHdT3BH6vgkYgRjuk9vMBtVPNsLB-0phz2m95knns0Uhn&_nc_ohc=Y-TIFjFf8NIAX-NGTKB&_nc_ht=scontent-sin6-1.xx&oh=3391fa28d5aa913252d95fdf37182869&oe=5EFE88B3" roundedCircle />
                    </div>
                </div>
        )
    }
}   

export default Headlog;