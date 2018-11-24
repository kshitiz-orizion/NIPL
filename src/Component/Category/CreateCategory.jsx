import React, { Component } from 'react';
import {reduxForm } from 'redux-form';
class CreateCategory extends Component{
	componentWillMount(){
		if(this.props.mode==='EDIT'){
			this.setState({
				 ...this.props.initialValues
			});
		}
		else{
			this.setState({
					name:''
			})
		}
	}
	onChangeSetToState = stateKey => e => {
			this.setState({ [stateKey]: e.target.value });
  	};
  	submitUser=()=>{
  		if(this.props.mode==='EDIT'){
  			this.props.onEdit(this.state);
  			return
  		}
  		this.props.onCreate(this.state);
  	}
	render(){
		return (
			<div>
				<div className="topHeadingContainer">
					<div className="headingCreateMachine">
						<h3>Category/Create Category</h3>
					</div>
					<div className="saveButtonHeader" >
						<button className="btn btn-sm btn-primary">Save Category</button>
					</div>
					<div className="cancelHeading" >
						Cancel
					</div>
				</div>
				<div>			
								<div className="container">
								<h5>{this.props.mode==='EDIT'?'Edit Category':'Create Category'}</h5>
								</div>
								<div className="container formContainer" >
									<form className="form-inline machineForm" >
										  <div className="form-group col-md-12 inputPaddingMachine">
										    <label  className="col-md-3">Name</label>
										    <input type="text" className="form-control col-md-9" value={this.state.name} onChange={this.onChangeSetToState('name')}/>
										  </div>
									</form>
								</div>
								<div className="container footerContainerMachine">
									<div className="footerMachine" >
										<div className="cancelFooterMachine">
										Cancel
										</div>
										<button type="submit" className="btn btn-primary btn-sm saveButtonFooterMachine" onClick={this.props.handleSubmit(this.submitUser)} >Submit</button>
										<button type="submit" className="btn btn-default btn-sm submitAndEditFooterMachine" >Save & Continue Editing</button>
									</div>
								</div>	
				</div>
			</div>
			)
	}

}

export default reduxForm({ form: 'CreateCategory' })(CreateCategory);