import React,{Component} from 'react';
import { connect } from 'react-redux';
import { getMachinebrands,deleteMachinebrand} from '../../Store/Actions/machine-brand/machine-brand.action';
import { Link } from 'react-router-dom';
import ListMachineBrand from '../../Component/Machinebrand/machinebrands';
import {Header} from '../Common/Header';
class MachineBrandContainer extends Component{
	componentWillMount(){
	}
	render(){
	const {machinebrands,deleteMachineBrand,getMachineBrands}=this.props;
	const machinebrandInfo = {machinebrands,deleteMachineBrand,getMachineBrands};
	return (
		<div>
		<Header/>
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