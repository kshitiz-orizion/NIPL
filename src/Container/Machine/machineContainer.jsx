import React,{Component} from 'react';
import { connect } from 'react-redux';
import { getMachines,deleteMachine} from '../../Store/Actions/machine/machine.action';
import { Link } from 'react-router-dom';
import ListMachine from '../../Component/Machine/machines';
import {Header} from '../Common/Header';
class MachineContainer extends Component{
	componentWillMount(){
	}
	render(){
	const {machines,deleteMachine,getMachines}=this.props;
	const machineInfo = {machines,deleteMachine,getMachines};
	return (
		<div>
		<Header/>
			<section className="container-fluid" style={{marginTop:'-100px'}}>
				<ListMachine machineInfo={machineInfo} />
			</section>
		</div>
		)
	}
}

const mapStateToProps = state => {
  return {
    machines:state.machine.list
  };
};
const mapDispatchToProps = {
   getMachines,
   deleteMachine
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MachineContainer);