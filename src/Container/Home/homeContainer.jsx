import React,{Component} from 'react';
import { connect } from 'react-redux';
import {getMachines} from '../../Store/Actions/machine/machine.action';
import HomeComponent from '../../Component/Home/homeComponent';
import PageLoader from '../Common/pageloader';
class HomeContainer extends Component{
	componentWillMount(){
		this.getMachines();
	}
	getMachines=async()=>{
		const {getMachines}=this.props;
		await getMachines();
	}
	render(){
	const {machines,isFetching}=this.props;
	const machineInfo = {machines,isFetching};
	if(isFetching){
		return(
			<PageLoader/>
			)
	}else{
		return (
				<section className="container-fluid" style={{marginTop:'-100px'}}>
					<HomeComponent machineInfo={machineInfo} />
				</section>
			)
		}
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