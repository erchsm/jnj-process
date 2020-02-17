import React, {Component, Fragment} from 'react'
import { connect } from "react-redux"

import { showNavToggle, hideNavToggle } from "../../actions/nav"

class MdcButtonsPrototype extends Component {

	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.props.hideNavToggle();
	}

	render() {
		return (
			<div className="mdc-buttons__grid">
				<div className="mdc-buttons__tile">
					<p className="mdc-buttons__label">Primary Button</p>
					<button className="mdc-button mdc-button--primary">Call To Action</button>
				</div>
				<div className="mdc-buttons__tile">
					<p className="mdc-buttons__label">Secondary Button</p>
					<button className="mdc-button mdc-button--secondary">Call To Action</button>
				</div>
				<div className="mdc-buttons__tile">
					<p className="mdc-buttons__label">Secondary Button with Icon</p>
					<button className="mdc-button mdc-button--secondary"><i className="iconcss icon-download"></i><span>Download PDF</span></button>
				</div>
				<div className="mdc-buttons__tile">
					<p className="mdc-buttons__label">Text Link</p>
					<button className="mdc-button mdc-button--text-link"><span>Text Link</span><i className="iconcss icon-arrow-right"></i></button>
				</div>
				<div className="mdc-buttons__tile">
					<p className="mdc-buttons__label">Button Group</p>
					<div className="mdc-buttons__group">
						<button className="mdc-button mdc-button--primary">Request Follow-up</button>
						<button className="mdc-button mdc-button--secondary"><i className="iconcss icon-download"></i><span>Download PDF</span></button>
						<button className="mdc-button mdc-button--secondary">See Intructions</button>
					</div>
				</div>
				<div className="mdc-buttons__tile">
					<p className="mdc-buttons__label">Button Group (Stacked)</p>
					<div className="mdc-buttons__group--stacked">
						<button className="mdc-button mdc-button--primary">Mehr Informationen Anfordern</button>
						<button className="mdc-button mdc-button--secondary"><i className="iconcss icon-download"></i><span>PDF Herunterladen</span></button>
						<button className="mdc-button mdc-button--secondary">Siehe Anweisungen</button>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	nav: state.nav,
})

const mapDispatchToProps = dispatch => ({
	showNavToggle: () => dispatch(showNavToggle()),
	hideNavToggle: () => dispatch(hideNavToggle()),
})

export default connect(mapStateToProps, mapDispatchToProps)(MdcButtonsPrototype)


	