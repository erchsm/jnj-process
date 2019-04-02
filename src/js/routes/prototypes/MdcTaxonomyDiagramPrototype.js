import React, {Component} from 'react'
import { connect } from "react-redux"

import { showNavToggle, hideNavToggle } from "../../actions/nav"

import MdcTaxonomyDiagram from '../../components/MdcTaxonomyDiagram'

class MdcTaxonomyDiagramPrototype extends Component {

	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.props.hideNavToggle();
	}

	render() {
		return (
			<MdcTaxonomyDiagram/>
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

export default connect(mapStateToProps, mapDispatchToProps)(MdcTaxonomyDiagramPrototype)


	