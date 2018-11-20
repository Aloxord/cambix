import axios from 'axios';
import { 
	URL_BASE,
	AUTH
} from '../config/api'

export function login(username, password){
	return axios.post(URL_BASE+AUTH,{
		email: username,
		password: password
	})
}