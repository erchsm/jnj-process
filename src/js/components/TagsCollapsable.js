import React, { Component } from 'react'
import throttle from 'lodash/throttle'

const WIDTH_THRESHOLD = 50;

export default class Home extends Component {

  static propTypes = {}

  constructor (props) {
    super(props)

    this.state = {
      isOpened: false,
      showMoreNumber: 0
    }

    this.tagWidths = []

    this.getWidths = () => {
      var elem = this.tagsRef
      var nodes = elem.children
      var widths = []
      for (var i = 0; i < nodes.length; i++) {
        widths.push(nodes[i].offsetWidth)
      }
      return widths
    }

    this.toggle = (e) => {
      this.setState({
        isOpened: !this.state.isOpened
      });
      e.preventDefault();
    }

    this.updateDimensions = throttle(() => {
      const wrapperWidth = this.tagsRef.offsetWidth - WIDTH_THRESHOLD;
      let elementsWidth = 0
      for (let i = 0; i < this.tagWidths.length; i++) {
        const nextWidth = elementsWidth + this.tagWidths[i]
        if (nextWidth > wrapperWidth) {
          this.setState({
            showMoreNumber: this.tagWidths.length - i
          })
          break
        }
        elementsWidth = nextWidth
      }
    }, 500);
  }

  componentDidMount () {
    this.tagWidths = this.getWidths()
    this.updateDimensions()
    window.addEventListener('resize', this.updateDimensions)
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.updateDimensions)
  }

  render () {
    const { showMoreNumber, isOpened } = this.state
    const maxVisibleIndex = this.props.tags.length - showMoreNumber - 1;
    const tags = this.props.tags.map((tag, index) =>
      <li
        className={`tags-collapsable__list-item ${
          !isOpened && index > maxVisibleIndex && 'is-hidden'
        }`}
        key={`tag-${index}`}
      >
        <a href='#' className='tag'>
          <span>{tag}</span>
        </a>
      </li>
    )

    return tags.length ?
      <div className='tags-collapsable__wrapper'>
        <div className='tags-collapsable__title'>Related to this Article</div>
        <ul
          className='tags-collapsable__list tags-wrapper'
          ref={(_ref) => this.tagsRef = _ref}
        >
          {tags}
          {showMoreNumber > 0 && !isOpened ?
            <li key={`tag-show-more-number`}>
              <a href='#' onClick={this.toggle} className='tags-collapsable__show-more-number'>
                {showMoreNumber}+
              </a>
            </li>
            : null
          }
        </ul>
        {showMoreNumber > 0 ?
          (!isOpened ?
            <a href='#' onClick={this.toggle} className='tags-collapsable__show-more'>
              <span className='tags-collapsable__more-text'>Show All Topics</span>
              <span className='iconcss icon-caret-down-lg'></span>
            </a> :
            <a href='#' onClick={this.toggle}  className='tags-collapsable__show-less'>
              <span className='tags-collapsable__more-text'>Show Less Topics</span>
              <span className='iconcss icon-caret-down-lg'></span>
            </a>)
          : null
        }
      </div>
      : null

  }
}