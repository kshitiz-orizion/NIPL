import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login,register,generateOtp } from '../../Store/Actions/auth/auth.action';
import Login from '../../Component/Login/Login';
import '../../Styles/login.css';
class LoginContainer extends Component {
  onSubmit = userCredential => {
    this.props.onLoginClick({ userCredential });
  };

  onRegister=userData=>{
    this.props.onRegisterClick({userData});
  }
  onGenerateOtp=user=>{
    this.props.onGenerateOtpClick(user);
  }
  render() {
    return (
      <div className="row">
        <div className="col-sm-12 col-md-12 col-xs-12">
          <div>
            <Login onSubmit={this.onSubmit} onRegister={this.onRegister} isLoading={this.props.isLoading} onGenerateOtp={this.onGenerateOtp}/>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoading: state.auth.isLoading,
  };
};
const mapDispatchToProps = {
  onLoginClick: login,
  onRegisterClick:register,
  onGenerateOtpClick:generateOtp
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginContainer);
