import React, { Component } from 'react';
import { connect  } from 'react-redux';
import { render } from 'react-dom';
import Login from './components/login';
import Dashboard from './components/dashboard';

const connectedApp = props => (
	props.isLogged ?
		<Dashboard /> :
		<Login />
)

const mapStateToProps = (state) => {
	return {
		isLogged: state.user.isLogged
	}
}
const App = connect(mapStateToProps)(connectedApp);

export default App;