import React,{Component} from 'react';
import { connect } from 'react-redux';
import { getSites,deleteSite} from '../../Store/Actions/site/site.action';
import ListSite from '../../Component/Site/sites';
import PageLoader from '../Common/pageloader';
class SiteContainer extends Component{
	componentWillMount(){
	}
	render(){
	const {sites,deleteSite,getSites,isFetching}=this.props;
	const machineInfo = {sites,deleteSite,getSites};
	if(isFetching){
		return <PageLoader/>
	}
	return (
		<div>
			<section className="container-fluid" style={{marginTop:'-114px'}}>
				<ListSite machineInfo={machineInfo} />
			</section>
		</div>
		)
	}
}

const mapStateToProps = state => {
  return {
    sites:state.site.list,
    isFetching:state.site.isFetching
  };
};
const mapDispatchToProps = {
   getSites,
   deleteSite
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SiteContainer);