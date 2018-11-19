import React, { Component } from 'react';
import { connect } from 'react-redux';
import history from '../../Inits/history';
import { createEnginemodel, getEnginemodelByID, editEnginemodel} from '../../Store/Actions/engine-model/engine-model.action';
import { getEnginebrands} from '../../Store/Actions/engine-brand/engine-brand.action';
import CreateEnginemodel from '../../Component/Enginemodel/CreateEnginemodel';
class CreateEnginemodelsContainer extends Component {
  state = {
    mode:'CREATE',
    conditionToBeEdit: null,
  };
  componentWillMount() {
    this.getEngineBrands();
    const { params } = this.props.match;
    this.setState({
      mode: params && params.id ? 'EDIT' : 'CREATE',
    });
    if(params.id){
      this.getEnginemodel(params.id);
    }
  }
  getEngineBrands=async()=>{
    await this.props.getEnginebrands();
  }
  getEnginemodel = async (conditionID) => {
    try {
      const conditionToBeEdit =await this.props.getEnginemodelByID(conditionID);
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
    const { createEnginemodel, editEnginemodel,enginebrand } = this.props;
    const enginebrandInfo={enginebrand}
    return (
      <div style={{marginTop:'-40px',backgroundColor:'#eee',width:'100%',height:'auto'}}>
      <section>
        <CreateEnginemodel
          onCreate={createEnginemodel}
          onEdit={editEnginemodel}
          initialValues={this.state.conditionToBeEdit}
          mode={this.state.mode}
          enginebrandInfo={enginebrandInfo}
        />
      </section>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isCreating: state.condition.isCreating,
    enginebrand:state.enginebrand.list
  };
};
const mapDispatchToProps = {
  createEnginemodel, 
  getEnginemodelByID, 
  editEnginemodel,
  getEnginebrands
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateEnginemodelsContainer);