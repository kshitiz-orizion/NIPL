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
                <Route exact={true} path="/machines" component={MachineContainer} />
                <Route exact={true} path="/machines/:id" component={CreateMachinesContainer} />
                <Route exact={true} path="/machine/create" component={CreateMachinesContainer} />
                <Route exact={true} path="/home" component={HomeContainer} />
                <Route path="/" render={ ( props ) => ( props.location.pathname !== "/") && <Header /> }/>
             </div>
           </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
