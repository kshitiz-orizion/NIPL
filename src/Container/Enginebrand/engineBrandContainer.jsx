import React,{Component} from 'react';
import { connect } from 'react-redux';
import { getEnginebrands,deleteEnginebrand} from '../../Store/Actions/engine-brand/engine-brand.action';
import ListEngineBrand from '../../Component/Enginebrand/enginebrands';
import PageLoader from '../Common/pageloader';
class EngineBrandContainer extends Component{
	componentWillMount(){
		this.getEnginebrands();
	}
	getEnginebrands=async()=>{
		await this.props.getEnginebrands();
	}
	render(){
	const {enginebrands,deleteEngineBrand,getEngineBrands,isFetching}=this.props;
	const enginebrandInfo = {enginebrands,deleteEngineBrand,getEngineBrands};
	if(isFetching){
		return <PageLoader/>
	}
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
    enginebrands:state.enginebrand.list,
    isFetching:state.enginebrand.isFetching
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