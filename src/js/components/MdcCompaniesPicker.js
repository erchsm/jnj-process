import React, {Component} from 'react';
import classNames from "classnames";

import CompaniesPickerData from "../data/companies-picker";


export default class MdcCompaniesPicker extends Component {

	static propTypes = {
	}


	constructor(props) {
		super(props);

				this.state = {
						takeoverOpen: false,
						takeoverData: {
							name: '',
							imgSrc: '',
							description: '',
						}
				}
	}

	componentDidMount = () => {
	}

	componentWillUnmount = () => {
	}

	handleScroll = (event) => {
				let scrollTop = event.srcElement.body.scrollTop
	}

	openTakeover = (name, imgSrc, description) => {
			this.setState(prevState => ({
					takeoverOpen: true,
					takeoverData: {
						...prevState.takeoverData,
						name: name,
						imgSrc: imgSrc,
						description: description
					}
			}));
	}

	setIndexHovered = (event) => {
			this.setState({
					indexHovered: this.getChildIndex(event.target)
			});
	}

	closeTakeover = (event) => {
		this.setState(prevState => ({
				takeoverOpen: false,
				takeoverData: {
						...prevState.takeoverData,
						name: '',
						imgSrc: '',
						description: ''
				}
		}));
	}

	getChildIndex = (elem) => {
			let i = 0;

			while ((elem = elem.previousSibling) != null) {
				i++;
			}

			return i;
	}

	createMarkup = () => ({ __html: this.state.takeoverData.description })
	

	render() {
		const { takeoverOpen, takeoverData } = this.state;

		const classnames = classNames({
				"mdc-companies-picker": true,
				"mdc-companies-picker--takeover-open": this.state.takeoverOpen
		});

		const companiesPickerData = CompaniesPickerData.data
		// .filter((item) => item.name != takeoverData.name) 
		.map((item, i) =>
        <li key={i}>
            <h2 onClick={() => this.openTakeover(item.name, item.imgSrc, item.description)}>
	            {item.name}
	            {/*<i className="iconcss icon-arrow-right"></i>*/}
            </h2>            
        </li>
    );


		return (
				<div className={classnames}> 
					<div className="mdc-companies-picker__left">
						{ takeoverOpen ? (
							<ul className="mdc-companies-picker__list">{companiesPickerData}</ul>) 
							: ( 
							<div className="mdc-companies-picker__initial">
									<h2>Our Companies</h2>
									<p>Johnson & Johnson Medical Devices Companies are a combination of many extraordinary specialties and services.</p>
									<button className="mdc-button mdc-button--secondary mdc-button--white">
										<span>See Our Companies</span>
									</button>
								</div>
							)
						}
					</div>
					<div className="mdc-companies-picker__right">
						{ takeoverOpen ? (
            	<div className="mdc-companies-picker__takeover">
		          	<div className="mdc-companies-picker__close-takeover" onClick={(e) => { this.closeTakeover(e);}}><i className="iconcss icon-arrow-long-left"></i></div>
		          	<img src={takeoverData.imgSrc}></img>
		          	<h1>{takeoverData.name}</h1>
		          	<div dangerouslySetInnerHTML={this.createMarkup()}></div>
        				<button className="mdc-button mdc-button--text-link mdc-button--white"><span>Go To Company</span><i className="iconcss icon-arrow-right"></i></button>
	            </div>
	          	) : <ul className="mdc-companies-picker__list">{companiesPickerData}</ul>
	          }
					</div>
				</div>  
		);
	}
}