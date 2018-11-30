import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

export default class Dropdown extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			expanded: false,
			value: this.props.options[0]
		};
	}
	
	expand() {
		this.setState({ expanded: true });
	}
	
	collapse() {
		this.setState({ expanded: false });
	}
	
	handleItemClick(e) {
		this.setState({
			expanded: false,
			value: e.target.innerText
		});
	}
	
	handleTriggerClick() {
		this.setState({ expanded: !this.state.expanded });
	}
	
	render() {
		let dropdown = undefined;

		if (this.state.expanded) {
			dropdown = (
				<div className="dropdown__content">
				{
					this.props.options.map(item => (
						<div onClick={(e) => { this.handleItemClick(e); }} className="dropdown__item">{item}</div>
					))
				}
				</div>
			);
		}
		
		return (
			<div className={`dropdown ${this.state.expanded ? 'active' : ''}`}
				tabIndex="0"
				onBlur={() => { this.collapse(); }}>
				<div className="dropdown__trigger" onClick={() => { this.handleTriggerClick(); }}>
					{this.state.value}
				</div>
				{dropdown}
			</div>
		);
	}
}