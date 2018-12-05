import React, { Component } from 'react';
import {Provider} from 'react-redux';
import {Router,Route} from 'react-router-dom';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { axiosInterceptor } from './Inits/axios';
import history from './Inits/history';
import store from './Store';
import asyncComponent from './AsyncComponent';
// import { getCurrentUser } from './Store/Actions/auth/auth.action';
// import { getLocalStorage } from './Utils/web-storage';
import { PrivateRoute, PublicRoute } from './Utils/route';

import './App.css';
const LoginContainer = asyncComponent(() =>
    import('./Container/Login/LoginContainer').then(module => module.default)
)
const Header = asyncComponent(() =>
    import('./Container/Common/Header').then(module => module.default)
)
const MachineContainer = asyncComponent(() =>
    import('./Container/Machine/machineContainer').then(module => module.default)
)
const CreateMachinesContainer = asyncComponent(() =>
    import('./Container/Machine/CreateMachineContainer').then(module => module.default)
)
const HomeContainer = asyncComponent(() =>
    import('./Container/Home/homeContainer').then(module => module.default)
)
const CreateConditionContainer = asyncComponent(() =>
    import('./Container/Condition/CreateConditionContainer').then(module => module.default)
)
const ConditionContainer = asyncComponent(() =>
    import('./Container/Condition/conditionContainer').then(module => module.default)
)
const CreateEnginebrandContainer = asyncComponent(() =>
    import('./Container/Enginebrand/CreateEnginebrandContainer').then(module => module.default)
)
const EnginebrandContainer = asyncComponent(() =>
    import('./Container/Enginebrand/engineBrandContainer').then(module => module.default)
)
const CreateEnginemodelContainer = asyncComponent(() =>
    import('./Container/Enginemodel/CreateEnginemodelContainer').then(module => module.default)
)
const EnginemodelContainer = asyncComponent(() =>
    import('./Container/Enginemodel/engineModelContainer').then(module => module.default)
)
const CreateMachinebrandContainer = asyncComponent(() =>
    import('./Container/Machinebrand/CreateMachinebrandContainer').then(module => module.default)
)
const MachinebrandContainer = asyncComponent(() =>
    import('./Container/Machinebrand/machineBrandContainer').then(module => module.default)
)
const CreateMachinemodelContainer = asyncComponent(() =>
    import('./Container/Machinemodel/CreateMachinemodelContainer').then(module => module.default)
)
const MachinemodelContainer = asyncComponent(() =>
    import('./Container/Machinemodel/machineModelContainer').then(module => module.default)
)
const CreateCategoryContainer = asyncComponent(() =>
    import('./Container/Category/CreateCategoryContainer').then(module => module.default)
)
const CategoryContainer = asyncComponent(() =>
    import('./Container/Category/categoryContainer').then(module => module.default)
)
const CreateSubcategoryContainer = asyncComponent(() =>
    import('./Container/Subcategory/CreateSubcategoryContainer').then(module => module.default)
)
const SubcategoryContainer = asyncComponent(() =>
    import('./Container/Subcategory/subCategoryContainer').then(module => module.default)
)
const CreateStatesiteContainer = asyncComponent(() =>
    import('./Container/Statesite/CreateStateSiteContainer').then(module => module.default)
)
const StatesiteContainer = asyncComponent(() =>
    import('./Container/Statesite/stateSiteContainer').then(module => module.default)
)
const CreateDistrictsiteContainer = asyncComponent(() =>
    import('./Container/Districtsite/CreateDistrictsiteContainer').then(module => module.default)
)
const DistrictsiteContainer = asyncComponent(() =>
    import('./Container/Districtsite/districtSiteContainer').then(module => module.default)
)
const CreateSiteContainer = asyncComponent(() =>
    import('./Container/Site/CreateSiteContainer').then(module => module.default)
)
const SiteContainer = asyncComponent(() =>
    import('./Container/Site/siteContainer').then(module => module.default)
)
const CreateVehicleContainer = asyncComponent(() =>
    import('./Container/Vehicle/CreateVehicleContainer').then(module => module.default)
)
const VehicleContainer = asyncComponent(() =>
    import('./Container/Vehicle/vehicleContainer').then(module => module.default)
)
const PartContainer = asyncComponent(() =>
    import('./Container/Sparepart/partContainer').then(module => module.default)
)
const CreatePartContainer = asyncComponent(() =>
    import('./Container/Sparepart/CreatePartContainer').then(module => module.default)
)
axiosInterceptor(store);
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <div>            
            <ToastContainer autoClose={5000} />
            <div className="bodyContainer">
                <PublicRoute exact={true} path="/" component={LoginContainer} />
                <PrivateRoute exact={true} path="/machines" component={MachineContainer} />
                <PrivateRoute exact={true} path="/machines/:id" component={CreateMachinesContainer} />
                <PrivateRoute exact={true} path="/machine/create" component={CreateMachinesContainer} />
                <PrivateRoute exact={true} path="/home" component={HomeContainer} />
                <PrivateRoute exact={true} path="/condition/create" component={CreateConditionContainer} />
                <PrivateRoute exact={true} path="/conditions/:id" component={CreateConditionContainer} />
                <PrivateRoute exact={true} path="/conditions" component={ConditionContainer} />
                <PrivateRoute exact={true} path="/enginebrand/create" component={CreateEnginebrandContainer} />
                <PrivateRoute exact={true} path="/enginebrands/:id" component={CreateEnginebrandContainer} />
                <PrivateRoute exact={true} path="/enginebrands" component={EnginebrandContainer} />
                <PrivateRoute exact={true} path="/enginemodel/create" component={CreateEnginemodelContainer} />
                <PrivateRoute exact={true} path="/enginemodels/:id" component={CreateEnginemodelContainer} />
                <PrivateRoute exact={true} path="/enginemodels" component={EnginemodelContainer} />
                <PrivateRoute exact={true} path="/machinebrand/create" component={CreateMachinebrandContainer} />
                <PrivateRoute exact={true} path="/machinebrands/:id" component={CreateMachinebrandContainer} />
                <PrivateRoute exact={true} path="/machinebrands" component={MachinebrandContainer} />
                <PrivateRoute exact={true} path="/machinemodel/create" component={CreateMachinemodelContainer} />
                <PrivateRoute exact={true} path="/machinemodels/:id" component={CreateMachinemodelContainer} />
                <PrivateRoute exact={true} path="/machinemodels" component={MachinemodelContainer} />
                <PrivateRoute exact={true} path="/category/create" component={CreateCategoryContainer} />
                <PrivateRoute exact={true} path="/categorys/:id" component={CreateCategoryContainer} />
                <PrivateRoute exact={true} path="/categorys" component={CategoryContainer} />
                <PrivateRoute exact={true} path="/subcategory/create" component={CreateSubcategoryContainer} />
                <PrivateRoute exact={true} path="/subcategorys/:id" component={CreateSubcategoryContainer} />
                <PrivateRoute exact={true} path="/subcategorys" component={SubcategoryContainer} />
                <PrivateRoute exact={true} path="/statesite/create" component={CreateStatesiteContainer} />
                <PrivateRoute exact={true} path="/statesites" component={StatesiteContainer} />
                <PrivateRoute exact={true} path="/districtsite/create" component={CreateDistrictsiteContainer} />
                <PrivateRoute exact={true} path="/districtsites" component={DistrictsiteContainer} />
                <PrivateRoute exact={true} path="/site/create" component={CreateSiteContainer} />
                <PrivateRoute exact={true} path="/sites" component={SiteContainer} />
                <PrivateRoute exact={true} path="/vehicle/create" component={CreateVehicleContainer} />
                <PrivateRoute exact={true} path="/vehicles/:id" component={CreateVehicleContainer} />
                <PrivateRoute exact={true} path="/vehicles" component={VehicleContainer} />
                <PrivateRoute exact={true} path="/parts" component={PartContainer} />
                <PrivateRoute exact={true} path="/part/create" component={CreatePartContainer} />
                <PrivateRoute exact={true} path="/parts/:id" component={CreatePartContainer} />
                <Route path="/" render={ ( props ) => ( props.location.pathname !== "/") && <Header /> }/>
             </div>
           </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
