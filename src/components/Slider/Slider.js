import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import './Slider.css';

const Slider = (props) => {
    const{placeId, name, image, shortDescription} = props.place;
    
    const history = useHistory();
    const handleClick = (placeID) => {
        const url = `/destination/${placeID}`;
        history.push(url);


    }
    return (
        <Row className='d-flex align-items-center justify-content-center'>
            <Col md={6}>
                <div className ="mb-3 slider-text">
                    <h3>{name}</h3>
                    <p>{shortDescription}</p>
                    <Button onClick={() =>{handleClick(placeId)}} variant="warning">Booking</Button>
                    
                </div>
            </Col>
            <Col md={6}>
                <img className ="slider-image" src={image}  alt="First"/>
            </Col>
        </Row>
    );
};

export default Slider;

