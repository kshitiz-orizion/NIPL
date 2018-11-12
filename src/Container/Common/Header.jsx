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
			showcompany:false,
			condition:false,
			enginebrand:false,
			enginemodel:false,
			machinebrand:false,
			machinemodel:false,
			category:false,
			subcategory:false,
			statesite:false,
			districtsite:false,
			site:false
		})
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
	showMachine=()=>{
		this.setState({
			machine:!this.state.machine
		})
	}
	showCondition=()=>{
		this.setState({
			condition:!this.state.condition
		})
	}
	showEnginebrand=()=>{
		this.setState({
			enginebrand:!this.state.enginebrand
		})
	}
	showEnginemodel=()=>{
		this.setState({
			enginemodel:!this.state.enginemodel
		})
	}
	showMachinebrand=()=>{
		this.setState({
			machinebrand:!this.state.machinebrand
		})
	}
	showMachinemodel=()=>{
		this.setState({
			machinemodel:!this.state.machinemodel
		})
	}
	showCategory=()=>{
		this.setState({
			category:!this.state.category
		})
	}
	showSubcategory=()=>{
		this.setState({
			subcategory:!this.state.subcategory
		})
	}
	showStatesite=()=>{
		this.setState({
			statesite:!this.state.statesite
		})
	}
	showDistrictsite=()=>{
		this.setState({
			districtsite:!this.state.districtsite
		})
	}
	showSite=()=>{
		this.setState({
			site:!this.state.site
		})
	}
	logout=()=>{
	    this.props.removeUser();
	}

	render(){
		const dashboardClass=window.location.pathname==='/home'? "menuActive" :"";
		const machineClass=window.location.pathname==='/machine/create'? "menuActive" :"";
		const conditionClass=window.location.pathname==='/condition/create'? "menuActive" :"";
		const enginebrandClass=window.location.pathname==='/enginebrand/create'? "menuActive" :"";
		const enginemodelClass=window.location.pathname==='/enginemodel/create'? "menuActive" :"";
		const machinebrandClass=window.location.pathname==='/machinebrand/create'?"menuActive":"";
		const machinemodelClass=window.location.pathname==='/machinemodel/create'?"menuActive":"";
		const categoryClass=window.location.pathname==='/category/create'?"menuActive":"";
		const subcategoryClass=window.location.pathname==='/subcategory/create'?"menuActive":"";
		const statesiteClass=window.location.pathname==='/statesite/create'?"menuActive":"";
		const districtsiteClass=window.location.pathname==='/districtsite/create'?"menuActive":"";
		const siteClass=window.location.pathname==='/site/create'?"menuActive":"";
		return(
			<div>
				<div className="header" >
					<div className="divContainer logoContainer" >
						<img src={process.env.PUBLIC_URL + '/car.svg'}/>
					</div>
					<div className="divContainer col-md-4">
						<input type="text" className="form-control inputHeader" style={{backgroundImage: `url(${process.env.PUBLIC_URL+'/search.svg'})`}} placeholder="Search..."  />
					</div>
					<div className="divContainer plusHeader">
						<i className="fa fa-plus plusIconHeader" aria-hidden="true"></i>
					</div>	
					<div className="divContainer profileHeader" onClick={this.showMenu}>
						<i className="fa fa-angle-down angledownProfile" ></i>
						<i className="fa fa-user-circle userCircleProfile" ></i>
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
								<li className="profileDropList" onClick={this.logout}><i className="fa fa-sign-out marginLogo" aria-hidden="true"></i>Logout</li>
							</ul>
						</div>}
					</div>
					<div className="divContainer companyHeader" onClick={this.showCompany}>
						<div className="row innerCompanyHeader">
							<div className="nameCompanyHeader">Company Name</div>
							<div className="angeldownCompany"><i className="fa fa-angle-down"></i></div>
						</div>
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
					<div className="box">
					<div className={`innersidenav ${dashboardClass}`} onClick={()=>history.push('/home')}>
					<div  className="menuName" >
						Dashboard
					</div>
					</div>
					<div className={`innersidenav ${machineClass}`}>
						<div  className="menuName" onClick={()=>this.showMachine()}>
						Machine
						</div>
						{this.state.machine && <div><div className="submenu">
						View Machine
						</div>
						<div className="submenu" onClick={()=>history.push('/machine/create')}>
						Create Machine
						</div></div>}
					</div>
					<div className={`innersidenav ${conditionClass}`}>
						<div  className="menuName" onClick={()=>this.showCondition()}>
						Condition
						</div>
						{this.state.condition && <div><div className="submenu">
						View Condition
						</div>
						<div className="submenu" onClick={()=>history.push('/condition/create')}>
						Create Condition
						</div></div>}
					</div>
					<div className={`innersidenav ${enginebrandClass}`}>
						<div  className="menuName" onClick={()=>this.showEnginebrand()}>
						Engine Brand
						</div>
						{this.state.enginebrand && <div><div className="submenu">
						View Engine Brand
						</div>
						<div className="submenu" onClick={()=>history.push('/enginebrand/create')}>
						Create Engine Brand
						</div></div>}
					</div>
					<div className={`innersidenav ${enginemodelClass}`}>
						<div  className="menuName" onClick={()=>this.showEnginemodel()}>
						Engine Model
						</div>
						{this.state.enginemodel && <div><div className="submenu">
						View Engine Model
						</div>
						<div className="submenu" onClick={()=>history.push('/enginemodel/create')}>
						Create Engine Model
						</div></div>}
					</div>
					<div className={`innersidenav ${machinebrandClass}`}>
						<div  className="menuName" onClick={()=>this.showMachinebrand()}>
						Machine Brand
						</div>
						{this.state.machinebrand && <div><div className="submenu">
						View Machine Brand
						</div>
						<div className="submenu" onClick={()=>history.push('/machinebrand/create')}>
						Create Machine Brand
						</div></div>}
					</div>
					<div className={`innersidenav ${machinemodelClass}`}>
						<div  className="menuName" onClick={()=>this.showMachinemodel()}>
						Machine Model
						</div>
						{this.state.machinemodel && <div><div className="submenu">
						View Machine Model
						</div>
						<div className="submenu" onClick={()=>history.push('/machinemodel/create')}>
						Create Machine Model
						</div></div>}
					</div>
					<div className={`innersidenav ${categoryClass}`}>
						<div  className="menuName" onClick={()=>this.showCategory()}>
						Category
						</div>
						{this.state.category && <div><div className="submenu">
						View Category
						</div>
						<div className="submenu" onClick={()=>history.push('/category/create')}>
						Create Category
						</div></div>}
					</div>
					<div className={`innersidenav ${subcategoryClass}`}>
						<div  className="menuName" onClick={()=>this.showSubcategory()}>
						Sub Category
						</div>
						{this.state.subcategory && <div><div className="submenu">
						View Sub-Category
						</div>
						<div className="submenu" onClick={()=>history.push('/subcategory/create')}>
						Create Sub-Category
						</div></div>}
					</div>
					<div className={`innersidenav ${statesiteClass}`}>
						<div  className="menuName" onClick={()=>this.showStatesite()}>
						State
						</div>
						{this.state.statesite && <div><div className="submenu">
						View State
						</div>
						<div className="submenu" onClick={()=>history.push('/statesite/create')}>
						Create State
						</div></div>}
					</div>
					<div className={`innersidenav ${districtsiteClass}`}>
						<div  className="menuName" onClick={()=>this.showDistrictsite()}>
						District
						</div>
						{this.state.districtsite && <div><div className="submenu">
						View District
						</div>
						<div className="submenu" onClick={()=>history.push('/districtsite/create')}>
						Create District
						</div></div>}
					</div>
					<div className={`innersidenav ${siteClass}`}>
						<div  className="menuName" onClick={()=>this.showSite()}>
						Site
						</div>
						{this.state.site && <div><div className="submenu">
						View Site
						</div>
						<div className="submenu" onClick={()=>history.push('/site/create')}>
						Create Site
						</div></div>}
					</div>
					<div className="innersidenav">
						<div className="menuName">
							MENU4
						</div>
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