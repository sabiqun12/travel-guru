import React from 'react';
import { useParams } from 'react-router-dom';
import Jumbotron from 'react-bootstrap/Jumbotron';
import fakeData from '../../FakeData/PlaceData';
import { Button, Col, Row } from 'react-bootstrap';

const Destination = () => {
    const{placeId} = useParams();
    const destination = fakeData.find((p)=> p.placeId === placeId);

    return (
        <Jumbotron className ="banner d-flex align-items-center text-center">
                <div className ="mb-3 slider-text">
                    <h3>{destination.name}</h3>
                    <p>{destination.fullDescription}</p>
                    
                </div>
            
            </Jumbotron>
    );
};

export default Destination;