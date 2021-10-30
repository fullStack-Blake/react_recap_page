import React from "react";
import {HashRouter as Router, Route} from 'react-router-dom'
import styled from 'styled-components'
import Home from "../routes/Home"
import About from "../routes/About"
import NavBar from "./NavBar";

const Back = styled.div`
    background-color: rgb(23,23,27);
    color: white;
    height: 100vh;
    @media only screen and (max-width: 1500px) {
        height: 200vh;
    }
    @media only screen and (max-width: 875px) {
        height: 350vh;
    }
`

const App = () => ( 
    <Back>
        <Router>
        <NavBar />
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        </Router>
    </Back>
    
    )


export default App;