import React, {Component} from 'react'

import HomeNav from '../../components/HomeNav'
import { connect } from "react-redux"
import { showNavToggle, hideNavToggle } from "../../actions/nav"


class HomeNavPrototype extends Component {

	componentDidMount() {
		this.props.hideNavToggle();
	}

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="test-page">
				<HomeNav/>
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeNavPrototype)
