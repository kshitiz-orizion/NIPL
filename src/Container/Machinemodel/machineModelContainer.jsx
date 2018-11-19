import React,{Component} from 'react';
import { connect } from 'react-redux';
import { getMachinemodels,deleteMachinemodel} from '../../Store/Actions/machine-model/machine-model.action';
import ListMachineModel from '../../Component/Machinemodel/machinemodels';
class MachineModelContainer extends Component{
	componentWillMount(){
	}
	render(){
	const {machinemodels,deleteMachinemodel,getMachinemodels}=this.props;
	const machinemodelInfo = {machinemodels,deleteMachinemodel,getMachinemodels};
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
    machinemodels:state.machinemodel.list
  };
};
const mapDispatchToProps = {
   getMachinemodels,
   deleteMachinemodel
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MachineModelContainer);