import React, {Component} from 'react';


export default class Orders extends Component {

	static propTypes = {
	}


	constructor(props) {
		super(props);
	}

	render() {
        return (
            <div className="column is-two-thirds top">

                <h1 className="title is-1">Animation</h1>

                <div className="columns" style={{background: "white", padding: "50px"}}>
                    <h4 className="title is-4" style={{color: "#3273DC", lineHeight: "1.75em"}}>Coming Soon. Thank your for your patience!</h4>
                </div>


            </div>

        );
    }
}