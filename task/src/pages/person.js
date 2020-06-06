import React, {Component} from 'react';
import './person.css';
import {FormControl, Form} from 'react-bootstrap';
import PersonData from '../Data/persondata.json';

class Person extends Component {
    render(){
        return (
            <div className="person">  
                <Form className="form-profil">
                            {PersonData.map((personDetail, i)=>{
                                return(   
                                    <div className="grid-container">
                                        <div className="imeji">
                                            <img src="https://image.flaticon.com/icons/svg/2919/2919573.svg"/>
                                            <img src="https://image.flaticon.com/icons/svg/482/482947.svg"/>
                                            <img src="https://image.flaticon.com/icons/svg/2923/2923003.svg"/>
                                            <img src="https://image.flaticon.com/icons/svg/3011/3011684.svg"/>
                                            <img src="https://image.flaticon.com/icons/svg/483/483947.svg"/>
                                            <img src="https://image.flaticon.com/icons/svg/1239/1239525.svg"/>
                                        </div>
                                        
                                        <div className="tulisan">
                                            <p className="data-diri">{personDetail.name}</p>
                                            <p className="keterangan">Full Name</p>
    
                                            <p className="data-diri">{personDetail.email}</p> 
                                            <p className="keterangan">Email</p>
                                        
                                            <p className="data-diri">{personDetail.status}</p> 
                                            <p className="keterangan">Premium</p>     

                                            <p className="data-diri">{personDetail.gender}</p> 
                                            <p className="keterangan">Gender</p>

                                            <p className="data-diri">{personDetail.phone}</p> 
                                            <p className="keterangan">Phone Number</p>
                                           
                                            <p className="data-diri">{personDetail.address}</p> 
                                            <p className="keterangan">Address</p>  
                                        </div>
                                        
                                        <div className="fotodll">
                                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRLFIGid8OqMlxWVB_3a9-11cSAv4cWeT8GR_ngPi1c1_nThPLd&usqp=CAU" className="foto-profil"/>
                                            <label className="ganti-foto">
                                                <input type="file"/>
                                                Change Profile Picture
                                            </label>
                                        </div>
                                </div>
                        )
                    })}
                    <div>
                    </div>                
                </Form>
            </div>    
        )
    }
}
  
export default Person;   