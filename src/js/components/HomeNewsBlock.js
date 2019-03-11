import React, { Component } from 'react'
import PropTypes from 'prop-types'

import TextTruncate from 'react-text-truncate'


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

	createTileMetadata = (data) => (
		<div className='home-news__tile-social'>
			<ul>
				<li>
					<span className='home-news__tile-date'>{data.date}</span>
				</li>
				<li>
					<i className='iconcss icon-like-outline'></i>
					<span>{this.dataFormatter(data.likes)}</span>
				</li>
				<li>
					<i className='iconcss icon-view'></i>
					<span>{this.dataFormatter(data.views)}</span>
				</li>
			</ul>
		</div>
	)

	dataFormatter = (num) => (
		num > 999 ? (num/1000).toFixed(1) + 'K' : num
	)

	constructor (props) {
		super(props)
	}

	render () {
		const { news } = this.props
		const hero = news.slice(0, 1)[0]
		const tiles = news.slice(1, 4)

		return (
			<div>
				<div className="home-news box-news box-full">
					<div className='home-news__main-tile'>
						<a className='home-news__main-img'>
							<img src={hero.imgSrc}/>
						</a>
						<div className='home-news__tile-meta'>
							<span className='home-news__tile-tags'>{hero.tags}</span>
							<a className='home-news__tile-title'>{hero.title}</a>

							{this.createTileMetadata(hero)}
						</div>
					</div>

					<div className='home-news__secondary-tiles'>
						<ul>
							{ tiles.map((tile, i) => (
								<div className='home-news__tile' key={i}>
									<a className='home-news__img'>
										<img src={tile.imgSrc}/>
									</a>
									<div className='home-news__tile-meta'>
										<span className='home-news__tile-tags'>{tile.tags}</span>
										<a className='home-news__tile-title'>{tile.title}</a>
										{this.createTileMetadata(tile)}
									</div>
								</div>
							))}
						</ul>
					</div>

				</div>
				<a className="home-news__more-link" href="#my-news">
					<span>All my news</span>
					<i className="iconcss icon-arrow-long-right"></i>
				</a>
			</div>
		)
	}
}