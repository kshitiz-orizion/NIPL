import React,{Component} from 'react';
import { connect } from 'react-redux';
import { getDistrictsites,deleteDistrictsite} from '../../Store/Actions/district-site/district-site.action';
import { Link } from 'react-router-dom';
import ListDistrictSite from '../../Component/Districtsite/districtsites';
import {Header} from '../Common/Header';
class DistrictSiteContainer extends Component{
	componentWillMount(){
	}
	render(){
	const {districtsites,deleteDistrictSite,getDistrictSites}=this.props;
	const districtsiteInfo = {districtsites,deleteDistrictSite,getDistrictSites};
	return (
		<div>
		<Header/>
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