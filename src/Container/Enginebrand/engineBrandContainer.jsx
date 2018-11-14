import React,{Component} from 'react';
import { connect } from 'react-redux';
import { getEnginebrands,deleteEnginebrand} from '../../Store/Actions/engine-brand/engine-brand.action';
import { Link } from 'react-router-dom';
import ListEngineBrand from '../../Component/Enginebrand/enginebrands';
import {Header} from '../Common/Header';
class EngineBrandContainer extends Component{
	componentWillMount(){
	}
	render(){
	const {enginebrands,deleteEngineBrand,getEngineBrands}=this.props;
	const enginebrandInfo = {enginebrands,deleteEngineBrand,getEngineBrands};
	return (
		<div>
		<Header/>
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