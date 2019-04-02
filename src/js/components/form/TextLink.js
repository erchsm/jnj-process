import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

export default class TextLink extends Component {
	
	constructor(props) {
		super(props);
	}
	

	render() {
		const { label, white, reverse } = this.props;

		const classnames = classNames({
			"mdc-button mdc-button--text-link": true,
			"mdc-button--white": white,
			"mdc-button--reverse": reverse,
		});
		
		return (
			<button className={classnames}>
				<span>{label}</span>
				<i className="iconcss icon-arrow-right"/>
			</button>
		);
	}
}