import React, {Component} from 'react';
import classNames from "classnames";
import Drift from 'drift-zoom';


export default class MdcCompare extends Component {

	static propTypes = {
	}


	constructor(props) {
		super(props);

        this.state = {
            driftSrc: "../assets/img/dirty-sutures.jpg"
        }
	}

    componentDidMount = () => {
        document.addEventListener('scroll', this.handleScroll);

        new Drift(document.querySelector('img'), {
          inlinePane: true,
          containInline: true,
          zoomFactor: 2
        })
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
        const { driftSrc } = this.state;


        const classnames = classNames({
            "mdc-nav": true
        });


        return (
            <div className="mdc-compare"> 
                <div className="mdc-compare__content oflow">
                    <div className="mainphoto">
                        <a className="main-image zoom"> 
                            <img src={driftSrc} data-zoom={driftSrc} alt=""/>
                        </a>
                     </div> 
                     <div className="mdc-compare__thumbnails">
                         <a href="#" className="zoom">
                            <img src="https://demos.imgix.net/drift/watch-outside.jpg"/> 
                            <p>Vicryl Antibacterial Sutures</p>
                         </a>  
                         <a href="#" className="zoom first">
                            <img src="https://i.vimeocdn.com/portrait/622608_300x300.jpg"/> 
                            <p>Traditional Sutures</p>
                         </a>
                         <a href="#" className="zoom first">
                            <img src="https://s.graphiq.com/sites/default/files/2307/media/images/t2/Deep_Sky_Blue_429606_i0.png"/> 
                         </a>
                     </div>
                 </div>
                 <div className="mdc-compare__text oflow">
                    <h2>Bacteria can tell the difference. Can you?</h2>
                    <p>Sutures, like any foreign material, lower the number of bacteria required to cause an infection; and the biofilm formed on the suture can actually protect bacteria against infection fighting cells and antibiotic therapy.  Ethicon responded by creating Plus Antibacterial Sutures. Shown in vitro to inhibit bacterial colonization of the suture for 7 days or more, Plus Sutures are a simple way to address a known risk factor for SSI.</p>
                </div>
             </div>  
        );
    }
}