import React,{Component} from 'react';
import { connect } from 'react-redux';
import HomeComponent from '../../Component/Home/homeComponent';
import {getMachines} from '../../Store/Actions/machine/machine.action';
import PageLoader from '../Common/pageloader';
class HomeContainer extends Component{
	componentWillMount(){
	    // window.bread=[{page:'Home',location:'/today'}]
	    this.getMachines();
	}
	getMachines=async()=>{
		await this.props.getMachines();
	}
	render(){
	const {machines,isFetching}=this.props;
	const machineInfo = {machines,isFetching};
	if(isFetching){
		return(
			<PageLoader/>
			)
	}
	return (
		<div>
			<section className="container-fluid" style={{marginTop:'-100px'}}>
				<HomeComponent machineInfo={machineInfo} />
			</section>
		</div>
		)
	}
}

const mapStateToProps = state => {
  return {
  	isFetching:state.machine.isFetching,
  	machines:state.machine.list
  };
};
const mapDispatchToProps = {
	getMachines
};

export default connect(
  mapStateToProps,  
  mapDispatchToProps
)(HomeContainer);