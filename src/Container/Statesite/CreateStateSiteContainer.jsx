import React, { Component } from 'react';
import { connect } from 'react-redux';
import history from '../../Inits/history';
import { createStatesite, getStatesiteByID, editStatesite} from '../../Store/Actions/state-site/state-site.action';
import CreateStatesite from '../../Component/Statesite/CreateStatesite';
import PageLoader from '../Common/pageloader';
class CreateStatesiteContainer extends Component {
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
      this.getStatesite(params.id);
    }
  }
  getStatesite = async (conditionID) => {
    try {
      const conditionToBeEdit =await this.props.getStatesiteByID(conditionID);
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
    const { createStatesite, editStatesite } = this.props;
    return (
      <div style={{marginTop:'-40px',backgroundColor:'#eee',width:'100%',height:'auto'}}>
      <section>
        <CreateStatesite
          onCreate={createStatesite}
          onEdit={editStatesite}
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
  createStatesite, 
  getStatesiteByID, 
  editStatesite,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateStatesiteContainer);