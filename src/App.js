import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';
import Destination from './components/Destination/Destination';
import Hotel from './components/Hotel/Hotel';
import LogIn from './components/LogIn/LogIn';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import News from './components/News/News';
import Blog from './components/Blog/Blog';



 export const UserContext = createContext(); 


function App() {
  const[loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value = {[loggedInUser, setLoggedInUser]}>
    {/* <h3>Email:{loggedInUser.email}</h3> */}
    <Router>
      <NavBar></NavBar>
       <Switch>
          <Route path="/home">
            <Home/>
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/destination/:placeId">
            <Destination/>
          </Route>
          <PrivateRoute path="/hotelPlace">
            <Hotel />
          </PrivateRoute>
          <Route path="/logIn">
           <LogIn />
          </Route>
          <Route path="/news">
            <News />
          </Route>
          <Route path ="/blog">
            <Blog />
          </Route>
        </Switch> 
   
    </Router>
    </UserContext.Provider>
  );
}

export default App;
