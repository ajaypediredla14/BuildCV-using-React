import React from 'react';
import {Grid,Container} from "@material-ui/core";
import './App.css';
import Profile from "./components/Profile/Profile";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Portfolio from "./pages/Portfolio/Portfolio";
import Resume from "./pages/Resume/Resume";
import Particles from 'react-particles-js';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';



function App() {
  return (
    <div className="App" style={{ position: 'relative', overflow: "hidden" }}>
      <div style={{ position: 'absolute'}}>
      <Particles
    params={{
	    "particles": {
	        "number": {
	            "value": 50
	        },
	        "size": {
	            "value": 3
	        }
	    },
	    "interactivity": {
	        "events": {
	            "onhover": {
	                "enable": true,
	                "mode": "repulse"
	            }
	        }
	    }
	}} />
      </div>
      <Container className={'top_60'}>
      <Grid container spacing={6}>
        <Grid item xs={12} sm={12} md={4} lg={3} >
          <Profile />
        </Grid>
        <Grid item xs >
          <Router>
            <Header />
            <div className='main-content'>
            <Switch>
                <Route path='/portfolio'>
                  <Portfolio />
                </Route>
                <Route exact path='/'>
                  <Resume />
                </Route>
            </Switch>
            </div>
          </Router>
          <Footer />
        </Grid>
        </Grid>
      </Container>
     </div>
  );
}
export default App;
