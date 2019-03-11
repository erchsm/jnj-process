import React, { Component } from 'react'
import COLORS from '../data/colors'
import ColorList from './ColorList'

const renderColors = (colors) => <ul className='typography-guide__font-colors'>
    {colors.map((color, i) => <li
      key={i}
      className='typography-guide__font-colors-item'
      style={{ backgroundColor: color }}
    ></li>)
    }
  </ul>

export default class FontTable extends Component {

  static propTypes = {}

  constructor (props) {
    super(props)
  }

  render () {
    const fonts = this.props.fonts
    return (
      <table className='typography-guide__table'>
        <thead>
        <tr>
          <th></th>
          <th>Typeface</th>
          <th>Weight</th>
          <th>Size/Line Height</th>
          <th>Colors Applications</th>
        </tr>
        </thead>
        <tbody>
        {fonts.map((font, index) => <tr
          key={`font-${index}`}
        >
          <td><span
            style={{
              fontSize: font.fontSize,
              lineHeight: font.lineHeight,
              fontWeight: font.fontWeight
            }}
          >{font.name}</span></td>
          <td>{font.typeface}</td>
          <td>{font.weight}</td>
          <td>{font.fontSize} / {font.lineHeight}</td>
          <td>{renderColors(font.colors)}</td>
        </tr>)}

        </tbody>
      </table>
    )
  }
}