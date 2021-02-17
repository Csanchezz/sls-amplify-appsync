import React from 'react';
import ReactDOM from 'react-dom';
import Amplify from 'aws-amplify';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
// import config from './config';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import config from './aws-exports'
// Amplify.configure({
// 	Auth: {
// 		mandatorySignIn: true,
// 		region: config.cognito.REGION,
// 		userPoolId: config.cognito.USER_POOL_ID,
// 		identityPoolId: config.cognito.IDENTITY_POOL_ID,
// 		userPoolWebClientId: config.cognito.APP_CLIENT_ID
// 	}
// });
var urlsIn = config.oauth.redirectSignIn.split(",");
var urlsOut = config.oauth.redirectSignOut.split(",");
const oauth = {
  domain: config.oauth.domain,
  scope: config.oauth.scope,
  redirectSignIn: config.oauth.redirectSignIn,
  redirectSignOut: config.oauth.redirectSignOut,
  responseType: config.oauth.responseType
};
var hasLocalhost  = (hostname) => Boolean(hostname.match(/localhost/) || hostname.match(/127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}/));
var hasHostname   = (hostname) => Boolean(hostname.includes(window.location.hostname));
var isLocalhost   = hasLocalhost(window.location.hostname);
if (isLocalhost) {
  urlsIn.forEach((e) =>   { if (hasLocalhost(e)) { oauth.redirectSignIn = e; }});
  urlsOut.forEach((e) =>  { if (hasLocalhost(e)) { oauth.redirectSignOut = e; }});
}
else {
  urlsIn.forEach((e) =>   { if (hasHostname(e)) { oauth.redirectSignIn = e; }});
  urlsOut.forEach((e) =>  { if (hasHostname(e)) { oauth.redirectSignOut = e; }});
}
var configUpdate = config;
configUpdate.oauth = oauth;
Amplify.configure(configUpdate);

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
