import React,{Component} from 'react';
import { connect } from 'react-redux';
import { getMachinemodels,deleteMachinemodel} from '../../Store/Actions/machine-model/machine-model.action';
import { Link } from 'react-router-dom';
import ListMachineModel from '../../Component/Machinemodel/machinemodels';
import {Header} from '../Common/Header';
class MachineModelContainer extends Component{
	componentWillMount(){
	}
	render(){
	const {machinemodels,deleteMachineModel,getMachineModels}=this.props;
	const machinemodelInfo = {machinemodels,deleteMachineModel,getMachineModels};
	return (
		<div>
		<Header/>
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