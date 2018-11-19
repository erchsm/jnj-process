import React, { Component, PropTypes } from 'react'

import classNames from "classnames"

import { Motion, spring, presets } from 'react-motion'
import { ScrollProvider, Scroller, ScrollLink } from 'react-skroll'


import SearchBar from './SearchBar';

import linksData from '../data/home-links-page'


export default class HomeLinksPage extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
		}
	}

	
	render() {
		const { scroll } = this.props;

		const classnames = classNames({
			"home-links-page": true
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
			"Preferences": 0,
			"Photo": .33333333,
			"Accounts": .66666667,
			"Skills": 1,
		}

		const lineAnimation = {
		    transform: 'scale3d(' + linePercentage[activeChild.name] + ', 1, 1)',
	    }

		
		return (
			<div className={classnames}>
				<div className="home-links-page__links-container">
					<Scroller>
						{
							linksData.allLinks.map((item, index) =>
								<section name={item.title}>
									<h4>{item.title}</h4>
									{
										item.links.map((link, index) =>
											<div className="card">
												<h5>{link.name}</h5>
											</div>
										)
									}
									<hr/>
								</section>
							)
						}
					</Scroller>
				</div>
				<div className="home-links-page__sidebar">
					<h3>Links</h3>
					<ul>
						{
							scroll.children.map((child, index) =>
								<li key={index}>
									<ScrollLink
										key={index}
										className={classNames({ 'active': child.active })}
										to={child.start}
										>	
										<span>{child.name}</span>
									</ScrollLink>
								</li>
							)
						}
					</ul>
				</div>
			</div>
		)
	}
}	