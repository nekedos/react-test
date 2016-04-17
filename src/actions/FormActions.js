import * as types from '../constants/ActionTypes';

export function validateForm(errors) {
	return {
		type: types.VALIDATE_FORM,
		errors
	};
}

export function validateInput(code) {
	return {
		type: types.VALIDATE_INPUT,
		code
	};
}

export function setInputValue(code, value) {
	return {
		type: types.SET_INPUT_VALUE,
		code,
		value
	};
}