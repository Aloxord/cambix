import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../../services/auth';
import { logIn } from '../../actions/auth';
import style from "./loginForm.scss";

class LoginForm extends Component {

	constructor(props){
		super(props);

		this.state ={
			email: "",
			pass: ""
		}

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleSubmit(evt){
		evt.preventDefault();
		const { email, pass } = this.state;
		login(email,pass)
			.then(res=>{
				this.props.logIn(res.data);
			});

	}

	handleChange(evt, type){
		const value = evt.target.value;

		if (type === "user") {
			this.setState({ email: value });
			return;
		}

		this.setState({ pass: value });
	}

	render(){

		const { email, pass } = this.state;

		return (

			<form 
				className={style.login}
				onSubmit={this.handleSubmit}>
				<div>
					<input 
						type="text"
						placeholder="Correo" 
						onChange={e => this.handleChange(e, "user")} />
					<input 
						type="password"
						placeholder="Contraseña"
						onChange={e => this.handleChange(e, "pass")}/>
				</div>
				<button disabled={(!email || !pass)}>Iniciar sesión</button>
					<input 
						type="checkbox" 
						name="recordar" />
				<label for="recordar">Recordarme</label>
			</form>

			);

	}

}

const mapDispatchToProps = dispatch => ({
	logIn: user => dispatch(logIn(user))
})

export default connect(null,mapDispatchToProps)(LoginForm);