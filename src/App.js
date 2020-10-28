import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import {Home} from './components/Home';
import Teamwork from './components/Blogs/Teamwork';
import Berries from './components/Blogs/Berries';
import Genderequality from './components/Blogs/Genderequality';
import Cakes from './components/Blogs/Cakes';
import LoginPage from './components/LoginPage';
import Newpost from './components/Newpost';

function App() {
  return (
    <Router>
    <div>
      <Switch>
       <Route path="/" exact component={Home} />
      <Route path="/login" component={LoginPage} />
      <Route path="/teamwork" component={Teamwork} /> 
      <Route path="/berries" component={Berries} />
      <Route path="/genderequality" component={Genderequality} />
      <Route path="/cake" component={Cakes} />
      <Route path="/new" component={Newpost} />
      </Switch>
    </div>
   </Router>
  );
}

export default App;
