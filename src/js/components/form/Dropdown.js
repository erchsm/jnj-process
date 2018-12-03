import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

export default class Dropdown extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			expanded: false,
			value: this.props.options[0].label
		};
	}
	
	expand = () => {
		this.setState({ expanded: true });
	}
	
	collapse = () => {
		this.setState({ expanded: false });
	}
	
	handleItemClick = (e) => {
		this.setState({
			expanded: false,
			value: e.label
		});
	}
	
	handleTriggerClick = () => {
		this.setState({ expanded: !this.state.expanded });
	}

	render() {
		let dropdown = undefined;

		const classnames = classNames({
			"dropdown": true,
			"active": this.state.expanded,
		});

		(this.state.expanded) ? (
			dropdown = (
				<div className="dropdown__content">
				{
					this.props.options.map((item, i) => (
						<div key={i} onClick={() => { item.click(); this.handleItemClick(item);}} className="dropdown__item">{item.label}</div>
					))
				}
				</div>
			)
		) : null;
		
		return (
			<div className={classnames} tabIndex="0" onBlur={ this.collapse }>
				<div className="dropdown__trigger" onClick={ this.handleTriggerClick }>
					<label>{this.props.label}:&nbsp;</label>
					{this.state.value}
					<i className="iconcss icon-caret-down-lg"></i>
				</div>
				{dropdown}
			</div>
		);
	}
}