import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import './css/index.css';
import Show from './components/Show';
import Movies from './components/Movies';
import * as serviceWorker from './serviceWorker';

const routing = (
  <Router>
    <div>
      <Route exact path="/" component={Movies} />
      <Route path="/movie/:id" component={Show} />
    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'));
serviceWorker.unregister();
