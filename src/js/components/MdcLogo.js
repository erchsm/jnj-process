import React, {Component} from 'react';
import classNames from "classnames";


export default class MdcLogo extends Component {

	static propTypes = {
	}


	constructor(props) {
		super(props);

        this.state = {
        }
	}


	render() {


        const classnames = classNames({
            "mdc-logo": true
        })

        

        return (
            <div className={classnames}>
                <h3>Hold For Logo</h3>
                <h5>
                    <span>M</span>
                    <span>e</span>
                    <span>d</span>
                    <span>i</span>
                    <span>c</span>
                    <span>a</span>
                    <span>l</span>
                    <span> </span>                        
                    <span>D</span>
                    <span>e</span>
                    <span>v</span>
                    <span>i</span>
                    <span>c</span>
                    <span>e</span>
                    <span> </span>                        
                    <span>C</span>
                    <span>o</span>
                    <span>m</span>
                    <span>p</span>
                    <span>a</span>
                    <span>n</span>
                    <span>i</span>
                    <span>e</span>
                    <span>s</span>
                </h5>
            </div>
        );
    }
}