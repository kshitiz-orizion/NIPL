import React, { Component } from 'react';
import { connect } from 'react-redux';
import history from '../../Inits/history';
import { createEnginebrand, getEnginebrandByID, editEnginebrand} from '../../Store/Actions/engine-brand/engine-brand.action';
import CreateEnginebrand from '../../Component/Enginebrand/CreateEnginebrand';
import PageLoader from '../Common/pageloader';
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
      const enginebrandToBeEdit =await this.props.getEnginebrandByID(conditionID);
      this.setState(prevState => {
        return {
          ...prevState,
          enginebrandToBeEdit,
        };
      });
    } catch (error) {
      history.push('/');
    }
  };
  render() {
    if (this.state.mode === 'EDIT' && !this.state.enginebrandToBeEdit) {
      return <PageLoader/>
    }
    if(this.props.isCreating){
      return <PageLoader/>
    }
    const { createEnginebrand, editEnginebrand} = this.props;
    return (
      <div style={{marginTop:'-40px',backgroundColor:'#eee',width:'100%',height:'auto'}}>
      <section>
        <CreateEnginebrand
          onCreate={createEnginebrand}
          onEdit={editEnginebrand}
          initialValues={this.state.enginebrandToBeEdit}
          mode={this.state.mode}
        />
      </section>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isCreating: state.enginebrand.isCreating,
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