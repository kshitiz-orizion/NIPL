import React, { Component } from 'react';
import {reduxForm } from 'redux-form';
import {Typeahead} from 'react-bootstrap-typeahead';
class CreateMachine extends Component{
	componentWillMount(){
		if(this.props.mode==='EDIT'){
			const {category,subcategory,enginemodel,enginebrand,machinemodel,machinebrand,condition,site,state,district}=this.props.initialValues;
			this.setState({
				 ...this.props.initialValues,
				 category:[category],
				 subcategory:[subcategory],
				 enginemodel:[enginemodel],
				 enginebrand:[enginebrand],
				 machinemodel:[machinemodel],
				 machinebrand:[machinebrand],
				 condition:[condition],
				 site:[site],
				 state:[state],
				 district:[district]
			});
		}
		else{
			this.setState({
				engine_model_id:'',
				chassis_no:'',
				engine_serial_no:'',
				purchase_year:'',
				remark:'',
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
				category_id:'',
				engine_brand_id:'',
				warranty:''
			})
		}
	}
	onChangeSetToState = stateKey => e => {
			if(stateKey==='warranty'){
				const pattern=/^$|^[0-9]+$/;
				const result=pattern.test(e.target.value);
				const value=Number(e.target.value);
				if(result===true){
					this.setState({
						warrantyerror:false,
						[stateKey]:value
					})
				}else{
					this.setState({
						warrantyerror:true
					})
				}
			}
			else{
			this.setState({ [stateKey]: e.target.value });
			}
  	};
  	submitUser=()=>{
  		console.log(typeof(this.state.warranty));
  		if(this.props.mode==='EDIT'){
  			console.log(this.state);
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
	render()
	{		
		return (
			<div>
				<div className="topHeadingContainer">
					<div className="headingCreateMachine">
						<h3>Machine/{this.props.mode==='EDIT'?'Edit':'Create'} Machine</h3>
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
										<div className="form-group col-md-12 inputPaddingMachine">
										    <label  className="col-md-3">Name</label>
										    <input type="text" className="form-control col-md-9"  onChange={this.onChangeSetToState('name')} value={this.state.name}/>
										  </div>
										<div className=" col-md-12 inputPaddingMachine">
										  	<div className="row">
											    <label className="col-md-3">Category</label>
											    <div className="col-md-9" style={{marginLeft:'-7px'}}>
											    <Typeahead
											          options={this.props.paramvalue.category}
											          labelKey="name"
											          onChange={(selected) => {
													    this.setState({category:selected});
													    if(selected[0]!==undefined){
													    	this.setState({
													    		category_id:selected[0].id
													    	});
													    }
													  }}
													  selected={this.state.category}
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
																btn.setAttribute("type", "button");
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
													    this.setState({subcategory:selected});
													    if(selected[0]!==undefined){
													    	this.setState({
													    		sub_category_id:selected[0].id
													    	});
													    }
													  }}
													  options={this.props.paramvalue.subcategory}
													  labelKey="name"
													  selected={this.state.subcategory}
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
																btn.setAttribute("type", "button");
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
										    <input type="text" className="form-control col-md-9" onChange={this.onChangeSetToState('code')} value={this.state.code}/>
										  </div>
										  <div className=" col-md-12 inputPaddingMachine">
										    <div className="row">
											    <label className="col-md-3">Make</label>
											    <div className="col-md-9" style={{marginLeft:'-7px'}}>
											    <Typeahead
													  onChange={(selected) => {
													    this.setState({machinebrand:selected});
													    if(selected[0]!==undefined){
													    	this.setState({
													    		brand_id:selected[0].id
													    	});
													    }
													  }}
													  options={this.props.paramvalue.machinebrand}
													  labelKey="name"
													  selected={this.state.machinebrand}
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
																btn.setAttribute("type", "button");
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
										    <input type="text" className="form-control col-md-9" onChange={this.onChangeSetToState('purchase_year')} value={this.state.purchase_year}/>
										  </div>
										  <div className=" col-md-12 inputPaddingMachine">
										    <div className="row">
											    <label htmlFor="email" className="col-md-3">Model</label>
											    <div className="col-md-9" style={{marginLeft:'-7px'}}>
											    <Typeahead
													  onChange={(selected) => {
													    this.setState({machinemodel:selected});
													    if(selected[0]!==undefined){
													    	this.setState({
													    		model_id:selected[0].id
													    	});
													    }
													  }}
													  options={this.props.paramvalue.machinemodel}
													  labelKey="name"
													  selected={this.state.machinemodel}
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
																btn.setAttribute("type", "button");
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
										    <input type="text" className="form-control col-md-9"  onChange={this.onChangeSetToState('serial_no')} value={this.state.serial_no}/>
										  </div>
										  <div className=" col-md-12 inputPaddingMachine">
										    <div className="row">
											    <label htmlFor="email" className="col-md-3">Engine Make</label>
											    <div className="col-md-9" style={{marginLeft:'-7px'}}>
											    <Typeahead
													  onChange={(selected) => {
													    this.setState({enginebrand:selected});
													    if(selected[0]!==undefined){
													    	this.setState({
													    		engine_brand_id:selected[0].id
													    	});
													    }
													  }}
													  options={this.props.paramvalue.enginebrand}
													  labelKey="name"
													  selected={this.state.enginebrand}
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
																btn.setAttribute("type", "button");
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
													    this.setState({enginemodel:selected});
													    if(selected[0]!==undefined){
													    	this.setState({
													    		engine_model_id:selected[0].id
													    	});
													    }
													  }}
													  options={this.props.paramvalue.enginemodel}
													  labelKey="name"
													  selected={this.state.enginemodel}
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
																btn.setAttribute("type", "button");
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
										    <input type="text" className="form-control col-md-9"   onChange={this.onChangeSetToState('engine_serial_no')} value={this.state.engine_serial_no}/>
										  </div>
										  <div className="form-group col-md-12 inputPaddingMachine">
										    <label  className="col-md-3">Chassis Number</label>
										    <input type="text" className="form-control col-md-9"   onChange={this.onChangeSetToState('chassis_no')} value={this.state.chassis_no}/>
										  </div>
										  <div className="form-group col-md-12 inputPaddingMachine">
										    <label  className="col-md-3">Registration Number</label>
										    <input type="text" className="form-control col-md-9"  onChange={this.onChangeSetToState('reg_no')} value={this.state.reg_no}/>
										  </div>
										  <div className=" col-md-12 inputPaddingMachine">
										    <div className="row">
											    <label htmlFor="email" className="col-md-3">Condition</label>
											    <div className="col-md-9" style={{marginLeft:'-7px'}}>
											    <Typeahead
													  onChange={(selected) => {
													    this.setState({condition:selected});
													    if(selected[0]!==undefined){
													    	this.setState({
													    		condition_id:selected[0].id
													    	});
													    }
													  }}
													  options={this.props.paramvalue.condition}
													  labelKey="name"
													  selected={this.state.condition}
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
																btn.setAttribute("type", "button");
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
										    <input type="text" className="form-control col-md-9"   onChange={this.onChangeSetToState('price')} value={this.state.price}/>
										  </div>
										  <div className="form-group col-md-12 inputPaddingMachine" >
										    <label  className="col-md-3">Remarks</label>
										    <input type="text" className="form-control col-md-9"  onChange={this.onChangeSetToState('remark')} value={this.state.remark}/>
										  </div>
										  <div className=" col-md-12 inputPaddingMachine">
										    <div className="row">
											    <label htmlFor="email" className="col-md-3">State</label>
											    <div className="col-md-9" style={{marginLeft:'-7px'}}>
											    <Typeahead
													  onChange={(selected) => {
													    this.setState({state:selected});
													    if(selected[0]!==undefined){
													    	this.setState({
													    		state_id:selected[0].id
													    	});
													    }
													    //call api for district
													  }}
													  options={this.props.paramvalue.state}
													  labelKey="name"
													  selected={this.state.state}
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
																btn.setAttribute("type", "button");
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
													    this.setState({district:selected});
													    if(selected[0]!==undefined){
													    	this.setState({
													    		district_id:selected[0].id
													    	});
													    }
													    //call api for site
													  }}
													  options={this.props.paramvalue.district}
													  labelKey="name"
													  selected={this.state.district}
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
																btn.setAttribute("type", "button");
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
													    this.setState({site:selected});
													    if(selected[0]!==undefined){
													    	this.setState({
													    		site_id:selected[0].id
													    	});
													    }
													  }}
													  options={this.props.paramvalue.site}
													  labelKey="name"
													  selected={this.state.site}
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
																btn.setAttribute("type", "button");
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
										    <label  className="col-md-3">Operating Condition</label>
										    <input type="text" className="form-control col-md-9"  onChange={this.onChangeSetToState('operating_condition')} value={this.state.operating_condition}/>
										  </div>
										  <div className="form-group col-md-12 inputPaddingMachine" >
										    <label  className="col-md-3">Warranty</label>
										    <input type="text" className="form-control col-md-9" onChange={this.onChangeSetToState('warranty')} value={this.state.warranty}/>
										    <span className="col-md-3"></span>
										    {this.state.warrantyerror && <span className="text-danger col-md-9">not a valid number</span>}
										  </div>
									</form>
								</div>
								<div className="container footerContainerMachine">
									<div className="footerMachine" >
										<div className="cancelFooterMachine">
										Cancel
										</div>
										<button className="btn btn-primary btn-sm saveButtonFooterMachine" onClick={this.props.handleSubmit(this.submitUser)}>Submit</button>
										<button type="submit" className="btn btn-default btn-sm submitAndEditFooterMachine" >Save & Continue Editing</button>
									</div>
								</div>	
				</div>
			</div>
			)
	}

}

export default reduxForm({ form: 'CreateMachine' })(CreateMachine);