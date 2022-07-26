import React from 'react';
import { Navbar } from './components/Navbar';
import { Container } from './components/Container';
import { Portfolio } from './components/Portfolio';
import { Contact } from './components/Contact';
import { TopImage } from './components/TopImage';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import '/Users/rbrnfrvr/Personal-Profile-Website/portfolio-website/src/CSS/App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <TopImage />
        <Navbar />
        <div className='home-page'>
          <Switch>
            <Route exact path="/">
              <Container />
            </Route>
            <Route exact path="/portfolio">
              <Portfolio />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
          </Switch>
        </div>
     </div>
    </Router>
  )
}

export default App;
