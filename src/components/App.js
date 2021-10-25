import React from "react";
import {HashRouter, Route} from 'react-router-dom'
import Home from "../routes/Home"

const App = () => {
   return ( <HashRouter>
        <Route exact path="/" component={Home} />ß
    </HashRouter>)
}

export default App;