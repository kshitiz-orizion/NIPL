import React, { Component } from 'react';
import {reduxForm } from 'redux-form';
import history from '../../Inits/history';
import {Typeahead} from 'react-bootstrap-typeahead';
class CreateEnginebrand extends Component{
	componentWillMount(){
		if(this.props.mode==='EDIT'){
			const {model}=this.props.initialValues;
			this.setState({
				 ...this.props.initialValues,
				 modelname:[model],
			})
		}
		else{
			this.setState({
					name:''
			})
		}
	}

	onChangeSetToState = stateKey => e => {
			this.setState({ [stateKey]: e.target.value });
  	}
  	removehasError=(label)=>{
  		const errorList=document.getElementById(label);
  		errorList.classList.remove('has-error');
  		this.setState({
  			[label]:false
  		})
  	}
  	submitUser=()=>{
  		var formerror=false;
  		if(!this.state.category){
  				this.setState({
  					partCategory:true,
  				})
  				formerror=true;
  				const errorinput=document.getElementById("partCategory");
  				errorinput.classList.add("has-error");
  			}
  		if(!this.state.model){
  				this.setState({
  					partModel:true,
  				})
  				formerror=true;
  				const errorinput=document.getElementById("partModel");
  				errorinput.classList.add("has-error");
  			}
  		if(!this.state.particulers){
  				this.setState({
  					partParticulars:true,
  				})
  				formerror=true;
  				const errorinput=document.getElementById("partParticulars");
  				errorinput.classList.add("has-error");
  			}
  		if(!this.state.partno){
  				this.setState({
  					partPartno:true,
  				})
  				formerror=true;
  				const errorinput=document.getElementById("partPartno");
  				errorinput.classList.add("has-error");
  			}
  		if(!this.state.quantity){
  				this.setState({
  					partQuantity:true,
  				})
  				formerror=true;
  				const errorinput=document.getElementById("partQuantity");
  				errorinput.classList.add("has-error");
  			}
  		else{
  			if(formerror!==true){
	  		if(this.props.mode==='EDIT'){
	  			const editValue=this.state;
	  			for(var key in editValue){
	  				if(typeof(editValue[key])==='object'){
	  					editValue[key]=editValue[key]['id'];
	  				}
	  			}
	  			this.props.onEdit(editValue);
	  			return
	  		}
	  		this.props.onCreate(this.state);
	  		}
	  	}
  	}
	render(){
		return (
			<div>
				<div className="topHeadingContainer">
					<div className="headingCreateMachine">
						<h3>Spare Parts/Create Parts</h3>
					</div>
					<div className="saveButtonHeader" >
						<button className="btn btn-sm btn-primary">Save Part</button>
					</div>
					<div className="cancelHeading" onClick={()=>history.goBack()}>
						Cancel
					</div>
				</div>
				<div>			
								<div className="container">
								<h5>{this.props.mode==='EDIT'?'Edit Part':'Create Part'}</h5>
								</div>
								<div className="formContainer" >
									<form className="form-inline machineForm" >
										  <div className="form-group col-md-12 inputPaddingMachine">
										    <label  className="col-md-3">Category</label>
										    <select 
										    id="partCategory"
										    className="form-control col-md-9" 
										    value={this.state.category}  
										    onChange={this.onChangeSetToState('category')}
										    onFocus={()=>this.removehasError('partCategory')}>
										     {!this.state.category && <option value=''>Select A Category</option>}
											  <option value="engine">Engine</option>
											  <option value="hydraulic">Hydraulic</option>
											  <option value="maintenance">Maintenance</option>
											</select>
										  </div>
										  {this.state.partCategory && 
										   	<div className="row" style={{'width':'100%'}}>
										   		<div className="col-md-3"></div>
										    	<div className="col-md-9 text-danger">Required Field</div>
										    </div>}
										  <div className=" col-md-12 inputPaddingMachine">
										    <div className="row">
											    <label className="col-md-3">Make</label>
											    <div className="col-md-9">
											    <Typeahead
													  onChange={(selected) => {
													    this.setState({modelname:selected});
													    if(selected[0]!==undefined){
													    	this.setState({
													    		model:selected[0].id
													    	});
													    }
													  }}
													  options={this.props.paramvalue.machinemodel}
													  labelKey="name"
													  selected={this.state.modelname}
													  inputProps={{"id":"partModel"}}
													  onFocus={()=>this.removehasError('partModel')}
													/>
												</div>
										  	</div>
										  	{this.state.partModel && 
													   	<div className="row" style={{'width':'100%'}}>
													   		<div className="col-md-3"></div>
													    	<div className="col-md-9 text-danger">Required Field</div>
													    </div>}
										  </div>
										  <div className="form-group col-md-12 inputPaddingMachine">
										    <label  className="col-md-3">Particulars</label>
										    <input 
										    id="partParticulars" 
										    type="text" 
										    className="form-control col-md-9" 
										    value={this.state.particulers}  
										    onChange={this.onChangeSetToState('particulers')}
										    onFocus={()=>this.removehasError('partParticulars')}/>
										  </div>
										  {this.state.partParticulars && 
										   	<div className="row" style={{'width':'100%'}}>
										   		<div className="col-md-3"></div>
										    	<div className="col-md-9 text-danger">Required Field</div>
										    </div>}
										  <div className="form-group col-md-12 inputPaddingMachine">
										    <label  className="col-md-3">Part Number</label>
										    <input 
										    id="partPartno" 
										    type="text" 
										    className="form-control col-md-9" 
										    value={this.state.partno}  
										    onChange={this.onChangeSetToState('partno')}
										    onFocus={()=>this.removehasError('partPartno')}/>
										  </div>
										  {this.state.partPartno && 
										   	<div className="row" style={{'width':'100%'}}>
										   		<div className="col-md-3"></div>
										    	<div className="col-md-9 text-danger">Required Field</div>
										    </div>}
										  <div className="form-group col-md-12 inputPaddingMachine">
										    <label  className="col-md-3">Quantity</label>
										    <input 
										    id="partQuantity" 
										    type="number" 
										    className="form-control col-md-9" 
										    value={this.state.quantity}  
										    onChange={this.onChangeSetToState('quantity')}
										    onFocus={()=>this.removehasError('partQuantity')}/>
										  </div>
										  {this.state.partQuantity && 
										   	<div className="row" style={{'width':'100%'}}>
										   		<div className="col-md-3"></div>
										    	<div className="col-md-9 text-danger">Required Field</div>
										    </div>}
									</form>
								</div>
								<div className="container footerContainerMachine">
									<div className="footerMachine" >
										<div className="cancelFooterMachine" onClick={()=>history.goBack()}>
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

export default reduxForm({ form: 'CreateEnginebrand' })(CreateEnginebrand);