import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class HomeLandingCard extends Component {

	constructor (props) {
		super(props)
	}

	render () {
		
		const classnames = classNames({
			"home-landing-card": true,
		})

		const { cardHeaderText } = this.props

		return (
			<div className={classnames}>
				{ cardHeaderText ? (<div className="home-landing-card__header"><h5 className="eyebrow">{cardHeaderText}</h5></div>) : null}
				{ this.props.children }
			</div>
		)
	}
}