import React,{Component} from 'react';
import { connect } from 'react-redux';
import { getMachinebrands,deleteMachinebrand} from '../../Store/Actions/machine-brand/machine-brand.action';
import ListMachineBrand from '../../Component/Machinebrand/machinebrands';
import PageLoader from '../Common/pageloader';
class MachineBrandContainer extends Component{
	componentWillMount(){
		this.props.getMachinebrands();
	}
	render(){
	const {machinebrands,deleteMachinebrand,getMachinebrands,isFetching}=this.props;
	const machinebrandInfo = {machinebrands,deleteMachinebrand,getMachinebrands};
	if(isFetching){
		return <PageLoader/>
	}
	return (
		<div>
			<section className="container-fluid" style={{marginTop:'-114px'}}>
				<ListMachineBrand machinebrandInfo={machinebrandInfo} />
			</section>
		</div>
		)
	}
}

const mapStateToProps = state => {
  return {
    machinebrands:state.machinebrand.list,
    isFetching:state.machinebrand.isFetching
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