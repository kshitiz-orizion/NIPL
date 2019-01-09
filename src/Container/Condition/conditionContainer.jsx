import React,{Component} from 'react';
import { connect } from 'react-redux';
import { getConditions,deleteCondition} from '../../Store/Actions/condition/condition.action';
import ListCondition from '../../Component/Condition/conditions';
import PageLoader from '../Common/pageloader';
class ConditionContainer extends Component{
	componentWillMount(){
		this.props.getConditions();
	}
	render(){
	const {conditions,deleteCondition,getConditions,isFetching}=this.props;
	const conditionInfo = {conditions,deleteCondition,getConditions};
	if(isFetching){
		return <PageLoader/>
	}
	return (
		<div>
			<section className="container-fluid" style={{marginTop:'-114px'}}>
				<ListCondition conditionInfo={conditionInfo} />
			</section>
		</div>
		)
	}
}

const mapStateToProps = state => {
  return {
    conditions:state.condition.list,
    isFetching:state.condition.isFetching
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