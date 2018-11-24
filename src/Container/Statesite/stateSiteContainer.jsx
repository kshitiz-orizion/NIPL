import React,{Component} from 'react';
import { connect } from 'react-redux';
import { getStatesites,deleteStatesite} from '../../Store/Actions/state-site/state-site.action';
import ListstateSite from '../../Component/Statesite/statesites';
import PageLoader from '../Common/pageloader';
class stateSiteContainer extends Component{
	componentWillMount(){
	}
	render(){
	const {statesites,deletestateSite,getstateSites,isFetching}=this.props;
	const statesiteInfo = {statesites,deletestateSite,getstateSites};
	if(isFetching){
		return <PageLoader/>
	}
	return (
		<div>
			<section className="container-fluid" style={{marginTop:'-100px'}}>
				<ListstateSite statesiteInfo={statesiteInfo} />
			</section>
		</div>
		)
	}
}

const mapStateToProps = state => {
  return {
    statesites:state.statesite.list,
    isFetching:state.statesite.isFetching
  };
};
const mapDispatchToProps = {
   getStatesites,
   deleteStatesite
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(stateSiteContainer);