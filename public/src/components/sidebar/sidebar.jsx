import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logOut } from '../../actions/auth'
import Menu from '../menu';
import style from "./sidebar.scss";

const Sidebar = props => {
	console.log(props);
	return (

		<aside className={style.sidebar}>

			<div className={style.logo}>
			</div>
			<div className={style.menu}>
				<Menu />
			</div>
			<div>
				<ul className={style.logout}>
					<li>
						<a onClick={props.logout}>
							<i className="material-icons">
							power_settings_new
							</i>
							Salir
						</a>
					</li>
				</ul>
			</div>

		</aside>

		);

}

const mapDispatchToProps = dispatch =>({
	logout: () => dispatch(logOut())
})

export default connect(null,mapDispatchToProps)(Sidebar);