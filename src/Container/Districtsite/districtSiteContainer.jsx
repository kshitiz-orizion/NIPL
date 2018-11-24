import React,{Component} from 'react';
import { connect } from 'react-redux';
import { getDistrictsites,deleteDistrictsite} from '../../Store/Actions/district-site/district-site.action';
import ListDistrictSite from '../../Component/Districtsite/districtsites';
import PageLoader from '../Common/pageloader';
class DistrictSiteContainer extends Component{
	componentWillMount(){
		this.props.getDistrictsites();
	}
	render(){
	const {districtsites,deleteDistrictSite,getDistrictSites,isFetching}=this.props;
	const districtsiteInfo = {districtsites,deleteDistrictSite,getDistrictSites};
	if(isFetching){
		return <PageLoader/>
	}
	return (
		<div>
			<section className="container-fluid" style={{marginTop:'-100px'}}>
				<ListDistrictSite districtsiteInfo={districtsiteInfo} />
			</section>
		</div>
		)
	}
}

const mapStateToProps = state => {
  return {
    districtsites:state.districtsite.list,
    isFetching:state.districtsite.list
  };
};
const mapDispatchToProps = {
   getDistrictsites,
   deleteDistrictsite
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DistrictSiteContainer);