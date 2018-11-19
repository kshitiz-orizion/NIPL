import React, { Component } from 'react';
import { connect } from 'react-redux';
import history from '../../Inits/history';
import { createSubcategory, getSubcategoryByID, editSubcategory} from '../../Store/Actions/sub-category/sub-category.action';
import CreateSubcategory from '../../Component/Subcategory/CreateSubcategory';
class CreateSubcategoryContainer extends Component {
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
      this.getSubcategory(params.id);
    }
  }
  getSubcategory = async (conditionID) => {
    try {
      const conditionToBeEdit =await this.props.getSubcategoryByID(conditionID);
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
    const { createSubcategory, editSubcategory } = this.props;
    return (
      <div style={{marginTop:'-40px',backgroundColor:'#eee',width:'100%',height:'auto'}}>
      <section>
        <CreateSubcategory
          onCreate={createSubcategory}
          onEdit={editSubcategory}
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
  createSubcategory, 
  getSubcategoryByID, 
  editSubcategory,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateSubcategoryContainer);