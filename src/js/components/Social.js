import React, { Component } from 'react'
import classNames from 'classnames'


export default class Social extends Component {

	constructor (props) {
		super(props);

		this.state = {
			likesAmount: this.props.likesAmount,
			hasBeenLiked: false,
			likesAnimating: false,
			articleUrlCopied: false
		}
	}

	componentWillMount() {
	}


	incrementLikesAmount = () => {
		this.likesTimer ? clearTimeout(this.likesTimer) : null
		this.setState({
			likesAmount: this.state.likesAmount + 1,
			hasBeenLiked: true,
			likesAnimating: true,
		})
		this.likesTimer = setTimeout(() => {
			this.setState({
				likesAnimating: false 
			})
		}, 900);
	}

	copyArticleUrl = () => {
		this.setState({
			articleUrlCopied: true,
		})
		setTimeout(() => {
			this.setState({
				articleUrlCopied: false 
			})
		}, 6000);
	}


	render () {
		return <ul style={this.props.style} className='social'>
			<li className='social__list-item social__yammer'>
				<a id="yj-share-button"><i className='iconcss icon-yammer-logo social__yammer'></i></a>
			</li>
			<li className='social__list-item'>
				<a href="mailto:?subject=Check%20out%20this%20article%20on%20Home!&body=https%3A%2F%2Fhome.jnj.com%2Fv2%2F%23my-news-detail%2F159428"><i className='iconcss icon-mail social__email'></i></a>
			</li>
			<li className='social__list-item' onClick={ this.copyArticleUrl } className={classNames({
					'social__list-item': true,
					'social__link': true,
					'animating': this.state.articleUrlCopied,
				})}>
				<a><i className='iconcss icon-link-alt'></i></a>
				<span className='social__text'>
					{this.state.articleUrlCopied ? '' : ''}
				</span>
				<svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"><circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none"/><path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/></svg>
			</li>
			<li onClick={ this.incrementLikesAmount } className={classNames({
					'social__list-item': true,
					'social__like': true,
					'animating': this.state.likesAnimating,
				})}>
				<a><i className={classNames({
					'iconcss': true,
					'icon-like-outline': !this.state.hasBeenLiked,
					'icon-like-fill': this.state.hasBeenLiked,
				})}></i></a>
				<div className="social__likes-counter">
					+{ this.state.likesAmount - this.props.likesAmount }
				</div>
				<span className='social__text'>
					{this.state.likesAmount}
				</span>
			</li>
		</ul>
	}
}