import { logIn } from '../actions/auth';
import {
	LOADING,
	LOG_IN,
	LOG_OUT
} from '../config/constants';

const INITIAL_STATE = {
	user: {},
	isLogged: false,
}

const auth = (state = INITIAL_STATE,action) => {
	switch(action.type){
		case LOG_IN:
			return Object.assign({}, state, {
				user: action.user,
				token: action.token,
				isLogged: true
			})
		break;
		case LOG_OUT:
			return Object.assign({}, state, {
				user: {},
				token: '',
				isLogged: false
			})
		break;
		default:
			return state
	}
}

export default auth;