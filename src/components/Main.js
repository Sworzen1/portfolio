import React from "react"
import {Switch, Route} from "react-router-dom"
import LandingPage from "./LandingPage";
import Aboutme from "./Aboutme"
import Projects from "./Projects"
import Contact from "./Contact"

const Main = () => (
    <Switch>
        <Route exact path ="/" component={LandingPage} />
        <Route path ="/Aboutme" component={Aboutme} />
        <Route path ="/Projects" component={Projects} />
        <Route path ="/Contact" component={Contact} />
    </Switch>
)
export default Main