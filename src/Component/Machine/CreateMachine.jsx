import React, { Component } from 'react';
import {reduxForm } from 'redux-form';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import {Menu,MenuItem,AsyncTypeahead,Typeahead} from 'react-bootstrap-typeahead';
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
				model_id:'',
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
  	setCategory=(value)=>{
  		document.getElementsByClassName("rbt-menu")[0].style.display="none";
  	}
  	setSubCategory=(value)=>{
  		document.getElementsByClassName("rbt-menu")[0].style.display="none";
  	}
  	setMachineMake=(value)=>{
  		document.getElementsByClassName("rbt-menu")[0].style.display="none";
  	}
  	setMachineModel=(value)=>{
  		document.getElementsByClassName("rbt-menu")[0].style.display="none";
  	}
  	setEngineMake=(value)=>{
  		document.getElementsByClassName("rbt-menu")[0].style.display="none";
  	}
  	setEngineModel=(value)=>{
  		document.getElementsByClassName("rbt-menu")[0].style.display="none";
  	}
  	setCondition=(value)=>{
  		document.getElementsByClassName("rbt-menu")[0].style.display="none";
  	}
  	setnewState=(value)=>{
  		document.getElementsByClassName("rbt-menu")[0].style.display="none";
  	}
  	setDistrict=(value)=>{
  		document.getElementsByClassName("rbt-menu")[0].style.display="none";
  	}
  	setSite=(value)=>{
  		document.getElementsByClassName("rbt-menu")[0].style.display="none";
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
											          options={options}
											          labelKey="name"
											          onChange={(selected) => {
													  	if(selected[0]!==undefined){
													    this.setState({category_id:selected[0].id});
														}
													  }}
													  onInputChange={(name,value)=>{													  		
													  		var element=document.getElementsByClassName("rbt-menu");
													  		if(element[0]){
													  			element[0].style.display="block";
													  			var p=element[0].getElementsByTagName("p");
													  			for(var i=0;i<p.length;i++){
													  				p[i].parentNode.removeChild(p[i]);
													  			}
													  			if(name!==''){
													  			var para = document.createElement("p");
													  	 		para.classList.add("dropdown-item");
																var node = document.createTextNode(name);
																var btn=document.createElement("button");
																btn.className="btn-sm btn btn-danger";
																var btnname=document.createTextNode("+");
																btn.appendChild(btnname);
																btn.style.marginLeft="20px";
																para.appendChild(node);
																para.appendChild(btn);
																btn.onclick=()=>{this.setCategory(name)};
													  			element[0].appendChild(para);
													  			}
													  		}													  	 	
													  }}
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
													  onInputChange={(name,value)=>{
													  		var element=document.getElementsByClassName("rbt-menu");
													  		if(element[0]){
													  			element[0].style.display="block";
													  			var p=element[0].getElementsByTagName("p");
													  			for(var i=0;i<p.length;i++){
													  				p[i].parentNode.removeChild(p[i]);
													  			}
													  			if(name!==''){
													  			var para = document.createElement("p");
													  	 		para.classList.add("dropdown-item");
																var node = document.createTextNode(name);
																var btn=document.createElement("button");
																btn.className="btn-sm btn btn-danger";
																var btnname=document.createTextNode("+");
																btn.appendChild(btnname);
																btn.style.marginLeft="20px";
																para.appendChild(node);
																para.appendChild(btn);
																btn.onclick=()=>{this.setSubCategory(name)};
													  			element[0].appendChild(para);
													  			}
													  		}													  	 	
													  }}
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
													  onInputChange={(name,value)=>{
													  		var element=document.getElementsByClassName("rbt-menu");
													  		if(element[0]){
													  			element[0].style.display="block";
													  			var p=element[0].getElementsByTagName("p");
													  			for(var i=0;i<p.length;i++){
													  				p[i].parentNode.removeChild(p[i]);
													  			}
													  			if(name!==''){
													  			var para = document.createElement("p");
													  	 		para.classList.add("dropdown-item");
																var node = document.createTextNode(name);
																var btn=document.createElement("button");
																btn.className="btn-sm btn btn-danger";
																var btnname=document.createTextNode("+");
																btn.appendChild(btnname);
																btn.style.marginLeft="20px";
																para.appendChild(node);
																para.appendChild(btn);
																btn.onclick=()=>{this.setMachineMake(name)};
													  			element[0].appendChild(para);
													  			}
													  		}													  	 	
													  }}
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
													  onInputChange={(name,value)=>{
													  		var element=document.getElementsByClassName("rbt-menu");
													  		if(element[0]){
													  			element[0].style.display="block";
													  			var p=element[0].getElementsByTagName("p");
													  			for(var i=0;i<p.length;i++){
													  				p[i].parentNode.removeChild(p[i]);
													  			}
													  			if(name!==''){
													  			var para = document.createElement("p");
													  	 		para.classList.add("dropdown-item");
																var node = document.createTextNode(name);
																var btn=document.createElement("button");
																btn.className="btn-sm btn btn-danger";
																var btnname=document.createTextNode("+");
																btn.appendChild(btnname);
																btn.style.marginLeft="20px";
																para.appendChild(node);
																para.appendChild(btn);
																btn.onclick=()=>{this.MachineModel(name)};
													  			element[0].appendChild(para);
													  			}
													  		}													  	 	
													  }}
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
													  onInputChange={(name,value)=>{
													  		var element=document.getElementsByClassName("rbt-menu");
													  		if(element[0]){
													  			element[0].style.display="block";
													  			var p=element[0].getElementsByTagName("p");
													  			for(var i=0;i<p.length;i++){
													  				p[i].parentNode.removeChild(p[i]);
													  			}
													  			if(name!==''){
													  			var para = document.createElement("p");
													  	 		para.classList.add("dropdown-item");
																var node = document.createTextNode(name);
																var btn=document.createElement("button");
																btn.className="btn-sm btn btn-danger";
																var btnname=document.createTextNode("+");
																btn.appendChild(btnname);
																btn.style.marginLeft="20px";
																para.appendChild(node);
																para.appendChild(btn);
																btn.onclick=()=>{this.setEngineMake(name)};
													  			element[0].appendChild(para);
													  			}
													  		}													  	 	
													  }}
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
													  onInputChange={(name,value)=>{
													  		var element=document.getElementsByClassName("rbt-menu");
													  		if(element[0]){
													  			element[0].style.display="block";
													  			var p=element[0].getElementsByTagName("p");
													  			for(var i=0;i<p.length;i++){
													  				p[i].parentNode.removeChild(p[i]);
													  			}
													  			if(name!==''){
													  			var para = document.createElement("p");
													  	 		para.classList.add("dropdown-item");
																var node = document.createTextNode(name);
																var btn=document.createElement("button");
																btn.className="btn-sm btn btn-danger";
																var btnname=document.createTextNode("+");
																btn.appendChild(btnname);
																btn.style.marginLeft="20px";
																para.appendChild(node);
																para.appendChild(btn);
																btn.onclick=()=>{this.setEngineModel(name)};
													  			element[0].appendChild(para);
													  			}
													  		}													  	 	
													  }}
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
													  onInputChange={(name,value)=>{
													  		var element=document.getElementsByClassName("rbt-menu");
													  		if(element[0]){
													  			element[0].style.display="block";
													  			var p=element[0].getElementsByTagName("p");
													  			for(var i=0;i<p.length;i++){
													  				p[i].parentNode.removeChild(p[i]);
													  			}
													  			if(name!==''){
													  			var para = document.createElement("p");
													  	 		para.classList.add("dropdown-item");
																var node = document.createTextNode(name);
																var btn=document.createElement("button");
																btn.className="btn-sm btn btn-danger";
																var btnname=document.createTextNode("+");
																btn.appendChild(btnname);
																btn.style.marginLeft="20px";
																para.appendChild(node);
																para.appendChild(btn);
																btn.onclick=()=>{this.setCondition(name)};
													  			element[0].appendChild(para);
													  			}
													  		}													  	 	
													  }}
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
													  onInputChange={(name,value)=>{
													  		var element=document.getElementsByClassName("rbt-menu");
													  		if(element[0]){
													  			element[0].style.display="block";
													  			var p=element[0].getElementsByTagName("p");
													  			for(var i=0;i<p.length;i++){
													  				p[i].parentNode.removeChild(p[i]);
													  			}
													  			if(name!==''){
													  			var para = document.createElement("p");
													  	 		para.classList.add("dropdown-item");
																var node = document.createTextNode(name);
																var btn=document.createElement("button");
																btn.className="btn-sm btn btn-danger";
																var btnname=document.createTextNode("+");
																btn.appendChild(btnname);
																btn.style.marginLeft="20px";
																para.appendChild(node);
																para.appendChild(btn);
																btn.onclick=()=>{this.setnewState(name)};
													  			element[0].appendChild(para);
													  			}
													  		}													  	 	
													  }}
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
													  onInputChange={(name,value)=>{
													  		var element=document.getElementsByClassName("rbt-menu");
													  		if(element[0]){
													  			element[0].style.display="block";
													  			var p=element[0].getElementsByTagName("p");
													  			for(var i=0;i<p.length;i++){
													  				p[i].parentNode.removeChild(p[i]);
													  			}
													  			if(name!==''){
													  			var para = document.createElement("p");
													  	 		para.classList.add("dropdown-item");
																var node = document.createTextNode(name);
																var btn=document.createElement("button");
																btn.className="btn-sm btn btn-danger";
																var btnname=document.createTextNode("+");
																btn.appendChild(btnname);
																btn.style.marginLeft="20px";
																para.appendChild(node);
																para.appendChild(btn);
																btn.onclick=()=>{this.setDistrict(name)};
													  			element[0].appendChild(para);
													  			}
													  		}													  	 	
													  }}
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
													  onInputChange={(name,value)=>{
													  		var element=document.getElementsByClassName("rbt-menu");
													  		if(element[0]){
													  			element[0].style.display="block";
													  			var p=element[0].getElementsByTagName("p");
													  			for(var i=0;i<p.length;i++){
													  				p[i].parentNode.removeChild(p[i]);
													  			}
													  			if(name!==''){
													  			var para = document.createElement("p");
													  	 		para.classList.add("dropdown-item");
																var node = document.createTextNode(name);
																var btn=document.createElement("button");
																btn.className="btn-sm btn btn-danger";
																var btnname=document.createTextNode("+");
																btn.appendChild(btnname);
																btn.style.marginLeft="20px";
																para.appendChild(node);
																para.appendChild(btn);
																btn.onclick=()=>{this.setSite(name)};
													  			element[0].appendChild(para);
													  			}
													  		}													  	 	
													  }}
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