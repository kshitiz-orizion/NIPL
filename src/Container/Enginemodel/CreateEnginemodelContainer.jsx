import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import history from '../../Inits/history';
import { createEnginemodel, getEnginemodelByID, editEnginemodel} from '../../Store/Actions/engine-model/engine-model.action';
import CreateEnginemodel from '../../Component/Enginemodel/CreateEnginemodel';
class CreateEnginemodelsContainer extends Component {
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
      this.getEnginemodel(params.id);
    }
  }
  getEnginemodel = async (conditionID) => {
    try {
      const conditionToBeEdit =await this.props.getEnginemodelByID(conditionID);
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
      return <h1>Loading...</h1>
    }
    if(this.props.isCreating){
      return <h1>Creating...</h1>
    }
    const { createStudent, editStudent } = this.props;
    return (
      <div style={{marginTop:'-40px',backgroundColor:'#eee',width:'100%',height:'auto'}}>
      <section>
        <CreateEnginemodel
          onCreate={createEnginemodel}
          onEdit={editEnginemodel}
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
  createEnginemodel, 
  getEnginemodelByID, 
  editEnginemodel,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateEnginemodelsContainer);