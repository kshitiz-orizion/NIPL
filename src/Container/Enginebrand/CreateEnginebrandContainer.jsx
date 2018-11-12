import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import history from '../../Inits/history';
import { createEnginebrand, getEnginebrandByID, editEnginebrand} from '../../Store/Actions/engine-brand/engine-brand.action';
import CreateEnginebrand from '../../Component/Enginebrand/CreateEnginebrand';
class CreateEnginebrandsContainer extends Component {
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
      this.getEnginebrand(params.id);
    }
  }
  getEnginebrand = async (conditionID) => {
    try {
      const conditionToBeEdit =await this.props.getEnginebrandByID(conditionID);
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
    const { createStudent, editStudent } = this.props;
    return (
      <div style={{marginTop:'-40px',backgroundColor:'#eee',width:'100%',height:'auto'}}>
      <section>
        <CreateEnginebrand
          onCreate={createEnginebrand}
          onEdit={editEnginebrand}
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
  createEnginebrand, 
  getEnginebrandByID, 
  editEnginebrand,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateEnginebrandsContainer);