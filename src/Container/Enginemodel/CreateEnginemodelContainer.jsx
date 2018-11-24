import React, { Component } from 'react';
import { connect } from 'react-redux';
import history from '../../Inits/history';
import { createEnginemodel, getEnginemodelByID, editEnginemodel} from '../../Store/Actions/engine-model/engine-model.action';
import { getEnginebrands,getEnginebrandByID} from '../../Store/Actions/engine-brand/engine-brand.action';
import CreateEnginemodel from '../../Component/Enginemodel/CreateEnginemodel';
import PageLoader from '../Common/pageloader';
class CreateEnginemodelsContainer extends Component {
  state = {
    mode:'CREATE',
    enginemodelToBeEdit: null,
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
  getEnginemodel = async (enginemodelID) => {
    try {
      const enginemodelToBeEdit =await this.props.getEnginemodelByID(enginemodelID);
      const enginebrand=await this.props.getEnginebrandByID(enginemodelToBeEdit.brand_id);
      enginemodelToBeEdit['enginebrand']=enginebrand;
      this.setState(prevState => {
        return {
          ...prevState,
          enginemodelToBeEdit,
        };
      });
    } catch (error) {
      history.push('/');
    }
  };
  render() {
    if (this.state.mode === 'EDIT' && !this.state.enginemodelToBeEdit) {
      return <PageLoader/>
    }
    const { createEnginemodel, editEnginemodel,enginebrand } = this.props;
    const enginebrandInfo={enginebrand}
    return (
      <div style={{marginTop:'-40px',backgroundColor:'#eee',width:'100%',height:'auto'}}>
      <section>
        <CreateEnginemodel
          onCreate={createEnginemodel}
          onEdit={editEnginemodel}
          initialValues={this.state.enginemodelToBeEdit}
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
    isCreating: state.enginemodel.isCreating,
    enginebrand:state.enginebrand.list
  };
};
const mapDispatchToProps = {
  createEnginemodel, 
  getEnginemodelByID, 
  editEnginemodel,
  getEnginebrands,
  getEnginebrandByID
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateEnginemodelsContainer);