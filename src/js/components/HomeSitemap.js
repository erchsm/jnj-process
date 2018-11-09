import React, { Component, PropTypes } from 'react'

import classNames from "classnames"

import homeSitemapData from '../data/home-sitemap'

import Tree from 'react-d3-tree';



export default class HomeSitemap extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			width: 0,
			height: 0,
		}

		this.addChildNumToLabel(homeSitemapData);
	}

	componentDidMount = () => {
		this.updateWindowDimensions();
		window.addEventListener('resize', this.updateWindowDimensions);
	}

	componentWillUnmount = () => {
		window.removeEventListener('resize', this.updateWindowDimensions);
	}

	updateWindowDimensions = () => {
		this.setState({ width: window.innerWidth / 2, height: window.innerHeight / 2});
	}

	addChildNumToLabel = (data) => {
		if (data.children && data.children.length > 0) {

			data.name += ' (' + data.children.length + ')';

			data.children.forEach((item) => {
				return this.addChildNumToLabel(item);
			});
		} 
	}
	
	render() {
		const { cleanedData } = this.state;

		const classnames = classNames({
			"home-sitemap": true
		});

		// console.log(cleanedData);

		/*const data = homeSitemapData.map((item, index) =>
			(item.children.length > 0) ? (item.name += '(' + item.children.length + ')' ) : null
		)*/

				
		return (
			<div className={classnames}>
				{/*<h1>Home Sitemap</h1>*/}
				<Tree 
				data={homeSitemapData}
				orientation={'horizontal'}
				translate={{x: this.state.width, y: this.state.height}} 
				zoom={1} 
				shouldCollapseNeighborNodes={true}
				useCollapseData={true}
				transitionDuration={600}
				separation={{siblings: .3, nonSiblings: 200}}
				nodeSize={{x: 300, y: 140}}
				textLayout={{textAnchor: "start", x: 18, y: 0 }}
				/>
				<div className='home-sitemap__help'>
					<i className="iconcss icon-click"></i>
					<p>Click to expand</p>
					<i className="iconcss icon-scroll"></i>
					<p>Scroll to zoom</p>
					<i className="iconcss icon-pan"></i>
					<p>Drag to pan</p>
				</div>
				<div className='mdc-taxonomy-diagram__legend'>
					<div className="mdc-taxonomy-diagram__legend-headline">
						<h6 className="eyebrow">Legend</h6>
					</div>
					<div className="mdc-taxonomy-diagram__legend-item">
						<h5>Parent Node</h5><div className="mdc-taxonomy-diagram__legend-swatch" style={{backgroundColor: '#000'}}></div>
					</div>
					<div className="mdc-taxonomy-diagram__legend-item">
						<h5>Child Node</h5><div className="mdc-taxonomy-diagram__legend-swatch" style={{backgroundColor: '#FFF', border: 'solid 2px #000'}}></div>
					</div>
				</div>
			</div>
		)
	}
}	