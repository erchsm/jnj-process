import React, {Component, Fragment} from 'react'
import { connect } from "react-redux"

import { showNavToggle, hideNavToggle } from "../../actions/nav"

import MdcNav from '../../components/MdcNav'
import MdcFooter from '../../components/MdcFooter'

class MdcNavPrototype extends Component {

	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.props.hideNavToggle();
	}

	render() {
		return (
			<Fragment>
				<MdcNav/>
				<div style={{ minHeight: '480px', background: '#FFFFFF'}}/>
				<MdcFooter/>
			</Fragment>
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

export default connect(mapStateToProps, mapDispatchToProps)(MdcNavPrototype)


	