import React from 'react';
import { Route, Redirect } from "react-router-dom";
import { connect } from 'react-redux';

export function isAuthenticated() {
	if(authUser ? true : false);
}

export const ProtectedRoute = ({component: Component, ...rest}) => (
	<Route 
		{...rest} 
		render={(props) => 
			isAuthenticated() ? (<Component {...props} />) :
			     			 (<Redirect to={
				     			 	{
										pathname: '/login',
										state: { from: props.location } //to redirect after login
									}
								}
							  />)
		}
	/>
);

const mapStateToProps = (state) => ({
	authUser: state.sessionState.authUser,
	});
	
	export default connect(mapStateToProps)(isAuthenticated);