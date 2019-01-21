import React, { Component } from 'react'
import PropTypes from 'prop-types'

const renderTile = ({
                      tags,
                      title,
                      date,
                      likes,
                      views,
                      imgSrc
                    }) => {
  return (<div className='home-news__tile'>
    <a className='home-news__img'>
      <img src={imgSrc}/>
    </a>
    <div className='home-news__tile-meta'>
      <span className='home-news__tile-tags'>{tags}</span>
      <a className='home-news__tile-title'>{title}</a>

      <span className='home-news__tile-date'>{date}</span>

      <div className='home-news__tile-social'>
        <ul>
          <li>
            <span className='iconcss icon-like'></span>
            <span>{likes}</span>
          </li>
          <li>
            <span className='iconcss icon-view'></span>
            <span>{views}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>)
}

export default class HomePage extends Component {

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
    const { news } = this.props
    const hero = news.slice(0, 1)[0]
    const tiles = news.slice(1, 4)

    return (<div>
      <div className="home-news box-news box-full">
        <div className='home-news__main-tile'>
          <a className='home-news__main-img'>
            <img src={hero.imgSrc}/>
          </a>
          <div className='home-news__tile-meta'>
            <span className='home-news__tile-tags'>{hero.tags}</span>
            <a className='home-news__tile-title'>{hero.title}</a>

            <span className='home-news__tile-date'>{hero.date}</span>

            <div className='home-news__tile-social'>
              <ul>
                <li>
                  <span className='iconcss icon-like'></span>
                  <span>{hero.likes}</span>
                </li>
                <li>
                  <span className='iconcss icon-view'></span>
                  <span>{hero.views}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className='home-news__secondary-tiles'>
          <ul>
            {tiles.map(tile => renderTile(tile))}
          </ul>
        </div>

      </div>
      <a
        className="home-news__more-link"
        href="#my-news"
      >
        All my news<span
        className="iconcss icon-arrow-long-right"></span></a>

    </div>)
  }
}