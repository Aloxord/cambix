import { logIn } from '../actions/auth';
import { SET_LOCATION } from '../config/constants';

const INITIAL_STATE = 'ini';

const location = (state = INITIAL_STATE,action) => {
	switch(action.type){
		case SET_LOCATION:
			return action.location
		break;
		default:
			return state
	}
}

export default location;