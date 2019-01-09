import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { renderInput } from '../../Utils/input.util';
import { required } from '../../Utils/validation.util';
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phone: '',
      password: '',
    };
  }

  // generic method for changing value of input fields.
  onChangeSetToState = stateKey => e => {
    this.setState({ [stateKey]: e.currentTarget.value.trim() });
  };

  onSubmitLogin = () => {
    this.props.onSubmit(this.state);
  };
  render() {
    return (
      <div className="login-container">
        <div className="form-login">
          <h4>Login</h4>
          <form onSubmit={this.props.handleSubmit(this.onSubmitLogin)}>
            <Field
              name="phone"
              placeholder="User Name"
              component={renderInput}
              type="text"
              value={this.state.phone}
              onChange={this.onChangeSetToState('username')}
              validate={required}
              className="form-control"
              parentClass="form-group"
            />
            <Field
              name="password"
              placeholder="Password"
              component={renderInput}
              type="password"
              value={this.state.password}
              onChange={this.onChangeSetToState('password')}
              validate={required}
              className="form-control"
              parentClass="form-group"
            />
            <br />
            <div className="wrapper">
              <button className="btn btn-primary" type="submit" disabled={this.props.isLoading}>
                {this.props.isLoading ? <span className="spinner" /> : <span>Login</span>}
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default reduxForm({ form: 'loginForm' })(Login);
