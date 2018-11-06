import React, { Component, PropTypes } from 'react'
import Autosuggest from 'react-autosuggest'

import classNames from "classnames"

import { Motion, spring, presets } from 'react-motion'
import { ScrollProvider, Scroller, ScrollLink } from 'react-skroll'

import SelectBox from './form/SelectBox'
import MultiSelectBox from './form/MultiSelectBox'
import Switch from './form/Switch'

import SearchBar from './SearchBar';
import ImageUpload from './ImageUpload'


import homeProfileSetupData from '../data/home-profile-setup'


export default class HomeProfileSetup extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			preferences: {
				franchises: null,
				locations: null,
				functions: null,
			},
			accounts: {
				yammer: false,
				outlook: false,
			},
			skills: {
			},
			completed: {
				"Welcome": true,
				"Preferences": false,
				"Photo": false,
				"Bio": false,
				"Contact": false,
				"Accounts": false,
				"Skills": false,
				"Birthday": false,
			},
		}
	}

	onChangeAccountsYammer = () => {
		this.setState(prevState => ({
				completed: {
					...prevState.completed,
					"Accounts": true,
				},
				accounts: {
					...prevState.accounts,
					yammer: !prevState.accounts.yammer,
				}
		}))
	}

	onChangeAccountsOutlook = () => {
		this.setState(prevState => ({
				completed: {
					...prevState.completed,
					"Accounts": true,
				},
				accounts: {
					...prevState.accounts,
					outlook: !prevState.accounts.outlook,
				}
		}))
	}

	setPreferences = (filterType, value) => {
    this.setState(prevState => ({
    	completed: {
					...prevState.completed,
					"Preferences": true,
			},
      preferences: { 
      	...this.state.preferences, 
      	[filterType]: value 
      },
    }))
  }

  setPreferences = (filterType, value) => {
    this.setState(prevState => ({
    	completed: {
					...prevState.completed,
					"Skills": true,
			},
      preferences: { 

      	[filterType]: value 
      },
    }))
  }
	
	render() {
		const { scroll } = this.props;

		// console.log(scroll);

		const classnames = classNames({
			"home-profile-setup": true
		});

		let activeChild = scroll.children.filter((child) => child.active);
		(activeChild.length > 0) ? (activeChild = activeChild.pop()) : null;

		// const linePercentage = {
		// 	"Welcome": 0.06,
		// 	"Preferences": .22,
		// 	"Photo": .38,
		// 	"Bio": .50,
		// 	"Contact": .64,
		// 	"Accounts": .78,
		// 	"Birthday": .94,
		// }

		const linePercentage = {
			"Welcome": 0,
			"Preferences": .33333333333,
			"Accounts": .66666666666667,
			"Skills": 1,
		}

		const lineAnimation = {
	    transform: 'scale3d(' + linePercentage[activeChild.name] + ', 1, 1)',
    }

		
		return (
			<div className={classnames}>
				<i className="iconcss icon-home-logo"></i>
				<Scroller>

					<section name="Welcome" className={classNames({ 'moving': scroll.moving })}>
						<h1>Welcome to Home, James.</h1>
						<p>Home is where all Johnson & Johnson employees can connect to create a productive, united work environment. We're excited for you to join the community!</p>

						{
							scroll.children.filter((child) => child.name == 'Preferences').map((child, index) =>
								<ScrollLink key={index} to={child.start} key={index}>	
	 	              <button className="mdc-button mdc-button--text-link mdc-button--white">
		 	              <span>Let’s get started</span>
		 	              <i className="iconcss icon-arrow-right"></i>
		 	            </button>
								</ScrollLink>
							)
						}
					</section>

					<section name="Preferences" className={classNames({ 'moving': scroll.moving })}>
							<h1>Tell us what you’re interested in.</h1>
							<p>Select the companies, functions and locations you want to see withing your news and events. Pick as many as you like.</p>
							<div className="contents">
								<SelectBox
								value={this.state.preferences.franchises}
								label="Company/Franchise *"
								onChange={this.setPreferences.bind(this, 'franchises')}
								items={homeProfileSetupData.franchises}
								/>
								<SelectBox
								value={this.state.preferences.functions}
								label="Function *"
								onChange={this.setPreferences.bind(this, 'functions')}
								items={homeProfileSetupData.functions}
								/>
								<SelectBox
								value={this.state.preferences.locations}
								label="Location *"
								onChange={this.setPreferences.bind(this, 'locations')}
								items={homeProfileSetupData.locations}
								/>
							</div>
					</section>

					{/*<section name="Photo" className={classNames({ 'moving': scroll.moving })}>
							<h1>Put a face to your name.</h1>
							<p>We’re connecting you with employees all over the world, adding your photo will put you in a room across the globe!</p>
							<div className="contents">
								<ImageUpload/>
							</div>
					</section>*/}

					{/*<section name="Bio" className={classNames({ 'moving': scroll.moving })}>
						<h1>About your role.</h1>
						<p>Share a 1-2 line description of what you do here at Johnson & Johnson. </p>
					</section>*/}

					{/*<section name="Contact" className={classNames({ 'moving': scroll.moving })}>
							<h1>What’s the best way to reach you?</h1>
							<p>There are many ways to connect at Johnson & Johnson. Let us know your preference.</p>
					</section>*/}

					<section name="Accounts" className={classNames({ 'moving': scroll.moving })}>
							<h1>Sync your accounts.</h1>
							<p>See what's happening on Yammer to share articles and events. Connect to your Outlook calendar to get a glimpse of your day.</p>
							<Switch label={"Yammer"} value={this.state.accounts.yammer} onChange={this.onChangeAccountsYammer} />
							<Switch label={"Outlook"} value={this.state.accounts.outlook} onChange={this.onChangeAccountsOutlook} />
					</section>

					{/*<section name="Birthday" className={classNames({ 'moving': scroll.moving })}>
							<h1>Like cupcakes?</h1>
							<p>Enter your birthday and let us know when to celebrate! </p>
					</section>*/}

					{<section name="Skills" className={classNames({ 'moving': scroll.moving })}>
							<h1>Add your skills.</h1>
							<p>Search below for your personal and professional skills.</p>
              <SearchBar placeholder="Skills (ex. Data Analytics)" searchData={homeProfileSetupData.skills} onClick={this.addSkill}/>
					</section>}

				</Scroller>

				<ul className="home-profile-setup__nav">
					<div className="home-profile-setup__nav-line">
						<div className="home-profile-setup__nav-line-inner"></div>
						<div className="home-profile-setup__nav-line-inner home-profile-setup__nav-line-main" style={lineAnimation}></div>
						<div className="home-profile-setup__nav-line-inner"></div>
					</div>
					{
						scroll.children.map((child, index) =>
							<li key={index}>
								<ScrollLink
									key={index}
									className={this.state.completed[child.name] ? 'completed' : ''}
									to={child.start}
									>	
								 	<i className="iconcss icon-checkmark"></i>
									<span>{child.name}</span>
								</ScrollLink>
							</li>
						)
					}
				</ul>
			</div>
		)
	}
}	