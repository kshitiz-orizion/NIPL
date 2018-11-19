import React,{Component} from 'react';
import { connect } from 'react-redux';
import { getEnginebrands,deleteEnginebrand} from '../../Store/Actions/engine-brand/engine-brand.action';
import ListEngineBrand from '../../Component/Enginebrand/enginebrands';
class EngineBrandContainer extends Component{
	componentWillMount(){
	}
	render(){
	const {enginebrands,deleteEngineBrand,getEngineBrands}=this.props;
	const enginebrandInfo = {enginebrands,deleteEngineBrand,getEngineBrands};
	return (
		<div>
			<section className="container-fluid" style={{marginTop:'-100px'}}>
				<ListEngineBrand enginebrandInfo={enginebrandInfo} />
			</section>
		</div>
		)
	}
}

const mapStateToProps = state => {
  return {
    enginebrands:state.enginebrand.list
  };
};
const mapDispatchToProps = {
   getEnginebrands,
   deleteEnginebrand
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EngineBrandContainer);