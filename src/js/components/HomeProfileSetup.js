import React, { Component, PropTypes } from 'react'
import Autosuggest from 'react-autosuggest'

import classNames from "classnames"

import { Motion, spring, presets } from 'react-motion'
import { ScrollProvider, Scroller, ScrollLink } from 'react-skroll'

import SelectBox from './SelectBox'
import ImageUpload from './ImageUpload'

import homeProfileSetupData from '../data/home-profile-setup'


export default class HomeProfileSetup extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			preferences: {

			}
		}
	}
	
	render() {
		const classnames = classNames({
			"home-profile-setup": true
		});

		let activeChild = this.props.scroll.children.filter((child) => child.active);
		(activeChild.length > 0) ? (activeChild = activeChild.pop()) : null;

		const linePercentage = {
			"Welcome": 0.06,
			"Preferences": .22,
			"Photo": .38,
			"Bio": .50,
			"Contact": .64,
			"Accounts": .78,
			"Birthday": .94,
		}

		const lineAnimation = {
	    transform: 'scale3d(' + linePercentage[activeChild.name] + ', 1, 1)',
    }

		
		return (
			<div className={classnames}>
				<i className="iconcss icon-home-logo"></i>
				<Scroller>
					<section name="Welcome" className={classNames({ 'moving': this.props.scroll.moving })}>
						<h1>Welcome to Home, James.</h1>
						<p>Home is where all Johnson & Johnson employees can connect to create a productive, united work environment. We're excited for you to join the community!</p>
					</section>
					<section name="Preferences" className={classNames({ 'moving': this.props.scroll.moving })}>
							<h1>Tell us what you’re interested in.</h1>
							<p>Select the companies, functions and locations you want to see withing your news and events. Pick as many as you like.</p>
							<div className="contents">
								<SelectBox
								value={null}
								label="Company/Franchise"
								onChange={() => console.log('')}
								items={homeProfileSetupData.franchises}
								/>
								<SelectBox
								value={null}
								label="Function"
								onChange={() => console.log('')}
								items={homeProfileSetupData.franchises}
								/>
								<SelectBox
								value={null}
								label="Location"
								onChange={() => console.log('')}
								items={homeProfileSetupData.franchises}
								/>
							</div>
					</section>
					<section name="Photo" className={classNames({ 'moving': this.props.scroll.moving })}>
							<h1>Put a face to your name.</h1>
							<p>We’re connecting you with employees all over the world, adding your photo will put you in a room across the globe!</p>
							<div className="contents">
								<ImageUpload/>
							</div>
					</section>
					<section name="Bio" className={classNames({ 'moving': this.props.scroll.moving })}>
						<h1>About your role.</h1>
						<p>Share a 1-2 line description of what you do here at Johnson & Johnson. </p>
					</section>
					<section name="Contact" className={classNames({ 'moving': this.props.scroll.moving })}>
							<h1>What’s the best way to reach you?</h1>
							<p>There are many ways to connect at Johnson & Johnson. Let us know your preference.</p>
					</section>
					<section name="Accounts" className={classNames({ 'moving': this.props.scroll.moving })}>
							<h1>Sync your accounts.</h1>
							<p>See what's happening on Yammer to share articles and events. Connect to your Outlook calendar to get a glimpse of your day.</p>
					</section>
					<section name="Birthday" className={classNames({ 'moving': this.props.scroll.moving })}>
							<h1>Like cupcakes?</h1>
							<p>Enter your birthday and let us know when to celebrate! </p>
					</section>
				</Scroller>
				<ul className="home-profile-setup__nav">
					<div className="home-profile-setup__nav-line">
						<div className="home-profile-setup__nav-line-inner" style={lineAnimation}></div>
					</div>
					{
						this.props.scroll.children.map((child, index) =>
							<li id="nav-home" key={index}>
								<ScrollLink
									key={index}
									className={child.active ? ('active ' + 'active-' + child.name.length) : 'inactive'}
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