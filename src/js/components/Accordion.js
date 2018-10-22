import React, {Component} from 'react';
import classNames from "classnames";

import newId from '../services/newid';

export default class Accordion2 extends Component {

	static propTypes = {
	}


	constructor(props) {
		super(props);

        this.state = {
            isOpen: false
        }
	}

    componentWillMount() {
        this.id = newId('Accordion');
    }

    componentDidMount = () => {
    }

    componentWillUnmount = () => {
    }

    toggleOpen = (event) => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

	render() {
        const { isOpen } = this.state;
        const { title, items, click, defaultOpen } = this.props


        const classnames = classNames({
            "mdc-accordion": true,
            "mdc-accordion--open": isOpen,
        })

        const accordionItems = items.map((item, i) =>
            <li key={i} onClick={() => { click(item); this.toggleOpen(); }}>
                <a>{item.id}</a>
            </li>
        );

        return (
            <div id={this.id} className={classnames}>
                <div className="mdc-accordion__header" onClick={this.toggleOpen}>
                    <h5 className="eyebrow">{title}</h5>
                    {isOpen ? <i className="iconcss icon-minus"></i> : <i className="iconcss icon-plus"></i>}
                </div>
                <div className="mdc-accordion__content">
                    <ul>
                        {accordionItems}
                    </ul>
               </div>
            </div>
        );
    }
}