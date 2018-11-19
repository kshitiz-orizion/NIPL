import React, { Component } from 'react';
import { connect } from 'react-redux';
import history from '../../Inits/history';
import { createMachinemodel, getMachinemodelByID, editMachinemodel} from '../../Store/Actions/machine-model/machine-model.action';
import { getMachinebrands} from '../../Store/Actions/machine-brand/machine-brand.action';
import CreateMachinemodel from '../../Component/Machinemodel/CreateMachinemodel';
class CreateMachinemodelContainer extends Component {
  state = {
    mode:'CREATE',
    conditionToBeEdit: null,
  };
  componentWillMount() {
    this.getMachineBrands();
    const { params } = this.props.match;
    this.setState({
      mode: params && params.id ? 'EDIT' : 'CREATE',
    });
    if(params.id){
      this.getMachinemodel(params.id);
    }
  }
  getMachineBrands=async()=>{
    await this.props.getMachinebrands();
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
    const { createMachinemodel, editMachinemodel,machinebrand } = this.props;
    const machinebrandInfo={machinebrand};
    return (
      <div style={{marginTop:'-40px',backgroundColor:'#eee',width:'100%',height:'auto'}}>
      <section>
        <CreateMachinemodel
          onCreate={createMachinemodel}
          onEdit={editMachinemodel}
          initialValues={this.state.conditionToBeEdit}
          mode={this.state.mode}
          machinebrandInfo={machinebrandInfo}
        />
      </section>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isCreating: state.condition.isCreating,
    machinebrand:state.machinebrand.list
  };
};
const mapDispatchToProps = {
  createMachinemodel, 
  getMachinemodelByID, 
  editMachinemodel,
  getMachinebrands
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateMachinemodelContainer);