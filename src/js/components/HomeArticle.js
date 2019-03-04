import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TagsCollapsable from './TagsCollapsable'
import Social from './Social'
import { StickyContainer, Sticky } from 'react-sticky'

import palette from '../services/palette'

export default class Article extends Component {

	static propTypes = {
		body: PropTypes.string,
		title: PropTypes.string,
		author: PropTypes.string,
		heroImage: PropTypes.shape({
			src: PropTypes.string,
			alt: PropTypes.string
		}),
		tags: PropTypes.arrayOf(PropTypes.string),
		likesAmount: PropTypes.number,
		timestamp: PropTypes.string
	}

	constructor (props) {
		super(props)
	}

	render () {

		const { title, body, author, heroImage, tags, likesAmount, timestamp } = this.props;

		return (
			<main className='article__background'>
				<div className='article__wrapper'>

						<div className="grid">
							<div className="grid__item grid__item--col-1 grid__item--hide-medium"/>
							<div className="grid__item grid__item--col-9 grid__item--col-12-desktop">
								<h1 className='article__title'>{title}</h1>
								<span className='article__headline'>By <a style={{ color: `${palette("brand-black")}`, borderBottom: `solid 1px ${palette("brand-grey-light")}` }}>{author}</a><hr/>{timestamp}</span>
							</div>
						</div>

						<div className="grid">
							<div className="grid__item grid__item--col-1 grid__item--hide-medium">
								<div className='article__social-wrapper article__social-wrapper--sticky'>
									<Social likesAmount={likesAmount}/>
								</div>
							</div>
							<div className="grid__item grid__item--col-9 grid__item--col-12-desktop">
								<div className='article__media is-clearfix'>
									<img {...this.props.heroImage} className='article__hero-img'/>
									<div className='article__social-wrapper is-clearfix article__social-wrapper--static'>
										<Social likesAmount={likesAmount}/>
									</div>
								</div>

								<hr className='article__delimeter'/>
								<div className='article__body is-clearfix ckeditor' dangerouslySetInnerHTML={{ __html: body }}></div>
								
								<div className='article__tags-wrapper'>
									<TagsCollapsable tags={tags}/>
								</div>
							</div>

						</div>
				</div>
			</main>
		)
	}
}