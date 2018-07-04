import React, { Component, PropTypes } from 'react';
import {Router, Route} from 'react-router';
import createHistory from 'history/createBrowserHistory';
import Dashboard from './Dashboard'

export default class AppRoute extends Component {

	static propTypes = {
	}


	constructor(props) {
		super(props);
	}

	 render() {
        const history = createHistory();
        return (
            <Router history={history}>
                <Route path="/" component={Dashboard}/>
            </Router>
        );
    }
}