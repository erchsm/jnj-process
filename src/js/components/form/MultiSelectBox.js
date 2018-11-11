import React, { Component, PropTypes } from 'react';
import MultiSearchSelect from "react-search-multi-select";
import classNames from 'classnames';


export default class MultiSelectBox extends Component {

	constructor(props) {
		super(props);

		this.state = {
			isFocused: false,
			selected: [],
		};
	}

	stealFocus = () => {
		this.setState({
			isFocused: true,
		})
	}

	componentDidMount() {
		document.addEventListener('mousedown', this.handleClickOutside);
	}

	componentWillUnmount() {
		document.removeEventListener('mousedown', this.handleClickOutside);
	}

	handleClickOutside = (event) => {
		(!this.refs.wrapper.contains(event.target)) ? (
			this.setState({
				isFocused: false
			})
			) : null;
	}

	handleChange = (arr) => {
		if (this.state.selected.length != arr.length) {
			this.setState({
				selected: arr,
			});
			this.props.onChange();
		}
	}

	render() {
		const { items, label } = this.props;

		const classnames = classNames({
			'multiselectbox': true,
			'multiselectbox--focused': this.state.isFocused,
			'multiselectbox--label-shrink': this.state.isFocused || this.state.selected.length > 0,
		});

		Array.prototype.forEach.call(document.getElementsByClassName('tags'), (item) => {
		    console.log(item)
		});

		return (
			<div className={classnames} onClick={this.stealFocus} ref="wrapper">
				<MultiSearchSelect
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
				<i className="iconcss icon-caret-down-lg"></i>
				<label>{label}</label>
			</div>
			);
	}
}