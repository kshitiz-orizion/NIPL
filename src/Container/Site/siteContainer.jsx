import React,{Component} from 'react';
import { connect } from 'react-redux';
import { getSites,deleteSite} from '../../Store/Actions/site/site.action';
import { Link } from 'react-router-dom';
import ListSite from '../../Component/Site/sites';
import {Header} from '../Common/Header';
class SiteContainer extends Component{
	componentWillMount(){
	}
	render(){
	const {sites,deleteSite,getSites}=this.props;
	const machineInfo = {sites,deleteSite,getSites};
	return (
		<div>
		<Header/>
			<section className="container-fluid" style={{marginTop:'-100px'}}>
				<ListSite machineInfo={machineInfo} />
			</section>
		</div>
		)
	}
}

const mapStateToProps = state => {
  return {
    sites:state.site.list
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