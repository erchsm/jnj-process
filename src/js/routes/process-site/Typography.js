import React, { Component } from 'react'

import FontTable from '../../components/FontTable'
import JnjProcessHeader from '../../components/JnjProcessHeader'

import TYPOGRAPHY from '../../data/typography'

const FontDisplay = ({ name, className = '' }) => (
	<div className={`typography-guides__font-display ${className}`}>
		{<span className='typography-guides__font-display-name'>
			{name}
		</span>}
		{/*<h4><span>{name}</span></h4>*/}
		<p className='typography-guides__font-display-alphabet'>
			<span>ABCDEFGHIJKLMNOPQRSTUVWXYZ</span>
			<span>abcdefghijklmnopqrstuvwxyz 1234567890</span>
		</p>
	</div>
	)

export default class Typography extends Component {

	static propTypes = {}

	constructor (props) {
		super(props)
	}

	render () {
		return (
			<div>
				<JnjProcessHeader title={"Typography"} body={"Johnson & Johnson uses J&J Circular, a commercial typeface for all public applications. J&J Circular typeface family contains a range of weights—Black, Medium, and Book. Black and Book are the primary styles utilized. The set includes circled numbers, standard Western and extended Latin accented characters. J&J Circular requires a license to be used."}/>
				<div className="grid colors__wrapper">
					<div className="grid__item grid__item--col-1 grid__item--col-1-desktop grid__item--hide-medium"/>
					<div className="grid__item grid__item--col-10 grid__item--col-10-desktop grid__item--col-12-medium">

						<h2 className="title is-1">Typeface</h2>
						<p>

						</p>
						<ul className='typography-guide__fonts-list'>
							<li>
								<FontDisplay
									name='J&J Circular Book'
									className={'typography-book'}
								/>
							</li>
							<li>
								<FontDisplay
									name='J&J Circular Medium'
									className={'typography-medium'}
								/>
							</li>
							<li>
								<FontDisplay
									name='J&J Circular Bold'
									className={'typography-bold'}
								/>
							</li>
							<li>
								<FontDisplay
									name='J&J Circular Black'
									className={'typography-black'}
								/>
							</li>
						</ul>
						<h3>Alternate Typeface</h3>
						<p>
							Arial is the acceptable system substitute to our primary typeface and can be used with equal success for
							reports, presentations, emails, and other tasks. Arial is the go-to typeface for Johnson &amp; Johnson
							internal desktop communications and Microsoft® Office® products like Word® and PowerPoint®.
							<br/>
							<br/>
							License Arial is part of our standard MS Office® package. No font licenses are required.
						</p>
						<br/>

						<ul className='typography-guide__fonts-list'>
							<li>
								<FontDisplay
									name='Arial Regular'
									className='typography-arial-reg'
								/>
							</li>
							<li>
								<FontDisplay
									name='Arial Bold'
									className='typography-arial-bold'
								/>
							</li>
						</ul>
						<br/>
						<br/>
						<hr />
						<br/>
						<br/>
						</div>
					</div>
					<div className="grid colors__wrapper">
					<div className="grid__item grid__item--col-1 grid__item--hide-medium"/>
					<div className="grid__item grid__item--col-10 grid__item--col-12-medium">

						<h2 className="title is-1">Desktop</h2>

						<FontTable fonts={TYPOGRAPHY.DESKTOP}/>

						<br/>
						<br/>
						<hr />
						<br/>
						<br/>
						<h2 className="title is-1">Tablet</h2>
						<FontTable fonts={TYPOGRAPHY.TABLET}/>

						<br/>
						<br/>
						<hr />
						<br/>
						<br/>
						<h2 className="title is-1">Mobile</h2>
						<FontTable fonts={TYPOGRAPHY.MOBILE}/>
						<br/>
						<br/>
						<h2 className="title is-1">Link Style</h2>
						<br/>
						<div className='typography-guide__link-style'>
							<p><a href="#">This</a> is a text link on light background.</p>
							<br/>
							<p><a href="#" className='is-visited-link '>This</a> is a visited link.</p>
							<br/>
							<p>This is a that goes to an <span className='is-external-link'><a href="#">external resource</a></span>.</p>
						</div>
						<br/>
						<br/>
						<h2 className="title is-1">List Style</h2>
						<div className='typography-guide__link-style'>
							<p>Bullet list</p>
							<ul className='typography-guide__bullet-list'>
								<li>Bullet list item</li>
								<li>Bullet list item</li>
								<li>Bullet list item</li>
							</ul>
							<br/>
							<br/>
							<p>Ordered list</p>
							<ol className='typography-guide__ordered-list'>
								<li>Ordered list item</li>
								<li>Ordered list item</li>
								<li>Ordered list item</li>
							</ol>
						</div>
						<br/>
						<br/>
				</div>
			</div>
			</div>

		)
	}
}