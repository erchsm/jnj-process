import React, {Component} from 'react';


export default class Prototypes extends Component {

	static propTypes = {
	}


	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="column is-three-quarters top">

				<h1 className="title is-1">Prototypes</h1>

				<h3 className="title is-3">Home</h3>

				<div className="tile is-ancestor">
					<a href="../prototypes/home-nav.html" className="tile is-parent" target="_blank">
						<div className="tile is-child card">
							<h3 className="title is-3 is-spaced">Primary Navigation</h3>
							<p className="subtitle is-5">Demonstrates the Home primary navigation with animation.</p>
							<br />
							<span className="tag-container">
								<span className="tag">Navigation</span>
								<span className="tag">UX</span>
								<span className="tag">Animation</span>
							</span>
						</div>
					</a>
					<a href="../prototypes/home-links.html" className="tile is-parent" target="_blank">
						<div className="tile is-child card">
							<h3 className="title is-3 is-spaced">Links Page</h3>
							<p className="subtitle is-5">Demonstrates the scrolling links page with sticky anchor links.</p>
							<br />
							<span className="tag-container">
								<span className="tag">Content Strategy</span>
								<span className="tag">UX</span>
								<span className="tag">Animation</span>
							</span>
						</div>
					</a>
				</div>
				<div className="tile is-ancestor">
					<a href="../prototypes/home-profile-setup.html" className="tile is-parent" target="_blank">
						<div className="tile is-child card">
							<h3 className="title is-3 is-spaced">New User Setup</h3>
							<p className="subtitle is-5">Onboarding experience for new users of Home.</p>
							<br />
							<span className="tag-container">
								<span className="tag">UI</span>
								<span className="tag">Onboarding</span>
								<span className="tag">Animation</span>
							</span>
						</div>
					</a>
					<a href="../prototypes/home-sitemap.html" className="tile is-parent" target="_blank">
						<div className="tile is-child card">
							<h3 className="title is-3 is-spaced">Sitemap</h3>
							<p className="subtitle is-5">Interactive sitemap for Home.</p>
							<br />
							<span className="tag-container">
								<span className="tag">Information Arch.</span>
								<span className="tag">Content Strategy</span>
								<span className="tag">Animation</span>
							</span>
						</div>
					</a>
				</div>
				<div className="tile is-ancestor">
					<a href="../prototypes/home-landing.html" className="tile is-parent" target="_blank">
						<div className="tile is-child card">
							<h3 className="title is-3 is-spaced">Homepage</h3>
							<p className="subtitle is-5">Landing page and dashboard for Home.</p>
							<br />
							<span className="tag-container">
								<span className="tag">UI</span>
								<span className="tag">Homepage</span>
							</span>
						</div>
					</a>
					<a href="../prototypes/home-article.html" className="tile is-parent" target="_blank">
						<div className="tile is-child card">
							<h3 className="title is-3 is-spaced">News Article</h3>
							<p className="subtitle is-5">Article reading experience for Home.</p>
							<br />
							<span className="tag-container">
								<span className="tag">UI</span>
								<span className="tag">Article</span>
							</span>
						</div>
					</a>
				</div>

				<hr/>

				<h3 className="title is-3">MDC</h3>

				<div className="tile is-ancestor">
					<a href="../prototypes/company-page.html" className="tile is-parent" target="_blank">
						<div className="tile is-child card">
							<h3 className="title is-3 is-spaced">Product Carousel</h3>
							<p className="subtitle is-5">Demonstrates the scrolling page experience on the companies page.</p>
							<br />
							<span className="tag-container">
								<span className="tag">Scrolling</span>
								<span className="tag">Parallax</span>
								<span className="tag">Greensock</span>
							</span>
						</div>
					</a>
					<a href="../prototypes/mdc-nav.html" className="tile is-parent" target="_blank">
						<div className="tile is-child card">
							<h3 className="title is-3 is-spaced">Primary Navigation</h3>
							<p className="subtitle is-5">Interactions and Taxonomy for site navigation.</p>
							<br />
							<span className="tag-container">
								<span className="tag">Nav</span>
								<span className="tag">Interactive</span>
								<span className="tag">Animation</span>
							</span>
						</div>
					</a>
				</div>
				<div className="tile is-ancestor">
					<a href="../prototypes/mdc-switcher.html" className="tile is-parent" target="_blank">
						<div className="tile is-child card">
							<h3 className="title is-3 is-spaced">Homepage Flipper</h3>
							<p className="subtitle is-5">Interaction for flipping between the Patient and HCP Experience.</p>
							<br />
							<span className="tag-container">
								<span className="tag">UX</span>
								<span className="tag">Interactive</span>
								<span className="tag">Animation</span>
							</span>
						</div>
					</a>
					<a href="../prototypes/mdc-taxonomy-diagram.html" className="tile is-parent" target="_blank">
						<div className="tile is-child card">
							<h3 className="title is-3 is-spaced">Taxonomy Diagram</h3>
							<p className="subtitle is-5">Consolidated our Content type Taxonomy into a single diagram.</p>
							<br />
							<span className="tag-container">
								<span className="tag">Content Strategy</span>
								<span className="tag">Discovery</span>
								<span className="tag">UX</span>
							</span>
						</div>
					</a>
				</div>
				<div className="tile is-ancestor">
					<a href="../prototypes/mdc-buttons.html" className="tile is-parent" target="_blank">
						<div className="tile is-child card">
							<h3 className="title is-3 is-spaced">MDC Buttons</h3>
							<p className="subtitle is-5">Comprehensive list of button styles with hover states.</p>
							<br />
							<span className="tag-container">
								<span className="tag">UX</span>
								<span className="tag">Interactive</span>
								<span className="tag">Animation</span>
							</span>
						</div>
					</a>
					<a href="../prototypes/mdc-companies-picker.html" className="tile is-parent" target="_blank">
						<div className="tile is-child card">
							<h3 className="title is-3 is-spaced">Company Picker</h3>
							<p className="subtitle is-5">Module for browsing all companies on the homepage.</p>
							<br />
							<span className="tag-container">
								<span className="tag">MDC</span>
								<span className="tag">UX</span>
								<span className="tag">Diagraming</span>
							</span>
						</div>
					</a>
				</div>
			</div>

		);
	}
}