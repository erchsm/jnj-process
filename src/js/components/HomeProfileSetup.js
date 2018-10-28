// import React, { Component, PropTypes } from 'react';
// import Autosuggest from 'react-autosuggest';

// import classNames from "classnames";

// // import { Motion, spring, presets } from 'react-motion';
// // import { ScrollProvider, Scroller, ScrollLink } from 'react-skroll';


// export default class HomeProfileSetup extends Component {
// 	constructor(props) {
// 		super(props);
		
// 		this.state = {
// 			hoverLeft: false,
// 			hoverRight: false
// 		}
// 	}
	
// 	leftHover = (bool) => {
// 		this.setState({
// 			hoverLeft: bool
// 		});
// 	}
	
// 	rightHover = (bool) => {
// 		this.setState({
// 			hoverRight: bool
// 		});
// 	}

// 	render() {
// 		const wrapper = {
// 			position: 'absolute',
// 			height: '100%',
// 			width: '100%'
// 		}

// 		const navbarWrapperClassnames = classNames({
// 			"navbar-wrapper": true,
// 			"navbar-wrapper--hover-left": this.state.hoverLeft,
// 			"navbar-wrapper--hover-right": this.state.hoverRight
// 		});
		
// 		return (
// 			<div style={wrapper}>
// 				<Scroller>
// 				<section name="Home"></section>
// 				<section name="Story"></section>
// 				<section name="Characters"></section>
// 				<section name="Photos"></section>
// 				<section name="Videos"></section>
// 				<section name="Tickets"></section>
// 			</Scroller>
// 			<div className={navbarWrapperClassnames}>
// 			<ul className="nav navbar-nav navbar-top">
// 				<li className="nav-left" onMouseEnter={() => this.leftHover(true)} onMouseLeave={() => this.leftHover(false)}>
// 					<a className="btn_nav_inner" id="trailer">
// 						<div className="top-line"></div>
// 						<h1>
// 							Trailer
// 						</h1>
// 					</a>
// 				</li>
// 				<li className="nav-right" onMouseEnter={() => this.rightHover(true)} onMouseLeave={() => this.rightHover(false)}>
// 					<a className="btn_nav_inner" id="tickets">
// 						<div className="top-line"></div>
// 						<h1>Tickets</h1>
// 					</a>
// 				</li>
// 			</ul>
// 			<div className="plane-image">
// 				<i className="am-icon am-icon-plane2"></i>
// 			</div>
// 			<ul className="nav navbar-nav navbar-main" id="main-navigation-bar">
// 				 <div className="cd-timeline">
// 				 </div>
// 				{
// 						this.props.scroll.children.map((child, index) =>
// 						 <li id="nav-home" key={index}>
// 							<ScrollLink
// 								key={index}
// 								className={child.active ? ('active ' + 'active-' + child.name.length) : 'inactive'}
// 								to={child.start}
// 							 >
// 								<div className="nav-inner">
// 								<span className="left"><p>{child.name}</p></span>
// <div className="circle"></div>
// 								<span className="right">
// 									<span className="line"></span>
// 								</span>
// 							</div>
// 						</ScrollLink>
// 					</li>
// 						)
// 					}
				
// 					</ul>
// 				</div>
// 				</div>
// 		)
// 	}
// }	