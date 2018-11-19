import React, { Component, PropTypes } from 'react';
import ReactDOM from "react-dom";
import MultiSearchSelect from "react-search-multi-select";
import classNames from 'classnames';

import newId from '../../services/newId';


export default class MultiSelectBox extends Component {

	constructor(props) {
		super(props);

		this.state = {
			numWrapping: 0,
			indicatorLeft: 60,
			isFocused: false,
			selected: [],
		};
	}

	stealFocus = () => {
		this.setState({
			isFocused: true,
		});
		this.props.onChange(this.state.selected);
		this.updateNumWrapping();
	}

	componentWillMount() {
		this.tagsDom = ReactDOM.findDOMNode(this);
		this.id = newId('multiselect-');
	}

	componentDidMount() {
		document.addEventListener('mousedown', this.handleClickOutside);
	}

	componentWillUnmount() {
		document.removeEventListener('mousedown', this.handleClickOutside);
	}

	closeDropdown = () => {
		this.setState({
			isFocused: false
		});
		this.updateNumWrapping();
		this.props.onChange(this.state.selected);
	}

	handleClickOutside = (event) => {
		if (!this.refs.wrapper.contains(event.target)) {
			this.closeDropdown();
		}
	}

	handleChange = (value) => {
		if (this.state.selected.length != value.length) {
			this.setState({
				selected: value,
			});
		}
	}

	/*removeElementsByClass = (className) => {
		var elements = document.getElementsByClassName(className);
		while (elements.length > 0){
				elements[0].parentNode.removeChild(elements[0]);
		}
	}*/

	updateNumWrapping = () => {
		const tags = document.getElementById(this.id).getElementsByClassName('tags');
		let firstTagPos = 0;

		Array.prototype.every.call(tags, (item, index) => {
			(index == 0) ? (firstTagPos = item.getBoundingClientRect().y) : null;

			if (item.getBoundingClientRect().y > firstTagPos) {
				const indicatorLeft = tags[index-1].getBoundingClientRect().x - item.parentNode.getBoundingClientRect().x + tags[index-1].getBoundingClientRect().width;
				this.setState({
					numWrapping: tags.length - index,
					indicatorLeft: indicatorLeft,
				})
				return false;
			}
			else return true;
		})
	}

	render() {
		const { items, label, isLarge } = this.props;

		const classnames = classNames({
			'multiselectbox': true,
			'multiselectbox--focused': this.state.isFocused,
			'multiselectbox--label-shrink': this.state.isFocused || this.state.selected.length > 0,
			'multiselectbox--show-indicator': !this.state.isFocused && this.state.selected.length > 0 && this.state.numWrapping > 0,
			'multiselectbox--lg': isLarge,
		});


		return (
		<div id={this.id} className={classnames} onClick={this.stealFocus} ref="wrapper">
				<MultiSearchSelect
				searchPlaceholder={"Type to search..."}
				optionsContainerHeight={""} 
				primaryColor={""}
				secondaryColor={""}
				textColor={""}
				searchable={true} 
				showTags={true} 
				multiSelect={true} 
				width={'100%'}
				onSelect={this.handleChange} 
				options={items}/>
				<i className="iconcss icon-caret-down-lg" onClick={(this.state.isFocused) ? this.closeDropdown : null}></i>
				<label>{label}</label>
				<div style={{'left': this.state.indicatorLeft }} className="indicator">&nbsp;{this.state.numWrapping} +</div>
			</div>
		);
	}
}