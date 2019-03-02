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


	incrementLikesAmount = () => {
		this.setState({
			likesAmount: this.state.likesAmount + 1,
			hasBeenLiked: true,
			likesAnimating: true,
		})
		setTimeout(() => {
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
			<li className='social__list-item'>
				<i className='iconcss icon-yammer-logo social__yammer'></i>
			</li>
			<li className='social__list-item'>
				<i className='iconcss icon-mail social__email'></i>
			</li>
			<li className='social__list-item' onClick={ this.copyArticleUrl } className={classNames({
					'social__list-item': true,
					'social__link': true,
					'animating': this.state.articleUrlCopied,
				})}>
				<i className='iconcss icon-link-alt'></i>
				<span className='social__text'>
					{this.state.articleUrlCopied ? 'Link copied' : ''}
				</span>
				<svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"><circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none"/><path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/></svg>
			</li>
			<li onClick={ this.incrementLikesAmount } className={classNames({
					'social__list-item': true,
					'social__share': true,
					'animating': this.state.likesAnimating,
				})}>
				<i className={classNames({
					'iconcss social__like': true,
					'icon-like-outline': !this.state.hasBeenLiked,
					'icon-like-fill': this.state.hasBeenLiked,
				})}
				></i>
				<div className="social__likes-counter">
					+{ this.state.likesAmount - this.props.likesAmount }
				</div>
				<span className='social__text'>
					{this.state.likesAmount}
				</span>
				<div className="circle-wrap">
					<div className="circle-lg"/>
				</div>
				<div className="dots-wrap">
					<div className="dot dot--t"/>
					<div className="dot dot--tr"/>
					<div className="dot dot--br"/>
					<div className="dot dot--b"/>
					<div className="dot dot--bl"/>
					<div className="dot dot--tl"/>
				</div>

			</li>
		</ul>
	}
}