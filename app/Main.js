import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

// my components
import Footer from './components/Footer.js';
import Header from './components/Header.js';
import HomeGuess from './components/HomeGuess.js';
import About from './components/About.js';
import Terms from './components/Terms.js';
import Term from './components/Terms.js';

const Main = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/home" exact>
          <HomeGuess />
        </Route>
        <Route path="/about-us">
          <About />
        </Route>
        <Route path="/terms">
          <Terms />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

ReactDOM.render(<Main />, document.querySelector('#app'));

if (module.hot) {
  module.hot.accept();
}
