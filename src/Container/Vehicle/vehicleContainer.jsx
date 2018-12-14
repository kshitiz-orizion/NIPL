import React,{Component} from 'react';
import { connect } from 'react-redux';
import { getVehicles,deleteVehicle,searchVehicles,filterVehicles} from '../../Store/Actions/vehicle/vehicle.action';
import {getVehicleMakeByID,
		getVehicleType,	
		getVehicleModel,
		getVehicleStatus,
		getVehicleOwnership,
		getVehicleColor,
		getVehicleBody,
		} from '../../Store/Actions/vehicle-component/vehicle-component.action';
import {purchaseCounter,purchaseCounterDecrease} from '../../Store/Actions/machine/machine.action';
import {getEnginemodels} from '../../Store/Actions/engine-model/engine-model.action';
import {getSites} from '../../Store/Actions/site/site.action';
import ListVehicle from '../../Component/Vehicle/vehicles';
import PageLoader from '../Common/pageloader';
class VehicleContainer extends Component{
	componentWillMount(){
		this.getVehicles();
		this.setState({
			pageCount:'',
			activePage:0
		})
	}
	getVehicles=async()=>{
		const {getVehicles,getSites,getVehicleType,getVehicleModel,getVehicleStatus,getVehicleOwnership,getVehicleColor,getVehicleBody,getEnginemodels}=this.props;
		await Promise.all([getVehicles(),getSites(),getVehicleType(),getVehicleModel(),getVehicleStatus(),getVehicleOwnership(),getVehicleColor(),getVehicleBody(),getEnginemodels()])
		this.getPages();
	}
	getPages=()=>{

			var machineCount=this.props.pageCount;
				var pageCount=machineCount/50;
				var pageRemainder=machineCount%50;
				if(pageRemainder!==0){
					pageCount=Math.floor(pageCount)+1;
				}
				var totalPage=[];
				for(var i=0;i<pageCount;i++){
					totalPage.push(i);
				}
				this.setState({
					pageCount:totalPage,
					activePage:1
				})
	}
	activePage=async (i)=>{
		await this.props.getVehicles();
		this.setState({
			activePage:i
		})
	}
	render(){
		var machineCount=this.props.pageCount;
				var pageCount=machineCount/50;
				var pageRemainder=machineCount%50;
				if(pageRemainder!==0){
					pageCount=Math.floor(pageCount)+1;
				}
				var totalPage=[];
				for(var i=0;i<pageCount;i++){
					totalPage.push(i);
				}
	const {purchaseCounter,purchaseCounterDecrease,vehicles,deleteVehicle,getVehicles,isFetching,searchVehicles,sites,vehicleType,ownership,body,color,model,status,engineModel,filterVehicles}=this.props;
	const vehicleInfo = {purchaseCounter,purchaseCounterDecrease,engineModel,vehicleType,ownership,body,color,model,status,sites,vehicles,deleteVehicle,getVehicles,searchVehicles,getPages:this.getPages,filterVehicles};
	if(isFetching){
		return(
			<PageLoader/>
			)
	}
	return (
		<div>
			<section className="container-fluid" style={{marginTop:'-114px'}} >
				<ListVehicle vehicleInfo={vehicleInfo} />
				<nav aria-label="Page navigation" style={{'display':'flex','justifyContent':'center'}}>
						  <ul className="pagination">
						  	{totalPage.map((page,i)=>(
						  			<li key={i}className={'page-item'+(this.state.activePage-1===i?" active":'')} onClick={()=>this.activePage(i+1)}><div className="page-link">{i+1}</div></li>
						  		))}
						  </ul>
				</nav>
			</section>
		</div>
		)
	}
}

const mapStateToProps = state => {
  return {
  	isFetching:state.vehicle.isFetching,
    vehicles:state.vehicle.list,
    pageCount:state.vehicle.pageCount,
    sites:state.site.list,
    vehicleType:state.vehicleComponent.type,
    ownership:state.vehicleComponent.ownership,
    body:state.vehicleComponent.body,
    model:state.vehicleComponent.model,
    status:state.vehicleComponent.status,
    color:state.vehicleComponent.color,
    engineModel:state.enginemodel.list
  };
};
const mapDispatchToProps = {
   getVehicles,
   deleteVehicle,
   getVehicleMakeByID,
   searchVehicles,
   getSites,
   getVehicleType,
   getVehicleModel,
   getVehicleStatus,
   getVehicleOwnership,
   getVehicleColor,
   getVehicleBody,
   getEnginemodels,
   filterVehicles,
   purchaseCounter,
   purchaseCounterDecrease
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VehicleContainer);