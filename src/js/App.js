import React from 'react'
import PropTypes from 'prop-types'
import { ConnectedRouter } from 'connected-react-router'
import routes from './routes'
// import ScrollToTop from './components/ScrollToTop'

const App = ({ history }) => {
	return (
		<ConnectedRouter history={history}>
			{ routes }
		</ConnectedRouter>
	)
}

export default App
