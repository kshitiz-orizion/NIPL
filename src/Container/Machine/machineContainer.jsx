import React,{Component} from 'react';
import { connect } from 'react-redux';
import { getMachines,deleteMachine} from '../../Store/Actions/machine/machine.action';
import {getMachinemodelByID} from '../../Store/Actions/machine-model/machine-model.action';
import {getMachinebrandByID} from '../../Store/Actions/machine-brand/machine-brand.action';
import ListMachine from '../../Component/Machine/machines';
import PageLoader from '../Common/pageloader';
class MachineContainer extends Component{
	componentWillMount(){
		this.getMachines();
		this.setState({
			waiting:true
		})
	}
	getMachines=async()=>{
		await this.props.getMachines();
		for(var i=0;i<this.props.machines.length;i++){
			const machinebrand=await this.props.getMachinebrandByID(this.props.machines[i].brand_id);
			const machinemodel=await this.props.getMachinemodelByID(this.props.machines[i].model_id);
			this.props.machines[i].machinebrandname=machinebrand.name;
			this.props.machines[i].machinemodelname=machinemodel.name
		}
		this.setState({
			waiting:false
		})
	}
	render(){
	const {machines,deleteMachine,getMachines,isFetching}=this.props;
	const machineInfo = {machines,deleteMachine,getMachines};
	if(isFetching || this.state.waiting){
		return(
			<PageLoader/>
			)
	}
	return (
		<div>
			<section className="container-fluid" style={{marginTop:'-114px'}} >
				<ListMachine machineInfo={machineInfo} />
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
   getMachines,
   deleteMachine,
   getMachinebrandByID,
   getMachinemodelByID
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MachineContainer);