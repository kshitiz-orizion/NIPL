import React, { Component } from 'react';
import {reduxForm } from 'redux-form';
import {Typeahead} from 'react-bootstrap-typeahead';
class CreateMachinemodel extends Component{
	componentWillMount(){
		if(this.props.mode==='EDIT'){
			const {name,machinebrand,id}=this.props.initialValues
			this.setState({
				 name,
				 machinebrand:[machinebrand],
				 id
			});
		}
		else{
			this.setState({
					name:'',
					machinebrand:[{name:'',id:''}]
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
						<h3>Machinemodel/Create Machine model</h3>
					</div>
					<div className="saveButtonHeader" >
						<button className="btn btn-sm btn-primary">Save Machine model</button>
					</div>
					<div className="cancelHeading" >
						Cancel
					</div>
				</div>
				<div>			
								<div className="container">
								<h5>{this.props.mode==='EDIT'?'Edit Machine Model':'Create Machine Model'}</h5>
								</div>
								<div className="container formContainer" >
									<form className="form-inline machineForm" >
										<div className=" col-md-12 inputPaddingMachine">
										  	<div className="row">
											    <label className="col-md-3">Machine Brand</label>
											    <div className="col-md-9" style={{marginLeft:'-7px'}}>
											    <Typeahead
													  onChange={(selected) => {
													    this.setState({machinebrand:selected});
													  }}
													  options={this.props.machinebrandInfo.machinebrand}
													  labelKey="name"
													  selected={this.state.machinebrand}
													/>
												</div>
										  	</div>
										</div>
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
										<button type="submit" className="btn btn-primary btn-sm saveButtonFooterMachine" onClick={this.props.handleSubmit(this.submitUser)}>Submit</button>
										<button type="submit" className="btn btn-default btn-sm submitAndEditFooterMachine" >Save & Continue Editing</button>
									</div>
								</div>	
				</div>
			</div>
			)
	}

}

export default reduxForm({ form: 'CreateMachinemodel' })(CreateMachinemodel);