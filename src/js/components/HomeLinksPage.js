import React, { Component, PropTypes } from 'react'

import classNames from 'classnames'
import Moment from 'moment'
import { extendMoment } from 'moment-range'
import { Link, DirectLink, Element, Events, animateScroll, scrollSpy} from "react-scroll";

import SearchBar from './SearchBar';
import Dropdown from './form/Dropdown';
import HomeLinksPagination from './HomeLinksPagination';

import linksData from '../data/home-links-page'


export default class HomeLinksPage extends Component {

	constructor(props) {
		super(props);

		this.moment = extendMoment(Moment);
		
		this.state = {
			buckets: {
				recommended: [
					"My Favorites",
					"Benefits & Compensation",
					"Business Intelligence",
					"Collaboration Spaces",
					"Finance & Procurement",
					"Legal, Quality & Compliance",
					"New Hire & Job Changes",
					"On-Site Services",
					"Performance & Recognition",
					"Services & Discounts",
					"Computing & Technology",
					"Time, Travel & Expenses",
					"Online Tools & Applications",
				],
				myrecents: [
					"Today",
					"This Week",
					"Last Week",
					"This Month",
					"This Year",
				],
				mostpopular: [
					"Benefits & Compensation",
					"Business Intelligence",
					"Collaboration Spaces",
					"Finance & Procurement",
					"Legal, Quality & Compliance",
					"New Hire & Job Changes",
					"On-Site Services",
					"Performance & Recognition",
					"Services & Discounts",
					"Computing & Technology",
					"Time, Travel & Expenses",
					"Online Tools & Applications",
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

	componentDidMount() {
		Events.scrollEvent.register("begin", function() {
			console.log("begin", arguments);
		});

		Events.scrollEvent.register("end", function() {
			console.log("end", arguments);
		});

		scrollSpy.update();
	}

	componentWillUnmount() {
		Events.scrollEvent.remove("begin");
		Events.scrollEvent.remove("end");
	}
	
	toggleFavorite = (link, e) => {
		e.preventDefault();
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
		this.setState({
			selectedBucket: bucket,
		});
		document.getElementsByClassName('home-links-page__links-container')[0].childNodes[0].scrollTo(0,1)
	}

	createCards = (links, willPaginate) => {
		const cards = [links.map((link, i) =>
			<a href={(link.href) ? link.href : '#'} target="_blank" className="card" key={i} style={i >= 9 && willPaginate ? {'display' : 'none'} : null}>
				<h5>
					<div className="circles"></div>
					<i 
					onClick={(e) => this.toggleFavorite(link, e)}
					className={classNames({ 
						'iconcss icon-star-outline': !link.favorited, 
						'iconcss icon-star-fill': link.favorited,
					})}>
					</i>
					{link.id}
				</h5>
				<p>{link.description ? link.description : 'No description available.'}</p>
			</a>
		), (links.length >= 9 && willPaginate ? <HomeLinksPagination links={links.slice(9,1000)} clickStar={this.toggleFavorite}/> : null)]
		return cards
	}

	createScrollLinks = () => (
		<ul>
			{ 
				this.state.buckets[this.state.selectedBucket].map((bucket, i) =>
					<li key={i}>
						<Link
						activeClass="active"
						to={bucket}
						spy={true}
						smooth="easeOutExpo"
						duration={900}
						offset={-144}
						isDynamic={true}
						containerId="scroll-container">
							<span>{bucket}</span>
							<div className="line"></div>
						</Link>
					</li>
				)
			}
		</ul>
	)

	onChangeSearch = (event) => {
		this.setState({
			searchValue: event.target.value
		});
	};

	clearSearch = () => {
		this.setState({
			searchValue: ""
		});
	};


	render() {
		const { hideSearch, dropdownLabel } = this.props;

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

		let searchData = [{
			title: "Suggestions",
			data: this.state.linksData,
		}];
		
		return (
			<div className={classnames}>
				<div className="home-links-page__sidebar">
					<h4>Links</h4>
					<Dropdown label={dropdownLabel || 'Sort By'} options={[
						{ label: 'Recommended', click: () => this.changeBucket('recommended')},
						{ label: 'My Recents', click: () => this.changeBucket('myrecents')},
						{ label: 'Alphabetical', click: () => this.changeBucket('alphabetical')},
						{ label: 'Most Popular', click: () => this.changeBucket('mostpopular')},
					]}/>
					{ this.createScrollLinks() }
				</div>
				<div className="home-links-page__links-container">
					<div id="scroll-container">
						{/*<SearchBar iconName="icon-search-2" placeholder="Search for a link" searchData={searchData}/>*/}
						{
							(hideSearch) ? null : (<div className="search-row">
								<div className="search-bar">
									<input type="text" value={this.state.searchValue ? this.state.searchValue : ""} className="react-autosuggest__input" placeholder="Search for a link" onChange={this.onChangeSearch}/>
									<i className="iconcss icon-search-2"></i>
									<i onClick={this.clearSearch} className="iconcss icon-close-sm" style={(this.state.searchValue) ? null : {'display': 'none'}}></i>
								</div>
							</div>)
						}
						{
							(this.state.searchValue) ? (
								<div className="scroll-section">
									<h4>Search Results for “{this.state.searchValue}”</h4>
									{
										this.createCards(this.state.linksData.filter((link) => link.id.toLowerCase().includes(this.state.searchValue.toLowerCase())))
									}
									<hr/>
								</div>
							) : this.state.buckets[this.state.selectedBucket].map((bucket, index) =>
								<Element 
									name={bucket} 
									key={index} 
									className={classNames({
										'scroll-section': true,
										// 'hidden': this.state.selectedBucket == 'recommended' && this.state.linksData.filter((link) => link.buckets.includes(bucket)).length == 0 ,
										// 'hidden': this.state.selectedBucket == 'alphabetical' && this.state.linksData.filter((link) => link.id.startsWith(bucket)).length == 0 ,
									})}>
									<h4>{bucket}</h4>
										{ 
											(bucket == 'My Favorites') ? this.createCards(favoritedLinks, false) : null
										}
										{ 
											(this.state.selectedBucket == 'recommended' && bucket != 'My Favorites') ? this.createCards(this.state.linksData.filter((link) => link.buckets.includes(bucket)), true) : null
										}
										{
											(this.state.selectedBucket == 'alphabetical') ? this.createCards(this.state.linksData.filter((link) => link.id.startsWith(bucket)), true) : null
										}
										{
											(this.state.selectedBucket == 'myrecents') ? this.createCards(this.state.linksData.filter((link) => this.state.calendar[bucket].contains(this.moment().add(-1 * link.daysSinceClick, 'days'))), true) : null
										}
										{
											(this.state.selectedBucket == 'mostpopular') ? this.createCards(this.state.linksData.filter((link) => link.buckets.includes(bucket)).sort((a, b) => (b.popularity - a.popularity)), true) : null
										}
									<hr/>
								</Element>
							)
						}
					</div>
				</div>
			</div>
		)
	}
}	
