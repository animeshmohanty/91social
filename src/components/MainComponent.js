import React, { Component } from 'react';
import Contact from './ContactComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { Switch, Route, Redirect} from 'react-router-dom';

class Main extends Component {

  render() {

    return (
      <div>
        <Header />
        <Switch> 
          <Route exact path="/contactus" component={Contact} />
          <Redirect to="/contactus" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;