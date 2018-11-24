import React,{Component} from 'react';
import { connect } from 'react-redux';
import { getMachinemodels,deleteMachinemodel} from '../../Store/Actions/machine-model/machine-model.action';
import { getMachinebrandByID} from '../../Store/Actions/machine-brand/machine-brand.action';
import ListMachineModel from '../../Component/Machinemodel/machinemodels';
import PageLoader from '../Common/pageloader';
class MachineModelContainer extends Component{
	componentWillMount(){
		this.getMachinemodels();
		this.setState({
			waiting:true
		})
	}
	getMachinemodels=async()=>{
		await this.props.getMachinemodels();
		for(var i=0;i<this.props.machinemodels.length;i++){
			var machinebrand=await this.props.getMachinebrandByID(this.props.machinemodels[i].brand_id);
			this.props.machinemodels[i].machinebrandname=machinebrand.name;
		}
		this.setState({
			waiting:false
		})
	}
	render(){
	const {machinemodels,deleteMachinemodel,getMachinemodels,isFetching}=this.props;
	const machinemodelInfo = {machinemodels,deleteMachinemodel,getMachinemodels};
	if(isFetching || this.state.waiting){
		return (
				<PageLoader/>
			)
	}
	return (
		<div>
			<section className="container-fluid" style={{marginTop:'-100px'}}>
				<ListMachineModel machinemodelInfo={machinemodelInfo} />
			</section>
		</div>
		)
	}
}

const mapStateToProps = state => {
  return {
    machinemodels:state.machinemodel.list,
    isFetching:state.machinemodel.isFetching
  };
};
const mapDispatchToProps = {
   getMachinemodels,
   deleteMachinemodel,
   getMachinebrandByID
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MachineModelContainer);