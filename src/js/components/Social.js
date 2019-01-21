import React, { Component } from 'react'

export default class Social extends Component {

  constructor (props) {
    super(props)
  }

  render () {
    return <ul
      style={this.props.style}
      className='social'
    >
      <li className='social__list-item'>
        <a href='#' className='iconcss icon-yammer-logo social__yammer'></a>
      </li>
      <li className='social__list-item'>
        <a href='#' className='iconcss icon-mail social__email'></a>
      </li>
      <li className='social__list-item'>
        <a href='#' className='iconcss icon-link-alt social__share'></a>
      </li>
      <li className='social__list-item'>
        <a href='#' className='iconcss icon-like social__like'></a>
        <span className='social__like-amount'>
					{this.props.likesAmount}
				</span>
      </li>
    </ul>
  }
}