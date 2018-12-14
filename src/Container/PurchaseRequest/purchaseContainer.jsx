import React,{Component} from 'react';
import { connect } from 'react-redux';
import {getMachineByID,purchaseCounter,purchaseCounterDecrease} from '../../Store/Actions/machine/machine.action';
import {getVehicleByID} from '../../Store/Actions/vehicle/vehicle.action';
import ListPurchase from '../../Component/PurchaseRequest/purchase';
import PageLoader from '../Common/pageloader';
class PurchaseContainer extends Component{
	componentWillMount(){
		this.setState({
			waiting:true
		})
		this.getPurchase();
		this.setState({
			machinesList:[],
			vehiclesList:[]
		});
	}
	getPurchase=async()=>{
		var machineIds=JSON.parse(localStorage['cart'])['machines'];
		var vehicleIds=JSON.parse(localStorage['cart'])['vehicles'];
		var machineList=[];
		var vehicleList=[];
		for(let key in machineIds){
			await this.props.getMachineByID(key).then(function(res){
				machineList.push(res);
			});
		}
		for(let key in vehicleIds){
			await this.props.getVehicleByID(key).then(function(res){
				vehicleList.push(res);
			});
		}
		this.setState({
			machinesList:machineList,
			vehiclesList:vehicleList,
			waiting:false
		});
	}
	render(){
	const {machinesList,vehiclesList}=this.state;
	const {purchaseCounter,purchaseCounterDecrease}=this.props;
	const purchaseInfo = {purchaseCounter,purchaseCounterDecrease,machinesList,vehiclesList};
	if(this.state.waiting){
		return (
				<PageLoader/>
			)
	}
	return (
		<div>
			<section className="container-fluid" style={{marginTop:'-114px'}}>
				<ListPurchase purchaseInfo={purchaseInfo} />
			</section>
		</div>
		)
	}
}

const mapStateToProps = state => {
  return {
  };
};
const mapDispatchToProps = {
   getMachineByID,
   getVehicleByID,
   purchaseCounter,
   purchaseCounterDecrease
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PurchaseContainer);