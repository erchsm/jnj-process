import React, {Component} from 'react';
import classNames from "classnames";

import TabbedList from "./TabbedList";
import SearchBar from './SearchBar';

export default class HomeNav extends Component {

	static propTypes = {
	}


	constructor(props) {
		super(props);

		this.state = {
			menuOpen: false,
			secondaryPanelOpen: false,
		}
	}

	componentDidMount() {
		document.addEventListener('mousedown', this.handleClickOutside);
	}

	componentWillUnmount() {
		document.removeEventListener('mousedown', this.handleClickOutside);
	}

	handleClickOutside = (event) => {
		if (!this.refs.panels.contains(event.target) && !this.refs.hamburger.contains(event.target)) {
			this.setState({
				menuOpen: false,
				secondaryPanelOpen: false,
			});
		}
	}


	toggleMenuOpen = () => {
		this.setState({
			menuOpen: !this.state.menuOpen,
			secondaryPanelOpen: false,
		})
	}
	
	openSecondaryPanel = () => {
		this.setState({
			secondaryPanelOpen: true
		})
	}

	render() {
		const { menuOpen, secondaryPanelOpen } = this.state;


		const classnames = classNames({
			"home-nav": true,
			"home-nav--menuOpen": menuOpen,
			"home-nav--secondaryPanelOpen": secondaryPanelOpen,
		})


		return (
			<nav className={classnames}>
				<div className="home-nav__topbar">
					<div className="home-nav__left">
						<i className="iconcss icon-home-logo"></i>
					</div>
					<div className="home-nav__right">
						<div className="home-nav__items">
							<div className="home-nav__item">
								<h5 className="eyebrow">JNJ <span style={{color: '#417505'}}>140.00</span></h5>
							</div>
							<div className="home-nav__item">
								<i className="iconcss icon-bell"></i>
								<div className="notifications-marker"></div>
							</div>
							<div className="home-nav__item">
								<img src="../assets/img/user-round.png"/>
							</div>
						</div>
						<div ref="hamburger" className="home-nav__hamburger" onClick={this.toggleMenuOpen}>
							<div className="line"></div>
							<div className="line"></div>
							<div className="line"></div>
						</div>
					</div>
				</div>
				<div className="home-nav__topbar">
					<div className="home-nav__left">
		                <SearchBar iconName="icon-search-2" placeholder="Search for anything"/>
					</div>
					<div className="home-nav__right">
						<i className="iconcss icon-chat"></i>
						<p>Chat now</p>
					</div>
				</div>
				<div className="home-nav__main">
					<div ref="panels">
						<div className="home-nav__panel home-nav__panel--white">
							<ul>
								<li onClick={this.openSecondaryPanel}><h3 className={classNames({'active': secondaryPanelOpen})}>Links</h3></li>
								<li><h3>News</h3></li>
								<li><h3>Events</h3></li>
								<li><h3>Campuses</h3></li>
								<li><h3>Organizations</h3></li>
								{/*<li><h3>Talent For Good</h3></li>*/}
								<li><h3>Our Credo</h3></li>
							</ul>
							<hr/>
							<ul>
								<li><h5>About</h5></li>
								<li><h5>Preferences</h5></li>
								<li><h5>Take the tour</h5></li>
								<li><h5>Help</h5></li>
							</ul>
						</div>
						<div className="home-nav__panel home-nav__panel--blue">
							<ul>
								<li><h3>View All Links</h3></li>
							</ul>
							<TabbedList tabWidth={120} data={[
								{ 
									title: "Favorites",
									content: [
										{ "name": "Concur", "href": "//concur.jnj.com" },
										{ "name": "AskGS", "href": "//askgs.jnj.com" },
										{ "name": "Fieldglass", "href": "//www.fieldglass.net/" },
										{ "name": "Workday", "href": "//jjworkday.com" },
										{ "name": "Healthy & Me", "href": "//jnj.sharepoint.com/sites/hrportal/English/GlobalHealthAndBenefits/Employee/Pages/HealthyMe.aspx" },
										{ "name": "DocSpace System", "href": "external" },
										{ "name": "Concur Room Booking", "href": "external" },
										{ "name": "Corporate Payroll Calendar", "href": "external" },
										{ "name": "Exercise Reimbursement", "href": "external" },
										{ "name": "Sharepoint", "href": "//jnj.sharepoint.com" },
										{ "name": "IRIS", "href": "//iris.jnj.com" },
										{ "name": "Diversity & Inclusion at J&J", "href": "//jnj.sharepoint.com/sites/Dni/Pages/Index.aspx/home" },
										{ "name": "Our Credo", "href": "external" },
										{ "name": "SUMMIT", "href": "//jnj.csod.com" },
										{ "name": "For Your Benefit", "href": "external" },
										{ "name": "ComplianceWire", "href": "external" },
										{ "name": "JJEDS", "href": "external" },
									]
								}, 
								{ 
									title: "By Category", 
									content: [
										{ "name": "Benefits & Compensation" },
										{ "name": "Business Intelligence" },
										{ "name": "Online Tools & Applications" },
										{ "name": "Computing & Technology" },
										{ "name": "Collaboration Spaces" },
										{ "name": "Legal, Quality & Compliance" },
										{ "name": "Performance & Recognition" },
										{ "name": "Finance & Procurement" },
										{ "name": "New Hire & Job Changes" },
										{ "name": "Time, Travel &  Expenses" },
										{ "name": "Services & Discounts" },
										{ "name": "On-Site Services" },
									]
								}
							]}/>
						</div>
					</div>
				</div>
			</nav>
		);
	}
}