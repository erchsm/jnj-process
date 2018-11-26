import React, { Component, PropTypes } from 'react'

import classNames from "classnames"

import { Motion, spring, presets } from 'react-motion'
import { ScrollProvider, Scroller, ScrollLink } from 'react-skroll'


import SearchBar from './SearchBar';

// import linksData from '../data/home-links-page'
import linksData from '../data/home-links-page-alt'


export default class HomeLinksPage extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			buckets: {
				forMe: [
					"Benefits & Compensation",
					"Business Intelligence",
					"Online Tools & Applications",
					"Computing & Technology",
					"Collaboration Spaces",
					"Legal, Quality & Compliance",
					"Performance & Recognition",
					"Finance & Procurement",
					"New Hire & Job Changes",
					"Time, Travel &  Expenses",
					"Services & Discounts",
					"On-Site Services",
				],
				alphabetical: [
					"A",
					"B",
					"C",
					"D",
					"E",
					"F",
					"G",
					"H",
					"I",
					"J",
					"K",
					"L",
					"M",
					"N",
					"O",
					"P",
					"Q",
					"R",
					"S",
					"T",
					"U",
					"V",
					"W",
					"X",
					"Y",
					"Z",
					"#",
				],
			},	
			linksData: linksData.allLinks,
		}
	}

	toggleFavorite = (link, e) => {
		if (!link.favorited) {
			e.target.parentNode.parentNode.classList.remove('starAnimation');
			e.target.parentNode.parentNode.classList.add('starAnimation');
		} 

		let allLinks = this.state.linksData;
		const index = allLinks.indexOf(link);

		link.favorited = !link.favorited;

		allLinks[index] = link;

		this.setState({
			linksData: allLinks
		})

		// this.setState(prevState => ({
		// 	linksData: (prevState.linksData.filter((l) => l.name != link.name).concat(link))
		// }))
	}

	createCards = (links) => (
		links.map((link, index) =>
			<div className="card" key={index}>
				<h5>
					<div className="circles"></div>
					<i 
					onClick={(e) => this.toggleFavorite(link, e)}
					className={classNames({ 
						'iconcss icon-star-outline': !link.favorited, 
						'iconcss icon-star-fill': link.favorited,
					})}>
					</i>
					{link.name}
				</h5>
				<p>{link.description ? link.description : 'No description available.'}</p>
			</div>
		)
	)

	
	render() {
		const { scroll } = this.props;

		const classnames = classNames({
			"home-links-page": true
		});

		// const linePercentage = {
		// 	"Welcome": 0.06,
		// 	"Preferences": .22,
		// 	"Photo": .38,
		// 	"Bio": .50,
		// 	"Contact": .64,
		// 	"Accounts": .78,
		// 	"Birthday": .94,
		// }

		let favoritedLinks = [];

		this.state.linksData.forEach((link) => {
			(link.favorited) ? favoritedLinks.push(link) : null;
		});
		
		return (
			<div className={classnames}>
				<div className="home-links-page__links-container">
					<Scroller>
						<section name="My Favorites">
							<h4>My Favorites</h4>
							{ this.createCards(favoritedLinks) }
							<hr/>
						</section>
						{
							this.state.buckets.forMe.map((bucket, index) =>
								<section name={bucket} key={index}>
									<h4>{bucket}</h4>
									{ this.createCards(this.state.linksData.filter((link) => link.buckets.includes(bucket))) }
									<hr/>
								</section>
							)
						}
					</Scroller>
				</div>
				<div className="home-links-page__sidebar">
					<h4>Links</h4>
					<ul>
						{
							scroll.children.map((child, index) =>
								<li key={index} className={classNames({ 'active': child.active })}>
									<ScrollLink
										key={index}
										to={child.start}
										>	
										<span>{child.name}</span>
										<div className="line"></div>
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