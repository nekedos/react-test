import * as types from '../constants/ActionTypes';
import mapValues from 'lodash/object/mapValues';
import assign from 'lodash/object/assign';

const initialState = {
	'email': {
		code: 'email',
		type: 'email',
		value: '',
		placeholder: 'Email (логин)',
		error: [],
		required: true,
		valid: true
	},
	'password': {
		code: 'password',
		type: 'password',
		value: '',
		placeholder: 'Пароль',
		error: [],
		required: true,
		valid: true
	},
	'org': {
		code: 'org',
		type: 'text',
		value: '',
		placeholder: 'Название организации',
		error: [],
		required: true,
		valid: true
	}
};

let temp = '';

export default function form(state = initialState, action) {
	switch (action.type) {
		case types.VALIDATE_FORM:
			temp = assign({}, state);

			mapValues(temp, (control, key) => {
				control.valid = false;
				control.error = action.errors[key];
			});

			return temp;
		
		case types.SET_INPUT_VALUE:
			temp = assign({}, state);
			temp[action.code].value = action.value;
			return temp;
		default:
			return state;
	}
}