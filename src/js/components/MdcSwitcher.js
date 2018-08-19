import React, {Component} from 'react';
import classNames from "classnames";

import SearchBar from './SearchBar';

export default class Switcher extends Component {

	static propTypes = {
	}


	constructor(props) {
		super(props);

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

	render() {
        // const { driftSrc } = this.state;


        const classnames = classNames({
            "mdc-switcher": true
        });


        return (
            <div className={classnames}> 
              <section className="grid">
                <h1 className="long grid__item grid__item--col-7">Welcome to the New Johnson & Johnson Medical Device Companies.</h1>              
              </section>
              <div className="grid mdc-switcher__tile-container">
                <div className="mdc-switcher__tiles grid__item grid__item--col-12">
                  <div className="mdc-switcher__tile">
                    <i className="iconcss icon-hcp"></i>                
                    <h3>I’m a</h3>
                    <h1 className="long grid__item grid__item--col-8">
                      Healthcare Professional 
                    </h1>
                    <SearchBar placeholder="Search For A Specialty"/>
                    <button className="mdc-button mdc-button--text-link"><span>Continue to Patients Home</span><i className="iconcss icon-arrow-right"></i></button>
                  </div>
                  <div className="mdc-switcher__tile">
                    <i className="iconcss icon-patient"></i>
                    <h3>I’m a</h3>
                    <h1 className="long">
                      Patient <br/><br/>
                    </h1>
                    <SearchBar placeholder="Search For Your Symptoms" data="../data/symptoms-search.js"/>
                    <button className="mdc-button mdc-button--text-link"><span>Continue to Patients Home</span><i className="iconcss icon-arrow-right"></i></button>
                  </div>
                </div>
              </div>
             </div>  
        );
    }
}