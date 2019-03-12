import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export default class HomeLandingCard extends Component {

	constructor (props) {
		super(props)
	}

	render () {
		const { cardHeaderText, cardCtaText, marginLeft, marginRight } = this.props
		
		const classnames = classNames({
			"home-landing-card": true,
			"home-landing-card--ml": marginLeft,
			"home-landing-card--mr": marginRight,
		})

		return (
			<div className={classnames}>
				{ cardHeaderText ? (<div className="home-landing-card__header"><h5 className="eyebrow">{cardHeaderText}</h5></div>) : null }
				{ this.props.children }
				{ cardCtaText ? (<div className="home-landing-card__cta"><p className="no-mb">{cardCtaText}</p></div>) : null }
			</div>
		)
	}
}