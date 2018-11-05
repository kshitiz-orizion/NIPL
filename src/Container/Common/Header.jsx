import React, {Component } from 'react';
import { Link } from 'react-router-dom';
import '../../Styles/header.css';
import {removeUser,getCurrentUser} from '../../Store/Actions/auth/auth.action';
import { connect } from 'react-redux';
import history from '../../Inits/history';
export class Header extends Component{
	componentWillMount(){
		this.setState({
			menu1:false
		})
		// var decoded=jwt_decode(localStorage['accessToken']);
		// this.getProfile(decoded.user_id);
		// this.setState({
		// 	profile:true
		// });
	}
	// getProfile=async(userId)=>{
	// 	var userProfile=await this.props.getCurrentUser(userId);
	// 	this.setState({
	// 		userProfile
	// 	});
	// }
	setProfile=()=>{		
		// this.setState({
		// 	profile:!this.state.profile
		// });
		// if(document.getElementsByClassName('profile')[0].style.display==='none'){
		// 	document.getElementsByClassName('profile')[0].style.display="block";
		// }
		// else{
		// 	document.getElementsByClassName('profile')[0].style.display="none";
		// }
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
		return(
			<div>
				<div className="header" style={{zIndex:'300',borderBottom:'1px solid #d1d1d1'}}>
					<div style={{display:"inline-block",width:'50px',height:'50px',marginTop:'10px'}}>
						<img src={process.env.PUBLIC_URL + '/car.svg'}/>
					</div>
					<div style={{display:"inline-block",height:'50px',marginTop:'10px'}}  className="col-md-4">
						<input type="text" className="form-control" placeholder="Search..." style={{backgroundColor:'#EDF1F2',backgroundImage: 'url(http://localhost:3000/search.svg)', backgroundPosition: '7px 7px',
    						backgroundRepeat: 'no-repeat',backgroundSize: '20px 20px',paddingLeft:'50px'}} />
					</div>
					<div style={{display:"inline-block",width:'40px',height:'40px',marginTop:'10px',backgroundColor:'#18CC6C',borderRadius:'50%'}}>
						<i className="fa fa-plus" style={{color:'white',marginTop:'10px',marginLeft:'13px'}}aria-hidden="true"></i>
					</div>	
					<div style={{display:'inline-block',float:'right',marginTop:'10px',height:'50px',paddingRight:'20px'}}>
						<i className="fa fa-user-circle" style={{fontSize:"40px",paddingRight:'10px'}}></i>
						<i className="fa fa-angle-down"></i>
					</div>
					<div style={{display:'inline-block',float:'right',marginTop:'20px',width:'auto',height:'50px',paddingRight:'50px'}}>
						<div className="row">
							<div className="col-md-9" style={{fontSize:'20px'}}>Name</div>
							<div className="col-md-3"><i className="fa fa-angle-down"></i></div>
						</div>
					</div>		
				</div>
				<div className="sidenav">
					<div className="innersidenav" onClick={()=>history.push('/home')}>
					Dashboard
					</div>
					<div className="innersidenav" onClick={()=>this.showmenu1()}>
					Machine
					</div>
					{this.state.menu1 && <div><div className="submenu">
					View Machine
					</div>
					<div className="submenu" onClick={()=>history.push('/machine/create')}>
					Create Machine
					</div></div>}
					<div className="innersidenav">
					MENU2
					</div>
					<div className="innersidenav">
					MENU3
					</div>
					<div className="innersidenav">
					MENU4
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
  mapDispatchToProps
)(Header);