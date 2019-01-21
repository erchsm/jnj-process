import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TagsCollapsable from './TagsCollapsable'
import Social from './Social'
import { StickyContainer, Sticky } from 'react-sticky'

export default class Article extends Component {

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
          <StickyContainer style={{ position: 'relative' }}>
            <div className='article__header-meta'>
              <h1 className='article__title'>{this.props.title}</h1>
              <span className='article__headline'>{this.props.headline}</span>
            </div>
            <Sticky disableCompensation>
              {({ style }) => <div
                style={style}
                className='article__social-wrapper article__social-wrapper--sticky is-clearfix'
              >
                <Social likesAmount={this.props.likesAmount}/>
              </div>}
            </Sticky>
            <div className='article__media is-clearfix'>
              <img {...this.props.heroImage} className='article__hero-img'/>
              <div className='article__social-wrapper is-clearfix article__social-wrapper--static'>
                <Social likesAmount={this.props.likesAmount}/>
              </div>

            </div>
            <hr className='article__delimeter'/>
            <div className='article__body is-clearfix ckeditor' dangerouslySetInnerHTML={{ __html: this.props.body }}>
            </div>
            <div className='article__tags-wrapper'>
              <TagsCollapsable tags={this.props.tags}/>
            </div>
          </StickyContainer>
        </div>
      </main>

    )
  }
}