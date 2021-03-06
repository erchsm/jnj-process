import React, {Component} from 'react'
import { NavLink } from 'react-router-dom'

import JnjProcessHeader from '../../components/JnjProcessHeader';
import TextLink from '../../components/form/TextLink'


export default class Landing extends Component {

	static propTypes = {
	}

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
			 	<JnjProcessHeader title={"Our Digital Toolkit"} body={"These design guidelines are sets of recommendations towards good practice in digital design. They are intended to provide clear instructions to designers and developers on how to adopt principles such as intuitiveness, learnability, efficiency, and consistency in digital products. Instead of dictating conventions, design guidelines provide helpful advice."}/>
				<div className="grid">
					<div className="grid__item grid__item--col-1 grid__item--col-1-desktop grid__item--hide-medium"/>
					<div className="grid__item grid__item--col-5 grid__item--col-12-medium">
					 	<NavLink to="/colors">
							<div className="card">
								<h3>Colors</h3>
								<p>Color is an important part of our visual expression. The careful use and diligent application of color is required to maintain our global visual equity.</p>
								<TextLink label="Read more"/>
							</div>
						</NavLink>

					</div>
					<div className="grid__item grid__item--col-5 grid__item--col-12-medium">
					 	<NavLink to="/typography">
							<div className="card">
								<h3>Typography</h3>
								<p>Johnson & Johnson uses J&J Circular, a commercial typeface for all public applications. J&J Circular requires a license to be used.</p>
								<TextLink label="Read more"/>
							</div>
						</NavLink>
					</div>
				</div>
				<div className="grid">
					<div className="grid__item grid__item--col-1 grid__item--col-1-desktop grid__item--hide-medium"/>
					<div className="grid__item grid__item--col-5 grid__item--col-12-medium">
					 	<NavLink to="/prototypes">
							<div className="card">
								<h3>Prototypes</h3>
								<p>If you're building a prototype for the web, it makes sense to build it in its natural environment as it provides as real an experience as you can hope to achieve.</p>
								<TextLink label="Read more"/>
							</div>
						</NavLink>
					</div>
					<div className="grid__item grid__item--col-5 grid__item--col-12-medium">
					 	<NavLink to="/accessibility">
							<div className="card">
								<h3>Accessibility</h3>
								<p>In order to allow our content to be easily understandable by everyone, we have to design and build them to be accessible and inclusive.</p>
								<TextLink label="Read more"/>
							</div>
						</NavLink>
					</div>
				</div>
				<div className="grid">
					<div className="grid__item grid__item--col-1 grid__item--col-1-desktop grid__item--hide-medium"/>
					<div className="grid__item grid__item--col-5 grid__item--col-12-medium">
					 	<NavLink to="/animation">
							<div className="card">
								<h3>Animation</h3>
								<p>Motion celebrates moments in user journeys, adds character to common interactions, and expresses J&J's personality and style.</p>
								<TextLink label="Read more"/>
							</div>
						</NavLink>
					</div>
				</div>
			</div>
		);
	}
}