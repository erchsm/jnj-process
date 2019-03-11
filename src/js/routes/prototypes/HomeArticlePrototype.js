import React, {Component} from 'react'
import { connect } from "react-redux"

import { render } from 'react-dom'
import articleData from '../../data/article';
import HomeArticle from '../../components/HomeArticle';
import HomeNav from '../../components/HomeNav'
import HomeFooter from '../../components/HomeFooter'

import { showNavToggle, hideNavToggle } from "../../actions/nav"


class HomeArticlePrototype extends Component {

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
				<HomeArticle
					body={articleData.body}
					title={articleData.title}
					author={articleData.author}
					heroImage={articleData.heroImage}
					tags={articleData.tags}
					likesAmount={articleData.likesAmount}
					timestamp={articleData.timestamp}
				/>
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeArticlePrototype)



