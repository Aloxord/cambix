import React, { Component } from 'react';
import LoginForm from '../loginForm';
import styles from "./login.scss";

const Login =  () => (

	<div className={styles.login}>
		<div className={styles.left}>
			<div className={styles.logo}>
			</div>
		</div>
		<div className={styles.right}>
			
			<LoginForm />

		</div>
	</div>

)

export default Login;