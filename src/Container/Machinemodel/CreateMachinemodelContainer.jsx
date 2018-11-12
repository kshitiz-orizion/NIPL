import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import history from '../../Inits/history';
import { createMachinemodel, getMachinemodelByID, editMachinemodel} from '../../Store/Actions/machine-model/machine-model.action';
import CreateMachinemodel from '../../Component/Machinemodel/CreateMachinemodel';
class CreateMachinemodelContainer extends Component {
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
      this.getMachinemodel(params.id);
    }
  }
  getMachinemodel = async (conditionID) => {
    try {
      const conditionToBeEdit =await this.props.getMachinemodelByID(conditionID);
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
        <CreateMachinemodel
          onCreate={createMachinemodel}
          onEdit={editMachinemodel}
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
  createMachinemodel, 
  getMachinemodelByID, 
  editMachinemodel,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateMachinemodelContainer);