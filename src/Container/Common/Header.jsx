import React, {Component } from 'react';
import {withRouter} from 'react-router-dom';
import '../../Styles/header.css';
import {removeUser,getCurrentUser,refreshToken } from '../../Store/Actions/auth/auth.action';
import { connect } from 'react-redux';
import history from '../../Inits/history';
import {setPurchaseCounter} from '../../Store/Actions/machine/machine.action';
import jwt_decode from 'jwt-decode';
import moment from 'moment';
class Header extends Component{
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
			site:false,
			vehicle:false,
			spare:false,
			purchase:false,
			count:0,
            decoded:{},
		},this.getTokenData);
		if(localStorage['cart']===undefined) {
			localStorage['cart'] = JSON.stringify({machines: {}, vehicles: {}});
		}
		this.setPurchase();
	}
	componentDidMount(){
		if(this.state.IntervalForRefresh!==undefined){
            setInterval(this.getRefreshToken,this.state.IntervalForRefresh);
        }
		document.addEventListener('mousedown', this.handleClickOutside);
	}
	componentWillUpdate(nextProps, nextState, nextContext) {
		if(nextProps.location.pathname==='/'){
                    this.getTokenData();
		}
	}
	getTokenData=()=>{
        if(localStorage['accessToken']){
            const decoded=jwt_decode(localStorage['accessToken']);
            if(decoded.exp !== this.state.decoded.exp){
                this.setState({
                    decoded,
                },this.IntervalTime)
            }
        }
    }

	IntervalTime=()=>{
                const TodayTime = new Date();
                const ExpTime = moment.unix(this.state.decoded.exp);
                const Diff = ExpTime._d.getTime() - TodayTime.getTime();
                this.setState({
                    IntervalForRefresh: Diff - 10000,
                },this.componentDidMount)
	}
	getRefreshToken=()=>{
		this.props.refreshToken(localStorage['accessToken']);
	}
	handleClickOutside=(event)=>{
		var profile='';
		const composedPath=event.target.classList;
            for(let i=0;i<composedPath.length;i++){
                    if(composedPath[i]==="profileHeader"||composedPath[i]==="userCircleProfile"||composedPath[i]==="angledownProfile"){
                        profile='HIDE COMPANY';
                    }
                    if(composedPath[i]==="logOut"){
                        this.logout();
                        return;
                    }
            }
            if(profile==='HIDE COMPANY'){
                this.setState({
                    profile:!this.state.profile
                })
            }
            if(profile===''){
                this.setState({
                    profile:false
                })
            }

	}
	setPurchase=async()=>{
		const mach=JSON.parse(localStorage['cart'])['machines'];
		const vehi=JSON.parse(localStorage['cart'])['vehicles'];
		const size = Object.keys(mach).length+Object.keys(vehi).length;
		await this.props.setPurchaseCounter(size);
	}
	showMachine=()=>{
		this.setState({
			machine:!this.state.machine
		})
	}
	showVehicle=()=>{
		this.setState({
			vehicle:!this.state.vehicle
		})
	}
	showSpare=()=>{
		this.setState({
			spare:!this.state.spare
		})
	}
	showPurchase=()=>{
		this.setState({
			purchase:!this.state.purchase
		})
	}
	logout=()=>{
	    this.props.removeUser();
		const bodyContainer=document.getElementById('bodyContainer');
		bodyContainer.setAttribute("style","margin-left:0px");
	}
	hideNav=()=>{
		document.getElementById('sidenav').style.width="0px";
		const bodyContainer=document.getElementById('bodyContainer');
		bodyContainer.setAttribute("style","margin-left:0px");
		const topHeading=document.getElementsByClassName('topHeadingContainer')[0];
		if(topHeading){
		topHeading.setAttribute("style","width:100vw");
		}
	}
	showNav=()=>{
		document.getElementById('sidenav').style.width="15vw";
		const bodyContainer=document.getElementById('bodyContainer');
		bodyContainer.setAttribute("style","margin-left:15vw");
		const topHeading=document.getElementsByClassName('topHeadingContainer')[0];
		if(topHeading){
		topHeading.setAttribute("style","width:88vw");
		}
	}
	render(){
		const dashboardClass=window.location.pathname.slice(0,5)==='/home'? "menuActive" :"";
		const machineClass=window.location.pathname.slice(0,8)==='/machine'? "menuActive" :"";
		const vehicleClass=window.location.pathname.slice(0,8)==='/vehicle'?"menuActive":"";
		const spareClass=window.location.pathname.slice(0,5)==='/part'?"menuActive":"";
		const purchaseClass=window.location.pathname.slice(0,9)==='/purchase'?"menuActive":"";
		const { user } =this.props;
		return user?(
			<div>
				<div className="header" >
					<div className="divContainer logoContainer" onClick={this.showNav}>
						{/*<img src={process.env.PUBLIC_URL + '/car.svg'} alt="/car"/>*/}
						<div className="menuIcon" ><i className="fa fa-align-justify"></i></div>
					</div>
					<div className="divContainer searchBarHeader col-xs-4 col-sm-4 ">
						<input type="text" className="form-control inputHeader"  placeholder="Search..."  />
					</div>
					{/*<button className="divContainer plusHeader">
						<i className="fa fa-plus plusIconHeader" aria-hidden="true"></i>
					</button>*/}
					<div className="divContainer profileHeader" >
						<section >
							<i className="fa fa-angle-down angledownProfile" ></i>
							<i className="fa fa-user-circle userCircleProfile" ></i>
						</section>
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
								<li className="profileDropList logOut" style={{cursor:'pointer'}} onClick={this.logout}><i className="fa fa-sign-out marginLogo" aria-hidden="true"></i>Logout</li>
							</ul>
						</div>}
					</div>
					{/*<div className="divContainer companyHeader" >
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
					</div>*/}
					<div className="divContainer companyHeader cartIconContainer" onClick={()=>history.push('/purchase')}>
						<i className="fa fa-shopping-cart cartIcon"></i>{this.props.PurchaseCount!==0 && <div className="purchaseCounter">{this.props.PurchaseCount}</div>}
					</div>
				</div>
				<div id="sidenav" className="sidenav">
					<div className="sideInnerScroll">
						<div className="innersidenav" onClick={this.hideNav}>
							<div className="menuName" >
								<div ><i className="fa fa-align-justify"></i></div>
							</div>
						</div>
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
						<div className={`innersidenav ${vehicleClass}`}>
							<div  className="menuName" onClick={()=>this.showVehicle()}>
								Vehicle{this.state.vehicle?<i className="fa fa-angle-up downicon" ></i>:<i className="fa fa-angle-down downicon" ></i>}
							</div>
							{this.state.vehicle &&
							<div>
								<div className="submenu" onClick={()=>history.push('/vehicles')}>
									Vehicles
								</div>
								<div className="submenu" onClick={()=>history.push('/vehicle/create')}>
									Create Vehicle
								</div>
							</div>
							}
						</div>
						<div className={`innersidenav ${spareClass}`}>
							<div  className="menuName" onClick={()=>this.showSpare()}>
								Spare Parts{this.state.spare?<i className="fa fa-angle-up downicon" ></i>:<i className="fa fa-angle-down downicon" ></i>}
							</div>
							{this.state.spare &&
							<div>
								<div className="submenu" onClick={()=>history.push('/parts')}>
									Spare Parts
								</div>
								<div className="submenu" onClick={()=>history.push('/part/create')}>
									Create Spare Parts
								</div>
							</div>
							}
						</div>
						<div className={`innersidenav ${purchaseClass}`}>
							<div  className="menuName" onClick={()=>this.showPurchase()}>
								Purchase{this.state.purchase?<i className="fa fa-angle-up downicon" ></i>:<i className="fa fa-angle-down downicon" ></i>}
							</div>
							{this.state.purchase &&
							<div>
								<div className="submenu" onClick={()=>history.push('/purchase')}>
									Purchase List
								</div>
							</div>
							}
						</div>
					</div>
				</div>
			</div>
		):null

	}
}

const mapStateToProps = state => {
  return {
  	PurchaseCount:state.machine.purchaseCount,
	user:state.auth.user
  };
};
const mapDispatchToProps = {
  removeUser,
  getCurrentUser,
  setPurchaseCounter,
	refreshToken,
};


export default withRouter(connect(mapStateToProps,mapDispatchToProps,null,{pure:false})(Header));