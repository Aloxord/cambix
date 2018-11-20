import { combineReducers } from 'redux';
import user from './login';
import location from './navigation';



const GlobalState = combineReducers({
	user,
	location
	})


export default GlobalState;