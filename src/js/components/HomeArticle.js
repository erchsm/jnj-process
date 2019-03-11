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

	componentDidMount() {
		window.scrollTo(0, 0);

		if (!document.getElementById('yammer-script') || !this.state.scriptAdded) {

			const body: HTMLElement | null = document.body

			const s1 = document.createElement('script')
			s1.src = `https://s0.assets-yammer.com/assets/platform_social_buttons.min.js`
			s1.id = 'yammer-script'

			if (body) {
				body.appendChild(s1)
			}

			setTimeout(function() {
				const s2 = document.createElement('script')
				const inlineScript = document.createTextNode("var options = { customButton : true, classSelector: 'social__yammer', defaultMessage: 'Check out this article on Home!', pageUrl: 'https://home.jnj.com/v2/#my-news-detail/159428' }; yam.platform.yammerShare(options);");
				s2.appendChild(inlineScript);

				if (body) {
					body.appendChild(s2)
				}
			}, 1000);


			this.setState({
				'scriptAdded': true
			});
		}
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