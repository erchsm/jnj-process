import React from 'react'
import { render } from 'react-dom'


render(
	<div className="mdc-buttons__grid">
		<div className="mdc-buttons__tile">
			<p className="mdc-buttons__label">News & Events Card</p>
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
	</div>,
	document.getElementById('root')
)



