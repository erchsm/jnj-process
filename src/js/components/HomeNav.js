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
			notificationsOpen: false,
			isMobile: window.innerWidth <= 800,
		}
	}

	componentDidMount() {
		document.addEventListener('mousedown', this.handleClickOutside);
		window.addEventListener('resize', this.detectMobile);
	}

	componentWillUnmount() {
		document.removeEventListener('mousedown', this.handleClickOutside);
		window.removeEventListener('resize', this.detectMobile);
	}

	detectMobile = (event) => {
		this.setState({
			isMobile: window.innerWidth <= 800,
		})
	}

	handleClickOutside = (event) => {
		if (!this.refs.panels.contains(event.target) && !this.refs.hamburger.contains(event.target)) {
			this.setState({
				menuOpen: false,
				secondaryPanelOpen: false,
			});
		}
		if (!this.refs.notifications.contains(event.target) && !this.refs.bell.contains(event.target)) {
			this.setState({
				notificationsOpen: false,
			});
		}
	}

	toggleMenuOpen = () => {
		this.setState({
			menuOpen: !this.state.menuOpen,
			secondaryPanelOpen: false,
			notificationsOpen: false,
		})
	}
	
	openSecondaryPanel = (type) => {
		this.setState({
			secondaryPanelOpen: true,
			secondaryPanelType: type
		})
	}

	closeSecondaryPanel = () => {
		this.setState({
			secondaryPanelOpen: false,
		})
	}

	toggleNotificationsOpen = () => {
		this.setState({
			menuOpen: false,
			secondaryPanelOpen: false,
			notificationsOpen: !this.state.notificationsOpen,
		})
	}

	createLinksContent = () => (
		<div className="home-nav__panel home-nav__panel--blue">
			<ul>
				{ (this.state.isMobile) ? (<li onClick={this.closeSecondaryPanel}><i className="iconcss icon-arrow-long-left"></i></li>) : null}
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
				{ "name": "SUMMIT", "href": "//jnj.csod.com" },
				{ "name": "Our Credo", "href": "//google.com" },
				{ "name": "For Your Benefit", "href": "//google.com" },
				{ "name": "ComplianceWire", "href": "//google.com" },
				{ "name": "Talent For Good", "href": "//google.com" },
				{ "name": "Global HR Portal", "href": "//google.com" },
				{ "name": "J&J Design Portal", "href": "//google.com" },
				{ "name": "Hire.jnj.com", "href": "//google.com" },
				{ "name": "Move.jnj.com", "href": "//google.com" },
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
		<div className="home-nav__panel home-nav__panel--blue">
			<ul>
				{ (this.state.isMobile) ? (<li onClick={this.closeSecondaryPanel}><i className="iconcss icon-arrow-long-left"></i></li>) : null}
				<li><h3>Consumer</h3></li>
				<li><h3>Medical Devices</h3></li>
				<li><h3>Pharmaceuticals</h3></li>
				<li><h3>Supply Chain</h3></li>
			</ul>
		</div>
	)


	render() {
		const { menuOpen, secondaryPanelOpen, secondaryPanelType, notificationsOpen } = this.state;
		const { sticky } = this.props;

		const classnames = classNames({
			"home-nav": true,
			"home-nav--menuOpen": menuOpen,
			"home-nav--secondaryPanelOpen": secondaryPanelOpen,
			"home-nav--notificationsOpen": notificationsOpen,
			"home-nav--sticky": sticky,
		})

		return (
			<nav className={classnames}>
				<div className="home-nav__topbar" id="first-top-bar">
					<div className="home-nav__left">
						<i className="iconcss icon-home-logo"></i>
					</div>
					<div className="home-nav__right">
						{ (!this.state.isMobile) ? (
							<div className="home-nav__items">
								<div className="home-nav__item">
									<h5 className="eyebrow">JNJ <span style={{color: '#417505'}}>140.00</span></h5>
								</div>
								<div ref="bell" className="home-nav__item" onClick={this.toggleNotificationsOpen}>
									<i className="iconcss icon-bell"></i>
									<div className="notifications-marker"></div>
								</div>
								<div className="home-nav__item">
									<img src="../assets/img/user-round.png"/>
								</div>
							</div>
						) : (
							<div className="home-nav__items">
								<div className="home-nav__item">
									<i className="iconcss icon-search-2"></i>
								</div>
								<div className="home-nav__item">
									<i className="iconcss icon-chat"></i>
								</div>
							</div>
						)}
						<div ref="hamburger" className="home-nav__hamburger" onClick={this.toggleMenuOpen}>
							<div className="line"></div>
							<div className="line"></div>
							<div className="line"></div>
						</div>
					</div>
				</div>
				<hr/>
				<div className="home-nav__topbar" id="second-top-bar">
					<div className="home-nav__left">
						<SearchBar iconName="icon-search-2" placeholder="Search for anything"/>
					</div>
					<div className="home-nav__right">
						<i className="iconcss icon-chat"></i>
						<p>Chat now</p>
					</div>
				</div>
				<hr/>
				<div className="home-nav__notifications">
					<div ref="notifications">
						<h5 className="eyebrow">Notifications</h5>
						<div className="home-nav__notifications__row"><i className="iconcss icon-todo-check"></i><div className="indicator-value">2</div><p>To do</p></div>
						<div className="home-nav__notifications__row"><i className="iconcss icon-concur"></i><div className="indicator-value">2</div><p>Concur</p></div>
						<div className="home-nav__notifications__row"><i className="iconcss icon-calendar"></i><p>Calendar</p></div>
						<div className="home-nav__notifications__row"><i className="iconcss icon-yammer"></i><div className="indicator-value">3</div><p>Yammer</p></div>
						<div className="home-nav__notifications__row"><i className="iconcss icon-workday"></i><div className="indicator-value">31</div><p>Workday</p></div>
						<div className="home-nav__notifications__row"><i className="iconcss icon-plane"></i><p>Travel</p></div>
					</div>
				</div>
				<div className="home-nav__main">
					<div ref="panels">
						<div className="home-nav__panel home-nav__panel--white">
							<ul>
								{ (this.state.isMobile) ? (<ul className="home-nav__items">
									<li ref="bell" className="home-nav__item">
										<i className="iconcss icon-bell"></i>
										<div className="notifications-marker"></div>
									</li>
									<li className="home-nav__item">
										<img src="../assets/img/user-round.png"/>
									</li>
									<li className="home-nav__item">
										<h5 className="eyebrow">JNJ <span style={{color: '#417505'}}>140.00</span></h5>
									</li>
								</ul>) : null}
								<li onClick={() => this.openSecondaryPanel('links')}><h3 className={classNames({'active': secondaryPanelType == 'links' && secondaryPanelOpen })}>Links</h3></li>
								<li><a href="//home.jnj.com/#my-news" target="_blank"><h3>News</h3></a></li>
								<li><a target="_blank"><h3>Events</h3></a></li>
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
						{ (this.state.secondaryPanelType == 'links') ? this.createLinksContent() : this.createCampusesContent() }
					</div>
				</div>
				<div style={{ display: sticky ? 'block' : 'none', height: this.state.isMobile ? '60px' : '120px' }}/>
			</nav>
		);
	}
}