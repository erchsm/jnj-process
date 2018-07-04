import React, {Component} from 'react';


export default class Home extends Component {

	static propTypes = {
	}


	constructor(props) {
		super(props);
	}

	render() {
        return (
                <div className="column is-two-thirds top">


                    <h1 className="title is-1">MDC &#x1F64C;</h1>
                    <div className="columns" style={{background: "white", padding: "50px"}}>
                        <h4 className="title is-4" style={{color: "#3273DC", lineHeight: "1.75em"}}>This site is dedicated to compiling and sharing useful resources for Designers and UI Developers. If you have any additions, please <a href="https://docs.google.com/forms/d/e/1FAIpQLSdqYkt7o-6bWo-PxXdoP_kPkPlUkyvKKTj-9Wa_djl1BIkeNA/viewform" target="_blank"><u>submit a link.</u></a></h4>

                    </div>
                </div>

        );
    }
}