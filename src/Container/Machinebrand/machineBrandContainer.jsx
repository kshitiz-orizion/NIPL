import React,{Component} from 'react';
import { connect } from 'react-redux';
import { getMachinebrands,deleteMachinebrand} from '../../Store/Actions/machine-brand/machine-brand.action';
import ListMachineBrand from '../../Component/Machinebrand/machinebrands';
class MachineBrandContainer extends Component{
	componentWillMount(){
	}
	render(){
	const {machinebrands,deleteMachinebrand,getMachinebrands}=this.props;
	const machinebrandInfo = {machinebrands,deleteMachinebrand,getMachinebrands};
	return (
		<div>
			<section className="container-fluid" style={{marginTop:'-100px'}}>
				<ListMachineBrand machinebrandInfo={machinebrandInfo} />
			</section>
		</div>
		)
	}
}

const mapStateToProps = state => {
  return {
    machinebrands:state.machinebrand.list
  };
};
const mapDispatchToProps = {
   getMachinebrands,
   deleteMachinebrand
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MachineBrandContainer);