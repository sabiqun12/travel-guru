import React, {useState}from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Jumbotron from 'react-bootstrap/Jumbotron';
import fakeData from '../../FakeData/PlaceData';
import { Col, Form, FormGroup} from 'react-bootstrap';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './Destination.css';
import { useForm } from 'react-hook-form';

const Destination = () => {
    const { placeId } = useParams();
    const destination = fakeData.find((p) => p.placeId === placeId);
    console.log(destination);

    const[from, setFrom] = useState(null);
    const[to, setTo] = useState(null);

    const history = useHistory();

    const {handleSubmit} = useForm();
    const onSubmit = () => {
       const url ='/hotelPlace';
       history.push(url);
    }

    return (
        <Jumbotron className="homePage d-flex align-items-center text-center">
            <Col md={7}>
                <div className="mb-3 slider-text">
                    <h3>{destination.name}</h3>
                    <p>{destination.fullDescription}</p>
                </div>
                </Col>
                <Col md={5}>
                    <Form className="booking-form" style={{
                        padding: '80px',
                        margin: 'auto'}}
                        onSubmit={handleSubmit(onSubmit)}
                    >
                    <FormGroup> 
                    <div className="form-group">
                        <label htmlFor="origin">Origin</label>
                        <input value="Dhaka" id="origin" type="text" required/>
                    </div>    
                    <div className="form-group" >
                    
                        <label htmlFor="origin">Destination</label>
                        <input value ={destination.name} id="origin" type="text" required/>
                    </div>
                    <div className="datepicker-section" style={{display:"flex"}}>
                                <div style={{marginRight:"5px"}}>
                                    <p>From </p>
                                    <DatePicker selected={from} 
                                        className="date-picker"
                                        onChange={date => setFrom(date)} 
                                        required
                                        placeholderText="Start Date" />
                                </div>
                                <div>
                                    
                                    <p>To</p>
                                    <DatePicker selected={to}
                                        className="date-picker"
                                        onChange={date => setTo(date)}
                                        required
                                        placeholderText="End Date" />
                                </div>
                            </div>
                                <input type="submit" value=" Start Booking"/>
                    </FormGroup>  
                    </Form>      
                </Col>
                
            
            </Jumbotron>
    );
};

export default Destination;