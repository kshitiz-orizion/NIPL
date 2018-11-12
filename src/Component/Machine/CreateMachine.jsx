import React, { Component } from 'react';
import {reduxForm } from 'redux-form';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import {Typeahead} from 'react-bootstrap-typeahead';
class CreateMachine extends Component{
	componentWillMount(){
		if(this.props.mode==='EDIT'){
			this.setState({
				 ...this.props.initialValues
			});
		}
		else{
			this.setState({
				engine_model_id:'',
				chassis_no:'',
				engine_serial_no:'',
				purchase_year:'',
				remark:'',
				warrant:'',
				reg_no:'',
				description:'',
				name:'',
				site_id:'',
				price:'',
				condition_id:'',
				code:'',
				serial_no:'',
				brand_id:'',
				model_id:''
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
						<h3>Machine/Create Machine</h3>
					</div>
					<div className="saveButtonHeader" >
						<button className="btn btn-sm btn-primary">Save Machine</button>
					</div>
					<div className="cancelHeading" >
						Cancel
					</div>
				</div>
				<div>			
								<div className="container">
								<h5>{this.props.mode==='EDIT'?'Edit Machine':'Create Machine'}</h5>
								</div>
								<div className="container formContainer" >
									<form className="form-inline machineForm" onSubmit={this.props.handleSubmit(this.submitUser)}>
										<div className=" col-md-12 inputPaddingMachine">
										  	<div className="row">
											    <label className="col-md-3">Category</label>
											    <div className="col-md-9" style={{marginLeft:'-7px'}}>
											    <Typeahead
													  onChange={(selected) => {
													  	if(selected[0]!==undefined){
													    this.setState({category_id:selected[0].id});
														}
													  }}
													  options={options}
													  labelKey="name"
													  selected={this.state.selected}
													/>
												</div>
										  	</div>
										</div>
										  <div className=" col-md-12 inputPaddingMachine">
										  	<div className="row">
											    <label className="col-md-3">Sub Category</label>
											    <div className="col-md-9" style={{marginLeft:'-7px'}}>
											    <Typeahead
													  onChange={(selected) => {
													  	if(selected[0]!==undefined){
													    this.setState({sub_category_id:selected[0].id});
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
										    <label  className="col-md-3">Code</label>
										    <input type="text" className="form-control col-md-9" onChange={this.onChangeSetToState('code')}/>
										  </div>
										  <div className=" col-md-12 inputPaddingMachine">
										    <div className="row">
											    <label className="col-md-3">Make</label>
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
										    <label  className="col-md-3">Year of Purchase</label>
										    <input type="text" className="form-control col-md-9" onChange={this.onChangeSetToState('purchase_year')}/>
										  </div>
										  <div className=" col-md-12 inputPaddingMachine">
										    <div className="row">
											    <label htmlFor="email" className="col-md-3">Model</label>
											    <div className="col-md-9" style={{marginLeft:'-7px'}}>
											    <Typeahead
													  onChange={(selected) => {
													  	if(selected[0]!==undefined){
													    this.setState({model_id:selected[0].id});
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
										    <label  className="col-md-3">Serial Number</label>
										    <input type="text" className="form-control col-md-9"  onChange={this.onChangeSetToState('serial_no')}/>
										  </div>
										  <div className=" col-md-12 inputPaddingMachine">
										    <div className="row">
											    <label htmlFor="email" className="col-md-3">Engine Make</label>
											    <div className="col-md-9" style={{marginLeft:'-7px'}}>
											    <Typeahead
													  onChange={(selected) => {
													  	if(selected[0]!==undefined){
													    this.setState({engine_brand_id:selected[0].id});
														}
													  }}
													  options={options}
													  labelKey="name"
													  selected={this.state.selected}
													/>
												</div>
										  	</div>
										  </div>
										  <div className=" col-md-12 inputPaddingMachine">
										    <div className="row">
											    <label htmlFor="email" className="col-md-3">Engine  Model</label>
											    <div className="col-md-9" style={{marginLeft:'-7px'}}>
											    <Typeahead
													  onChange={(selected) => {
													  	if(selected[0]!==undefined){
													    this.setState({engine_model_id:selected[0].id});
														}
													  }}
													  options={options}
													  labelKey="name"
													  selected={this.state.selected}
													/>
												</div>
										  	</div>
										  </div>
										  <div className="form-group col-md-12 inputPaddingMachine" >
										    <label  className="col-md-3">Engine Serial Number</label>
										    <input type="text" className="form-control col-md-9"  />
										  </div>
										  <div className="form-group col-md-12 inputPaddingMachine">
										    <label  className="col-md-3">Chassis Number</label>
										    <input type="text" className="form-control col-md-9"  />
										  </div>
										  <div className="form-group col-md-12 inputPaddingMachine">
										    <label  className="col-md-3">Registration Number</label>
										    <input type="text" className="form-control col-md-9" />
										  </div>
										  <div className=" col-md-12 inputPaddingMachine">
										    <div className="row">
											    <label htmlFor="email" className="col-md-3">Condition</label>
											    <div className="col-md-9" style={{marginLeft:'-7px'}}>
											    <Typeahead
													  onChange={(selected) => {
													  	if(selected[0]!==undefined){
													    this.setState({condition_id:selected[0].id});
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
										    <label  className="col-md-3">Unit Price</label>
										    <input type="text" className="form-control col-md-9" />
										  </div>
										  <div className="form-group col-md-12 inputPaddingMachine" >
										    <label  className="col-md-3">Remarks</label>
										    <input type="text" className="form-control col-md-9" />
										  </div>
										  <div className=" col-md-12 inputPaddingMachine">
										    <div className="row">
											    <label htmlFor="email" className="col-md-3">State</label>
											    <div className="col-md-9" style={{marginLeft:'-7px'}}>
											    <Typeahead
													  onChange={(selected) => {
													  	if(selected[0]!==undefined){
													    this.setState({state:selected[0].id});
													    //call api for district
														}
													  }}
													  options={options}
													  labelKey="name"
													  selected={this.state.selected}
													/>
												</div>
										  	</div>
										  </div>
										  <div className=" col-md-12 inputPaddingMachine">
										    <div className="row">
											    <label htmlFor="email" className="col-md-3">District</label>
											    <div className="col-md-9" style={{marginLeft:'-7px'}}>
											    <Typeahead
													  onChange={(selected) => {
													  	if(selected[0]!==undefined){
													    this.setState({district:selected[0].id});
													    //call api for site
														}
													  }}
													  options={options}
													  labelKey="name"
													  selected={this.state.selected}
													/>
												</div>
										  	</div>
										  </div>
										  <div className=" col-md-12 inputPaddingMachine">
										    <div className="row">
											    <label htmlFor="email" className="col-md-3">Site</label>
											    <div className="col-md-9" style={{marginLeft:'-7px'}}>
											    <Typeahead
													  onChange={(selected) => {
													  	if(selected[0]!==undefined){
													    this.setState({site_id:selected[0].id});
														}
													  }}
													  options={options}
													  labelKey="name"
													  selected={this.state.selected}
													/>
												</div>
										  	</div>
										  </div>
										  <div className="form-group col-md-12 inputPaddingMachine" >
										    <label  className="col-md-3">Operating System</label>
										    <input type="text" className="form-control col-md-9" />
										  </div>
										  <div className="form-group col-md-12 inputPaddingMachine" >
										    <label  className="col-md-3">Warranty</label>
										    <input type="text" className="form-control col-md-9" />
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

export default reduxForm({ form: 'CreateMachine' })(CreateMachine);