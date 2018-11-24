import React, { Component } from 'react';
import { connect } from 'react-redux';
import history from '../../Inits/history';
import { createCondition, getConditionByID, editCondition} from '../../Store/Actions/condition/condition.action';
import CreateCondition from '../../Component/Condition/CreateCondition';
import PageLoader from '../Common/pageloader';
class CreateConditionsContainer extends Component {
  state = {
    mode:'CREATE',
    conditionToBeEdit: null,
  };
  componentWillMount() {
    const { params } = this.props.match;
    this.setState({
      mode: params && params.id ? 'EDIT' : 'CREATE',
    });
    if(params.id){
      this.getCondition(params.id);
    }
  }
  getCondition = async (conditionID) => {
    try {
      const conditionToBeEdit =await this.props.getConditionByID(conditionID);
      this.setState(prevState => {
        return {
          ...prevState,
          conditionToBeEdit,
        };
      });
    } catch (error) {
      history.push('/');
    }
  };
  render() {
    if (this.state.mode === 'EDIT' && !this.state.conditionToBeEdit) {
      return <PageLoader/>
    }
    if(this.props.isCreating){
      return <PageLoader/>
    }
    const { createCondition, editCondition } = this.props;
    return (
      <div style={{marginTop:'-40px',backgroundColor:'#eee',width:'100%',height:'auto'}}>
      <section>
        <CreateCondition
          onCreate={createCondition}
          onEdit={editCondition}
          initialValues={this.state.conditionToBeEdit}
          mode={this.state.mode}
        />
      </section>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isCreating: state.condition.isCreating,
  };
};
const mapDispatchToProps = {
  createCondition, 
  getConditionByID, 
  editCondition,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateConditionsContainer);