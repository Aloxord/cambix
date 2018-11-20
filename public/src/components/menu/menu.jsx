import React, { Component } from 'react';
import { connect } from 'react-redux';
import { location } from '../../actions/navigation'
import style from "./menu.scss";

class Menu extends Component{

	constructor(props){
		super(props);

		this.changeScreen = this.changeScreen.bind(this);

	}

	changeScreen(set,evt){
		evt.preventDefault();

		this.props.redir(set);
	}

	render(){
		
		const { location } = this.props

		console.log(location);

		return (

			<ul className={style.menu}>
				<li>
					<a className={location == 'ini' ? style.active : null} onClick={e=>this.changeScreen('ini',e)}>
						<i className="material-icons">
						home
						</i>
						Inicio
					</a>
				</li>
				<li>
					<a className={location == 'bank' ? style.active : null} onClick={e=>this.changeScreen('bank',e)}>
						<i className="material-icons">
						account_balance
						</i>
						Bancos
					</a>
				</li>
				<li>
					<a className={location == 'profile' ? style.active : null} onClick={e=>this.changeScreen('profile',e)}>
						<i className="material-icons">
						person
						</i>
						Perfil
					</a>
				</li>
				<li>
					<a className={location == 'add' ? style.active : null} onClick={e=>this.changeScreen('add',e)}>
						<i className="material-icons">
						group_add
						</i>
						Registrar
					</a>
				</li>
			</ul>

			);
	}

}

const mapStateToProps = state =>({
	location: state.location
})

const mapDispatchToProps = dispatch =>({
	redir: locat => dispatch(location(locat))
})

export default connect(mapStateToProps,mapDispatchToProps)(Menu);