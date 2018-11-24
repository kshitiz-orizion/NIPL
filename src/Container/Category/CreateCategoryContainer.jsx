import React, { Component } from 'react';
import { connect } from 'react-redux';
import history from '../../Inits/history';
import { createCategory, getCategoryByID, editCategory} from '../../Store/Actions/category/category.action';
import CreateCategory from '../../Component/Category/CreateCategory';
import PageLoader from '../Common/pageloader';
class CreateCategoryContainer extends Component {
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
      this.getCategory(params.id);
    }
  }
  getCategory = async (conditionID) => {
    try {
      const conditionToBeEdit =await this.props.getCategoryByID(conditionID);
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
    const { createCategory, editCategory } = this.props;
    return (
      <div style={{marginTop:'-40px',backgroundColor:'#eee',width:'100%',height:'auto'}}>
      <section>
        <CreateCategory
          onCreate={createCategory}
          onEdit={editCategory}
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
  createCategory, 
  getCategoryByID, 
  editCategory,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateCategoryContainer);