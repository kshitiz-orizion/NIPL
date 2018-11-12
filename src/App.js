import React, { Component } from 'react';
import {Provider} from 'react-redux';
import {Router,Route} from 'react-router-dom';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { axiosInterceptor } from './Inits/axios';
import history from './Inits/history';
import store from './Store';

// import { getCurrentUser } from './Store/Actions/auth/auth.action';
// import { getLocalStorage } from './Utils/web-storage';
import { PrivateRoute, PublicRoute } from './Utils/route';

import LoginContainer from './Container/Login/LoginContainer';
import Header from './Container/Common/Header';
import MachineContainer from './Container/Machine/machineContainer';
import CreateMachinesContainer from './Container/Machine/CreateMachineContainer';
import HomeContainer from './Container/Home/homeContainer';
import CreateConditionContainer from './Container/Condition/CreateConditionContainer';
import CreateEnginebrandContainer from './Container/Enginebrand/CreateEnginebrandContainer';
import CreateEnginemodelContainer from './Container/Enginemodel/CreateEnginemodelContainer';
import CreateMachinebrandContainer from './Container/Machinebrand/CreateMachinebrandContainer';
import CreateMachinemodelContainer from './Container/Machinemodel/CreateMachinemodelContainer';
import CreateCategoryContainer from './Container/Category/CreateCategoryContainer';
import CreateSubcategoryContainer from './Container/Subcategory/CreateSubcategoryContainer';
import CreateStatesiteContainer from './Container/Statesite/CreateStateSiteContainer';
import CreateDistrictsiteContainer from './Container/Districtsite/CreateDistrictsiteContainer';
import CreateSiteContainer from './Container/Site/CreateSiteContainer';
import './App.css';
axiosInterceptor(store);
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <div>            
            <ToastContainer autoClose={5000} />
            <div style={{marginLeft:"12vw",marginTop:'100px'}}>
                <PublicRoute exact={true} path="/" component={LoginContainer} />
                <PrivateRoute exact={true} path="/machines" component={MachineContainer} />
                <PrivateRoute exact={true} path="/machines/:id" component={CreateMachinesContainer} />
                <PrivateRoute exact={true} path="/machine/create" component={CreateMachinesContainer} />
                <PrivateRoute exact={true} path="/home" component={HomeContainer} />
                <PrivateRoute exact={true} path="/condition/create" component={CreateConditionContainer} />
                <PrivateRoute exact={true} path="/enginebrand/create" component={CreateEnginebrandContainer} />
                <PrivateRoute exact={true} path="/enginemodel/create" component={CreateEnginemodelContainer} />
                <PrivateRoute exact={true} path="/machinebrand/create" component={CreateMachinebrandContainer} />
                <PrivateRoute exact={true} path="/machinemodel/create" component={CreateMachinemodelContainer} />
                <PrivateRoute exact={true} path="/category/create" component={CreateCategoryContainer} />
                <PrivateRoute exact={true} path="/subcategory/create" component={CreateSubcategoryContainer} />
                <PrivateRoute exact={true} path="/statesite/create" component={CreateStatesiteContainer} />
                <PrivateRoute exact={true} path="/districtsite/create" component={CreateDistrictsiteContainer} />
                <PrivateRoute exact={true} path="/site/create" component={CreateSiteContainer} />
                <Route path="/" render={ ( props ) => ( props.location.pathname !== "/") && <Header /> }/>
             </div>
           </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
