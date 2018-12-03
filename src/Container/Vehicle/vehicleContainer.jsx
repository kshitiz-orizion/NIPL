import React,{Component} from 'react';
import { connect } from 'react-redux';
import { getVehicles,deleteVehicle} from '../../Store/Actions/vehicle/vehicle.action';
import {getVehicleMakeByID} from '../../Store/Actions/vehicle-component/vehicle-component.action';
import ListVehicle from '../../Component/Vehicle/vehicles';
import PageLoader from '../Common/pageloader';
class VehicleContainer extends Component{
	componentWillMount(){
		this.getVehicles();
		this.setState({
			waiting:true
		});
	}
	getVehicles=async()=>{
		await this.props.getVehicles();
		this.setState({
			waiting:false
		})
	}
	render(){
	const {vehicles,deleteVehicle,getVehicles,isFetching}=this.props;
	const vehicleInfo = {vehicles,deleteVehicle,getVehicles};
	if(isFetching || this.state.waiting){
		return(
			<PageLoader/>
			)
	}
	return (
		<div>
			<section className="container-fluid" style={{marginTop:'-114px'}} >
				<ListVehicle vehicleInfo={vehicleInfo} />
			</section>
		</div>
		)
	}
}

const mapStateToProps = state => {
  return {
  	isFetching:state.vehicle.isFetching,
    vehicles:state.vehicle.list
  };
};
const mapDispatchToProps = {
   getVehicles,
   deleteVehicle,
   getVehicleMakeByID
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VehicleContainer);