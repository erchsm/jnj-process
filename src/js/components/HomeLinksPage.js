import React, { Component, PropTypes } from 'react'

import classNames from "classnames"
import Moment from "moment"
import { extendMoment } from 'moment-range';

import { Motion, spring, presets } from 'react-motion'
import { ScrollProvider, Scroller, ScrollLink } from 'react-skroll'


import SearchBar from './SearchBar';
import Dropdown from './form/Dropdown';

import linksData from '../data/home-links-page'


export default class HomeLinksPage extends Component {

	constructor(props) {
		super(props);

		this.moment = extendMoment(Moment);
		
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
				mostpopular: [
					"Most Popular",
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
			calendar: {
				"Today": this.moment.range(this.moment().add(-1, 'days'), this.moment().add(0, 'days')),
				"This Week": this.moment.range(this.moment().add(-7, 'days'), this.moment().add(-1, 'days')),
				"Last Week": this.moment.range(this.moment().add(-14, 'days'), this.moment().add(-7, 'days')),
				"This Month": this.moment.range(this.moment().add(-27, 'days'), this.moment().add(-14, 'days')),
				"This Year": this.moment.range(this.moment().add(-365, 'days'), this.moment().add(-27, 'days')),
			}
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

	updateLinkClickDate = (link, e) => {

		let allLinks = this.state.linksData;
		const index = allLinks.indexOf(link);

		link.daysSinceClick = 0;

		allLinks[index] = link;

		this.setState({
			linksData: allLinks
		})
	}

	changeBucket = (bucket) => {
		// this.forceUpdate();
		this.setState({
			selectedBucket: bucket
		});
		document.getElementsByClassName('home-links-page__links-container')[0].childNodes[0].scrollTo(0,1);
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

	createScrollLinks = () => (
		<ul>
			{
				this.props.scroll.children.map((child, i) =>
					<li key={i} className={classNames({ 'active': child.active })}>
						<ScrollLink to={child.start}>	
							<span>{child.name}</span>
							<div className="line"></div>
						</ScrollLink>
					</li>
				)
			}
		</ul>
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
					<Dropdown label="Sort by" options={[
						{ label: 'Recommended', click: () => this.changeBucket('recommended')},
						{ label: 'My Recents', click: () => this.changeBucket('myrecents')},
						{ label: 'Alphabetical', click: () => this.changeBucket('alphabetical')},
						{ label: 'Most Popular', click: () => this.changeBucket('mostpopular')},
					]}/>
					{ this.createScrollLinks() }
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
								<section 
									name={bucket} 
									key={index} 
									className={classNames({
									 'hidden': this.state.selectedBucket == 'recommended' && this.state.linksData.filter((link) => link.buckets.includes(bucket)).length == 0 ,
									 'hidden': this.state.selectedBucket == 'alphabetical' && this.state.linksData.filter((link) => link.name.startsWith(bucket)).length == 0 ,
									})}>
									<h4>{bucket}</h4>
										{ 
											(this.state.selectedBucket == 'recommended') ? this.createCards(this.state.linksData.filter((link) => link.buckets.includes(bucket))) : null
										}
										{
											(this.state.selectedBucket == 'alphabetical') ? this.createCards(this.state.linksData.filter((link) => link.name.startsWith(bucket))) : null
										}
										{
											(this.state.selectedBucket == 'myrecents') ? this.createCards(this.state.linksData.filter((link) => this.state.calendar[bucket].contains(this.moment().add(-1 * link.daysSinceClick, 'days')))) : null
										}
										{
											(this.state.calendar[bucket]) ? console.log(bucket, this.state.calendar[bucket]) : null
										}
										{/*
											(this.state.calendar[bucket]) ? console.log(this.moment().add(-1 * this.state.linksData[0].daysSinceClick, 'days')) : null
										*/}
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