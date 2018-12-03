import React, { Component } from 'react';
import { connect } from 'react-redux';
import history from '../../Inits/history';
import { createVehicle, getVehicleByID, editVehicle} from '../../Store/Actions/vehicle/vehicle.action';
import {getVehicleFuel,getVehicleBrake,getVehicleDrive,getVehicleBody,getVehicleColor,getVehicleOwnership,getVehicleStatus,
        getVehicleModel,getVehicleMake,getVehicleType} from '../../Store/Actions/vehicle-component/vehicle-component.action';
import {getEnginebrands} from '../../Store/Actions/engine-brand/engine-brand.action';
import {getEnginemodels} from '../../Store/Actions/engine-model/engine-model.action';
import {getSites} from '../../Store/Actions/site/site.action';
import CreateVehicle from '../../Component/Vehicle/CreateVehicle';
import PageLoader from '../Common/pageloader';
class CreateVehicleContainer extends Component {
  state = {
    mode:'CREATE',
    vehicleToBeEdit: null,
  };
  componentWillMount() {
    const { params } = this.props.match;
    this.setState({
      mode: params && params.id ? 'EDIT' : 'CREATE',
    });
    this.getVehicleAttributes();
    if(params.id){
      this.getVehicle(params.id);
    }
  }
  getVehicleAttributes=async()=>{
    const {getVehicleFuel,getVehicleBrake,getVehicleDrive,getVehicleBody,getVehicleColor,getVehicleOwnership,getVehicleStatus,
      getVehicleModel,getVehicleMake,getVehicleType,getEnginebrands,getEnginemodels,getSites}=this.props;
    await Promise.all([getVehicleFuel(),getVehicleBrake(),getVehicleDrive(),getVehicleBody(),getVehicleColor(),getVehicleOwnership(),
      getVehicleStatus(),getVehicleModel(),getVehicleMake(),getVehicleType(),getEnginebrands(),getEnginemodels(),getSites()]);
  }
  getVehicle = async (vehicleID) => {
    try {
      const vehicleToBeEdit =await this.props.getVehicleByID(vehicleID);
      const make=this.props.make.filter(a=>a.id===vehicleToBeEdit.model.make.id);
      const enginebrand=this.props.enginebrand.filter(a=>a.id===vehicleToBeEdit.engine_model.brand.id);
      vehicleToBeEdit['make']=make;
      vehicleToBeEdit['enginebrand']=enginebrand;
      this.setState(prevState => {
        return {
          ...prevState,
          vehicleToBeEdit,
        };
      });
    } catch (error) {
      history.push('/');
    }
  };
  render() {
    if (this.state.mode === 'EDIT' && !this.state.vehicleToBeEdit) {
      return <PageLoader/>
    }
    if(this.props.isCreating){
      return <PageLoader/>
    }
    const { createVehicle, editVehicle,enginebrand,enginemodel,fuel,brake,drive,body,color,ownership,status,model,make,type,site} = this.props;
    const componentValue={enginebrand,enginemodel,fuel,brake,drive,body,color,ownership,status,model,make,type,site};
    return (
      <div style={{marginTop:'-40px',backgroundColor:'#eee',width:'100%',height:'auto'}}>
      <section>
        <CreateVehicle
          onCreate={createVehicle}
          onEdit={editVehicle}
          initialValues={this.state.vehicleToBeEdit}
          mode={this.state.mode}
          componentValue={componentValue}
        />
      </section>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    enginebrand:state.enginebrand.list,
    enginemodel:state.enginemodel.list,
    fuel:state.vehicleComponent.fuel,
    brake:state.vehicleComponent.brake,
    drive:state.vehicleComponent.drive,
    body:state.vehicleComponent.body,
    color:state.vehicleComponent.color,
    ownership:state.vehicleComponent.ownership,
    status:state.vehicleComponent.status,
    model:state.vehicleComponent.model,
    make:state.vehicleComponent.make,
    type:state.vehicleComponent.type,
    site:state.site.list
  };
};
const mapDispatchToProps = {
  createVehicle, 
  getVehicleByID, 
  editVehicle,
  getVehicleFuel,
  getVehicleBrake,
  getVehicleDrive,
  getVehicleBody,
  getVehicleColor,
  getVehicleOwnership,
  getVehicleStatus,
  getVehicleModel,
  getVehicleMake,
  getVehicleType,
  getEnginebrands,
  getEnginemodels,
  getSites
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateVehicleContainer);