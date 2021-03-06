import React,{Component} from 'react';
import { connect } from 'react-redux';
import { getEnginemodels,deleteEnginemodel} from '../../Store/Actions/engine-model/engine-model.action';
import { getEnginebrandByID} from '../../Store/Actions/engine-brand/engine-brand.action';
import ListEngineModel from '../../Component/Enginemodel/enginemodels';
import PageLoader from '../Common/pageloader';
class EngineModelContainer extends Component{
	componentWillMount(){
		this.getEnginemodels();
		this.setState({
			waiting:true
		});
	}
	getEnginemodels=async()=>{
		await this.props.getEnginemodels();
		this.setState({
			waiting:false
		});
	}
	render(){
	const {enginemodels,deleteEnginemodel,getEnginemodels,isFetching}=this.props;
	const enginemodelInfo = {enginemodels,deleteEnginemodel,getEnginemodels};
	if(isFetching || this.state.waiting){
		return (
				<PageLoader/>
			)
	}
	return (
		<div>
			<section className="container-fluid" style={{marginTop:'-114px'}}>
				<ListEngineModel enginemodelInfo={enginemodelInfo} />
			</section>
		</div>
		)
	}
}

const mapStateToProps = state => {
  return {
    enginemodels:state.enginemodel.list,
    isFetching:state.enginemodel.isFetching
  };
};
const mapDispatchToProps = {
   getEnginemodels,
   deleteEnginemodel,
   getEnginebrandByID
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EngineModelContainer);