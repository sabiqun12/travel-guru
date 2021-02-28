import logo from './logo.svg';
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

function App() {
  return (
    <Router>
      <NavBar></NavBar>
       <Switch>
          <Route path="/home">
            <Home/>
          </Route>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/destination/:placeId">
            <Destination/>
          </Route>
        </Switch> 
   
    </Router>
  );
}

export default App;
