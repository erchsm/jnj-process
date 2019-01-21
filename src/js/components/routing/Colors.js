import React, { Component } from 'react'
import COLORS from '../../data/colors'
import ColorList from './ColorList'

const COLOR_USAGE = [
  {
    'backgroundColor': 'white',
    'name': ''
  },
  {
    'backgroundColor': '#CA001B',
    'name': ''
  },
  {
    'backgroundColor': '#000099',
    'name': ''
  },
  {
    'backgroundColor': '#CF009E',
    'name': ''
  },
  {
    'backgroundColor': '#63666A',
    'name': ''
  },
]

const COLOR_SEQUENCE = [
  {
    'backgroundColor': 'white',
    'name': ''
  },
  {
    'backgroundColor': '#CA001B',
    'name': ''
  },
  {
    'backgroundColor': '#000099',
    'name': ''
  },
  {
    'backgroundColor': '#CF009E',
    'name': ''
  },
]

export default class Colors extends Component {

  static propTypes = {}

  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div className='colors__wrapper'>
        <div className="colors__header-wrapper">
          <div className="colors__header column is-two-thirds top">
            <h1 className="title is-1">Colors</h1>
            <p>
              Johnson &amp; Johnson is vibrant and embraces a diversity of color. The globally connected world and its
              increase of screen-based technology has made color more vivid and powerful in building expression. Color
              is
              an
              important part of our visual expression; yet, the role of white is essential for Johnson &amp; Johnson
              because
              it illuminates and creates clarity. The careful use and diligent application of color is required to
              maintain
              our global visual equity.
            </p>
            <br/>
            <br/>
          </div>
        </div>
        <div className="colors__body column is-two-thirds top">
          <h2 className="title is-1">Primary colors</h2>
          <p>
            Our core color palette for use in all applications
          </p>
          <ColorList colors={COLORS.PRIMARY}/>
          <br/>
          <br/>
          <p>
            Vibrant support for the Primary palette
          </p>
          <ColorList colors={COLORS.VIBRANT}/>
          <br/>
          <br/>
          <h4><span>Usage</span></h4>
          <p>
            White Dominance &amp; Color Usage
          </p>
          <div className='colors__usage'>
            <ColorList colors={COLOR_USAGE}/>
          </div>
          <br/>
          <br/>
          <h3>Sequence</h3>
          <ColorList colors={COLOR_SEQUENCE}/>
          <br/>
          <br/>
          <h4><span>Tone Usage</span></h4>
          <p>
            Our core color palette for under tone Usage
          </p>
          <div className='colors__tone-usage'>
            <ColorList colors={COLORS.TONE_BLUE}/>
            <ColorList colors={COLORS.TONE_MAGENTA}/>
          </div>
          <br/>
          <br/>
          <hr/>

          <br/>
          <br/>
          <h2 className="title is-1">Accent Colors</h2>
          <p>
            Accent colors are used in charts, graphs, infographics, and illustrations. The eight accent colors can be
            paired with primary and secondary colors.
          </p>
          <h3>Sequence</h3>
          <p>
            Data visualization and illustration only
          </p>
          <ColorList colors={COLORS.ACCENT_PRIMARY}/>
          <br/>
          <ColorList colors={COLORS.ACCENT_SECONDARY}/>
          <br/>
          <br/>
        </div>
      </div>

    )
  }
}