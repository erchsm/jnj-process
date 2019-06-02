import React, {Component} from 'react';
import classNames from "classnames";

import FooterItems from "../data/footer-items";
import MdcLogo from "./MdcLogo";


export default class MdcNav extends Component {

	static propTypes = {
	}


	constructor(props) {
		super(props);

        this.state = {
            isScrolledTop: true,
            takeoverOpen: false,
            indexHovered: 0
        }
	}

    componentDidMount = () => {
        document.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount = () => {
        document.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = (event) => {
        let scrollTop = event.srcElement.body.scrollTop

            // this.setState({
            //     isScrolledTop: scrollTop < 90
            // });
    }

    openTakeover = (event) => {
        this.setState({
            takeoverOpen: true
        });
    }

    setIndexHovered = (event) => {
        this.setState({
            indexHovered: this.getChildIndex(event.target)
        });
    }

    closeTakeover = (event) => {
        // setTimeout(() => {
            this.setState({
                takeoverOpen: false
            });
        // }, 0);
    }

    getChildIndex = (elem) => {
        let i = 0;

        while ((elem = elem.previousSibling) != null) {
          i++;
        }

        return i;
    }

    getFooterItems = (i) => {
        return FooterItems.data[i].data.map((item, i) =>
            <li key={i}>
                <a>{item.name}</a>
            </li>
        );
    }

	render() {
        const { isScrolledTop, takeoverOpen, indexHovered } = this.state;


        const classnames = classNames({
            "mdc-footer": true,
        })

        const footerItems0 = this.getFooterItems(0);
        const footerItems1 = this.getFooterItems(1);
        const footerItems2 = this.getFooterItems(2);
        const footerItems3 = this.getFooterItems(3);

        const footerItemsLinks = this.getFooterItems(5);

        return (
            <nav className={classnames}>
                <div className="grid mdc-footer__top">
                    <div className="grid__item grid__item--col-2">
                        <MdcLogo/>
                    </div>
                    {/*<div className="grid__item grid__item--col-2">
                        <h5>{FooterItems.data[0].name}</h5>
                        <ul>
                            {footerItems0}
                        </ul>
                    </div>
                    <div className="grid__item grid__item--col-2">
                        <h5>{FooterItems.data[1].name}</h5>
                        <ul>
                            {footerItems1}
                        </ul>
                    </div>
                    <div className="grid__item grid__item--col-2">
                        <h5>{FooterItems.data[2].name}</h5>
                        <ul>
                            {footerItems2}
                        </ul>
                    </div>
                    <div className="grid__item grid__item--col-2">
                        <h5>{FooterItems.data[0].name}</h5>
                        <ul>
                            {footerItems0}
                        </ul>
                    </div>*/}
                    <div className="grid__item grid__item--col-8 mdc-footer__main">
                        <div>
                            <h5>{FooterItems.data[0].name}</h5>
                            <ul>
                                {footerItems0}
                            </ul>
                        </div>
                        <div>
                            <h5>{FooterItems.data[1].name}</h5>
                            <ul>
                                {footerItems1}
                            </ul>
                        </div>
                        <div>
                            <h5>{FooterItems.data[2].name}</h5>
                            <ul>
                                {footerItems2}
                            </ul>
                        </div>
                        <div>
                            <h5>{FooterItems.data[3].name}</h5>
                            <ul>
                                {footerItems3}
                            </ul>
                        </div>
                    </div>
                    <div className="grid__item grid__item--col-2">
                        <h5>{FooterItems.data[4].name}</h5>
                        <div className="mdc-share">
                            <div className="mdc-share-item"><i className="iconcss icon-linkedin"></i></div>
                            <div className="mdc-share-item"><i className="iconcss icon-facebook"></i></div>
                            <div className="mdc-share-item"><i className="iconcss icon-twitter"></i></div>
                            <div className="mdc-share-item"><i className="iconcss icon-youtube"></i></div>
                        </div>
                        <p>{FooterItems.data[4].data[0].name}</p>
                    </div>
                </div>
                <div className="grid mdc-footer__bottom">
                    <div className="grid__item grid__item--col-8">
                        <ul className="mdc-footer__links">
                            {footerItemsLinks}
                        </ul>
                    </div>
                    <div className="grid__item grid__item--col-2">
                        <div className="mdc-footer__location">
                            <img src="../assets/img/united-states.svg"></img>
                            <p className="no-mb">English (United States)</p>
                        </div>
                    </div>
                    <div className="grid__item grid__item--col-2">
                        <p>All contents © Copyright Johnson & Johnson Services, Inc.1997-2017. All Rights Reserved.</p>
                    </div>
                </div>
           </nav>
        );
    }
}