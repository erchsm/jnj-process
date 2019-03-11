import React, {Component} from 'react';

import JnjProcessHeader from '../../components/JnjProcessHeader';


export default class Animation extends Component {

	static propTypes = {
	}


	constructor(props) {
		super(props);
	}

	render() {
        return (
            <div className="column is-two-thirds top">
                <JnjProcessHeader title="Animation" body={"Motion helps make a UI expressive and easy to use. Motion celebrates moments in user journeys, adds character to common interactions, and expresses J&J's personality and style."}/>
            </div>
        );
    }
}