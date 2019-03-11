import React, { Component } from 'react'
import COLORS from '../data/colors';

export default class Colors extends Component {

  static propTypes = {}

  constructor (props) {
    super(props)
  }

  render () {
    return (<ul className='colors__list'>
      {this.props.colors.map((color, i) => <li key={i} className='colors__list-item'>
        <span
          className='colors__color-display'
          style={{backgroundColor: color.code || color.backgroundColor}}
        ></span>
        <span className='colors__color-name'>{color.name}</span>
        <span className='colors__color-code'>{color.code}</span>
        </li>)}
    </ul>);
  }
}