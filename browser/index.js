'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './store';
import {Router, Route, hashHistory, IndexRedirect, browserHistory, IndexRoute} from 'react-router';
import HomeContainer from './HomeContainer';
import TimerContainer from './TimerContainer';

ReactDOM.render(
  <Provider store={store}>
	 <div>
	    <Router history={hashHistory}> 
			<Route path="/" component={HomeContainer}/>
			<Route path="/timer" component={TimerContainer}/>
	  	</Router>
	 </div>
  </Provider>,
  document.getElementById('app'))
