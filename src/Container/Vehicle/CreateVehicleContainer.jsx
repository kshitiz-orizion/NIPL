import React, { Component } from 'react';
import { connect } from 'react-redux';
import history from '../../Inits/history';
//import { createVehicle, getVehicleByID, editVehicle} from '../../Store/Actions/sub-category/sub-category.action';
import CreateVehicle from '../../Component/Vehicle/CreateVehicle';
import PageLoader from '../Common/pageloader';
class CreateVehicleContainer extends Component {
  state = {
    mode:'CREATE',
    conditionToBeEdit: null,
  };
  componentWillMount() {
    const { params } = this.props.match;
    this.setState({
      mode: params && params.id ? 'EDIT' : 'CREATE',
    });
    if(params.id){
      this.getVehicle(params.id);
    }
  }
  getVehicle = async (conditionID) => {
    try {
      const conditionToBeEdit =await this.props.getVehicleByID(conditionID);
      this.setState(prevState => {
        return {
          ...prevState,
          conditionToBeEdit,
        };
      });
    } catch (error) {
      history.push('/');
    }
  };
  render() {
    if (this.state.mode === 'EDIT' && !this.state.conditionToBeEdit) {
      return <PageLoader/>
    }
    if(this.props.isCreating){
      return <PageLoader/>
    }
    const { createVehicle, editVehicle } = this.props;
    return (
      <div style={{marginTop:'-40px',backgroundColor:'#eee',width:'100%',height:'auto'}}>
      <section>
        <CreateVehicle
          onCreate={createVehicle}
          onEdit={editVehicle}
          initialValues={this.state.conditionToBeEdit}
          mode={this.state.mode}
        />
      </section>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    // isCreating: state.categorys.isCreating,
  };
};
const mapDispatchToProps = {
  // createVehicle, 
  // getVehicleByID, 
  // editVehicle,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateVehicleContainer);