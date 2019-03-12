import React, { Component, PropTypes } from 'react';

import classNames from "classnames";

import splitLetter from '../services/splitLetter';

export default class JnjProcessHeader extends Component {
	
	constructor() {
		super();

		this.state = {
			isScrolled: false,
		};  
	}

	componentDidUpdate() {
		// this.handleScroll();
	}

	componentDidMount() {
		document.addEventListener('scroll', this.handleScroll);
		// document.addEventListener('mousewheel', this.handleScroll);
		// document.addEventListener('touchmove', this.handleScroll);

		setTimeout(() => {
			this.handleScroll();
		}, 10)
	}

	componentWillUnmount() {
		document.removeEventListener('scroll', this.handleScroll);
		// document.removeEventListener('mousewheel', this.handleScroll);
		// document.removeEventListener('touchmove', this.handleScroll);
	}

	handleScroll = (e) => {
		if (this.refs.header) {
			(window.pageYOffset > (this.refs.header.clientHeight - 60)) ? this.setState({ isScrolled: true }) : null;
			(window.pageYOffset < (this.refs.header.clientHeight - 60)) ? this.setState({ isScrolled: false }) : null;
		}
	}

	render() {
		const { isScrolled } = this.state;
		const { title, body } = this.props;

		const classnames = classNames({
			"jnj-process-header": true,
			"jnj-process-header--scrolled": this.state.isScrolled,
		})

		const opacity = Math.min(Math.max(0, (1 - (window.pageYOffset * 0.01))), 1)

		const style = {
			 transform: `scale(${Math.min(Math.max(0, (1 - (window.pageYOffset * 0.01))), 1)})`,
			 opacity: opacity,
		}

		return (
			<div className={classnames}>
				<div className="jnj-process-header__wrapper" ref="header">
					<div className="grid">
						<div className="grid__item grid__item--col-1 grid__item--hide-medium"/>
						<div className="grid__item grid__item--col-10 grid__item--col-12-medium">
						<h1 style={style}>{title}</h1>
							<blockquote style={{ opacity: opacity }}>{body}</blockquote>
						</div>
					</div>
					{ this.state.isScrolled ? (
						<div className="jnj-process-header__small"><h4>{splitLetter(title)}</h4></div>	
					) : null 
					}
				</div>
			</div>
		);
	}
}