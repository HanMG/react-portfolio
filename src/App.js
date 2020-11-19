import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route  
} from "react-router-dom";

import LandingPage from "./components/views/LandingPage/LandingPage"
import AboutMePage from "./components/views/AboutMePage/AboutMePage"
import SkillsPage from "./components/views/SkillsPage/SkillsPage"
import WorksPage from "./components/views/WorksPage/WorksPage"
import NavBar from "./components/views/NavBar/NavBar"
import Footer from "./components/views/Footer/Footer"

function App() {
  return (
    <Router>
      <NavBar />
      <div>        
        <Switch>
          <Route exact path="/" component={LandingPage} />                      
          <Route path="/aboutme" component={AboutMePage} />           
          <Route path="/skills" component={SkillsPage} />                     
          <Route path="/works" component={WorksPage} />            
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}
export default App;
