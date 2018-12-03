import React, { Component, PropTypes } from 'react'

import classNames from "classnames"

import { Motion, spring, presets } from 'react-motion'
import { ScrollProvider, Scroller, ScrollLink } from 'react-skroll'


import SearchBar from './SearchBar';
import Dropdown from './form/Dropdown';

import linksData from '../data/home-links-page'


export default class HomeLinksPage extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			buckets: {
				recommended: [
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
				myrecents: [
					"Today",
					"This Week",
					"Last Week",
					"This Month",
					"This Year",
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
			selectedBucket: 'recommended',
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

	changeBucket = (bucket) => {
		this.setState({
			selectedBucket: bucket
		});
		document.getElementsByClassName('home-links-page__links-container')[0].childNodes[0].scrollTo(0,0);
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
			"home-links-page": true,
			"home-links-page--alphabetical": this.state.selectedBucket == 'alphabetical',
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
				<div className="home-links-page__sidebar">
					<h4>Links</h4>
					<Dropdown label="Sort By" options={[
						{ label: 'Recommended', click: () => this.changeBucket('recommended')},
						{ label: 'My Recents', click: () => this.changeBucket('myrecents')},
						{ label: 'Alphabetical', click: () => this.changeBucket('alphabetical')},
						{ label: 'Most Popular', click: () => this.changeBucket('mostpopular')},
					]}/>
					<ul>
						{
							scroll.children.map((child, i) =>
								<li key={i} className={classNames({ 'active': child.active })}>
									<ScrollLink to={child.start}>	
										<span>{child.name}</span>
										<div className="line"></div>
									</ScrollLink>
								</li>
							)
						}
					</ul>
				</div>
				<div className="home-links-page__links-container">
					<Scroller>
						{ (this.state.selectedBucket == 'recommended') ? (
							<section name="My Favorites">
								<h4>My Favorites</h4>
								{ this.createCards(favoritedLinks) }
								<hr/>
							</section>
							) : null
						}
						{
							this.state.buckets[this.state.selectedBucket].map((bucket, index) =>
								<section name={bucket} key={index}>
									<h4>{bucket}</h4>
										{ 
											(this.state.selectedBucket == 'recommended') ? this.createCards(this.state.linksData.filter((link) => link.buckets.includes(bucket))) : null
										}
										{
											(this.state.selectedBucket == 'alphabetical') ? this.createCards(this.state.linksData.filter((link) => link.name.startsWith(bucket))) : null
										}
									<hr/>
								</section>
							)
						}
					</Scroller>
				</div>
			</div>
		)
	}
}	