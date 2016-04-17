import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as FormActions from '../actions/FormActions';
import ControlForm from '../components/ControlForm';

@connect(state => ({
	controls: state.form
}))

export default class FormApp extends Component {
	static propTypes = {
		controls: PropTypes.object.isRequired,
		dispatch: PropTypes.func.isRequired
	};

	render() {
		const {controls, dispatch} = this.props;
		const actions = bindActionCreators(FormActions, dispatch);

		return (
			<div>
				<h1>Registration Form</h1>
				<ControlForm controls={controls} actions={actions}/>
			</div>
		);
	}
}