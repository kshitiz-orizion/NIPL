import React,{Component} from 'react';
import { connect } from 'react-redux';
import { getDistrictsites,deleteDistrictsite} from '../../Store/Actions/district-site/district-site.action';
import ListDistrictSite from '../../Component/Districtsite/districtsites';
class DistrictSiteContainer extends Component{
	componentWillMount(){
	}
	render(){
	const {districtsites,deleteDistrictSite,getDistrictSites}=this.props;
	const districtsiteInfo = {districtsites,deleteDistrictSite,getDistrictSites};
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
    districtsites:state.districtsite.list
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