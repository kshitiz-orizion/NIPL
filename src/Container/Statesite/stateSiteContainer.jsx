import React,{Component} from 'react';
import { connect } from 'react-redux';
import { getStatesites,deleteStatesite} from '../../Store/Actions/state-site/state-site.action';
import { Link } from 'react-router-dom';
import ListstateSite from '../../Component/Statesite/statesites';
import {Header} from '../Common/Header';
class stateSiteContainer extends Component{
	componentWillMount(){
	}
	render(){
	const {statesites,deletestateSite,getstateSites}=this.props;
	const statesiteInfo = {statesites,deletestateSite,getstateSites};
	return (
		<div>
		<Header/>
			<section className="container-fluid" style={{marginTop:'-100px'}}>
				<ListstateSite statesiteInfo={statesiteInfo} />
			</section>
		</div>
		)
	}
}

const mapStateToProps = state => {
  return {
    statesites:state.statesite.list
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