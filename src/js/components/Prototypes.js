import React, {Component} from 'react';


export default class Prototypes extends Component {

	static propTypes = {
	}


	constructor(props) {
		super(props);
	}

	render() {

        console.log(process.env.PUBLIC_URL);

        return (
            <div className="column is-three-quarters top">

                <h1 className="title is-1">Prototypes</h1>
                {/*<h3 className="title is-3">Resources</h3>*/}

                <div className="tile is-ancestor">
                    <a href="/prototypes/company-page.html" className="tile is-parent" target="_blank">
                        <div className="tile is-child card">
                            <img src="/assets/img/clarity.jpg"></img>
                            <h3 className="title is-3 is-spaced">Companies Page</h3>
                            <p className="subtitle is-5">Demonstrates the scrolling page experience on the companies page.</p>
                            <br />
                            <span className="tag-container">
                                <span className="tag">Scrolling</span>
                                <span className="tag">Parallax</span>
                                <span className="tag">Greensock</span>
                            </span>
                        </div>
                    </a>
                    <a href="/prototypes/mdc-nav.html" className="tile is-parent" target="_blank">
                        <div className="tile is-child card">
                            <img src="/assets/img/carbon.jpg"></img>
                            <h3 className="title is-3 is-spaced">Primary Navigation</h3>
                            <p className="subtitle is-5">Interactions and Taxonomy for Navigation.</p>
                            <br />
                            <span className="tag-container">
                                <span className="tag">HTML</span>
                                <span className="tag">Design Kit</span>
                            </span>
                        </div>
                    </a>
                </div>

                {/*<div className="tile is-ancestor">
                    <a href="http://fractal.build/" className="tile is-parent" target="_blank">
                        <div className="tile is-child card">
                            <img src="/assets/img/fractal.jpg"></img>
                            <h3 className="title is-3 is-spaced">Fractal</h3>
                            <p className="subtitle is-5">Powerful component libraries &amp; styleguides that fit the way you work</p>
                            <br />
                            <span className="tag-container">
                                    <span className="tag">Web Components</span>
                            <span className="tag">Library</span>
                            </span>
                        </div>
                    </a>
                    <a href="http://astrum.nodividestudio.com/" className="tile is-parent" target="_blank">
                        <div className="tile is-child card">
                            <img src="/assets/img/astrum.jpg"></img>
                            <h3 className="title is-3 is-spaced">Astrum</h3>
                            <p className="subtitle is-5">Astrum is a lightweight pattern library designed to be included with any web project</p>
                            <br />
                            <span className="tag-container">
                                    <span className="tag">Pattern Library</span>
                            </span>
                        </div>
                    </a>
                </div>
                <div className="tile is-ancestor">
                    <a href="https://www.uxpower.tools/" className="tile is-parent" target="_blank">
                        <div className="tile is-child card">
                            <img src="/assets/img/uxpowertools.jpg"></img>
                            <h3 className="title is-3 is-spaced">UX Power Tools</h3>
                            <p className="subtitle is-5">A smart and advanced UI kit and style guide for Sketchapp</p>
                            <br />
                            <span className="tag-container">
                                    <span className="tag">SketchApp</span>
                            </span>
                        </div>
                    </a>
                    <a href="http://sketchframes.com/" className="tile is-parent" target="_blank">
                        <div className="tile is-child card">
                            <img src="/assets/img/sketchframes.jpg"></img>
                            <h3 className="title is-3 is-spaced">Sketchframes</h3>
                            <p className="subtitle is-5">Sketchframes is a UI kit for Sketch App, designed in a “sketch-style”</p>
                            <br />
                            <span className="tag-container">
                                    <span className="tag">SketchApp</span>
                            </span>
                        </div>
                    </a>
                </div>

                <div className="tile is-ancestor">
                    <a href="https://cabanadesignsystem.com/" className="tile is-parent" target="_blank">
                        <div className="tile is-child card">
                            <img src="/assets/img/cabana.jpg"></img>
                            <h3 className="title is-3 is-spaced">Cabana</h3>
                            <p className="subtitle is-5">A Design System for Sketch that helps you work better, smarter, and faster than ever before</p>
                            <br />
                            <span className="tag-container">
                                    <span className="tag">SketchApp</span>
                            </span>
                        </div>
                    </a>
                    <a href="http://www.plasterdesignsystem.com/" className="tile is-parent" target="_blank">
                        <div className="tile is-child card">
                            <img src="/assets/img/plaster.jpg"></img>
                            <h3 className="title is-3 is-spaced">Plaster</h3>
                            <p className="subtitle is-5">Material.io guidelines built into the most powerful design tool to provide you with better results at the maximum confidence</p>
                            <br />
                            <span className="tag-container">
                                    <span className="tag">SketchApp</span>
                            <span className="tag">Material Design</span>
                            </span>
                        </div>
                    </a>
                </div>

                <div className="columns">
                    <div className="column">

                        <h3 className="title is-3">Articles</h3>
                        <ul className="links">
                            <li><i className="fas fa-link opacity"></i>
                                <a href="https://blog.hichroma.com/why-design-systems-are-a-single-point-of-failure-ec9d30c107c2" target="_blank">Why design systems are a single point of failure</a></li>

                            <li><i className="fas fa-link opacity"></i>
                                <a href="https://medium.com/hubspot-product/how-to-gain-widespread-adoption-of-your-design-system-29d1b142b158" target="_blank">How to gain widespread adoption of your design system</a></li>

                            <li><i className="fas fa-link opacity"></i>
                                <a href="https://medium.com/owl-studios/laying-the-foundations-7e503ef2120f" target="_blank">Laying the foundations for system design</a></li>
                            <li><i className="fas fa-link opacity"></i>
                                <a href="https://adele.uxpin.com/" target="_blank">Adele - The Most Complete Design Systems Repository</a></li>
                            <li><i className="fas fa-link opacity"></i>
                                <a href="https://medium.com/hubspot-product/people-over-pixels-b962c359a14d" target="_blank">How building a design system empowers your team to focus on people — not pixels</a></li>
                            <li><i className="fas fa-link opacity"></i>
                                <a href="http://bradfrost.com/blog/post/atomic-web-design/" target="_blank">Atomic Design</a></li>
                            <li><small><i className="fas fa-link opacity"></i></small>
                                <a href="https://medium.freecodecamp.org/how-to-construct-a-design-system-864adbf2a117" target="_blank">How to construct a design system</a></li>

                            <li><i className="fas fa-link opacity"></i>
                                <a href="https://medium.com/sketch-app-sources/how-to-create-a-design-system-in-sketch-part-one-fd450dccab10" target="_blank">How to create a Design System in Sketch </a></li>

                            <li><i className="fas fa-link opacity"></i>
                                <a href="https://medium.com/sketch-app-sources/how-to-create-a-design-system-in-sketch-part-one-fd450dccab10" target="_blank">Creating with a Design System in Sketch: Part One [Tutorial]</a></li>

                            <li><i className="fas fa-link opacity"></i>
                                <a href="https://medium.com/ryte/building-a-design-system-for-500-000-users-at-ryte-1a5ca8bda992" target="_blank">Building a Design System for 500,000+ users at Ryte</a></li>
                        </ul>

                    </div>
                </div>*/}


            </div>

        );
    }
}