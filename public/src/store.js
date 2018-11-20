import GlobalState from './reducers/reducers';
import { createStore } from 'redux';

const store = createStore(
	GlobalState,
	window.devToolsExtension && window.devToolsExtension()
);

export default store;