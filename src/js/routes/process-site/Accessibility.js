import React, {Component} from 'react';

import JnjProcessHeader from '../../components/JnjProcessHeader';

export default class Accessibility extends Component {

	static propTypes = {
	}


	constructor(props) {
		super(props);
	}

	render() {
        return (
            <div className="column is-two-thirds top">

                <JnjProcessHeader title={"Accessibility"} body={"In order to allow our content to be easily understandable by everyone, we have to design and build them to be accessible and inclusive. Accessibility allows for our digital properties to be used by people of all abilities. We design and build all websites to the WCAG 2.1 AA standard. For more information about web accessibility, please reference Web Content Accessibility Guidelines (WCAG) 2.0: https://www.w3.org/WAI/standards-guidelines/wcag/"}/>


            </div>

        );
    }
}