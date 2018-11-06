import React, {Component } from 'react';
import { Link } from 'react-router-dom';
import '../../Styles/header.css';
import {removeUser,getCurrentUser} from '../../Store/Actions/auth/auth.action';
import { connect } from 'react-redux';
import history from '../../Inits/history';
export class Header extends Component{
	componentWillMount(){
		this.setState({
			menu1:false,
			profile:false,
			showcompany:false
		})
		// var decoded=jwt_decode(localStorage['accessToken']);
		// this.getProfile(decoded.user_id);
		// this.setState({
		// 	profile:true
		// });
	}
	showMenu=()=>{
		this.setState({
			profile:!this.state.profile,
			showcompany:false

		})
	}
	showCompany=()=>{
		this.setState({
			profile:false,
			showcompany:!this.state.showcompany
		})
	}
	showmenu1=()=>{
		this.setState({
			menu1:!this.state.menu1
		})
	}
	logout=()=>{
	    this.props.removeUser();
	}

	render(){
		const dashboardClass=window.location.pathname==='/home'? "menuActive" :"";
		const machineClass=window.location.pathname==='/machine/create'? "menuActive" :"";
		return(
			<div>
				<div className="header" >
					<div className="divContainer logoContainer" >
						<img src={process.env.PUBLIC_URL + '/car.svg'}/>
					</div>
					<div className="divContainer col-md-4">
						<input type="text" className="form-control inputHeader" placeholder="Search..."  />
					</div>
					<div className="divContainer plusHeader">
						<i className="fa fa-plus plusIconHeader" aria-hidden="true"></i>
					</div>	
					<div className="divContainer profileHeader" onClick={this.showMenu}>
						<i className="fa fa-angle-down angledownProfile" ></i>
						<i className="fa fa-user-circle userCircleProfile" ></i>
					</div>
					<div className="divContainer companyHeader" onClick={this.showCompany}>
						<div className="row">
							<div className="nameCompanyHeader" >Comapny Name</div>
							<div className="angeldownCompany"><i className="fa fa-angle-down"></i></div>
						</div>
					</div>
					<div>
						{this.state.profile && <div className="profileDrop">
							<ul>
								<li className="profileDropList"><i className="fa fa-user-circle-o marginLogo" aria-hidden="true"></i>Name</li>
								<div className="dividerProfile"></div>
								<li className="profileDropList"><i className="fa fa-user marginLogo" aria-hidden="true"></i>Edit Login</li>
								<li className="profileDropList"><i className="fa fa-lock marginLogo" aria-hidden="true"></i>Update Password</li>
								<li className="profileDropList"><i className="fa fa-key marginLogo" aria-hidden="true"></i>Api keys</li>
								<div className="dividerProfile"></div>
								<li className="profileDropList"><i className="fa fa-gear marginLogo"></i>User Settings</li>
								<li className="profileDropList"><i className="fa fa-bell marginLogo" aria-hidden="true"></i>Notification Setting</li>
								<div className="dividerProfile"></div>
								<li className="profileDropList"><i className="fa fa-sign-out marginLogo" aria-hidden="true"></i>Logout</li>
							</ul>
						</div>}
						{this.state.showcompany && <div className="companyDrop">
							<ul>
								<li className="profileDropList">
									<div className="companyLogo">
										<i className="fa fa-picture-o companyInnerLogo" aria-hidden="true"></i>
										<div className="addLogoHeading">Add Logo</div>
									</div>
									<div>
										<h6 className="CompanyNameProfile">Company Name</h6>
									</div>
								</li>
								<div className="dividerCompany"></div>
								<li className="companyDropList"><i className="fa fa-gear marginLogo" aria-hidden="true"></i>Account Settings</li>
								<li className="companyDropList"><i className="fa fa-credit-card marginLogo" aria-hidden="true"></i>Manage Subscription & Billing</li>
								<div className="dividerCompany"></div>
								<li className="companyDropList">Messages</li>
								<div className="dividerCompany"></div>
								<li className="companyDropList"><i className="fa fa-upload marginLogo"></i>Import Data</li>
								<li className="companyDropList"><i className="fa fa-cloud-download marginLogo"></i>Export Data</li>

							</ul>
						</div>	}
					</div>	
				</div>
				<div className="sidenav">
					<div className={`innersidenav ${dashboardClass}`} onClick={()=>history.push('/home')}>
					<div  className="menuName" >
						Dashboard
					</div>
					</div>
					<div className={`innersidenav ${machineClass}`}>
						<div  className="menuName" onClick={()=>this.showmenu1()}>
						Machine
						</div>
						{this.state.menu1 && <div><div className="submenu">
						View Machine
						</div>
						<div className="submenu" onClick={()=>history.push('/machine/create')}>
						Create Machine
						</div></div>}
					</div>
					<div className="innersidenav">
						<div  className="menuName">
							MENU2
						</div>
					</div>
					<div className="innersidenav">
						<div className="menuName">
							MENU3
						</div>
					</div>
					<div className="innersidenav">
						<div className="menuName">
							MENU4
						</div>
					</div>
				</div>
			</div>
			) 
	}
}

const mapStateToProps = state => {
  return {
  };
};
const mapDispatchToProps = {
  removeUser,
  getCurrentUser
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
  null,
  {pure:false},
)(Header);