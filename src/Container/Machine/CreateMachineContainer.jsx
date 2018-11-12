import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import history from '../../Inits/history';
import { createMachine, getMachineByID, editMachine} from '../../Store/Actions/machine/machine.action';
import {getCategorys} from '../../Store/Actions/category/category.action';
import {getSubcategorys} from '../../Store/Actions/sub-category/sub-category.action';
import {getEnginebrands} from '../../Store/Actions/engine-brand/engine-brand.action';
import {getConditions} from '../../Store/Actions/condition/condition.action';
import {getEnginemodels} from '../../Store/Actions/engine-model/engine-model.action';
import {getMachinemodels} from '../../Store/Actions/machine-model/machine-model.action';
import {getMachinebrands} from '../../Store/Actions/machine-brand/machine-brand.action';
import {getStatesites} from '../../Store/Actions/state-site/state-site.action';
import {getSites} from '../../Store/Actions/site/site.action';
import CreateMachine from '../../Component/Machine/CreateMachine';
class CreateMachinesContainer extends Component {
  state = {
    mode:'CREATE',
    machineToBeEdit: null,
  };
  componentWillMount() {
    const { params } = this.props.match;
    this.setState({
      mode: params && params.id ? 'EDIT' : 'CREATE',
    });
    this.getMachineAttributes();
    if(params.id){
      this.getMachine(params.id);
    }
  }
  getMachineAttributes=async()=>{
    const { getCategorys,getSubcategorys,getEnginebrands,getConditions,getEnginemodels,getMachinemodels,getMachinebrands,getStatesites} = this.props;
    //await Promise.all([getCategorys(),getSubcategorys(),getEnginebrands(),getConditions(),getEnginemodels(),getMachinemodels(),getMachinebrands(),getStateSites]);
  }
  getMachine = async (machineID) => {
    try {
      const machineToBeEdit =await this.props.getMachineByID(machineID);
      this.setState(prevState => {
        return {
          ...prevState,
          machineToBeEdit,
        };
      });
    } catch (error) {
      history.push('/');
    }
  };
  render() {
    if (this.state.mode === 'EDIT' && !this.state.machineToBeEdit) {
      return <h1>Loading...</h1>
    }
    if(this.props.isCreating){
      return <h1>Creating...</h1>
    }
    const { createStudent, editStudent } = this.props;
    return (
      <div style={{marginTop:'-40px',backgroundColor:'#eee',width:'100%',height:'auto'}}>
      <section>
        <CreateMachine
          onCreate={createMachine}
          onEdit={editMachine}
          initialValues={this.state.machineToBeEdit}
          mode={this.state.mode}
        />
      </section>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isCreating: state.machine.isCreating,
    subcategory: state.subcategory.list,
    category:state.category.list,
    enginebrand:state.enginebrand.list,
    enginemodel:state.enginemodel.list,
    condition:state.condition.list,
    machinemodel:state.machinemodel.list,
    machinebrand:state.machinebrand.list
  };
};
const mapDispatchToProps = {
  createMachine, 
  getMachineByID, 
  editMachine,
  getCategorys,
  getSubcategorys,
  getEnginebrands,
  getConditions,
  getEnginemodels,
  getMachinemodels,
  getMachinebrands,
  getStatesites
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateMachinesContainer);