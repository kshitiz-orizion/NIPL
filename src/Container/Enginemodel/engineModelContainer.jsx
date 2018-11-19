import React,{Component} from 'react';
import { connect } from 'react-redux';
import { getEnginemodels,deleteEnginemodel} from '../../Store/Actions/engine-model/engine-model.action';
import ListEngineModel from '../../Component/Enginemodel/enginemodels';
class EngineModelContainer extends Component{
	componentWillMount(){
	}
	render(){
	const {enginemodels,deleteEngineModel,getEngineModels}=this.props;
	const enginemodelInfo = {enginemodels,deleteEngineModel,getEngineModels};
	return (
		<div>
			<section className="container-fluid" style={{marginTop:'-100px'}}>
				<ListEngineModel enginemodelInfo={enginemodelInfo} />
			</section>
		</div>
		)
	}
}

const mapStateToProps = state => {
  return {
    enginemodels:state.enginemodel.list
  };
};
const mapDispatchToProps = {
   getEnginemodels,
   deleteEnginemodel
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EngineModelContainer);