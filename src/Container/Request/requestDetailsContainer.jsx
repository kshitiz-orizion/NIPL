import React,{Component} from 'react';
import { connect } from 'react-redux';
import { getConditions,deleteCondition} from '../../Store/Actions/condition/condition.action';
import ListRequestDetail from '../../Component/Request/requestDetail';
import PageLoader from '../Common/pageloader';
class RequestDetailsContainer extends Component{
    componentWillMount(){
        this.props.getConditions();
    }
    render(){
        const {conditions,deleteCondition,getConditions,isFetching}=this.props;
        const requestInfo = {conditions,deleteCondition,getConditions};
        if(isFetching){
            return <PageLoader/>
        }
        return (
            <div>
                <section className="container-fluid" style={{marginTop:'-114px'}}>
                    <ListRequestDetail conditionInfo={requestInfo}/>
                </section>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        conditions:state.condition.list,
        isFetching:state.condition.isFetching
    }
};
const mapDispatchToProps = {
    getConditions,
    deleteCondition,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RequestDetailsContainer);