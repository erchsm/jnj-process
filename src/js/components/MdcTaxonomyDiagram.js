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
			colors: {
				'Procedure' : '#8CB369',
				'Product' : '#F4E285',
				'Specialty' : '#F4A259',
				'Product Family' : '#3A87C1',
				'Condition' : '#51A3A3',
				'Anatomy' : '#E08DAC',
			},
			// colors: {
			// 	'Procedure' : '#9D96B8',
			// 	'Product' : '#BDD7EE',
			// 	'Specialty' : '#EBEFBF',
			// 	'Product Family' : '#CEB5A7',
			// 	'Condition' : '#92828D',
			// 	'Anatomy' : '#2274A5',
			// },
			selectedNode: { 
				id: 'Conditions',
				group: 'Condition',
				radius: 12 
			},
			popoutOpen: true,
			popout: {
				eyebrow: 'Content Type',
				heading: 'Conditions',
				body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ullamcorper est pulvinar lacus lobortis, at faucibus enim fermentum. In tincidunt tellus et sem mattis laoreet. Phasellus aliquet lectus tempus lorem aliquam, id suscipit ligula consequat. Phasellus eget ornare orci, eu bibendum odio. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse tincidunt mollis commodo. Donec quis ipsum in odio blandit vestibulum.'
			}
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
				showLabel
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

	createMasterNode = (name, group, dataset) => (
		<ForceGraphNode
			showLabel
			key={name}
			fill={this.state.colors[group]}
			node={{ 
				id: name,
				group: group,
				radius: 12 
			}}
		/>
	)

	createMasterLinks = (masterId, dataset) => (
		dataset.nodes.map(node => (
			<ForceGraphLink
				key={`${masterId}=>${node.id}`}
				link={{ 
					source: masterId,
					target: node.id,
					value: 1 
				}}
			/>
		))
	)

	selectNode = (event, node) => {
		this.setState((prevState) => ({ 
			selectedNode: node,
			popoutOpen: true,
			popout: {
				...prevState.popout,
				heading: node.id
			}
		}));
	}

	closePopout = (event, node) => {
		this.setState({ 
			popoutOpen: false,
		});
	}

	render() {
		const { width, height, colors, popoutOpen, popout, selectedNode} = this.state;


		const classnames = classNames({
			"mdc-taxonomy-diagram": true,
			"mdc-taxonomy-diagram--popoutOpen": popoutOpen
		});


		return (
			<div className={classnames}>
				<InteractiveForceGraph
					selectedNode={selectedNode}
					onSelectNode={(event, node) => this.selectNode(event, node)}
					zoom={true}
					zoomOptions={{
						minScale: 1, 
						maxScale: 8,
					}}
					highlightDependencies
					simulationOptions={{
						animate: true,
						width: width,
						height: height,
						radiusMargin: 6,
						strength: {
							charge: -120
						}
					}}>
					{this.createMasterNode('Product Categories', 'Product Family', productFamilies)}
					{/*this.createMasterNode('Products', 'Product', products)*/}
					{this.createMasterNode('Procedures', 'Procedure', procedures)}
					{this.createMasterNode('Conditions', 'Condition', conditions)}
					{this.createMasterNode('Specialties', 'Specialty', specialties)}
					{this.createMasterNode('Anatomy', 'Anatomy', anatomy)}

					{this.createNodes(productFamilies)}
					{this.createNodes(products)}
					{this.createNodes(procedures)}
					{this.createNodes(conditions)}
					{this.createNodes(specialties)}
					{this.createNodes(anatomy)}

					{this.createMasterLinks('Procedures', procedures)}
					{this.createMasterLinks('Product Categories', productFamilies)}
					{this.createMasterLinks('Procedures', procedures)}
					{this.createMasterLinks('Conditions', conditions)}
					{this.createMasterLinks('Specialties', specialties)}
					{this.createMasterLinks('Anatomy', anatomy)}

					{this.createNodeLinks(productFamilies)}
					{/*this.createNodeLinks(products)*/}
					{/*this.createNodeLinks(procedures)*/}
					{/*this.createNodeLinks(conditions)*/}
					{/*this.createNodeLinks(specialties)*/}
					{/*this.createNodeLinks(anatomy)*/}
				</InteractiveForceGraph>

				<div className='mdc-taxonomy-diagram__legend'>
					<div className="mdc-taxonomy-diagram__legend-item">
						<h5>Procedures</h5><div className="mdc-taxonomy-diagram__legend-swatch" style={{backgroundColor: colors['Procedure']}}></div>
					</div>
					<div className="mdc-taxonomy-diagram__legend-item">
						<h5>Products</h5><div className="mdc-taxonomy-diagram__legend-swatch" style={{backgroundColor: colors['Product']}}></div>
					</div>
					<div className="mdc-taxonomy-diagram__legend-item">
						<h5>Specialties</h5><div className="mdc-taxonomy-diagram__legend-swatch" style={{backgroundColor: colors['Specialty']}}></div>
					</div>
					<div className="mdc-taxonomy-diagram__legend-item">
						<h5>Product Categories</h5><div className="mdc-taxonomy-diagram__legend-swatch" style={{backgroundColor: colors['Product Family']}}></div>
					</div>
					<div className="mdc-taxonomy-diagram__legend-item">
						<h5>Conditions</h5><div className="mdc-taxonomy-diagram__legend-swatch" style={{backgroundColor: colors['Condition']}}></div>
					</div>
					{<div className="mdc-taxonomy-diagram__legend-item">
						<h5>Anatomy</h5><div className="mdc-taxonomy-diagram__legend-swatch" style={{backgroundColor: colors['Anatomy']}}></div>
					</div>}
				</div>

				<div className='mdc-taxonomy-diagram__popout'>
					<i onClick={this.closePopout} className="iconcss icon-close-lg"></i>
					<h5 className="eyebrow">{popout.eyebrow}</h5>
					<h2>{popout.heading}</h2>
					<p>{popout.body}</p>
				</div>
			</div>
		);
	}
}