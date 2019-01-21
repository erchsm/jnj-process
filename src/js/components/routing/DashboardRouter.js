import React, {Component} from 'react';
import {Route, Redirect} from 'react-router'
import Home from './Home'
import Accessibility from './Accessibility'
import Animation from './Animation'
import Prototypes from './Prototypes'
import Colors from './Colors'
import Typography from './Typography'


export default class DashboardRouter extends Component {

	static propTypes = {
	}


	constructor(props) {
		super(props);
	}

	render() {
        return (
            <div>
                <Redirect from="/" to="/home" />
                <Route path="/home" component={Home} />
                <Route path="/typography" component={Typography}/>
                <Route path="/accessibility" component={Accessibility}/>
                <Route path="/prototypes" component={Prototypes}/>
                <Route path="/animation" component={Animation}/>
                <Route path="/colors" component={Colors}/>
            </div>
        );
    }
}