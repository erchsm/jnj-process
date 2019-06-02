import React, {Component} from 'react';
import classNames from "classnames";

import specialties from '../data/specialties-search';
import symptoms from '../data/symptoms-search';

import SearchBar from './SearchBar';


export default class MdcFlipper extends Component {

	constructor(props) {
		super(props);
	}

	componentDidMount = () => {
		document.addEventListener('scroll', this.handleScroll);
	}

	componentWillUnmount = () => {
		document.removeEventListener('scroll', this.handleScroll);
	}

	handleScroll = (event) => {
		let scrollTop = event.srcElement.body.scrollTop

			// this.setState({
			//     isScrolledTop: scrollTop < 90
			// });
	}

	openTakeover = (event) => {
		this.setState({
			takeoverOpen: true
		});
	}

	setIndexHovered = (event) => {
		this.setState({
			indexHovered: this.getChildIndex(event.target)
		});
	}

	closeTakeover = (event) => {
		// setTimeout(() => {
			this.setState({
				takeoverOpen: false
			});
		// }, 0);
	}

	getChildIndex = (elem) => {
		let i = 0;

		while ((elem = elem.previousSibling) != null) {
		  i++;
		}

		return i;
	}

	render() {
		// const { driftSrc } = this.state;


		const classnames = classNames({
			"mdc-switcher": true
		});


		return (
			<div className={classnames}> 
				<section className="grid">
					<h1 className="medium grid__item grid__item--col-7">Welcome to the New Johnson & Johnson Medical Device Companies.</h1>              
				</section>
				<div className="grid mdc-switcher__tile-container" id="flipper">
					<div className="mdc-switcher__tiles grid__item grid__item--col-12">
						<div className="mdc-switcher__tile">
							<i className="iconcss icon-hcp"></i>                
							<h2 className="no-mb">I’m a</h2>
							<h1 className="no-mb">
								Healthcare <br/>Professional 
							</h1>
							<SearchBar placeholder="Search For A Specialty" searchData={specialties.groups}/>
							<button className="mdc-button mdc-button--text-link"><span>Continue to HCP Home</span><i className="iconcss icon-arrow-right"></i></button>
						</div>
						<div className="mdc-switcher__tile">
							<i className="iconcss icon-patient"></i>
							<h2 className="no-mb">I’m a</h2>
							<h1 className="no-mb">
								Patient<br/><br/>
							</h1>
							{<SearchBar placeholder="Search For Your Symptoms" searchData={symptoms.groups}/>}
							<button className="mdc-button mdc-button--text-link"><span>Continue to Patients Home</span><i className="iconcss icon-arrow-right"></i></button>
						</div>
					</div>
				</div>
			</div>  
		);
	}
}