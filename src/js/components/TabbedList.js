import React, {Component} from 'react';
import classNames from "classnames";

import newId from '../services/newid';

export default class TabbedList extends Component {

	static propTypes = {
	}


	constructor(props) {
		super(props);

		this.state = {
			indexHovered: 0
		}
	}

	componentWillMount() {
		this.id = newId('TabbedList');
	}

	componentDidMount = () => {
	}

	componentWillUnmount = () => {
	}

	setIndexHovered = (event) => {
		this.setState({
			indexHovered: this.getChildIndex(event.target)
		});
	}

	getChildIndex = (elem) => {
		let i = 0;

		while ((elem = elem.previousSibling) != null) {
		  i++;
		}

		return i;
	}

	createListByIndex = (index) => (
		this.props.data[index].content.map((item, i) => (
			<li key={i}><h5>{item.name}</h5></li>
		))
	)

	render() {
		const { indexHovered } = this.state;
		const { data, tabWidth, tabMargin } = this.props;


		const classnames = classNames({
			"tabbed-list": true,
		})

		const animateValue = ((tabMargin || 12) * indexHovered) + ((tabWidth || 140) * indexHovered);

		const lineAnimation = {
			transform: 'translate3d(' + animateValue + 'px, 0, 0)',
			width: (tabWidth || 140) + 'px',
		}

		const tabbedListHeaders = data.map((item, i) =>
			<li key={i} onMouseOver={(e) => this.setIndexHovered(e)} className={classNames({ 'active': i == indexHovered })} style={{ width: (tabWidth || 140), marginRight: (tabMargin || 12) }}>
				{item.title}
			</li>
		);

		return (
			<div id={this.id} className={classnames}>
				<div className="tabbed-list__header" onClick={this.toggleOpen}>
					<ul>{tabbedListHeaders}</ul>
				</div>
				<div className="tabbed-list__line-container">
					<div style={ lineAnimation } className="tabbed-list__line"></div>
				</div>
				<div className="tabbed-list__content">
					<ul>
						{this.createListByIndex(indexHovered)}
					</ul>
			   </div>
			</div>
		);
	}
}