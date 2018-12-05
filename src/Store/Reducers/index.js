import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './auth.reducer';
import machineReducer from './machine.reducer';
import categoryReducer from './category.reducer';
import subcategoryReducer from './sub-category.reducer';
import enginebrandReducer from './engine-brand.reducer';
import conditionReducer from './condition.reducer';
import enginemodelReducer from './engine-model.reducer';
import machinemodelReducer from './machine-model.reducer';
import machinebrandReducer from './machine-brand.reducer';
import statesiteReducer from './statesite.reducer';
import districtsiteReducer from './districtsite.reducer';
import siteReducer from './site.reducer';
import vehicleReducer from './vehicle.reducer';
import vehicleComponentReducer from './vehicle-component.reducer';
import partReducer from './part.reducer';
export default combineReducers({
  form: formReducer,
  auth:authReducer,
  machine:machineReducer,
  category:categoryReducer,
  subcategory:subcategoryReducer,
  enginebrand:enginebrandReducer,
  condition:conditionReducer,
  enginemodel:enginemodelReducer,
  machinemodel:machinemodelReducer,
  machinebrand:machinebrandReducer,
  statesite:statesiteReducer,
  districtsite:districtsiteReducer,
  site:siteReducer,
  vehicle:vehicleReducer,
  vehicleComponent:vehicleComponentReducer,
  part:partReducer
});
