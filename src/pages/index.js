import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Login from './login/Login';
import Home from './home/Home';

function PrivateRoute({ component: Component, ...rest }) {
	const { isAuthenticated } = useSelector((state) => state.auth);

	return (
		<Route
			{...rest}
			render={(props) =>
				isAuthenticated ? (
					<Component {...props} />
				) : (
					<Redirect to={{ pathname: '/', state: { from: props.location } }} />
				)}
		/>
	);
}

const routes = () => (
	<Switch>
		<Route path="/login" component={Login} />
        <PrivateRoute path="/home" component={Home} />
		<Route path="/" to="/Login" />
	</Switch>
);

export default routes;