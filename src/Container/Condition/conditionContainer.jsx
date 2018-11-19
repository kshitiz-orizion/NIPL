import React,{Component} from 'react';
import { connect } from 'react-redux';
import { getConditions,deleteCondition} from '../../Store/Actions/condition/condition.action';
import ListCondition from '../../Component/Condition/conditions';
import {Header} from '../Common/Header';
class ConditionContainer extends Component{
	componentWillMount(){
	}
	render(){
	const {conditions,deleteCondition,getConditions}=this.props;
	const conditionInfo = {conditions,deleteCondition,getConditions};
	return (
		<div>
		<Header/>
			<section className="container-fluid" style={{marginTop:'-100px'}}>
				<ListCondition conditionInfo={conditionInfo} />
			</section>
		</div>
		)
	}
}

const mapStateToProps = state => {
  return {
    conditions:state.condition.list
  };
};
const mapDispatchToProps = {
   getConditions,
   deleteCondition
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConditionContainer);