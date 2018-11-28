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
			secondaryPanelType: 'links',
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
	
	openSecondaryPanel = (type) => {
		this.setState({
			secondaryPanelOpen: true,
			secondaryPanelType: type
		})
	}

	createLinksContent = () => (
		<div>
			<ul>
				<li><a href="https://home.jnj.com/v2/#my-links" target="_blank"><h3>View All Links</h3></a></li>
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
				{ "name": "DocSpace System", "href": "//google.com" },
				{ "name": "Concur Room Booking", "href": "//google.com" },
				{ "name": "Corporate Payroll Calendar", "href": "//google.com" },
				{ "name": "Exercise Reimbursement", "href": "//google.com" },
				{ "name": "Sharepoint", "href": "//jnj.sharepoint.com" },
				{ "name": "IRIS", "href": "//iris.jnj.com" },
				{ "name": "Diversity & Inclusion at J&J", "href": "//jnj.sharepoint.com/sites/Dni/Pages/Index.aspx/home" },
				{ "name": "Our Credo", "href": "//google.com" },
				{ "name": "SUMMIT", "href": "//jnj.csod.com" },
				{ "name": "For Your Benefit", "href": "//google.com" },
				{ "name": "ComplianceWire", "href": "//google.com" },
				{ "name": "JJEDS", "href": "//google.com" },
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
	)

	createCampusesContent = () => (
		<ul>
			<li><h3>Consumer</h3></li>
			<li><h3>Medical Devices</h3></li>
			<li><h3>Pharmaceuticals</h3></li>
			<li><h3>Supply Chain</h3></li>
		</ul>
	)


	render() {
		const { menuOpen, secondaryPanelOpen, secondaryPanelType } = this.state;


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
								<li onClick={() => this.openSecondaryPanel('links')}><h3 className={classNames({'active': secondaryPanelType == 'links' && secondaryPanelOpen })}>Links</h3></li>
								<li><a href="//home.jnj.com/#my-news" target="_blank"><h3>News</h3></a></li>
								<li><a href="//home.jnj.com/#my-events" target="_blank"><h3>Events</h3></a></li>
								<li onClick={() => this.openSecondaryPanel('campuses')}><h3 className={classNames({'active': secondaryPanelType == 'campuses' && secondaryPanelOpen })}>Campuses</h3></li>
								<li onClick={() => this.openSecondaryPanel('organizations')}><h3 className={classNames({'active': secondaryPanelType == 'organizations' && secondaryPanelOpen })}>Organizations</h3></li>
								<li><a href="//home.jnj.com/v2/#ourcredo" target="_blank"><h3>Our Credo</h3></a></li>
							</ul>
							<hr/>
							<ul>
								<li><a href="//jnj.sharepoint.com/teams/home" target="_blank"><h5>About</h5></a></li>
								<li><a><h5>Preferences</h5></a></li>
								<li><h5>Take the tour</h5></li>
								<li><a href="//iris.jnj.com" target="_blank"><h5>Help</h5></a></li>
							</ul>
						</div>
						<div className="home-nav__panel home-nav__panel--blue">
							{ (this.state.secondaryPanelType == 'links') ? this.createLinksContent() : this.createCampusesContent() }
						</div>
					</div>
				</div>
			</nav>
		);
	}
}