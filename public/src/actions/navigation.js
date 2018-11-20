import { SET_LOCATION } from '../config/constants';

const location = (location) => {
	return {
		type: SET_LOCATION,
		location
	}
}

export {location};