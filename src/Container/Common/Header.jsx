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
		const dashboardClass=window.location.pathname.slice(0,5)==='/home'? "menuActive" :"";
		const machineClass=window.location.pathname.slice(0,8)==='/machine'? "menuActive" :"";
		const engineClass=window.location.pathname.slice(0,7)==='/engine'? "menuActive" :"";
		const locationClass=(
				(window.location.pathname.slice(0,10)==='/statesite')
				||(window.location.pathname.slice(0,13)==='/districtsite')
				||(window.location.pathname.slice(0,5)==='/site')
				)? "menuActive" :"";
		const conditionClass=window.location.pathname.slice(0,10)==='/condition'? "menuActive" :"";
		const categoryClass=window.location.pathname.slice(0,9)==='/category'?"menuActive":"";
		const subcategoryClass=window.location.pathname.slice(0,12)==='/subcategory'?"menuActive":"";
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
					<div className="sideInnerScroll">

						<div className={`innersidenav ${dashboardClass}`} onClick={()=>history.push('/home')}>
						<div  className="menuName" >
							Dashboard
						</div>
						</div>
						<div className={`innersidenav ${machineClass}`}>
							<div  className="menuName" onClick={()=>this.showMachine()}>
							Machine{this.state.machine?<i className="fa fa-angle-up downicon" ></i>:<i className="fa fa-angle-down downicon" ></i>}
							</div>
							{this.state.machine && 
								<div>
									<div className="submenu" onClick={()=>history.push('/machines')}>
										Machines
									</div>
									<div className="submenu" onClick={()=>history.push('/machine/create')}>
										Create Machine
									</div>
									<div className="submenu" onClick={()=>history.push('/machinebrands')}>
										Machine Brands
									</div>
									<div className="submenu" onClick={()=>history.push('/machinebrand/create')}>
										Create Machine Brand
									</div>
									<div className="submenu" onClick={()=>history.push('/machinemodels')}>
										Machine Models
									</div>
									<div className="submenu" onClick={()=>history.push('/machinemodel/create')}>
										Create Machine Model
									</div>
								</div>
							}
						</div>
						<div className={`innersidenav ${conditionClass}`}>
							<div  className="menuName" onClick={()=>this.showCondition()}>
							Condition{this.state.condition?<i className="fa fa-angle-up downicon" ></i>:<i className="fa fa-angle-down downicon" ></i>}
							</div>
							{this.state.condition && <div><div className="submenu" onClick={()=>history.push('/conditions')}>
							View Condition
							</div>
							<div className="submenu" onClick={()=>history.push('/condition/create')}>
							Create Condition
							</div></div>}
						</div>
						<div className={`innersidenav ${engineClass}`}>
							<div  className="menuName" onClick={()=>this.showEnginebrand()}>
							Engine {this.state.enginebrand?<i className="fa fa-angle-up downicon" ></i>:<i className="fa fa-angle-down downicon" ></i>}
							</div>
							{this.state.enginebrand && 
								<div>
									<div className="submenu" onClick={()=>history.push('/enginebrands')}>
										Engine Brands
									</div>
									<div className="submenu" onClick={()=>history.push('/enginebrand/create')}>
										Create Engine Brand
									</div>
									<div className="submenu" onClick={()=>history.push('/enginemodels')}>
										Engine Models
									</div>
									<div className="submenu" onClick={()=>history.push('/enginemodel/create')}>
										Create Engine Model
									</div>
								</div>}
						</div>
						<div className={`innersidenav ${categoryClass}`}>
							<div  className="menuName" onClick={()=>this.showCategory()}>
							Category{this.state.category?<i className="fa fa-angle-up downicon" ></i>:<i className="fa fa-angle-down downicon" ></i>}
							</div>
							{this.state.category && <div><div className="submenu" onClick={()=>history.push('/categorys')}>
							View Category
							</div>
							<div className="submenu" onClick={()=>history.push('/category/create')}>
							Create Category
							</div></div>}
						</div>
						<div className={`innersidenav ${subcategoryClass}`}>
							<div  className="menuName" onClick={()=>this.showSubcategory()}>
							Sub Category{this.state.subcategory?<i className="fa fa-angle-up downicon" ></i>:<i className="fa fa-angle-down downicon" ></i>}
							</div>
							{this.state.subcategory && <div><div className="submenu" onClick={()=>history.push('/subcategorys')}>
							View Sub-Category
							</div>
							<div className="submenu" onClick={()=>history.push('/subcategory/create')}>
							Create Sub-Category
							</div></div>}
						</div>
						<div className={`innersidenav ${locationClass}`}>
							<div  className="menuName" onClick={()=>this.showStatesite()}>
							Location{this.state.statesite?<i className="fa fa-angle-up downicon" ></i>:<i className="fa fa-angle-down downicon" ></i>}
							</div>
							{this.state.statesite && 
								<div>
									<div className="submenu" onClick={()=>history.push('/statesites')}>
										View State
									</div>
									<div className="submenu" onClick={()=>history.push('/statesite/create')}>
										Create State
									</div>
									<div className="submenu" onClick={()=>history.push('/districtsites')}>
										View District
									</div>
									<div className="submenu" onClick={()=>history.push('/districtsite/create')}>
										Create District
									</div>
									<div className="submenu" onClick={()=>history.push('/sites')}>
										View Site
									</div>
									<div className="submenu" onClick={()=>history.push('/site/create')}>
										Create Site
									</div>
								</div>}
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