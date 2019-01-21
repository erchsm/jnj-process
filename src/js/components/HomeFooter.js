import React, { Component } from 'react'
import classNames from 'classnames'

import FooterItems from '../data/footer-items'
import MdcLogo from './MdcLogo'

export default class HomeFooter extends Component {

  static propTypes = {}

  constructor (props) {
    super(props)

    this.state = {
      isScrolledTop: true,
      takeoverOpen: false,
      indexHovered: 0
    }
  }

  render () {

    return (<footer className='footer'>
        <div className="footer__wrapper">
          <div className="footer__nav">
            <nav className="footer__social-nav">
              <a className="iconcss icon-facebook"
                 href="https://www.facebook.com/jnj/" target="_blank"></a>
              <a className="iconcss icon-twitter"
                 href="https://twitter.com/jnjnews" target="_blank"></a>
              <a className="iconcss icon-youtube"
                 href="https://www.youtube.com/user/JNJhealth" target="_blank"></a>
              <a className="iconcss icon-linkedin"
                 href="https://www.linkedin.com/company/1207/" target="_blank"></a>
            </nav>
            <nav className="footer__menu">
              <a
                href="https://jnj.sharepoint.com/sites/digitalfrontdoor/DFD%20Document%20Library/2017HomeBetaPrivacyStatement.pdf"
                target="_blank">Privacy Policy</a>
              <a
                href="https://jnj.sharepoint.com/sites/digitalfrontdoor/DFD%20Document%20Library/2017HomeBetaLegalNotice.pdf"
                target="_blank">Legal Notice</a>
            </nav>
            <a className="footer__logo iconcss icon-jnjlogo" href="/#"></a>
          </div>
          <div className="footer__register-mark">© 2019
            Johnson &amp; Johnson Services, Inc.
          </div>
        </div>
      </footer>
    )
  }
}