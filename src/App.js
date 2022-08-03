import React from 'react';
import { Navbar } from './components/Navbar';
import { Container } from './components/Container';
import { Portfolio } from './components/Portfolio';
import { Contact } from './components/Contact';
import { TopImage } from './components/TopImage';
import ScrollToTop from './components/ScrollToTop';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import photo from '/Users/rbrnfrvr/Personal-Profile-Website/portfolio-website/src/images/v1016-a-08.jpg'
import '/Users/rbrnfrvr/Personal-Profile-Website/portfolio-website/src/CSS/App.css';

function App() {
  return (
    <Router>
      <div className="App" style={{backgroundImage:`url(${photo})`, minHeight: '100vh', minWidth: '100vw'}}>
        <TopImage />
        <Navbar />
        <div className="home-page">
          <ScrollToTop>
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
          </ScrollToTop>
        </div>
     </div>
    </Router>
  )
}

export default App;
