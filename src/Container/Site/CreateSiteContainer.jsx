import React, { Component } from 'react';
import { connect } from 'react-redux';
import history from '../../Inits/history';
import { createSite, getSiteByID, editSite} from '../../Store/Actions/site/site.action';
import CreateSite from '../../Component/Site/CreateSite';
class CreateSiteContainer extends Component {
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
      this.getSite(params.id);
    }
  }
  getSite = async (conditionID) => {
    try {
      const conditionToBeEdit =await this.props.getSiteByID(conditionID);
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
    const { createSite, editSite } = this.props;
    return (
      <div style={{marginTop:'-40px',backgroundColor:'#eee',width:'100%',height:'auto'}}>
      <section>
        <CreateSite
          onCreate={createSite}
          onEdit={editSite}
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
  createSite, 
  getSiteByID, 
  editSite,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateSiteContainer);