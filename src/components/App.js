import React from "react";
import {HashRouter, Route} from 'react-router-dom'
import styled from 'styled-components'
import Home from "../routes/Home"
import About from "../routes/About"
import NavBar from "./NavBar";

const Router = styled(HashRouter)`
`

const App = () => ( 
    <Router>
        <NavBar />
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
    </Router>
    )


export default App;