import React, {Component} from 'react';
import {Route, Redirect} from 'react-router';
import Home from './Home';
import Orders from './Orders';
import Transactions from './Transactions'
import Prototypes from './Prototypes'


export default class DashboardRouter extends Component {

	static propTypes = {
	}


	constructor(props) {
		super(props);
	}

	render() {
        return (
            <div>
                <Redirect from="${process.env.PUBLIC_URL}/" to="/home" />
                <Route path="${process.env.PUBLIC_URL}/home" component={Home} />                
                <Route path="${process.env.PUBLIC_URL}/orders" component={Orders}/>
                <Route path="${process.env.PUBLIC_URL}/prototypes" component={Prototypes}/>
                <Route path="${process.env.PUBLIC_URL}/transactions" component={Transactions}/>
            </div>
        );
    }
}