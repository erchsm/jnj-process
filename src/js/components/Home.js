import React, {Component} from 'react';


export default class Home extends Component {

	static propTypes = {
	}


	constructor(props) {
		super(props);
	}

	render() {
		return (
				<div className="column is-three-quarters top">


					<h1 className="title is-1">Welcome &#x1F44B;</h1>
					<div className="columns" style={{background: "white", padding: "50px"}}>
						<h4 className="title is-4" style={{color: "#3273DC", lineHeight: "1.75em"}}>This site is dedicated to documenting the process for developing J&J sites like Home and Medical Devices. If you have any questions, please don't hesitate to <a href="mailto:ericsmithux@gmail.com?Subject=Hello%20there" target="_blank"><u>reach out.</u></a></h4>
					</div>
				</div>

		);
	}
}