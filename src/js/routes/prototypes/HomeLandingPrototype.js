import React, {Component} from "react"
import { connect } from "react-redux"

import HomeLandingPage from "../../components/HomeLandingPage"
import HomeNav from "../../components/HomeNav"
import HomeFooter from "../../components/HomeFooter"
import homePageData from "../../data/home-page"

import { showNavToggle, hideNavToggle } from "../../actions/nav"

class HomeLandingPrototype extends Component {

	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.props.hideNavToggle();
	}

	render() {
		return (
			<div style={{ background: "#f3f3f3" }}>
				<HomeNav/>
				<HomeLandingPage news={homePageData.NEWS}/>
				<HomeFooter/>
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeLandingPrototype)