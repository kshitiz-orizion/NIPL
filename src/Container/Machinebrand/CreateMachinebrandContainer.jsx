import React, { Component } from 'react';
import { connect } from 'react-redux';
import history from '../../Inits/history';
import { createMachinebrand, getMachinebrandByID, editMachinebrand} from '../../Store/Actions/machine-brand/machine-brand.action';
import CreateMachinebrand from '../../Component/Machinebrand/CreateMachinebrand';
class CreateMachinebrandsContainer extends Component {
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
      this.getMachinebrand(params.id);
    }
  }
  getMachinebrand = async (conditionID) => {
    try {
      const conditionToBeEdit =await this.props.getMachinebrandByID(conditionID);
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
      return <h1>Loading...</h1>
    }
    if(this.props.isCreating){
      return <h1>Creating...</h1>
    }
    const { createMachinebrand, editMachinebrand } = this.props;
    return (
      <div style={{marginTop:'-40px',backgroundColor:'#eee',width:'100%',height:'auto'}}>
      <section>
        <CreateMachinebrand
          onCreate={createMachinebrand}
          onEdit={editMachinebrand}
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
    isCreating: state.condition.isCreating,
  };
};
const mapDispatchToProps = {
  createMachinebrand, 
  getMachinebrandByID, 
  editMachinebrand,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateMachinebrandsContainer);