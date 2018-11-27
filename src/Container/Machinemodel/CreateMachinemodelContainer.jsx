import React, { Component } from 'react';
import { connect } from 'react-redux';
import history from '../../Inits/history';
import { createMachinemodel, getMachinemodelByID, editMachinemodel} from '../../Store/Actions/machine-model/machine-model.action';
import { getMachinebrands,getMachinebrandByID} from '../../Store/Actions/machine-brand/machine-brand.action';
import CreateMachinemodel from '../../Component/Machinemodel/CreateMachinemodel';
import PageLoader from '../Common/pageloader';
class CreateMachinemodelContainer extends Component {
  state = {
    mode:'CREATE',
    machinemodelToBeEdit: null,
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
  getMachinemodel = async (machinemodelID) => {
    try {
      const machinemodelToBeEdit =await this.props.getMachinemodelByID(machinemodelID);
      const machinebrand=await this.props.getMachinebrandByID(machinemodelToBeEdit.brand_id);
      machinemodelToBeEdit['machinebrand']=machinebrand;
      this.setState(prevState => {
        return {
          ...prevState,
          machinemodelToBeEdit,
        };
      });
    } catch (error) {
      history.push('/machinemodels');
    }
  };
  render() {
    if (this.state.mode === 'EDIT' && !this.state.machinemodelToBeEdit) {
      return <PageLoader/>
    }
    if(this.props.isCreating){
      return <PageLoader/>
    }
    const { createMachinemodel, editMachinemodel,machinebrand,errorList } = this.props;
    const machinebrandInfo={machinebrand,errorList};
    return (
      <div style={{marginTop:'-40px',backgroundColor:'#eee',width:'100%',height:'auto'}}>
      <section>
        <CreateMachinemodel
          onCreate={createMachinemodel}
          onEdit={editMachinemodel}
          initialValues={this.state.machinemodelToBeEdit}
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
    isCreating: state.machinemodel.isCreating,
    machinebrand:state.machinebrand.list,
    errorList:state.machinemodel.errorList
  };
};
const mapDispatchToProps = {
  createMachinemodel, 
  getMachinemodelByID, 
  editMachinemodel,
  getMachinebrands,
  getMachinebrandByID
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateMachinemodelContainer);