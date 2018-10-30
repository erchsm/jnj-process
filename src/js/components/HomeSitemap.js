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
	
	render() {
		const classnames = classNames({
			"home-sitemap": true
		});


		
		return (
			<div className={classnames}>
		        <Tree 
		        data={homeSitemapData}
		        orientation={'horizontal'}
		        translate={{x: this.state.width, y: this.state.height}} 
		        zoom={1} 
		        shouldCollapseNeighborNodes={true}
		        useCollapseData={true}
		        transitionDuration={600}
		        separation={{siblings: .3, nonSiblings: 200}}
		        nodeSize={{x: 240, y: 140}}
		        textLayout={{textAnchor: "start", x: 18, y: 0 }}
		        />
			</div>
		)
	}
}	