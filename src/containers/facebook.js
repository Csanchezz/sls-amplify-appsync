import React, { Component } from 'react';
import { Auth } from 'aws-amplify';

import './Login.css';

export default class facebook extends Component {
	render() {
		return (
			
			<div className="Login">
				<button onClick={() => Auth.federatedSignIn({provider: 'Facebook'})}>Open Facebook</button>
			</div>
		);
	}
}
