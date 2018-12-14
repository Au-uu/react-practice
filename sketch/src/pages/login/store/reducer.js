import { fromJS } from 'immutable';
import { creatorTypes } from './index';

const defaultState = fromJS({
	login: false
});

export default (state = defaultState, action) => {
	switch(action.type) {
		case creatorTypes.CHANGE_LOGIN:
			return state.set('login', action.value);
		case creatorTypes.LOGOUT:
			return state.set('login', action.value)
		default:
			return state;
	}
}