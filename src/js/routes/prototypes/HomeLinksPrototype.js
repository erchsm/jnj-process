import React, {Component} from 'react'
import { ScrollProvider } from 'react-skroll';

import HomeNav from '../../components/HomeNav'
import HomeLinksPage from '../../components/HomeLinksPage'

import { connect } from "react-redux"
import { showNavToggle, hideNavToggle } from "../../actions/nav"

class HomeLinksPrototype extends Component {

	static propTypes = {
	}

	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.props.hideNavToggle();
	}

	render() {
		return (
			<div>
				<HomeNav/>
				<ScrollProvider>  
					<HomeLinksPage dropdownLabel={'Sort By'} hideSearch={true}/>
				</ScrollProvider>
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeLinksPrototype)


