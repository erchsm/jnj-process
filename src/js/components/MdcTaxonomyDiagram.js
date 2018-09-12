import React, {Component, cloneElement} from 'react';
import classNames from "classnames";
import { InteractiveForceGraph, ForceGraphNode, ForceGraphLink } from 'react-vis-force/dist/react-vis-force.min.js';

import productFamilies from '../data/taxonomy/productFamilies.json';
import products from '../data/taxonomy/products.json';
import procedures from '../data/taxonomy/procedures.json';
import conditions from '../data/taxonomy/conditions.json';
import specialties from '../data/taxonomy/specialties.json';
import anatomy from '../data/taxonomy/anatomy.json';

export default class MdcTaxonomyDiagram extends Component {

	static propTypes = {
	}


	constructor(props) {
		super(props);
		this.state = { 
			width: 0, 
			height: 0,
			// colors: {
			// 	'Procedure' : '#8CB369',
			// 	'Product' : '#F4E285',
			// 	'Specialty' : '#F4A259',
			// 	'Product Family' : '#3A87C1',
			// 	'Condition' : '#51A3A3',
			// 	'Anatomy' : '#E08DAC',
			// },
			colors: {
				'Procedure' : '#9D96B8',
				'Product' : '#BDD7EE',
				'Specialty' : '#EBEFBF',
				'Product Family' : '#CEB5A7',
				'Condition' : '#92828D',
				'Anatomy' : '#2274A5',
			},
		};
	}

	componentDidMount = () => {
		this.updateWindowDimensions();
		window.addEventListener('resize', this.updateWindowDimensions);
	}

	componentWillUnmount = () => {
		window.removeEventListener('resize', this.updateWindowDimensions);
	}

	updateWindowDimensions = () => {
		this.setState({ width: window.innerWidth, height: window.innerHeight });
	}

	createNodes = (dataset) => (
		dataset.nodes.map(node => (
			<ForceGraphNode
				key={node.id}
				fill={this.state.colors[node.group]}
				node={{ ...node, radius: node.size || 6 }}
			/>
		))
	)

	createNodeLinks = (dataset) => (
		dataset.links.map(link => (
			 <ForceGraphLink
				key={`${link.source}=>${link.target}`}
				link={{ ...link, value: 1 }}
			 />
		))
	)

	/*createMasterNode = (name, color, dataset) => (
		<ForceGraphNode
			key={name}
			fill={color}
			node={{ ...node, radius: node.size || 6 }}
		/>
		dataset.links.map(link => (
			 <ForceGraphLink
				key={`${link.source}=>${link.target}`}
				link={{ ...link, value: 1 }}
			 />
		))
	)*/

	render() {
		const { width, height, colors } = this.state;


		const classnames = classNames({
			"mdc-taxonomy-diagram": true
		});


		return (
			<div className={classnames}>
				<InteractiveForceGraph
					zoom
					zoomOptions={{
						minScale: 0.6, 
						maxScale: 8,
					}}
					highlightDependencies
					simulationOptions={{
						animate: true,
						width: width,
						height: height,
					}}>
					{this.createNodes(productFamilies)}
					{this.createNodes(products)}
					{this.createNodes(procedures)}
					{this.createNodes(conditions)}
					{this.createNodes(specialties)}
					{this.createNodes(anatomy)}

					{this.createNodeLinks(productFamilies)}
					{this.createNodeLinks(products)}
					{this.createNodeLinks(procedures)}
					{this.createNodeLinks(conditions)}
					{this.createNodeLinks(specialties)}
					{this.createNodeLinks(anatomy)}
				</InteractiveForceGraph>

				<div className='mdc-taxonomy-diagram__legend'>
					<div className="mdc-taxonomy-diagram__legend-item">
						<h5>Procedure</h5><div className="mdc-taxonomy-diagram__legend-swatch" style={{backgroundColor: colors['Procedure']}}></div>
					</div>
					<div className="mdc-taxonomy-diagram__legend-item">
						<h5>Product</h5><div className="mdc-taxonomy-diagram__legend-swatch" style={{backgroundColor: colors['Product']}}></div>
					</div>
					<div className="mdc-taxonomy-diagram__legend-item">
						<h5>Specialty</h5><div className="mdc-taxonomy-diagram__legend-swatch" style={{backgroundColor: colors['Specialty']}}></div>
					</div>
					<div className="mdc-taxonomy-diagram__legend-item">
						<h5>Product Family</h5><div className="mdc-taxonomy-diagram__legend-swatch" style={{backgroundColor: colors['Product Family']}}></div>
					</div>
					<div className="mdc-taxonomy-diagram__legend-item">
						<h5>Condition</h5><div className="mdc-taxonomy-diagram__legend-swatch" style={{backgroundColor: colors['Condition']}}></div>
					</div>
					<div className="mdc-taxonomy-diagram__legend-item">
						<h5>Anatomy</h5><div className="mdc-taxonomy-diagram__legend-swatch" style={{backgroundColor: colors['Anatomy']}}></div>
					</div>
				</div>
			</div>
		);
	}
}