import React from 'react';
import MapLocation from '../MapLocation/MapLocation';
import './HotelBooking.css';

const HotelBooking = (props) => {
    const{Room, title, feature, cancellation, image, price, total, rating} = props.hotel;
    console.log(props.hotel);

    return (
        
        <div class="card">
        <div class="row no-gutters">
            <div class="col-auto">
                <img src={image} class="img-fluid" alt="" height="250px" width="250px" border-radius="5px"/>
            </div>
            <div class="col-md-6">
                <div class="card-block px-2">
                    <h4 class="card-title">{title}</h4>
                    <p class="card-text">{feature}</p>
                    <p class="card-text">{Room}</p>
                    <p class="card-text">{cancellation}</p>
                    <p>Rating:<small>{rating}</small> Price:{price} Total:<small>{total}</small></p> 
                </div>
            </div>
        </div>
  </div>

 

    );
};

export default HotelBooking;