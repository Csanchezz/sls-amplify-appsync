import React, { Component } from 'react';
import { Auth } from 'aws-amplify';


export default class google extends Component {
	render() {
		return (
			
			<div className="Login">
				<button onClick={() => Auth.federatedSignIn({provider: 'Google'})}>Open Google</button>
			</div>
		);
	}
}
