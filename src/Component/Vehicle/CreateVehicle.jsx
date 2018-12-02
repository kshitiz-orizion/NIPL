import React, { Component } from 'react';
import {reduxForm } from 'redux-form';
import {Typeahead} from 'react-bootstrap-typeahead';
class CreateVehicles extends Component{
	componentWillMount(){
		if(this.props.mode==='EDIT'){
			const {site,vehicle_type,model,status,ownership,body,engine_model,drive,brake,fuel,make,enginebrand}=this.props.initialValues;
			this.setState({
				 ...this.props.initialValues,
				 sitename:[site],
				 vehicle_typename:[vehicle_type],
				 makename:make,
				 modelname:[model],
				 statusname:[status],
				 ownershipname:[ownership],
				 bodyname:[body],
				 engine_modelname:[engine_model],
				 enginebrandname:enginebrand,
				 drivename:[drive],
				 brakename:[brake],
				 fuelname:[fuel],
				 navbar:"details"
			});
		}
		else{
			this.setState({
					navbar:'details'
			})
		}
	}
	onChangeSetToState = stateKey => e => {
			this.setState({ [stateKey]: e.target.value });
  	};
  	submitVehicles=async()=>{
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
  	setActive=(label)=>{
  		this.setState({
  			navbar:label
  		});
  	}
	render(){
		return (
			<div>
				<div className="topHeadingContainer">
					<div className="headingCreateMachine">
						<h3>Vehicles/Create Vehicles</h3>
					</div>
					<div className="saveButtonHeader" >
						<button className="btn btn-sm btn-primary">Save Vehicles</button>
					</div>
					<div className="cancelHeading" >
						Cancel
					</div>
				</div>
				<div className="flexFormContainer">	
					<div className="navbarContainer">
						<div className={this.state.navbar==="details"?"activenavbar navbarField":"navbarField"} onClick={()=>this.setActive("details")}>
							<div className="navicon">
								<i className="fa fa-pencil-square-o" aria-hidden="true"></i>
							</div>
							<div className="navfield">
								Details
							</div>
						</div>
						<div className={this.state.navbar==="specs"?"activenavbar navbarField":"navbarField"} onClick={()=>this.setActive("specs")}>
							<div className="navicon">
								<i className="fa fa-indent" aria-hidden="true"></i>
							</div>
							<div className="navfield">
								Specifications
							</div>
						</div>
						<div className={this.state.navbar==="engine"?"activenavbar navbarField":"navbarField"} onClick={()=>this.setActive("engine")}>
							<div className="navicon">
								<i className="fa fa-cogs" aria-hidden="true"></i>
							</div>
							<div className="navfield">
								Engine & Transmission
							</div>
						</div>
						<div className={this.state.navbar==="wheels"?"activenavbar navbarField":"navbarField"} onClick={()=>this.setActive("wheels")}>
							<div className="navicon">
								<i className="fa fa-life-ring" aria-hidden="true"></i>
							</div>
							<div className="navfield">
								Wheels & Tires
							</div>
						</div>
						<div className={this.state.navbar==="fluids"?"activenavbar navbarField":"navbarField"} onClick={()=>this.setActive("fluids")}>
							<div className="navicon">
								<i className="fa fa-tachometer" aria-hidden="true"></i>
							</div>
							<div className="navfield">
								Fluids
							</div>
						</div>
						<div className={this.state.navbar==="status"?"activenavbar navbarField":"navbarField"} onClick={()=>this.setActive("status")}>
							<div className="navicon">
								<i className="fa fa-cog" aria-hidden="true"></i>
							</div>
							<div className="navfield">
								Current Status
							</div>
						</div>
					</div>		
					<div className="container allFormContainer">
						<h5>{this.props.mode==='EDIT'?'Edit Vehicles':'Create Vehicles'}</h5>
						<hr/>
						<form className="form-inline machineForm" onSubmit={this.props.handleSubmit(this.submitVehicles)}>
							{this.state.navbar==="details" && 
							<div style={{width:'100%'}}>
								<div className="form-group col-md-12 inputPaddingMachine">
									<label  className="col-md-3">VIN</label>
										<input type="text" className="form-control col-md-9" value={this.state.vin} onChange={this.onChangeSetToState('vin')}/>
								</div>
								<div className="form-group col-md-12 inputPaddingMachine">
									<label  className="col-md-3">NIPL CODE</label>
										<input type="text" className="form-control col-md-9" value={this.state.code} onChange={this.onChangeSetToState('code')}/>
								</div>
								<div className="col-md-12 inputPaddingMachine">
									<div className="row">
										<label  className="col-md-3">Type</label>
										<div className="col-md-9" style={{marginLeft:'-7px'}}>
											<Typeahead
												          options={this.props.componentValue.type}
												          labelKey="name"
												          onChange={(selected) => {
														    this.setState({vehicle_typename:selected});
														    if(selected[0]!==undefined){
														    	this.setState({
														    		vehicle_type:selected[0].id
														    	});
														    }
														  }}
														  selected={this.state.vehicle_typename}
												        />
										</div>
									</div>
								</div>
								<div className="col-md-12 inputPaddingMachine">
									<div className="row">
										<label  className="col-md-3">Make</label>
										<div className="col-md-9" style={{marginLeft:'-7px'}}>
											<Typeahead
												          options={this.props.componentValue.make}
												          labelKey="name"
												          onChange={(selected) => {
														    this.setState({makename:selected});
														    if(selected[0]!==undefined){
														    	this.setState({
														    		make:selected[0].id
														    	});
														    }
														  }}
														  selected={this.state.makename}
												        />
										</div>
									</div>
								</div>
								<div className="col-md-12 inputPaddingMachine">
									<div className="row">
										<label  className="col-md-3">Model</label>
										<div className="col-md-9" style={{marginLeft:'-7px'}}>
											<Typeahead
												          options={this.props.componentValue.model}
												          labelKey="name"
												          onChange={(selected) => {
														    this.setState({modelname:selected});
														    if(selected[0]!==undefined){
														    	this.setState({
														    		model:selected[0].id
														    	});
														    }
														  }}
														  selected={this.state.modelname}
												        />
										</div>
									</div>
								</div>
								<div className="form-group col-md-12 inputPaddingMachine">
									<label  className="col-md-3">Year</label>
										<input type="number" className="form-control col-md-9" value={this.state.year} onChange={this.onChangeSetToState('year')}/>
								</div>
								<div className="form-group col-md-12 inputPaddingMachine">
									<label  className="col-md-3">Registration State</label>
										<input type="text" className="form-control col-md-9" value={this.state.registration} onChange={this.onChangeSetToState('registration')}/>
								</div>
								<div className="col-md-12 inputPaddingMachine">
									<div className="row">
										<label  className="col-md-3">Status</label>
										<div className="col-md-9" style={{marginLeft:'-7px'}}>
											<Typeahead
												          options={this.props.componentValue.status}
												          labelKey="name"
												          onChange={(selected) => {
														    this.setState({statusname:selected});
														    if(selected[0]!==undefined){
														    	this.setState({
														    		status:selected[0].id
														    	});
														    }
														  }}
														  selected={this.state.statusname}
												        />
										</div>
									</div>
								</div>
								<div className="col-md-12 inputPaddingMachine">
									<div className="row">
										<label  className="col-md-3">Ownership</label>
										<div className="col-md-9" style={{marginLeft:'-7px'}}>
											<Typeahead
												          options={this.props.componentValue.ownership}
												          labelKey="name"
												          onChange={(selected) => {
														    this.setState({ownershipname:selected});
														    if(selected[0]!==undefined){
														    	this.setState({
														    		ownership:selected[0].id
														    	});
														    }
														  }}
														  selected={this.state.ownershipname}
												        />
										</div>
									</div>
								</div>
								<div className="col-md-12 inputPaddingMachine">
									<div className="row">
										<label  className="col-md-3">Color</label>
										<div className="col-md-9" style={{marginLeft:'-7px'}}>
											<Typeahead
												          options={this.props.componentValue.color}
												          labelKey="name"
												          onChange={(selected) => {
														    this.setState({colorname:selected});
														    if(selected[0]!==undefined){
														    	this.setState({
														    		color:selected[0].id
														    	});
														    }
														  }}
														  selected={this.state.colorname}
												        />
										</div>
									</div>
								</div>
								<div className="col-md-12 inputPaddingMachine">
									<div className="row">
										<label  className="col-md-3">Body Type</label>
										<div className="col-md-9" style={{marginLeft:'-7px'}}>
											<Typeahead
												          options={this.props.componentValue.body}
												          labelKey="name"
												          onChange={(selected) => {
														    this.setState({bodyname:selected});
														    if(selected[0]!==undefined){
														    	this.setState({
														    		body:selected[0].id
														    	});
														    }
														  }}
														  selected={this.state.bodyname}
												        />
										</div>
									</div>
								</div>
								<div className="form-group col-md-12 inputPaddingMachine">
									<label  className="col-md-3">Unit Price</label>
										<input type="number" className="form-control col-md-9" value={this.state.price} onChange={this.onChangeSetToState('price')}/>
								</div>
							</div>
							}
							{this.state.navbar==="specs" && 
							<div style={{width:'100%'}}>
								<div className="form-group col-md-12 inputPaddingMachine">
									<label  className="col-md-3">Width</label>
										<input type="number" className="form-control col-md-9" value={this.state.width} onChange={this.onChangeSetToState('width')}/>
								</div>
								<div className="form-group col-md-12 inputPaddingMachine">
									<label  className="col-md-3">Length</label>
										<input type="number" className="form-control col-md-9" value={this.state.length} onChange={this.onChangeSetToState('length')}/>
								</div>
								<div className="form-group col-md-12 inputPaddingMachine">
									<label  className="col-md-3">Height</label>
										<input type="number" className="form-control col-md-9" value={this.state.height} onChange={this.onChangeSetToState('height')}/>
								</div>
								<div className="form-group col-md-12 inputPaddingMachine">
									<label  className="col-md-3">Interior Volume</label>
										<input type="number" className="form-control col-md-9" value={this.state.interior_volume} onChange={this.onChangeSetToState('interior_volume')}/>
								</div>
								<div className="form-group col-md-12 inputPaddingMachine">
									<label  className="col-md-3">Passenger Volume</label>
										<input type="number" className="form-control col-md-9" value={this.state.passenger_volume} onChange={this.onChangeSetToState('passenger_volume')}/>
								</div>
								<div className="form-group col-md-12 inputPaddingMachine">
									<label  className="col-md-3">Cargo Volume</label>
										<input type="number" className="form-control col-md-9" value={this.state.cargo_volume} onChange={this.onChangeSetToState('cargo_volume')}/>
								</div>
								<div className="form-group col-md-12 inputPaddingMachine">
									<label  className="col-md-3">Weight</label>
										<input type="number" className="form-control col-md-9" value={this.state.wight} onChange={this.onChangeSetToState('wight')}/>
								</div>
								<div className="form-group col-md-12 inputPaddingMachine">
									<label  className="col-md-3">Curb Weight</label>
										<input type="number" className="form-control col-md-9" value={this.state.curb_wight} onChange={this.onChangeSetToState('curb_wight')}/>
								</div>
								<div className="form-group col-md-12 inputPaddingMachine">
									<label  className="col-md-3">Gross Vehicle Weight Rating</label>
										<input type="number" className="form-control col-md-9" value={this.state.gvwr} onChange={this.onChangeSetToState('gvwr')}/>
								</div>
								<div className="form-group col-md-12 inputPaddingMachine">
									<label  className="col-md-3">Performance</label>
										<input type="number" className="form-control col-md-9" value={this.state.performance} onChange={this.onChangeSetToState('performance')}/>
								</div>
								<div className="form-group col-md-12 inputPaddingMachine">
									<label  className="col-md-3">Towing Capacity</label>
										<input type="number" className="form-control col-md-9" value={this.state.towing_capacity} onChange={this.onChangeSetToState('towing_capacity')}/>
								</div>
								<div className="form-group col-md-12 inputPaddingMachine">
									<label  className="col-md-3">Max Payload</label>
										<input type="number" className="form-control col-md-9" value={this.state.max_payload}onChange={this.onChangeSetToState('max_payload')}/>
								</div>
								<div className="form-group col-md-12 inputPaddingMachine">
									<label  className="col-md-3">Fuel Economy</label>
										<input type="number" className="form-control col-md-9" value={this.state.fuel_economy} onChange={this.onChangeSetToState('fuel_economy')}/>
								</div>
							</div>
							}
							{this.state.navbar==="engine" && 
							<div style={{width:'100%'}}>
								<div className="col-md-12 inputPaddingMachine">
									<div className="row">
										<label  className="col-md-3">Engine Make</label>
										<div className="col-md-9" style={{marginLeft:'-7px'}}>
											<Typeahead
												          options={this.props.componentValue.enginebrand}
												          labelKey="name"
												          onChange={(selected) => {
														    this.setState({enginebrandname:selected});
														    if(selected[0]!==undefined){
														    	this.setState({
														    		enginebrand:selected[0].id
														    	});
														    }
														  }}
														  selected={this.state.enginebrandname}
												        />
										</div>
									</div>
								</div>
								<div className="col-md-12 inputPaddingMachine">
									<div className="row">
										<label  className="col-md-3">Engine Model</label>
										<div className="col-md-9" style={{marginLeft:'-7px'}}>
											<Typeahead
												          options={this.props.componentValue.enginemodel}
												          labelKey="name"
												          onChange={(selected) => {
														    this.setState({engine_modelname:selected});
														    if(selected[0]!==undefined){
														    	this.setState({
														    		engine_model:selected[0].id
														    	});
														    }
														  }}
														  selected={this.state.engine_modelname}
												        />
										</div>
									</div>
								</div>
								<div className="form-group col-md-12 inputPaddingMachine">
									<label  className="col-md-3">Cylinder</label>
										<input type="number" className="form-control col-md-9" value={this.state.cylinder}onChange={this.onChangeSetToState('cylinder')}/>
								</div>
								<div className="form-group col-md-12 inputPaddingMachine">
									<label  className="col-md-3">Compression</label>
										<input type="number" className="form-control col-md-9" value={this.state.compression} onChange={this.onChangeSetToState('compression')}/>
								</div>
								<div className="form-group col-md-12 inputPaddingMachine">
									<label  className="col-md-3">Stroke</label>
										<input type="number" className="form-control col-md-9" value={this.state.stoke} onChange={this.onChangeSetToState('stoke')}/>
								</div>
								<div className="form-group col-md-12 inputPaddingMachine">
									<label  className="col-md-3">Max Torque</label>
										<input type="number" className="form-control col-md-9" value={this.state.max_torque} onChange={this.onChangeSetToState('max_torque')}/>
								</div>
							</div>
							}
							{this.state.navbar==="wheels" && 
							<div style={{width:'100%'}}>
								<div className="col-md-12 inputPaddingMachine">
									<div className="row">
										<label  className="col-md-3">Drive Type</label>
										<div className="col-md-9" style={{marginLeft:'-7px'}}>
											<Typeahead
												          options={this.props.componentValue.drive}
												          labelKey="name"
												          onChange={(selected) => {
														    this.setState({drivename:selected});
														    if(selected[0]!==undefined){
														    	this.setState({
														    		drive:selected[0].id
														    	});
														    }
														  }}
														  selected={this.state.drivename}
												        />
										</div>
									</div>
								</div>
								<div className="col-md-12 inputPaddingMachine">
									<div className="row">
										<label  className="col-md-3">Brake System</label>
										<div className="col-md-9" style={{marginLeft:'-7px'}}>
											<Typeahead
												          options={this.props.componentValue.brake}
												          labelKey="name"
												          onChange={(selected) => {
														    this.setState({brakename:selected});
														    if(selected[0]!==undefined){
														    	this.setState({
														    		brake:selected[0].id
														    	});
														    }
														  }}
														  selected={this.state.brakename}
												        />
										</div>
									</div>
								</div>
								<div className="form-group col-md-12 inputPaddingMachine">
									<label  className="col-md-3">No. of Wheels</label>
										<input type="number" className="form-control col-md-9" value={this.state.wheels} onChange={this.onChangeSetToState('wheels')}/>
								</div>
							</div>
							}
							{this.state.navbar==="fluids" && 
							<div style={{width:'100%'}}>
								<div className="col-md-12 inputPaddingMachine">
									<div className="row">
										<label  className="col-md-3">Fuel Type</label>
										<div className="col-md-9" style={{marginLeft:'-7px'}}>
											<Typeahead
												          options={this.props.componentValue.fuel}
												          labelKey="name"
												          onChange={(selected) => {
														    this.setState({fuelname:selected});
														    if(selected[0]!==undefined){
														    	this.setState({
														    		fuel:selected[0].id
														    	});
														    }
														  }}
														  selected={this.state.fuelname}
												        />
										</div>
									</div>
								</div>
								<div className="form-group col-md-12 inputPaddingMachine">
									<label  className="col-md-3">Fuel Tank Capacity</label>
										<input type="number" className="form-control col-md-9" value={this.state.fuel_tank} onChange={this.onChangeSetToState('fuel_tank')}/>
								</div>
							</div>
							}
							{this.state.navbar==="status" && 
							<div style={{width:'100%'}}>
								<div className="form-group col-md-12 inputPaddingMachine">
									<label  className="col-md-3">Current Reading</label>
										<input type="number" className="form-control col-md-9" value={this.state.current_reading} onChange={this.onChangeSetToState('current_reading')}/>
								</div>
								<div className="form-group col-md-12 inputPaddingMachine">
									<label  className="col-md-3">Avg Users Per Day</label>
										<input type="number" className="form-control col-md-9" value={this.state.avg_uses} onChange={this.onChangeSetToState('avg_uses')}/>
								</div>
								<div className="form-group col-md-12 inputPaddingMachine">
									<label  className="col-md-3">Service Requires After</label>
										<input type="number" className="form-control col-md-9" value={this.state.service_frequency} onChange={this.onChangeSetToState('service_frequency')}/>
								</div>
								<div className="col-md-12 inputPaddingMachine">
									<div className="row">
										<label  className="col-md-3">Available at Site</label>
										<div className="col-md-9" style={{marginLeft:'-7px'}}>
											<Typeahead
												          options={this.props.componentValue.site}
												          labelKey="name"
												          onChange={(selected) => {
														    this.setState({sitename:selected});
														    if(selected[0]!==undefined){
														    	this.setState({
														    		site:selected[0].id
														    	});
														    }
														  }}
														  selected={this.state.sitename}
												        />
										</div>
									</div>
								</div>
							</div>
							}
						</form>	
					</div>
					<div className="footerVehicle">
						<div className="container footerContainerMachine">
							<div className="footerMachine" >
								<div className="cancelFooterMachine">
									Cancel
								</div>
								<button type="submit" className="btn btn-primary btn-sm saveButtonFooterMachine" onClick={this.props.handleSubmit(this.submitVehicles)}>Submit</button>
								<button type="button" className="btn btn-default btn-sm submitAndEditFooterMachine" >Save & Continue Editing</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			)
	}

}

export default reduxForm({ form: 'CreateVehicles' })(CreateVehicles);