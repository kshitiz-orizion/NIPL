import React, { Component } from 'react';
import {reduxForm } from 'redux-form';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import {Typeahead} from 'react-bootstrap-typeahead';
class CreateMachine extends Component{
	componentWillMount(){
		if(this.props.mode==='EDIT'){
			const {roll,name,id,std,email}=this.props.initialValues;
			if(this.props.initialValues.dob){
				const date=moment(this.props.initialValues.dob);
				this.setState({
					dob:date
				})
			}
			this.setState({
				id,
				roll,
				name,
				std,
				email,
				imagetoShow:process.env.REACT_APP_FLAT_WEB_URL+this.props.initialValues.photo
			});
		}
		else{
			this.setState({
				name:'',
				roll:'',
				photo:'',
				std:'',
				email:'',
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
						<h3>Machine/Create Machine</h3>
					</div>
					<div className="saveButtonHeader" >
						<button className="btn btn-sm btn-primary">Save Machine</button>
					</div>
					<div className="cancelHeading" >
						Cancel
					</div>
				</div>
				<div>			<div className="container">
								<h5>{this.props.mode==='EDIT'?'Edit Machine':'Create Machine'}</h5>
								</div>
								<div className="container formContainer" >
									<form className="form-inline machineForm" onSubmit={this.props.handleSubmit(this.submitUser)}>
										  <div className="form-group col-md-12 inputPaddingMachine">
										    <label htmlFor="email" className="col-md-3">Category</label>
										    <Typeahead
												  onChange={(selected) => {
												    this.setState({selected});
												  }}
												  options={[{id: 1, name: 'John'},
												  {id: 2, name: 'Miles'},
												  {id: 3, name: 'Charles'},
												  {id: 4, name: 'Herbie'}]}
												  labelKey="name"
												  selected={this.state.selected}
												/>
										  </div>
										  <div className="form-group col-md-12 inputPaddingMachine" >
										    <label htmlFor="pwd" className="col-md-3">Sub Category</label>
										    <input type="text" className="form-control col-md-9" id="pwd" />
										  </div>
										  <div className="form-group col-md-12 inputPaddingMachine">
										    <label htmlFor="email" className="col-md-3">Code</label>
										    <input type="text" className="form-control col-md-9" id="email"/>
										  </div>
										  <div className="form-group col-md-12 inputPaddingMachine">
										    <label htmlFor="pwd" className="col-md-3">Make</label>
										    <input type="text" className="form-control col-md-9" id="pwd" />
										  </div>
										  <div className="form-group col-md-12 inputPaddingMachine">
										    <label htmlFor="email" className="col-md-3">Year of Purchase</label>
										    <input type="text" className="form-control col-md-9" id="email"/>
										  </div>
										  <div className="form-group col-md-12 inputPaddingMachine">
										    <label htmlFor="pwd" className="col-md-3">Model</label>
										    <input type="text" className="form-control col-md-9" id="pwd" />
										  </div>
										  <div className="form-group col-md-12 inputPaddingMachine">
										    <label htmlFor="pwd" className="col-md-3">Serial Number</label>
										    <input type="text" className="form-control col-md-9" id="pwd" />
										  </div>
										  <div className="form-group col-md-12 inputPaddingMachine">
										    <label htmlFor="pwd" className="col-md-3">Engine Make</label>
										    <input type="text" className="form-control col-md-9" id="pwd" />
										  </div>
										  <div className="form-group col-md-12 inputPaddingMachine">
										    <label htmlFor="pwd" className="col-md-3">Engine Model</label>
										    <input type="text" className="form-control col-md-9" id="pwd" />
										  </div>
										  <div className="form-group col-md-12 inputPaddingMachine" >
										    <label htmlFor="pwd" className="col-md-3">Engine Serial Number</label>
										    <input type="text" className="form-control col-md-9" id="pwd" />
										  </div>
										  <div className="form-group col-md-12 inputPaddingMachine">
										    <label htmlFor="pwd" className="col-md-3">Chassis Number</label>
										    <input type="text" className="form-control col-md-9" id="pwd" />
										  </div>
										  <div className="form-group col-md-12 inputPaddingMachine">
										    <label htmlFor="pwd" className="col-md-3">Registration Number</label>
										    <input type="text" className="form-control col-md-9" id="pwd" />
										  </div>
										  <div className="form-group col-md-12 inputPaddingMachine">
										    <label htmlFor="pwd" className="col-md-3">Condition</label>
										    <input type="text" className="form-control col-md-9" id="pwd" />
										  </div>
										  <div className="form-group col-md-12 inputPaddingMachine">
										    <label htmlFor="pwd" className="col-md-3">Unit Price</label>
										    <input type="text" className="form-control col-md-9" id="pwd" />
										  </div>
										  <div className="form-group col-md-12 inputPaddingMachine" >
										    <label htmlFor="pwd" className="col-md-3">Remarks</label>
										    <input type="text" className="form-control col-md-9" id="pwd" />
										  </div>
										  <div className="form-group col-md-12 inputPaddingMachine" >
										    <label htmlFor="pwd" className="col-md-3">State</label>
										    <input type="text" className="form-control col-md-9" id="pwd" />
										  </div>
										  <div className="form-group col-md-12inputPaddingMachine" >
										    <label htmlFor="pwd" className="col-md-3">District</label>
										    <input type="text" className="form-control col-md-9" id="pwd" />
										  </div>
										  <div className="form-group col-md-12 inputPaddingMachine" >
										    <label htmlFor="pwd" className="col-md-3">Site</label>
										    <input type="text" className="form-control col-md-9" id="pwd" />
										  </div>
										  <div className="form-group col-md-12 inputPaddingMachine" >
										    <label htmlFor="pwd" className="col-md-3">Operating System</label>
										    <input type="text" className="form-control col-md-9" id="pwd" />
										  </div>
										  <div className="form-group col-md-12 inputPaddingMachine" >
										    <label htmlFor="pwd" className="col-md-3">Warranty</label>
										    <input type="text" className="form-control col-md-9" id="pwd" />
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