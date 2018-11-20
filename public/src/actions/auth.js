import {
	LOADING,
	LOG_IN,
	LOG_OUT
} from '../config/constants';

export const loading = () => {
	return {
		type: LOADING,
	}
}

export const logIn = ({ data, api_token }) => {
	return {
		type: LOG_IN,
		user: data,
		token: api_token
	}
}

export const logOut = () => {
	return {
		type: LOG_OUT
	}
}