import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from "react-redux"

import JnjProcessHeader from '../../components/JnjProcessHeader'
// import TextLink from '../../components/form/TextLink'


import { showNavToggle, hideNavToggle } from "../../actions/nav"


class Prototypes extends Component {


	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.props.showNavToggle();
	}

	render() {
		return (
			<div>

				<JnjProcessHeader title={"Prototypes"} body={"If you're building a prototype for the web, it makes sense to build it in its natural environment as it provides as real an experience as you can hope to achieve. Understanding how to build your designs can also give you a greater affinity with developers; they'll be more open to your ideas and able to communicate theirs better too."}/>

				<div className="grid">
					<div className="grid__item grid__item--col-1 grid__item--col-1-desktop grid__item--hide-medium"/>
					<div className="grid__item grid__item--col-10 grid__item--col-12-medium">
						<h3>Home</h3>
					</div>
				</div>

				<div className="grid">
					<div className="grid__item grid__item--col-1 grid__item--col-1-desktop grid__item--hide-medium"/>
					<div className="grid__item grid__item--col-5 grid__item--col-12-medium">
						<NavLink to="/prototypes/home-nav">
							<div className="card">
								<h3>Primary Navigation</h3>
								<p>Demonstrates the Home primary navigation with animation.</p>
								<br/>
								<span className="tag-container">
									<span className="tag">Navigation</span>
									<span className="tag">UX</span>
									<span className="tag">Animation</span>
								</span>
							</div>
						</NavLink>
					</div>
					<div className="grid__item grid__item--col-5 grid__item--col-12-medium">
						<NavLink to="/prototypes/home-links">
							<div className="card">
								<h3>Links Page</h3>
								<p>Demonstrates the scrolling links page with sticky anchor links.</p>
								<br />
								<span className="tag-container">
									<span className="tag">Content Strategy</span>
									<span className="tag">UX</span>
									<span className="tag">Animation</span>
								</span>
							</div>
						</NavLink>
					</div>
				</div>

				<div className="grid">
					<div className="grid__item grid__item--col-1 grid__item--col-1-desktop grid__item--hide-medium"/>
					<div className="grid__item grid__item--col-5 grid__item--col-12-medium">
						<NavLink to="/prototypes/home-profile-setup">
							<div className="card">
								<h3>New User Setup</h3>
								<p>Onboarding experience for new users of Home.</p>
								<br />
								<span className="tag-container">
									<span className="tag">UI</span>
									<span className="tag">Onboarding</span>
									<span className="tag">Animation</span>
								</span>
							</div>
						</NavLink>
					</div>
					<div className="grid__item grid__item--col-5 grid__item--col-12-medium">
						<NavLink to="/prototypes/home-sitemap">
							<div className="card">
								<h3>Sitemap</h3>
								<p>Interactive sitemap for Home.</p>
								<br />
								<span className="tag-container">
									<span className="tag">IA</span>
									<span className="tag">Content Strategy</span>
									<span className="tag">Animation</span>
								</span>
							</div>
						</NavLink>
					</div>
				</div>

				<div className="grid">
					<div className="grid__item grid__item--col-1 grid__item--col-1-desktop grid__item--hide-medium"/>
					<div className="grid__item grid__item--col-5 grid__item--col-12-medium">
						<NavLink to="/prototypes/home-landing">
							<div className="card">
								<h3>Homepage</h3>
								<p>Landing page and dashboard for Home.</p>
								<br />
								<span className="tag-container">
									<span className="tag">UI</span>
									<span className="tag">Homepage</span>
								</span>
							</div>
						</NavLink>
					</div>
					<div className="grid__item grid__item--col-5 grid__item--col-12-medium">
						<NavLink to="/prototypes/home-article">
							<div className="card">
								<h3>News Article</h3>
								<p>Article reading experience for Home.</p>
								<br />
								<span className="tag-container">
									<span className="tag">UI</span>
									<span className="tag">Article</span>
								</span>
							</div>
						</NavLink>
					</div>
				</div>

				<div className="grid">
					<div className="grid__item grid__item--col-1 grid__item--col-1-desktop grid__item--hide-medium"/>
					<div className="grid__item grid__item--col-10 grid__item--col-12-medium">
						<hr/>
						<h3>Medical Devices</h3>
					</div>
				</div>

				<div className="grid">
					<div className="grid__item grid__item--col-1 grid__item--col-1-desktop grid__item--hide-medium"/>
					<div className="grid__item grid__item--col-5 grid__item--col-12-medium">
						<NavLink to="/prototypes/home-links">
							<div className="card">
								<h3>Product Carousel</h3>
								<p>Scrolling page experience on the company page.</p>
								<br />
								<span className="tag-container">
									<span className="tag">Scrolling</span>
									<span className="tag">Parallax</span>
									<span className="tag">Greensock</span>
								</span>
							</div>
						</NavLink>
					</div>
					<div className="grid__item grid__item--col-5 grid__item--col-12-medium">
						<NavLink to="/prototypes/mdc-nav">
							<div className="card">
								<h3>Primary Navigation</h3>
								<p>Interactions and Taxonomy for site navigation.</p>
								<br />
								<span className="tag-container">
									<span className="tag">Nav</span>
									<span className="tag">Interactive</span>
									<span className="tag">Animation</span>
								</span>
							</div>
						</NavLink>
					</div>
				</div>

				<div className="grid">
					<div className="grid__item grid__item--col-1 grid__item--col-1-desktop grid__item--hide-medium"/>
					<div className="grid__item grid__item--col-5 grid__item--col-12-medium">
						<NavLink to="/prototypes/home-links">
							<div className="card">
								<h3>Homepage Flipper</h3>
								<p>Interaction for choosing the Patient or HCP Experience.</p>
								<br />
								<span className="tag-container">
									<span className="tag">UX</span>
									<span className="tag">Interactive</span>
									<span className="tag">Animation</span>
								</span>
							</div>
						</NavLink>
					</div>
					<div className="grid__item grid__item--col-5 grid__item--col-12-medium">
						<NavLink to="/prototypes/mdc-taxonomy-diagram">
							<div className="card">
								<h3>Taxonomy Diagram</h3>
								<p>A single content-type taxonomy diagram to rule them all.</p>
								<br />
								<span className="tag-container">
									<span className="tag">Content Strategy</span>
									<span className="tag">Discovery</span>
									<span className="tag">UX</span>
								</span>
							</div>
						</NavLink>
					</div>
				</div>

				<div className="grid">
					<div className="grid__item grid__item--col-1 grid__item--col-1-desktop grid__item--hide-medium"/>
					<div className="grid__item grid__item--col-5 grid__item--col-12-medium">
						<NavLink to="/prototypes/home-links">
							<div className="card">
								<h3>MDC Buttons</h3>
								<p>Comprehensive list of button styles with hover states.</p>
								<br />
								<span className="tag-container">
									<span className="tag">UX</span>
									<span className="tag">Interactive</span>
									<span className="tag">Animation</span>
								</span>
							</div>
						</NavLink>
					</div>

					<div className="grid__item grid__item--col-5 grid__item--col-12-medium">
						<NavLink to="/prototypes/home-links">
							<div className="card">
								<h3>Company Picker</h3>
								<p>Module for browsing all companies on the homepage.</p>
								<br />
								<span className="tag-container">
									<span className="tag">MDC</span>
									<span className="tag">UX</span>
									<span className="tag">Diagraming</span>
								</span>
							</div>
						</NavLink>
					</div>
				</div>
			</div>
		);
	}
}


const mapStateToProps = state => ({
	nav: state.nav,
})

const mapDispatchToProps = dispatch => ({
	showNavToggle: () => dispatch(showNavToggle()),
	hideNavToggle: () => dispatch(hideNavToggle()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Prototypes)