import React from 'react';
import ReactDOM from 'react-dom';
import Amplify from 'aws-amplify';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import config from './config';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import awsconf from './aws-exports'
Amplify.configure({
	Auth: {
		mandatorySignIn: true,
		region: config.cognito.REGION,
		userPoolId: config.cognito.USER_POOL_ID,
		identityPoolId: config.cognito.IDENTITY_POOL_ID,
		userPoolWebClientId: config.cognito.APP_CLIENT_ID
	}
});
// Amplify.configure(awsconf)

let myAppConfig = {
	aws_appsync_graphqlEndpoint: config.graphql.URL,
	aws_appsync_region: config.graphql.REGION,
	aws_appsync_authenticationType: config.graphql.AUTHENTICATION_TYPE
};

Amplify.configure(myAppConfig);

ReactDOM.render(
	<Router>
		<App />
	</Router>,
	document.getElementById('root')
);
registerServiceWorker();
