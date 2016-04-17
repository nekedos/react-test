import React, {Component, PropTypes} from 'react';
import classnames from 'classnames';
import mapValues from 'lodash/object/mapValues';

export default class ControlInput extends Component {
	static propTypes = {
		validateInput:  PropTypes.func.isRequired,
		control: PropTypes.object.isRequired
	};

	render() {
		return (
			<div className={classnames('form-group', { 'has-error': !this.state.valid })}>
				<label htmlFor={this.state.code}>{this.state.placeholder}</label>
				<input
					id={this.state.code}
					name={this.state.code}
					type={this.state.type}
					className={classnames('form-control')}
					placeholder={this.state.placeholder}
					value={this.state.value}
					onChange={this.handleChange.bind(this)}
					onBlur={this.handleBlur.bind(this)}
				/>
				{
					mapValues(this.state.error, (error) => {
						return (
							<span className={classnames('help-block', { 'hide': this.state.valid })}>{error}</span>
						);
					})
				}

			</div>
		);
	}

	constructor(props, context) {
		super(props, context);
		this.state = this.props.control;
	}

	handleChange(e) {
		this.setState({value: e.target.value});
	}

	handleBlur(e) {
		this.props.setInputValue(this.state.code, e.target.value);
	}
}