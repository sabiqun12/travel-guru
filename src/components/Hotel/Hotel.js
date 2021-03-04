import React, {useState} from 'react';
import fakeHotelData from '../../FakeData/HotelPlace';
import HotelBooking from '../HotelBooking/HotelBooking';



const Hotel = () => {
    const [hotel, setHotel] = useState(fakeHotelData);


    return (
        <div>
            <div>
            {
               hotel.map(hotel => <HotelBooking hotel={hotel}></HotelBooking>)
           }
            </div>
           
          
            
        </div>
    );
};

export default Hotel;