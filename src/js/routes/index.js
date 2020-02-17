import React from 'react'
import { Route, Switch, Redirect } from 'react-router'

import Dashboard from './Dashboard'

import Landing from './process-site/Landing'
import Colors from './process-site/Colors'
import Typography from './process-site/Typography'
import Animation from './process-site/Animation'
import Prototypes from './process-site/Prototypes'
import Accessibility from './process-site/Accessibility'

import HomeNavPrototype from './prototypes/HomeNavPrototype'
import HomeArticlePrototype from './prototypes/HomeArticlePrototype'
import HomeLinksPrototype from './prototypes/HomeLinksPrototype'
import HomeProfileSetupPrototype from './prototypes/HomeProfileSetupPrototype'
import HomeSitemapPrototype from './prototypes/HomeSitemapPrototype'
import HomeLandingPrototype from './prototypes/HomeLandingPrototype'

import MdcNavPrototype from './prototypes/MdcNavPrototype'
import MdcTaxonomyDiagramPrototype from './prototypes/MdcTaxonomyDiagramPrototype'
import MdcFlipperPrototype from './prototypes/MdcFlipperPrototype'
import MdcCompanyPickerPrototype from './prototypes/MdcCompanyPickerPrototype'
import MdcButtonsPrototype from './prototypes/MdcButtonsPrototype'


const routes = (
	<div>
		<Dashboard/>
		<Switch>
			<Route exact path="/" component={Landing}/>
			<Route path="/jnj-process" component={Landing}/>
			
			<Route path="/colors" component={Colors}/>
			<Route path="/typography" component={Typography}/>
			<Route path="/animation" component={Animation}/>
			<Route path="/accessibility" component={Accessibility}/>
			<Route exact path="/prototypes" component={Prototypes}/>

			<Route exact strict path="/home-nav" component={HomeNavPrototype}/>
			<Route exact strict path="/home-article" component={HomeArticlePrototype}/>
			<Route exact strict path="/home-links" component={HomeLinksPrototype}/>
			<Route exact strict path="/home-profile-setup" component={HomeProfileSetupPrototype}/>
			<Route exact strict path="/home-sitemap" component={HomeSitemapPrototype}/>
			<Route exact strict path="/home-landing" component={HomeLandingPrototype}/>

			<Route exact strict path="/mdc-nav" component={MdcNavPrototype}/>
			<Route exact strict path="/mdc-flipper" component={MdcFlipperPrototype}/>
			<Route exact strict path="/mdc-taxonomy-diagram" component={MdcTaxonomyDiagramPrototype}/>
			<Route exact strict path="/mdc-button" component={MdcTaxonomyDiagramPrototype}/>
			<Route exact strict path="/mdc-company-picker" component={MdcCompanyPickerPrototype}/>
			<Route exact strict path="/mdc-buttons" component={MdcButtonsPrototype}/>

		</Switch>
	</div>
)

export default routes
