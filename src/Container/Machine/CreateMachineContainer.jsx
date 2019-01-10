import React, { Component } from 'react';
import { connect } from 'react-redux';
import history from '../../Inits/history';
import { createMachine, getMachineByID, editMachine,getRemarks,deleteRemark} from '../../Store/Actions/machine/machine.action';
import {getCategorys,getCategoryByID} from '../../Store/Actions/category/category.action';
// import {getSubcategorys,getSubcategoryByID} from '../../Store/Actions/sub-category/sub-category.action';
import {getEnginebrands,getEnginebrandByID} from '../../Store/Actions/engine-brand/engine-brand.action';
import {getConditions,getConditionByID} from '../../Store/Actions/condition/condition.action';
import {getEnginemodels,getEnginemodelByID} from '../../Store/Actions/engine-model/engine-model.action';
import {getMachinemodels,getMachinemodelByID} from '../../Store/Actions/machine-model/machine-model.action';
import {getMachinebrands,getMachinebrandByID} from '../../Store/Actions/machine-brand/machine-brand.action';
import {getStatesites,getStatesiteByID} from '../../Store/Actions/state-site/state-site.action';
import {getDistrictsites,getDistrictsiteByID} from '../../Store/Actions/district-site/district-site.action';
import {getSites,getSiteByID} from '../../Store/Actions/site/site.action';
import CreateMachine from '../../Component/Machine/CreateMachine';
import PageLoader from '../Common/pageloader';
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
    if(this.props.history.location.state!==undefined){
      this.setState({
        editable:this.props.history.location.state.noEdit?false:true
      })
    }
    this.getMachineAttributes();
    if(params.id){
      this.getMachine(params.id);
    }
  }
  getMachineAttributes=async()=>{
    this.setState({gettingParam:true});
    const { getCategorys,getEnginebrands,getConditions,getEnginemodels,getMachinemodels,getMachinebrands,getStatesites,getDistrictsites,getSites} = this.props;
    await Promise.all([getCategorys(),getEnginebrands(),getConditions(),getEnginemodels(),getMachinemodels(),getMachinebrands(),getSites(),getDistrictsites(),getStatesites()]);
    this.setState({gettingParam:false});
  }
  getMachine = async (machineID) => {
    try {
      const machineToBeEdit =await this.props.getMachineByID(machineID);
      const district=await this.props.getDistrictsiteByID(machineToBeEdit.site['district']);
      const state=await this.props.getStatesiteByID(district.state);
      await this.props.getRemarks(machineToBeEdit.id);
      machineToBeEdit['state']=state;
      machineToBeEdit['district']=district;
      machineToBeEdit['remark']=this.props.remark;
      this.setState(prevState => {
        return {
          ...prevState,
          machineToBeEdit,
        };
      });
    } catch (error) {
      history.push('/machines');
    }
  };
  render() {
    if(this.state.gettingParam){
      return <PageLoader/>
    }
    if (this.state.mode === 'EDIT' && !this.state.machineToBeEdit) {
      return <PageLoader/>
    }
    if(this.props.isCreating){
      return <PageLoader/>
    }
    const {deleteRemark, createMachine, editMachine,category,enginebrand,enginemodel,condition,machinemodel,machinebrand,site,district,state,getConditions} = this.props;
    const paramvalue={categoryOption:category,engineBrandOption:enginebrand,engineModelOption:enginemodel,conditionOption:condition,machineModelOption:machinemodel,machineBrandOption:machinebrand,siteOption:site,districtOption:district,stateOption:state};
    return (
      <div style={{marginTop:'-40px',backgroundColor:'#eee',width:'100%',height:'auto'}}>
      <section>
        <CreateMachine
          onCreate={createMachine}
          onEdit={editMachine}
          initialValues={this.state.machineToBeEdit}
          mode={this.state.mode}
          paramvalue={paramvalue}
          editable={this.state.editable}
          deleteRemark={deleteRemark}
          getConditions={getConditions}
        />
      </section>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isCreating: state.machine.isCreating,
    remark:state.machine.remark,
    // subcategory: state.subcategory.list,
    category:state.category.list,
    enginebrand:state.enginebrand.list,
    enginemodel:state.enginemodel.list,
    condition:state.condition.list,
    machinemodel:state.machinemodel.list,
    machinebrand:state.machinebrand.list,
    site:state.site.list,
    state:state.statesite.list,
    district:state.districtsite.list
  };
};
const mapDispatchToProps = {
  createMachine, 
  getMachineByID, 
  editMachine,
  getCategorys,
  getCategoryByID,
  // getSubcategorys,
  // getSubcategoryByID,
  getEnginebrands,
  getEnginebrandByID,
  getConditions,
  getConditionByID,
  getEnginemodels,
  getEnginemodelByID,
  getMachinemodels,
  getMachinemodelByID,
  getMachinebrands,
  getMachinebrandByID,
  getStatesites,
  getStatesiteByID,
  getDistrictsites,
  getDistrictsiteByID,
  getSites,
  getSiteByID,
  getRemarks,
  deleteRemark,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateMachinesContainer);