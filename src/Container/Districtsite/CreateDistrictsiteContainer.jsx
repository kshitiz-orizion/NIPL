import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import history from '../../Inits/history';
import { createDistrictsite, getDistrictsiteByID, editDistrictsite} from '../../Store/Actions/district-site/district-site.action';
import CreateDistrictsite from '../../Component/Districtsite/CreateDistrictsite';
class CreateDistrictsiteContainer extends Component {
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
      this.getDistrictsite(params.id);
    }
  }
  getDistrictsite = async (conditionID) => {
    try {
      const conditionToBeEdit =await this.props.getDistrictsiteByID(conditionID);
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
        <CreateDistrictsite
          onCreate={createDistrictsite}
          onEdit={editDistrictsite}
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
  createDistrictsite, 
  getDistrictsiteByID, 
  editDistrictsite,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateDistrictsiteContainer);