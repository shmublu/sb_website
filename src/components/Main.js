import React from 'react';
import { Switch, Route, } from 'react-router-dom';

import Home from '../pages/homepage.js';
import Resume from '../pages/resume.js';
import Wordgame from '../pages/wordgame.js';
const Main = () => {
  return (
    <Switch> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/resume' component={Resume}></Route>
      <Route exact path='/wordgame' component={Wordgame}></Route>
    </Switch>
  );
}

export default Main;