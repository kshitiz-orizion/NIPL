import React, { Component } from 'react';
import {reduxForm } from 'redux-form';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import {Typeahead} from 'react-bootstrap-typeahead';
class CreateMachinemodel extends Component{
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
		const options=[ {id: 1, name: 'John'},
					    {id: 2, name: 'Miles'},
						{id: 3, name: 'Charles'},
						{id: 4, name: 'Herbie'}]
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
									<form className="form-inline machineForm" onSubmit={this.props.handleSubmit(this.submitUser)}>
										<div className=" col-md-12 inputPaddingMachine">
										  	<div className="row">
											    <label className="col-md-3">Machine Brand</label>
											    <div className="col-md-9" style={{marginLeft:'-7px'}}>
											    <Typeahead
													  onChange={(selected) => {
													  	if(selected[0]!==undefined){
													    this.setState({brand_id:selected[0].id});
														}
													  }}
													  options={options}
													  labelKey="name"
													  selected={this.state.selected}
													/>
												</div>
										  	</div>
										</div>
										  <div className="form-group col-md-12 inputPaddingMachine">
										    <label  className="col-md-3">Name</label>
										    <input type="text" className="form-control col-md-9" onChange={this.onChangeSetToState('code')}/>
										  </div>
									</form>
								</div>
								<div className="container footerContainerMachine">
									<div className="footerMachine" >
										<div className="cancelFooterMachine">
										Cancel
										</div>
										<button type="submit" className="btn btn-primary btn-sm saveButtonFooterMachine" >Submit</button>
										<button type="submit" className="btn btn-default btn-sm submitAndEditFooterMachine" >Save & Continue Editing</button>
									</div>
								</div>	
				</div>
			</div>
			)
	}

}

export default reduxForm({ form: 'CreateMachinemodel' })(CreateMachinemodel);