import React, { Component } from 'react';
import { connect } from 'react-redux';
import history from '../../Inits/history';
import { createMachine, getMachineByID, editMachine} from '../../Store/Actions/machine/machine.action';
import {getCategorys,getCategoryByID} from '../../Store/Actions/category/category.action';
import {getSubcategorys,getSubcategoryByID} from '../../Store/Actions/sub-category/sub-category.action';
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
    this.getMachineAttributes();
    if(params.id){
      this.getMachine(params.id);
    }
  }
  getMachineAttributes=async()=>{
    const { getCategorys,getSubcategorys,getEnginebrands,getConditions,getEnginemodels,getMachinemodels,getMachinebrands,getStatesites,getDistrictsites,getSites} = this.props;
    await Promise.all([getCategorys(),getSubcategorys(),getEnginebrands(),getConditions(),getEnginemodels(),getMachinemodels(),getMachinebrands(),getStatesites(),getDistrictsites(),getSites()]);
  }
  getMachine = async (machineID) => {
    try {
      const machineToBeEdit =await this.props.getMachineByID(machineID);
      const category=await this.props.getCategoryByID(machineToBeEdit.category_id);
      const subcategory=await this.props.getSubcategoryByID(machineToBeEdit.sub_category_id);
      const enginebrand=await this.props.getEnginebrandByID(machineToBeEdit.engine_brand_id);
      const enginemodel=await this.props.getEnginemodelByID(machineToBeEdit.engine_model_id);
      const condition=await this.props.getConditionByID(machineToBeEdit.condition_id);
      const machinemodel=await this.props.getMachinemodelByID(machineToBeEdit.model_id);
      const machinebrand=await this.props.getMachinebrandByID(machineToBeEdit.brand_id);
      const site=await this.props.getSiteByID(machineToBeEdit.site_id);
      const district=await this.props.getDistrictsiteByID(site.district_id);
      const state=await this.props.getStatesiteByID(district.state_id);
      machineToBeEdit['category']=category;
      machineToBeEdit['subcategory']=subcategory;
      machineToBeEdit['enginebrand']=enginebrand;
      machineToBeEdit['enginemodel']=enginemodel;
      machineToBeEdit['condition']=condition;
      machineToBeEdit['machinemodel']=machinemodel;
      machineToBeEdit['machinebrand']=machinebrand;
      machineToBeEdit['site']=site;
      machineToBeEdit['state']=state;
      machineToBeEdit['district']=district;
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
    if (this.state.mode === 'EDIT' && !this.state.machineToBeEdit) {
      return <PageLoader/>
    }
    if(this.props.isCreating){
      return <PageLoader/>
    }
    const { createMachine, editMachine,category,subcategory,enginebrand,enginemodel,condition,machinemodel,machinebrand,site,state,district} = this.props;
    const paramvalue={category,subcategory,enginebrand,enginemodel,condition,machinemodel,machinebrand,site,state,district};
    return (
      <div style={{marginTop:'-40px',backgroundColor:'#eee',width:'100%',height:'auto'}}>
      <section>
        <CreateMachine
          onCreate={createMachine}
          onEdit={editMachine}
          initialValues={this.state.machineToBeEdit}
          mode={this.state.mode}
          paramvalue={paramvalue}
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
  getSubcategorys,
  getSubcategoryByID,
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
  getSiteByID
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateMachinesContainer);