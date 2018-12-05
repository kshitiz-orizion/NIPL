import React, { Component } from 'react';
import {reduxForm } from 'redux-form';
import {Typeahead} from 'react-bootstrap-typeahead';
import history from '../../Inits/history';
class CreateVehicles extends Component{
	componentWillMount(){
		if(this.props.mode==='EDIT'){
			const {site,vehicle_type,model,status,ownership,body,engine_model,drive,brake,fuel,make,enginebrand,color}=this.props.initialValues;
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
				 colorname:[color],
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
  		var formerror=false;
  		if(!this.state.vin){
  				this.setState({
  					vehicleVin:true,
  					errorpageindetails:true
  				});
  				formerror=true;
  			}
  		if(!this.state.code){
  				this.setState({
  					vehicleCode:true,
  					errorpageindetails:true
  				});
  				formerror=true;
  			}
  		if(!this.state.vehicle_type){
  				this.setState({
  					vehicleType:true,
  					errorpageindetails:true
  				});
  				formerror=true;
  			}
  		if(!this.state.year){
  				this.setState({
  					vehicleYear:true,
  					errorpageindetails:true
  				});
  				formerror=true;
  			}
  		if(!this.state.registration){
  				this.setState({
  					vehicleRegistration:true,
  					errorpageindetails:true
  				});
  				formerror=true;
  			}
  		if(!this.state.model){
  				this.setState({
  					vehicleModel:true,
  					errorpageindetails:true
  				});
  				formerror=true;
  			}
  		if(!this.state.model){
  				this.setState({
  					vehicleModel:true,
  					errorpageindetails:true
  				});
  				formerror=true;
  			}
  		if(!this.state.status){
  				this.setState({
  					vehicleStatus:true,
  					errorpageindetails:true
  				});
  				formerror=true;
  			}
  		if(!this.state.ownership){
  				this.setState({
  					vehicleOwnership:true,
  					errorpageindetails:true
  				});
  				formerror=true;
  			}
  		if(!this.state.color){
  				this.setState({
  					vehicleColor:true,
  					errorpageindetails:true
  				});
  				formerror=true;
  			}
  		if(!this.state.body){
  				this.setState({
  					vehicleBody:true,
  					errorpageindetails:true
  				});
  				formerror=true;
  			}
  		if(!this.state.width){
  				this.setState({
  					vehicleWidth:true,
  					errorpageinspecs:true
  				});
  				formerror=true;
  			}
  		if(!this.state.length){
  				this.setState({
  					vehicleLength:true,
  					errorpageinspecs:true
  				});
  				formerror=true;
  			}
  		if(!this.state.height){
  				this.setState({
  					vehicleHeight:true,
  					errorpageinspecs:true
  				});
  				formerror=true;
  			}
  		if(!this.state.interior_volume){
  				this.setState({
  					vehicleInteriorVolume:true,
  					errorpageinspecs:true
  				});
  				formerror=true;
  			}
  		if(!this.state.passenger_volume){
  				this.setState({
  					vehiclePassengerVolume:true,
  					errorpageinspecs:true
  				});
  				formerror=true;
  			}
  		if(!this.state.passenger_volume){
  				this.setState({
  					vehiclePassengerVolume:true,
  					errorpageinspecs:true
  				});
  				formerror=true;
  			}
  		if(!this.state.wight){
  				this.setState({
  					vehicleWeight:true,
  					errorpageinspecs:true
  				});
  				formerror=true;
  			}
  		if(!this.state.curb_wight){
  				this.setState({
  					vehicleCurbWeight:true,
  					errorpageinspecs:true
  				});
  				formerror=true;
  			}
  		if(!this.state.gvwr){
  				this.setState({
  					vehicleGVWR:true,
  					errorpageinspecs:true
  				});
  				formerror=true;
  			}
  		if(!this.state.performance){
  				this.setState({
  					vehiclePerformance:true,
  					errorpageinspecs:true
  				});
  				formerror=true;
  			}
  		if(!this.state.towing_capacity){
  				this.setState({
  					vehicleTowingCapacity:true,
  					errorpageinspecs:true
  				});
  				formerror=true;
  			}
  		if(!this.state.max_payload){
  				this.setState({
  					vehicleMaxPayload:true,
  					errorpageinspecs:true
  				});
  				formerror=true;
  			}
  		if(!this.state.fuel_economy){
  				this.setState({
  					vehicleFuelEconomy:true,
  					errorpageinspecs:true
  				});
  				formerror=true;
  			}
  		if(!this.state.fuel_economy){
  				this.setState({
  					vehicleFuelEconomy:true,
  					errorpageinspecs:true
  				});
  				formerror=true;
  			}
  		if(!this.state.engine_model){
  				this.setState({
  					vehicleEngineModel:true,
  					errorpageinengine:true
  				});
  				formerror=true;
  			}
  		if(!this.state.cylinder){
  				this.setState({
  					vehicleCylinder:true,
  					errorpageinengine:true
  				});
  				formerror=true;
  			}
  		if(!this.state.compression){
  				this.setState({
  					vehicleCompression:true,
  					errorpageinengine:true
  				});
  				formerror=true;
  			}
  		if(!this.state.stoke){
  				this.setState({
  					vehicleStoke:true,
  					errorpageinengine:true
  				});
  				formerror=true;
  			}
  		if(!this.state.max_torque){
  				this.setState({
  					vehicleMaxTorque:true,
  					errorpageinengine:true
  				});
  				formerror=true;
  			}
  		if(!this.state.drive){
  				this.setState({
  					vehicleDrive:true,
  					errorpageinwheels:true
  				});
  				formerror=true;
  			}
  		if(!this.state.brake){
  				this.setState({
  					vehicleBrake:true,
  					errorpageinwheels:true
  				});
  				formerror=true;
  			}
  		if(!this.state.wheels){
  				this.setState({
  					vehicleWheels:true,
  					errorpageinwheels:true
  				});
  				formerror=true;
  			}
  		if(!this.state.fuel){
  				this.setState({
  					vehicleFuel:true,
  					errorpageinfuel:true
  				});
  				formerror=true;
  			}
  		if(!this.state.fuel_tank){
  				this.setState({
  					vehicleFuelTank:true,
  					errorpageinfuel:true
  				});
  				formerror=true;
  			}
  		if(!this.state.current_reading){
  				this.setState({
  					vehicleCurrentReading:true,
  					errorpageincurrent:true
  				});
  				formerror=true;
  			}
  		if(!this.state.avg_uses){
  				this.setState({
  					vehicleAvgUsers:true,
  					errorpageincurrent:true
  				});
  				formerror=true;
  			}
  		if(!this.state.service_frequency){
  				this.setState({
  					vehicleServiceFrequency:true,
  					errorpageincurrent:true
  				});
  				formerror=true;
  			}
  		if(!this.state.site){
  				this.setState({
  					vehicleSite:true,
  					errorpageincurrent:true
  				});
  				formerror=true;
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
  	setActive=(label)=>{
  		this.setState({
  			navbar:label,
  		});
  	}
  	removehasError=(label,key)=>{
  		const errorLabel=document.getElementById(label);
  		errorLabel.classList.remove('has-error');
  		this.setState({
  			[label]:false
  		})
  		if(key==='details'){
  			this.setState({
  				errorpageindetails:false
  			});
  		}
  		if(key==='specs'){
  			this.setState({
  				errorpageinspecs:false
  			})
  		}
  		if(key==='engine'){
  			this.setState({
  				errorpageinengine:false
  			})
  		}
  		if(key==='fluids'){
  			this.setState({
  				errorpageinfuel:false
  			})
  		}
  		if(key==='status'){
  			this.setState({
  				errorpageincurrent:false
  			})
  		}
  		if(key==='wheels'){
  			this.setState({
  				errorpageinwheels:false
  			})
  		}
  	}
	render(){
		const vehicleTypeError=this.state.vehicleType?{id:"vehicleType",className:"has-error"}:{id:"vehicleType"};
		const vehicleModelError=this.state.vehicleModel?{id:"vehicleModel",className:"has-error"}:{id:"vehicleModel"};
		const vehicleStatusError=this.state.vehicleStatus?{id:"vehicleStatus",className:"has-error"}:{id:"vehicleStatus"};
		const vehicleOwnershipError=this.state.vehicleOwnership?{id:"vehicleOwnership",className:"has-error"}:{id:"vehicleOwnership"};
		const vehicleColorError=this.state.vehicleColor?{id:"vehicleColor",className:"has-error"}:{id:"vehicleColor"};
		const vehicleBodyError=this.state.vehicleBody?{id:"vehicleBody",className:"has-error"}:{id:"vehicleBody"};
		const vehicleEngineModelError=this.state.vehicleEngineModel?{id:"vehicleEngineModel",className:"has-error"}:{id:"vehicleEngineModel"};
		const vehicleDriveError=this.state.vehicleDrive?{id:"vehicleDrive",className:"has-error"}:{id:"vehicleDrive"};
		const vehicleBrakeError=this.state.vehicleBrake?{id:"vehicleBrake",className:"has-error"}:{id:"vehicleBrake"};
		const vehicleFuelError=this.state.vehicleFuel?{id:"vehicleFuel",className:"has-error"}:{id:"vehicleFuel"};
		const vehicleSiteError=this.state.vehicleSite?{id:"vehicleSite",className:"has-error"}:{id:"vehicleSite"};
		return (
			<div>
				<div className="topHeadingContainer">
					<div className="headingCreateMachine">
						<h3>Vehicles/Create Vehicles</h3>
					</div>
					<div className="saveButtonHeader" >
						<button className="btn btn-sm btn-primary">Save Vehicles</button>
					</div>
					<div className="cancelHeading" onClick={()=>history.goBack()}>
						Cancel
					</div>
				</div>
				<div className="flexFormContainer">	
					<div className="navbarContainer">
						<div className={this.state.navbar==="details"?"activenavbar navbarField":"navbarField"} onClick={()=>this.setActive("details")}>
							<div className="navicon">
								<i className="fa fa-pencil-square-o" aria-hidden="true"></i>
							</div>
							<div className={this.state.errorpageindetails===true?"text-danger navfield":"navfield"}>
								Details{this.state.errorpageindetails===true && <i className="fa fa-exclamation-triangle"></i>}
							</div>
						</div>
						<div className={this.state.navbar==="specs"?"activenavbar navbarField":"navbarField"} onClick={()=>this.setActive("specs")}>
							<div className="navicon">
								<i className="fa fa-indent" aria-hidden="true"></i>
							</div>
							<div className={this.state.errorpageinspecs===true?"text-danger navfield":"navfield"}>
								Specifications{this.state.errorpageinspecs===true && <i className="fa fa-exclamation-triangle"></i>}
							</div>
						</div>
						<div className={this.state.navbar==="engine"?"activenavbar navbarField":"navbarField"} onClick={()=>this.setActive("engine")}>
							<div className="navicon">
								<i className="fa fa-cogs" aria-hidden="true"></i>
							</div>
							<div className={this.state.errorpageinengine===true?"text-danger navfield":"navfield"}>
								Engine & Transmission{this.state.errorpageinengine===true && <i className="fa fa-exclamation-triangle"></i>}
							</div>
						</div>
						<div className={this.state.navbar==="wheels"?"activenavbar navbarField":"navbarField"} onClick={()=>this.setActive("wheels")}>
							<div className="navicon">
								<i className="fa fa-life-ring" aria-hidden="true"></i>
							</div>
							<div className={this.state.errorpageinwheels===true?"text-danger navfield":"navfield"}>
								Wheels & Tires{this.state.errorpageinwheels===true && <i className="fa fa-exclamation-triangle"></i>}
							</div>
						</div>
						<div className={this.state.navbar==="fluids"?"activenavbar navbarField":"navbarField"} onClick={()=>this.setActive("fluids")}>
							<div className="navicon">
								<i className="fa fa-tachometer" aria-hidden="true"></i>
							</div>
							<div className={this.state.errorpageinfuel===true?"text-danger navfield":"navfield"}>
								Fluids{this.state.errorpageinfuel===true && <i className="fa fa-exclamation-triangle"></i>}
							</div>
						</div>
						<div className={this.state.navbar==="status"?"activenavbar navbarField":"navbarField"} onClick={()=>this.setActive("status")}>
							<div className="navicon">
								<i className="fa fa-cog" aria-hidden="true"></i>
							</div>
							<div className={this.state.errorpageincurrent===true?"text-danger navfield":"navfield"}>
								Current Status{this.state.errorpageincurrent===true && <i className="fa fa-exclamation-triangle"></i>}
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
										<input 
										type="text" 
										className={this.state.vehicleVin?"form-control col-md-9 has-error":"form-control col-md-9"}
										value={this.state.vin} 
										onChange={this.onChangeSetToState('vin')}
										id="vehicleVin" 
										onFocus={()=>this.removehasError('vehicleVin','details')}
										/>
										{this.state.vehicleVin && 
										   	<div className="row" style={{'width':'100%'}}>
										   		<div className="col-md-3"></div>
										    	<div className="col-md-9 text-danger">Required Field</div>
										    </div>}
								</div>
								<div className="form-group col-md-12 inputPaddingMachine">
									<label  className="col-md-3">NIPL CODE</label>
										<input 
										type="text" 
										className={this.state.vehicleCode?"form-control col-md-9 has-error":"form-control col-md-9"}
										value={this.state.code} 
										onChange={this.onChangeSetToState('code')}
										id="vehicleCode" 
										onFocus={()=>this.removehasError('vehicleCode','details')}
										/>
										{this.state.vehicleCode && 
										   	<div className="row" style={{'width':'100%'}}>
										   		<div className="col-md-3"></div>
										    	<div className="col-md-9 text-danger">Required Field</div>
										    </div>}
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
														  inputProps={vehicleTypeError}
													  	  onFocus={()=>this.removehasError('vehicleType','details')}
														  selected={this.state.vehicle_typename}
												        />
										</div>
									</div>
									{this.state.vehicleType && 
													   	<div className="row" style={{'width':'100%'}}>
													   		<div className="col-md-3"></div>
													    	<div className="col-md-9 text-danger">Required Field</div>
													    </div>}
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
														  inputProps={vehicleModelError}
													  	  onFocus={()=>this.removehasError('vehicleModel','details')}
														  selected={this.state.modelname}
												        />
										</div>
									</div>
									{this.state.vehicleModel && 
													   	<div className="row" style={{'width':'100%'}}>
													   		<div className="col-md-3"></div>
													    	<div className="col-md-9 text-danger">Required Field</div>
													    </div>}
								</div>
								<div className="form-group col-md-12 inputPaddingMachine">
									<label  className="col-md-3">Year</label>
										<input 
										type="number" 
										className={this.state.vehicleYear?"form-control col-md-9 has-error":"form-control col-md-9"} 
										value={this.state.year} 
										onChange={this.onChangeSetToState('year')}
										id="vehicleYear" 
										onFocus={()=>this.removehasError('vehicleYear','details')}
										/>
										{this.state.vehicleYear && 
										   	<div className="row" style={{'width':'100%'}}>
										   		<div className="col-md-3"></div>
										    	<div className="col-md-9 text-danger">Required Field</div>
										    </div>}
								</div>
								<div className="form-group col-md-12 inputPaddingMachine">
									<label  className="col-md-3">Registration</label>
										<input 
										type="text" 
										className={this.state.vehicleRegistration?"form-control col-md-9 has-error":"form-control col-md-9"} 
										value={this.state.registration} 
										onChange={this.onChangeSetToState('registration')}
										id="vehicleRegistration" 
										onFocus={()=>this.removehasError('vehicleRegistration','details')}
										/>
										{this.state.vehicleRegistration && 
										   	<div className="row" style={{'width':'100%'}}>
										   		<div className="col-md-3"></div>
										    	<div className="col-md-9 text-danger">Required Field</div>
										    </div>}
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
														  inputProps={vehicleStatusError}
													  	  onFocus={()=>this.removehasError('vehicleStatus','details')}
														  selected={this.state.statusname}
												        />
										</div>
									</div>
									{this.state.vehicleStatus && 
													   	<div className="row" style={{'width':'100%'}}>
													   		<div className="col-md-3"></div>
													    	<div className="col-md-9 text-danger">Required Field</div>
													    </div>}
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
														  inputProps={vehicleOwnershipError}
													  	  onFocus={()=>this.removehasError('vehicleOwnership','details')} 
														  selected={this.state.ownershipname}
												        />
										</div>
									</div>
									{this.state.vehicleOwnership && 
													   	<div className="row" style={{'width':'100%'}}>
													   		<div className="col-md-3"></div>
													    	<div className="col-md-9 text-danger">Required Field</div>
													    </div>}
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
														  inputProps={vehicleColorError}
													  	  onFocus={()=>this.removehasError('vehicleColor','details')}
														  selected={this.state.colorname}
												        />
										</div>
									</div>
									{this.state.vehicleColor && 
													   	<div className="row" style={{'width':'100%'}}>
													   		<div className="col-md-3"></div>
													    	<div className="col-md-9 text-danger">Required Field</div>
													    </div>}
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
														  inputProps={vehicleBodyError}
													  	  onFocus={()=>this.removehasError('vehicleBody','details')}
														  selected={this.state.bodyname}
												        />
										</div>
									</div>
									{this.state.vehicleBody && 
													   	<div className="row" style={{'width':'100%'}}>
													   		<div className="col-md-3"></div>
													    	<div className="col-md-9 text-danger">Required Field</div>
													    </div>}
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
										<input 
										type="number" 
										className={this.state.vehicleWidth?"form-control col-md-9 has-error":"form-control col-md-9"} 
										value={this.state.width} 
										onChange={this.onChangeSetToState('width')}
										id="vehicleWidth" 
										onFocus={()=>this.removehasError('vehicleWidth','specs')}
										/>
										{this.state.vehicleWidth && 
										   	<div className="row" style={{'width':'100%'}}>
										   		<div className="col-md-3"></div>
										    	<div className="col-md-9 text-danger">Required Field</div>
										    </div>}
								</div>
								<div className="form-group col-md-12 inputPaddingMachine">
									<label  className="col-md-3">Length</label>
										<input 
										type="number" 
										className={this.state.vehicleLength?"form-control col-md-9 has-error":"form-control col-md-9"}
										value={this.state.length} 
										onChange={this.onChangeSetToState('length')}
										id="vehicleLength" 
										onFocus={()=>this.removehasError('vehicleLength','specs')}
										/>
										{this.state.vehicleLength && 
										   	<div className="row" style={{'width':'100%'}}>
										   		<div className="col-md-3"></div>
										    	<div className="col-md-9 text-danger">Required Field</div>
										    </div>}
								</div>
								<div className="form-group col-md-12 inputPaddingMachine">
									<label  className="col-md-3">Height</label>
										<input 
										type="number" 
										className={this.state.vehicleHeight?"form-control col-md-9 has-error":"form-control col-md-9"} 
										value={this.state.height} 
										onChange={this.onChangeSetToState('height')}
										id="vehicleHeight" 
										onFocus={()=>this.removehasError('vehicleHeight','specs')}
										/>
										{this.state.vehicleHeight && 
										   	<div className="row" style={{'width':'100%'}}>
										   		<div className="col-md-3"></div>
										    	<div className="col-md-9 text-danger">Required Field</div>
										    </div>}
								</div>
								<div className="form-group col-md-12 inputPaddingMachine">
									<label  className="col-md-3">Interior Volume</label>
										<input 
										type="number" 
										className={this.state.vehicleInteriorVolume?"form-control col-md-9 has-error":"form-control col-md-9"} 
										value={this.state.interior_volume} 
										onChange={this.onChangeSetToState('interior_volume')}
										id="vehicleInteriorVolume" 
										onFocus={()=>this.removehasError('vehicleInteriorVolume','specs')}
										/>
										{this.state.vehicleInteriorVolume && 
										   	<div className="row" style={{'width':'100%'}}>
										   		<div className="col-md-3"></div>
										    	<div className="col-md-9 text-danger">Required Field</div>
										    </div>}
								</div>
								<div className="form-group col-md-12 inputPaddingMachine">
									<label  className="col-md-3">Passenger Volume</label>
										<input 
										type="number" 
										className={this.state.vehiclePassengerVolume?"form-control col-md-9 has-error":"form-control col-md-9"} 
										value={this.state.passenger_volume} 
										onChange={this.onChangeSetToState('passenger_volume')}
										id="vehiclePassengerVolume" 
										onFocus={()=>this.removehasError('vehiclePassengerVolume','specs')}
										/>
										{this.state.vehiclePassengerVolume && 
										   	<div className="row" style={{'width':'100%'}}>
										   		<div className="col-md-3"></div>
										    	<div className="col-md-9 text-danger">Required Field</div>
										    </div>}
								</div>
								<div className="form-group col-md-12 inputPaddingMachine">
									<label  className="col-md-3">Weight</label>
										<input 
										type="number" 
										className={this.state.vehicleWeight?"form-control col-md-9 has-error":"form-control col-md-9"} 
										value={this.state.wight} 
										onChange={this.onChangeSetToState('wight')}
										id="vehicleWeight" 
										onFocus={()=>this.removehasError('vehicleWeight','specs')}
										/>
										{this.state.vehicleWeight && 
										   	<div className="row" style={{'width':'100%'}}>
										   		<div className="col-md-3"></div>
										    	<div className="col-md-9 text-danger">Required Field</div>
										    </div>}
								</div>
								<div className="form-group col-md-12 inputPaddingMachine">
									<label  className="col-md-3">Curb Weight</label>
										<input 
										type="number" 
										className={this.state.vehicleCurbWeight?"form-control col-md-9 has-error":"form-control col-md-9"} 
										value={this.state.curb_wight} 
										onChange={this.onChangeSetToState('curb_wight')}
										id="vehicleCurbWeight" 
										onFocus={()=>this.removehasError('vehicleCurbWeight','specs')}
										/>
										{this.state.vehicleCurbWeight && 
										   	<div className="row" style={{'width':'100%'}}>
										   		<div className="col-md-3"></div>
										    	<div className="col-md-9 text-danger">Required Field</div>
										    </div>}
								</div>
								<div className="form-group col-md-12 inputPaddingMachine">
									<label  className="col-md-3">Gross Vehicle Weight Rating</label>
										<input 
										type="number" 
										className={this.state.vehicleGVWR?"form-control col-md-9 has-error":"form-control col-md-9"} 
										value={this.state.gvwr} 
										onChange={this.onChangeSetToState('gvwr')}
										id="vehicleGVWR" 
										onFocus={()=>this.removehasError('vehicleGVWR','specs')}
										/>
										{this.state.vehicleGVWR && 
										   	<div className="row" style={{'width':'100%'}}>
										   		<div className="col-md-3"></div>
										    	<div className="col-md-9 text-danger">Required Field</div>
										    </div>}
								</div>
								<div className="form-group col-md-12 inputPaddingMachine">
									<label  className="col-md-3">Performance</label>
										<input 
										type="number" 
										className={this.state.vehiclePerformance?"form-control col-md-9 has-error":"form-control col-md-9"} 
										value={this.state.performance} 
										onChange={this.onChangeSetToState('performance')}
										id="vehiclePerformance" 
										onFocus={()=>this.removehasError('vehiclePerformance','specs')}
										/>
										{this.state.vehiclePerformance && 
										   	<div className="row" style={{'width':'100%'}}>
										   		<div className="col-md-3"></div>
										    	<div className="col-md-9 text-danger">Required Field</div>
										    </div>}
								</div>
								<div className="form-group col-md-12 inputPaddingMachine">
									<label  className="col-md-3">Towing Capacity</label>
										<input 
										type="number" 
										className={this.state.vehicleTowingCapacity?"form-control col-md-9 has-error":"form-control col-md-9"} 
										value={this.state.towing_capacity} 
										onChange={this.onChangeSetToState('towing_capacity')}
										id="vehicleTowingCapacity" 
										onFocus={()=>this.removehasError('vehicleTowingCapacity','specs')}
										/>
										{this.state.vehicleTowingCapacity && 
										   	<div className="row" style={{'width':'100%'}}>
										   		<div className="col-md-3"></div>
										    	<div className="col-md-9 text-danger">Required Field</div>
										    </div>}
								</div>
								<div className="form-group col-md-12 inputPaddingMachine">
									<label  className="col-md-3">Max Payload</label>
										<input 
										type="number" 
										className={this.state.vehicleMaxPayload?"form-control col-md-9 has-error":"form-control col-md-9"} 
										value={this.state.max_payload}
										onChange={this.onChangeSetToState('max_payload')}
										id="vehicleMaxPayload" 
										onFocus={()=>this.removehasError('vehicleMaxPayload','specs')}
										/>
										{this.state.vehicleMaxPayload && 
										   	<div className="row" style={{'width':'100%'}}>
										   		<div className="col-md-3"></div>
										    	<div className="col-md-9 text-danger">Required Field</div>
										    </div>}
								</div>
								<div className="form-group col-md-12 inputPaddingMachine">
									<label  className="col-md-3">Fuel Economy</label>
										<input 
										type="number" 
										className={this.state.vehicleFuelEconomy?"form-control col-md-9 has-error":"form-control col-md-9"} 
										value={this.state.fuel_economy} 
										onChange={this.onChangeSetToState('fuel_economy')}
										id="vehicleFuelEconomy" 
										onFocus={()=>this.removehasError('vehicleFuelEconomy','specs')}
										/>
										{this.state.vehicleFuelEconomy && 
										   	<div className="row" style={{'width':'100%'}}>
										   		<div className="col-md-3"></div>
										    	<div className="col-md-9 text-danger">Required Field</div>
										    </div>}
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
														  inputProps={vehicleEngineModelError}
													  	  onFocus={()=>this.removehasError('vehicleEngineModel','engine')}
														  selected={this.state.engine_modelname}
												        />
										</div>
									</div>
									{this.state.vehicleEngineModel && 
													   	<div className="row" style={{'width':'100%'}}>
													   		<div className="col-md-3"></div>
													    	<div className="col-md-9 text-danger">Required Field</div>
													    </div>}
								</div>
								<div className="form-group col-md-12 inputPaddingMachine">
									<label  className="col-md-3">Cylinder</label>
										<input 
										type="number" 
										className={this.state.vehicleCylinder?"form-control col-md-9 has-error":"form-control col-md-9"} 
										value={this.state.cylinder}
										onChange={this.onChangeSetToState('cylinder')}
										id="vehicleCylinder" 
										onFocus={()=>this.removehasError('vehicleCylinder','engine')}
										/>
										{this.state.vehicleCylinder && 
										   	<div className="row" style={{'width':'100%'}}>
										   		<div className="col-md-3"></div>
										    	<div className="col-md-9 text-danger">Required Field</div>
										    </div>}
								</div>
								<div className="form-group col-md-12 inputPaddingMachine">
									<label  className="col-md-3">Compression</label>
										<input 
										type="number" 
										className={this.state.vehicleCompression?"form-control col-md-9 has-error":"form-control col-md-9"}
										value={this.state.compression} 
										onChange={this.onChangeSetToState('compression')}
										id="vehicleCompression" 
										onFocus={()=>this.removehasError('vehicleCompression','engine')}
										/>
										{this.state.vehicleCompression && 
										   	<div className="row" style={{'width':'100%'}}>
										   		<div className="col-md-3"></div>
										    	<div className="col-md-9 text-danger">Required Field</div>
										    </div>}
								</div>
								<div className="form-group col-md-12 inputPaddingMachine">
									<label  className="col-md-3">Stroke</label>
										<input 
										type="number" 
										className={this.state.vehicleStoke?"form-control col-md-9 has-error":"form-control col-md-9"} 
										value={this.state.stoke} 
										onChange={this.onChangeSetToState('stoke')}
										id="vehicleStoke" 
										onFocus={()=>this.removehasError('vehicleStoke','engine')}
										/>
										{this.state.vehicleStoke && 
										   	<div className="row" style={{'width':'100%'}}>
										   		<div className="col-md-3"></div>
										    	<div className="col-md-9 text-danger">Required Field</div>
										    </div>}
								</div>
								<div className="form-group col-md-12 inputPaddingMachine">
									<label  className="col-md-3">Max Torque</label>
										<input 
										type="number" 
										className={this.state.vehicleMaxTorque?"form-control col-md-9 has-error":"form-control col-md-9"} 
										value={this.state.max_torque} 
										onChange={this.onChangeSetToState('max_torque')}
										id="vehicleMaxTorque" 
										onFocus={()=>this.removehasError('vehicleMaxTorque','engine')}
										/>
										{this.state.vehicleMaxTorque && 
										   	<div className="row" style={{'width':'100%'}}>
										   		<div className="col-md-3"></div>
										    	<div className="col-md-9 text-danger">Required Field</div>
										    </div>}
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
														  inputProps={vehicleDriveError}
													  	  onFocus={()=>this.removehasError('vehicleDrive','wheels')}
														  selected={this.state.drivename}
												        />
										</div>
									</div>
									{this.state.vehicleDrive && 
													   	<div className="row" style={{'width':'100%'}}>
													   		<div className="col-md-3"></div>
													    	<div className="col-md-9 text-danger">Required Field</div>
													    </div>}
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
														  inputProps={vehicleBrakeError}
													  	  onFocus={()=>this.removehasError('vehicleBrake','wheels')}
														  selected={this.state.brakename}
												        />
										</div>
									</div>
									{this.state.vehicleBrake && 
													   	<div className="row" style={{'width':'100%'}}>
													   		<div className="col-md-3"></div>
													    	<div className="col-md-9 text-danger">Required Field</div>
													    </div>}
								</div>
								<div className="form-group col-md-12 inputPaddingMachine">
									<label  className="col-md-3">No. of Wheels</label>
										<input 
										type="number" 
										className={this.state.vehicleWheels?"form-control col-md-9 has-error":"form-control col-md-9"} 
										value={this.state.wheels} 
										onChange={this.onChangeSetToState('wheels')}
										id="vehicleWheels" 
										onFocus={()=>this.removehasError('vehicleWheels','wheels')}
										/>
										{this.state.vehicleWheels && 
										   	<div className="row" style={{'width':'100%'}}>
										   		<div className="col-md-3"></div>
										    	<div className="col-md-9 text-danger">Required Field</div>
										    </div>}
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
														  inputProps={vehicleFuelError}
													  	  onFocus={()=>this.removehasError('vehicleFuel','fluids')}
														  selected={this.state.fuelname}
												        />
										</div>
									</div>
									{this.state.vehicleFuel && 
													   	<div className="row" style={{'width':'100%'}}>
													   		<div className="col-md-3"></div>
													    	<div className="col-md-9 text-danger">Required Field</div>
													    </div>}
								</div>
								<div className="form-group col-md-12 inputPaddingMachine">
									<label  className="col-md-3">Fuel Tank Capacity</label>
										<input 
										type="number" 
										className={this.state.vehicleFuelTank?"form-control col-md-9 has-error":"form-control col-md-9"} 
										value={this.state.fuel_tank}
										onChange={this.onChangeSetToState('fuel_tank')}
										id="vehicleFuelTank" 
										onFocus={()=>this.removehasError('vehicleFuelTank','fluids')}
										/>
										{this.state.vehicleFuelTank && 
										   	<div className="row" style={{'width':'100%'}}>
										   		<div className="col-md-3"></div>
										    	<div className="col-md-9 text-danger">Required Field</div>
										    </div>}
								</div>
							</div>
							}
							{this.state.navbar==="status" && 
							<div style={{width:'100%'}}>
								<div className="form-group col-md-12 inputPaddingMachine">
									<label  className="col-md-3">Current Reading</label>
										<input 
										type="number" 
										className={this.state.vehicleCurrentReading?"form-control col-md-9 has-error":"form-control col-md-9"} 
										value={this.state.current_reading} 
										onChange={this.onChangeSetToState('current_reading')}
										id="vehicleCurrentReading" 
										onFocus={()=>this.removehasError('vehicleCurrentReading','status')}
										/>
										{this.state.vehicleCurrentReading && 
										   	<div className="row" style={{'width':'100%'}}>
										   		<div className="col-md-3"></div>
										    	<div className="col-md-9 text-danger">Required Field</div>
										    </div>}
								</div>
								<div className="form-group col-md-12 inputPaddingMachine">
									<label  className="col-md-3">Avg Users Per Day</label>
										<input 
										type="number" 
										className={this.state.vehicleAvgUsers?"form-control col-md-9 has-error":"form-control col-md-9"}
										value={this.state.avg_uses} 
										onChange={this.onChangeSetToState('avg_uses')}
										id="vehicleAvgUsers" 
										onFocus={()=>this.removehasError('vehicleAvgUsers','status')}
										/>
										{this.state.vehicleAvgUsers && 
										   	<div className="row" style={{'width':'100%'}}>
										   		<div className="col-md-3"></div>
										    	<div className="col-md-9 text-danger">Required Field</div>
										    </div>}
								</div>
								<div className="form-group col-md-12 inputPaddingMachine">
									<label  className="col-md-3">Service Requires After</label>
										<input 
										type="number" 
										className={this.state.vehicleServiceFrequency?"form-control col-md-9 has-error":"form-control col-md-9"} 
										value={this.state.service_frequency} 
										onChange={this.onChangeSetToState('service_frequency')}
										id="vehicleServiceFrequency" 
										onFocus={()=>this.removehasError('vehicleServiceFrequency','status')}
										/>
										{this.state.vehicleServiceFrequency && 
										   	<div className="row" style={{'width':'100%'}}>
										   		<div className="col-md-3"></div>
										    	<div className="col-md-9 text-danger">Required Field</div>
										    </div>}
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
														  inputProps={vehicleSiteError}
													  	  onFocus={()=>this.removehasError('vehicleSite','status')}
														  selected={this.state.sitename}
												        />
										</div>
									</div>
									{this.state.vehicleSite && 
													   	<div className="row" style={{'width':'100%'}}>
													   		<div className="col-md-3"></div>
													    	<div className="col-md-9 text-danger">Required Field</div>
													    </div>}
								</div>
							</div>
							}
						</form>	
					</div>
					<div className="footerVehicle">
						<div className="container footerContainerMachine">
							<div className="footerMachine" >
								<div className="cancelFooterMachine" onClick={()=>history.goBack()}>
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