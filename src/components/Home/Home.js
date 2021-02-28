import React, {useState} from 'react';
import fakeData from '../../FakeData/PlaceData.js';
import Carousel from 'react-bootstrap/Carousel';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './Home.css';
import Slider from '../Slider/Slider.js';
const Home = () => {
    const[place, setPlace] = useState(fakeData);
    console.log(fakeData);
    return (
         <Jumbotron className="homePage d-flex align-items-center text-center">
             <Carousel>
                { place.map((place) => (
               <Carousel.Item>
                  <Slider place={place}></Slider>
               </Carousel.Item> 
                ))}
             </Carousel>
            
                
         </Jumbotron>
   



    );
};

export default Home;