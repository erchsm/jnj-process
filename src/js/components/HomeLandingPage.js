import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import HomeNewsBlock from './HomeNewsBlock'
import HomeLandingCard from './HomeLandingCard'

export default class HomeLandingPage extends Component {

	constructor (props) {
		super(props)
	}

	render () {

		const classnames = classNames({
            "home-landing": true
        });

		return (
			<main className={classnames}>
				<div className="grid">
					<div className="grid__item grid__item--col-8 grid__item--col-12-desktop">
						<HomeNewsBlock news={this.props.news} />
					</div>
					<div className="grid__item grid__item--col-4">
						<HomeLandingCard cardCtaText={"View Profile"} marginLeft>
							<img src="../assets/img/user-1x1.png"/>
						</HomeLandingCard>
					</div>
				</div>
			</main>
		)
	}
}