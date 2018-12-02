import React, { Component } from 'react';
import {reduxForm } from 'redux-form';
import {Typeahead} from 'react-bootstrap-typeahead';
class CreateMachine extends Component{
	componentWillMount(){
		if(this.props.editable===false){
			this.setState({
				editable:false
			})
		}else{
			this.setState({
				editable:true
			})
		}
		if(this.props.mode==='EDIT'){
			const {category,engine_model,model,condition,site,state,district}=this.props.initialValues;
			const enginebrand=engine_model.brand;
			const machinebrand=model.brand;
			this.setState({
				 ...this.props.initialValues,
				 categoryname:[category],
				 enginemodel:[engine_model],
				 enginebrand:[enginebrand],
				 machinemodel:[model],
				 machinebrand:[machinebrand],
				 conditionname:[condition],
				 sitename:[site],
				 statename:[state],
				 districtname:[district]
			});
		}
		else{
			this.setState({
				engine_model_id:'',
				chassis_no:'',
				engine_serial_no:'',
				purchased_on:'',
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
				if(result===true){
					this.setState({
						warrantyerror:false,
						[stateKey]:e.target.value
					})
				}else{
					this.setState({
						warrantyerror:true,
						[stateKey]:e.target.value
					})
				}
			}
			else{
			this.setState({ [stateKey]: e.target.value });
			}
  	}
  	submitUser=()=>{
  			const {warrantyerror}=this.state;
  			var {id,name,category,code,snumber,model,condition,purchased_on,regnum,engine_model,engine_snum,chassis_num,warranty,price,description,site}=this.state;
  			if(warrantyerror){
  				const warrantydiv=document.getElementById("machineWarranty");
  				warrantydiv.classList.add("has-error");
  			}
  			else{
		  		if(this.props.mode==='EDIT'){
		  			const editvalue=this.state;
		  			for(var key in editvalue){
		  				if(typeof(editvalue[key])==='object'){
		  					editvalue[key]=editvalue[key]['id']
		  				}
		  			}
		  			this.props.onEdit(editvalue);
		  			return
		  		}
		  		if(this.state.name.length===0){
		  			return
		  		}
		  		const createvalue={id,name,site,category,code,snumber,model,condition,purchased_on,warranty,price,regnum,engine_model,engine_snum,chassis_num,description};
		  		this.props.onCreate(createvalue);
	  		}
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
  	removehasError=(label)=>{
  		const warranty=document.getElementById(label);
  		warranty.classList.remove('has-error');
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
								<h3 style={{display:'inline'}}>{this.props.mode==='EDIT'?'Edit Machine':'Create Machine'}</h3>
								{this.props.mode==='EDIT' && <button className="btn btn-sm btn-info editButtonMachine" onClick={()=>this.setState({
									editable:true
								})}>Edit Machine</button>}
								</div>
								<div className="container formContainer" >
									<form className="form-inline machineForm" onSubmit={this.props.handleSubmit(this.submitUser)}>
										<div className="form-group col-md-12 inputPaddingMachine">
										    <label  className="col-md-3">Name</label>
										    <input 
										    type="text" 
										    id="nameMachine" 
										    className="form-control col-md-9" 
										    onFocus={()=>this.removehasError('nameMachine')} 
										    onChange={this.onChangeSetToState('name')} 
										    value={this.state.name}
										    disabled={!this.state.editable}
										    />
										    {this.state.name.length===0 && 
										   	<div className="row" style={{'width':'100%'}}>
										   		<div className="col-md-3"></div>
										    	<div className="col-md-9 text-danger">Required Field</div>
										    </div>}
										</div>
										<div className=" col-md-12 inputPaddingMachine">
										  	<div className="row">
											    <label className="col-md-3">Category</label>
											    <div className="col-md-9" style={{marginLeft:'-7px'}}>
											    <Typeahead
											          options={this.props.paramvalue.category}
											          labelKey="name"
											          onChange={(selected) => {
													    this.setState({categoryname:selected});
													    if(selected[0]!==undefined){
													    	this.setState({
													    		category:selected[0].id
													    	});
													    }
													  }}
													  selected={this.state.categoryname}
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
													  disabled={!this.state.editable}
											        />
												</div>
										  	</div>
										  	{!this.state.categoryname && 
													   	<div className="row" style={{'width':'100%'}}>
													   		<div className="col-md-3"></div>
													    	<div className="col-md-9 text-danger">Required Field</div>
													    </div>}
										</div>
										  <div className="form-group col-md-12 inputPaddingMachine">
										    <label  className="col-md-3">Code</label>
										    <input 
										    type="text" 
										    className="form-control col-md-9" 
										    onChange={this.onChangeSetToState('code')} 
										    value={this.state.code}
										    disabled={!this.state.editable}
										    />
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
													  disabled={!this.state.editable}
													/>
												</div>
										  	</div>
										  </div>
										  <div className="form-group col-md-12 inputPaddingMachine">
										    <label  className="col-md-3">Year of Purchase</label>
										    <input 
										    type="text" 
										    className="form-control col-md-9" 
										    onChange={this.onChangeSetToState('purchased_on')} 
										    value={this.state.purchased_on}
										    disabled={!this.state.editable}
										    />
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
													    		model:selected[0].id
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
													  disabled={!this.state.editable}
													/>
												</div>
										  	</div>
										  </div>
										  <div className="form-group col-md-12 inputPaddingMachine">
										    <label  className="col-md-3">Serial Number</label>
										    <input 
										    type="text" 
										    className="form-control col-md-9"  
										    onChange={this.onChangeSetToState('snumber')} 
										    value={this.state.snumber}
										    disabled={!this.state.editable}
										    />
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
													  disabled={!this.state.editable}
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
													    		engine_model:selected[0].id
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
													  disabled={!this.state.editable}
													/>
												</div>
										  	</div>
										  </div>
										  <div className="form-group col-md-12 inputPaddingMachine" >
										    <label  className="col-md-3">Engine Serial Number</label>
										    <input 
										    type="text" 
										    className="form-control col-md-9"   
										    onChange={this.onChangeSetToState('engine_snum')} 
										    value={this.state.engine_snum}
										    disabled={!this.state.editable}/>
										  </div>
										  <div className="form-group col-md-12 inputPaddingMachine">
										    <label  className="col-md-3">Chassis Number</label>
										    <input 
										    type="text" 
										    className="form-control col-md-9"   
										    onChange={this.onChangeSetToState('chassis_num')} 
										    value={this.state.chassis_num}
										    disabled={!this.state.editable}
										    />
										  </div>
										  <div className="form-group col-md-12 inputPaddingMachine">
										    <label  className="col-md-3">Registration Number</label>
										    <input 
										    type="text" 
										    className="form-control col-md-9"  
										    onChange={this.onChangeSetToState('regnum')} 
										    value={this.state.regnum}
										    disabled={!this.state.editable}
										    />
										  </div>
										  <div className=" col-md-12 inputPaddingMachine">
										    <div className="row">
											    <label htmlFor="email" className="col-md-3">Condition</label>
											    <div className="col-md-9" style={{marginLeft:'-7px'}}>
											    <Typeahead
													  onChange={(selected) => {
													    this.setState({conditionname:selected});
													    if(selected[0]!==undefined){
													    	this.setState({
													    		condition:selected[0].id
													    	});
													    }
													  }}
													  options={this.props.paramvalue.condition}
													  labelKey="name"
													  selected={this.state.conditionname}
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
													  disabled={!this.state.editable}
													/>
												</div>
										  	</div>
										  </div>
										  <div className="form-group col-md-12 inputPaddingMachine">
										    <label  className="col-md-3">Unit Price</label>
										    <input 
										    type="text" 
										    className="form-control col-md-9"   
										    onChange={this.onChangeSetToState('price')} 
										    value={this.state.price}
										    disabled={!this.state.editable}/>
										  </div>
										  <div className="form-group col-md-12 inputPaddingMachine" >
										    <label  className="col-md-3">Remarks</label>
										    <input 
										    type="text" 
										    className="form-control col-md-9"  
										    onChange={this.onChangeSetToState('remark')} 
										    value={this.state.remark}
										    disabled={!this.state.editable}/>
										  </div>
										  <div className=" col-md-12 inputPaddingMachine">
										    <div className="row">
											    <label htmlFor="email" className="col-md-3">State</label>
											    <div className="col-md-9" style={{marginLeft:'-7px'}}>
											    <Typeahead
													  onChange={(selected) => {
													    this.setState({statename:selected});
													    if(selected[0]!==undefined){
													    	this.setState({
													    		state_id:selected[0].id
													    	});
													    }
													    //call api for district
													  }}
													  options={this.props.paramvalue.state}
													  labelKey="name"
													  selected={this.state.statename}
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
													  disabled={!this.state.editable}
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
													    this.setState({districtname:selected});
													    if(selected[0]!==undefined){
													    	this.setState({
													    		district_id:selected[0].id
													    	});
													    }
													    //call api for site
													  }}
													  options={this.props.paramvalue.district}
													  labelKey="name"
													  selected={this.state.districtname}
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
													  disabled={!this.state.editable}
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
													    this.setState({sitename:selected});
													    if(selected[0]!==undefined){
													    	this.setState({
													    		site:selected[0].id
													    	});
													    }
													  }}
													  options={this.props.paramvalue.site}
													  labelKey="name"
													  selected={this.state.sitename}
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
													  disabled={!this.state.editable}
													/>
												</div>
										  	</div>
										  </div>
										  <div className="form-group col-md-12 inputPaddingMachine" >
										    <label  className="col-md-3">Warranty</label>
										    <input 
										    id="machineWarranty" 
										    type="text" 
										    className="form-control col-md-9" 
										    onFocus={()=>this.removehasError('machineWarranty')}
										    onChange={this.onChangeSetToState('warranty')} 
										    value={this.state.warranty}
										    disabled={!this.state.editable}/>
										    <span className="col-md-3"></span>
										    {this.state.warrantyerror && <span className="text-danger col-md-9">Enter a valid Number</span>}
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