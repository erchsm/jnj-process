import React, {Component, cloneElement} from 'react';
import classNames from "classnames";
import { InteractiveForceGraph, ForceGraphNode, ForceGraphLink } from 'react-vis-force/dist/react-vis-force.min.js';

import Accordion2 from './Accordion2';

import contentTypes from '../data/taxonomy/content-types.json';
import productFamilies from '../data/taxonomy/product-families.json';
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
				'Procedure' : '#F4E285',
				'Product' : '#8CB369',
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
			// selectedNode: { 
			// 	id: 'Conditions',
			// },
			popoutOpen: false,
			popout: {
				eyebrow: '',
				heading: '',
				description: '',
				lists: [],
			}
		};
	}

	componentDidMount = () => {
		this.updateWindowDimensions();
		window.addEventListener('resize', this.updateWindowDimensions);

		contentTypes.nodes[0].lists[0].items = productFamilies.nodes;
		// contentTypes.nodes[1].lists[0].items = products.nodes;
		// contentTypes.nodes[2].lists[0].items = procedures.nodes;
		contentTypes.nodes[1].lists[0].items = specialties.nodes;
		contentTypes.nodes[2].lists[0].items = conditions.nodes;
		contentTypes.nodes[3].lists[0].items = anatomy.nodes;
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
				node={{ ...node, radius: node.size || 9 }}
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

	generateLists = (lists) => (
		lists.map((list, i) => (
			<Accordion2 key={i}
				title={list.title}
				items={list.items}
				defaultOpen={false}
				click={this.selectNode}
			/>
		))
	)

	selectNode = (node) => {
		this.setState({ 
			selectedNode: node,
			popoutOpen: true,
		});
		document.getElementsByClassName('mdc-taxonomy-diagram__popout')[0].scrollTo(0,0);
		setTimeout(() => { this.updatePopout() }, 10);
	}

	updatePopout = () => {
		const db = contentTypes.nodes.concat(productFamilies.nodes, products.nodes, procedures.nodes, conditions.nodes, specialties.nodes, anatomy.nodes);
		const result = db.find(item => item.id == this.state.selectedNode.id);

		this.setState((prevState) => ({ 
			popout: {
				...prevState.popout,
				heading: result.id,
				eyebrow: result.eyebrow || result.group,
				description: result.description || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ullamcorper est pulvinar lacus lobortis, at faucibus enim fermentum. In tincidunt tellus et sem mattis laoreet. Phasellus aliquet lectus tempus lorem aliquam, id suscipit ligula consequat. Phasellus eget ornare orci, eu bibendum odio. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse tincidunt mollis commodo. Donec quis ipsum in odio blandit vestibulum.',
				lists: result.lists,
			}
		}));
	}

	closePopout = () => {
		this.setState({ 
			popoutOpen: false,
			selectedNode: null
		});
	}

	render() {
		const { width, height, colors, popoutOpen, popout, selectedNode } = this.state;

		const classnames = classNames({
			"mdc-taxonomy-diagram": true,
			"mdc-taxonomy-diagram--popoutOpen": popoutOpen
		});


		return (
			<div className={classnames}>
				<InteractiveForceGraph
					selectedNode={selectedNode || null}
					onSelectNode={(event, node) => this.selectNode(node)}
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
						radiusMargin: 12,
						strength: {
							charge: -600
						}
					}}>
					{this.createNodes(contentTypes)}
					{this.createNodes(productFamilies)}
					{this.createNodes(products)}
					{this.createNodes(procedures)}
					{this.createNodes(conditions)}
					{this.createNodes(specialties)}
					{this.createNodes(anatomy)}

					{this.createMasterLinks('Product Categories', productFamilies)}
					{/*this.createMasterLinks('Products', products)*/}
					{/*this.createMasterLinks('Procedures', procedures)*/}
					{this.createMasterLinks('Conditions', conditions)}
					{this.createMasterLinks('Specialties', specialties)}
					{this.createMasterLinks('Anatomy', anatomy)}

					{this.createNodeLinks(productFamilies)}
					{/*this.createNodeLinks(products)*/}
					{/*this.createNodeLinks(procedures)*/}
					{/*this.createNodeLinks(conditions)*/}
					{this.createNodeLinks(specialties)}
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
					<div className="mdc-taxonomy-diagram__popout-main">
						<i onClick={this.closePopout} className="iconcss icon-close-lg"></i>
						<h5 className="eyebrow">{popout.eyebrow}</h5>
						<h2>{popout.heading}</h2>
						<p>{popout.description}</p>
					</div>
					{this.generateLists(popout.lists)}
				</div>

				<div className='mdc-taxonomy-diagram__help'>
					<i className="iconcss icon-click"></i>
					<p>Click a node to expand</p>
					<i className="iconcss icon-scroll"></i>
					<p>Scroll to zoom</p>
					<i className="iconcss icon-pan"></i>
					<p>Drag to pan</p>
				</div>
			</div>
		);
	}
}