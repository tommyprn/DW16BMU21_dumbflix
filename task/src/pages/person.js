import React, {Component} from 'react';
import './person.css';
import {FormControl, Form} from 'react-bootstrap';

class Person extends Component {
    render(){
        return (
            <div className="person">  
                <Form className="form-profil">
                    <p className="ket">Email</p>
                   
                </Form>
            </div>    
        )
    }
}
  
export default Person;   