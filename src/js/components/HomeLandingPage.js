import React, { Component } from 'react'
import PropTypes from 'prop-types'
import HomeNewsBlock from './HomeNewsBlock'

export default class HomeLandingPage extends Component {

  static propTypes = {
    body: PropTypes.string,
    title: PropTypes.string,
    heroImage: PropTypes.shape({
      src: PropTypes.string,
      alt: PropTypes.string
    }),
    tags: PropTypes.arrayOf(PropTypes.string),
    likesAmount: PropTypes.number,
    headline: PropTypes.string
  }

  constructor (props) {
    super(props)
  }

  render () {

    return (
      <main className='article__background'>
        <div className='article__wrapper'>
          <div className='col-m-4 col-t-8 col-d-8 col-hd-8 basic-box'>
            <HomeNewsBlock news={this.props.news} />
          </div>
        </div>
      </main>

    )
  }
}