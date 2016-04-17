import React, {Component, PropTypes} from 'react';
import mapValues from 'lodash/object/mapValues';
import classnames from 'classnames';
import ControlInput from '../ControlInput';

export default class ControlForm extends Component {
	static propTypes = {
		controls: PropTypes.object.isRequired,
		actions: PropTypes.object.isRequired
	};
	
	render() {
		return (
			<form onSubmit={this.handleSubmit.bind(this)} method="post" action="">
				{
					mapValues(this.props.controls, (control) => {
						return (<ControlInput
							control={control}
							validateInput={this.props.actions.validateInput}
							setInputValue={this.props.actions.setInputValue}
						/>);
					})
				}

				<div className="clearfix">
					<button className={classnames('btn', 'btn-primary', 'pull-right')} type="submit">Зарегистрироваться</button>
				</div>
			</form>
		);
	}

	handleSubmit(e) {
		e.preventDefault();

		setTimeout(() => this.props.actions.validateForm({
			email: ['неверно указан адрес электронной почты'],
			password: ['пожалуйста, укажите пароль'],
			org: ['пожалуйста, укажите организацию']
		}), 350);
	}
}