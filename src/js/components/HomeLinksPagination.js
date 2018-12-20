import React, { Component, PropTypes } from 'react'

import classNames from 'classnames'


export default class HomeLinksPagination extends Component {

	constructor(props) {
		super(props);
		
		this.state = {
			isOpen: false,
		}
	}
	

	showAll = () => {
		this.setState({
			isOpen: !this.state.isOpen,
		});
	};


	render() {
		const { links, clickStar } = this.props;

		const classnames = classNames({
			"home-links-page__pagination": true,
		});

		console.log(links);
		
		return (
			<div className={classnames}>
				{	
					(!this.state.isOpen) ? (
						<div onClick={this.showAll} className="mdc-button mdc-button--primary">Load More Links</div>
					) : (
						[
							<hr/>,
							links.map((link, i) =>
								<a key={i} href={(link.href) ? link.href : '#'} target="_blank" className="card"key={i} >
									<h5>
										<div className="circles"></div>
										<i onClick={(e) => clickStar(link, e)} className={classNames({ 
											'iconcss icon-star-outline': !link.favorited, 
											'iconcss icon-star-fill': link.favorited,
										})}>
										</i>
										<span>{link.id}</span>
									</h5>
									<p>{link.description ? link.description : 'No description available.'}</p>
								</a>
							)
						]
					)
				}
			</div>
		)
	}
}	
