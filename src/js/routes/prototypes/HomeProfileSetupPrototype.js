import React, {Component} from 'react'
import { ScrollProvider } from 'react-skroll'
import { connect } from "react-redux"

import HomeProfileSetup from '../../components/HomeProfileSetup'

import { showNavToggle, hideNavToggle } from "../../actions/nav"

class HomeProfileSetupPrototype extends Component {

	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.props.hideNavToggle();
	}

	render() {
		return (
			<ScrollProvider autoScroll={true}>  
				<HomeProfileSetup/>
			</ScrollProvider>
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeProfileSetupPrototype)



	