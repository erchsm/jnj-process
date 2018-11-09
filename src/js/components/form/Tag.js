import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';


export default class Tag extends Component {

  constructor() {
    super();
  }

  render() {
    const { label, click } = this.props;
    
    const classnames = classNames({
    	'tag': true,
    });

    return (
      <div className={classnames}>
        <span>{label}</span>
        <i className="iconcss icon-close-sm" onClick={() => click()}></i>
      </div>
    )
  }
}