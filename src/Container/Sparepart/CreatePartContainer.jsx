import React, { Component } from 'react';
import { connect } from 'react-redux';
import history from '../../Inits/history';
import { createPart, getPartByID, editPart,getRemarks,deleteRemark} from '../../Store/Actions/part/part.action';
import {getMachinemodels,getMachinemodelByID} from '../../Store/Actions/machine-model/machine-model.action';
import CreatePart from '../../Component/Sparepart/CreatePart';
import PageLoader from '../Common/pageloader';
class CreatePartsContainer extends Component {
  state = {
    mode:'CREATE',
    partToBeEdit: null,
  };
  componentWillMount() {
    const { params } = this.props.match;
    this.setState({
      mode: params && params.id ? 'EDIT' : 'CREATE',
    });
    if(this.props.history.location.state!==undefined){
      this.setState({
        editable:this.props.history.location.state.noEdit?false:true
      })
    }
    this.getPartAttributes();
    if(params.id){
      this.getPart(params.id);
    }
  }
  getPartAttributes=async()=>{
    const { getMachinemodels} = this.props;
    await Promise.all([getMachinemodels()]);
  }
  getPart = async (partID) => {
    try {
      const partToBeEdit =await this.props.getPartByID(partID);
      this.setState(prevState => {
        return {
          ...prevState,
          partToBeEdit,
        };
      });
    } catch (error) {
      history.push('/parts');
    }
  };
  render() {
    if (this.state.mode === 'EDIT' && !this.state.partToBeEdit) {
      return <PageLoader/>
    }
    if(this.props.isCreating){
      return <PageLoader/>
    }
    const {deleteRemark, createPart, editPart,machinemodel} = this.props;
    const paramvalue={machinemodel};
    return (
      <div style={{marginTop:'-40px',backgroundColor:'#eee',width:'100%',height:'auto'}}>
      <section>
        <CreatePart
          onCreate={createPart}
          onEdit={editPart}
          initialValues={this.state.partToBeEdit}
          mode={this.state.mode}
          paramvalue={paramvalue}
          editable={this.state.editable}
          deleteRemark={deleteRemark}
        />
      </section>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isCreating: state.part.isCreating,
    machinemodel:state.machinemodel.list,
  };
};
const mapDispatchToProps = {
  createPart, 
  getPartByID, 
  editPart,
  getMachinemodels,
  getMachinemodelByID,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreatePartsContainer);