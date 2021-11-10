import React, { Component, Suspense } from "react";
import { lazy } from "@loadable/component";
import { NavLink, Redirect, Switch, Route } from "react-router-dom";
const Home = lazy(() => import("@/views/Home"));

class Router extends Component {
	render() {
		return (
			<React.Fragment>
				<Suspense fallback={<div>Loading...</div>}>
					<Switch>
						<Route exact path='/' component={Home} />
						<Redirect to='/' />
					</Switch>
				</Suspense>
			</React.Fragment>
		);
	}
}
export default Router;
