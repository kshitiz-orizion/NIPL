import React, { Component } from 'react';
import {reduxForm } from 'redux-form';
class CreateVehicles extends Component{
	componentWillMount(){
		if(this.props.mode==='EDIT'){
			this.setState({
				 ...this.props.initialValues,
				 navbar:"details"
			});
		}
		else{
			this.setState({
					name:'',
					navbar:'details'
			})
		}
	}
	onChangeSetToState = stateKey => e => {
			this.setState({ [stateKey]: e.target.value });
  	};
  	submitVehicles=()=>{
  		if(this.props.mode==='EDIT'){
  			this.props.onEdit(this.state);
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
										<input type="text" className="form-control col-md-9" onChange={this.onChangeSetToState('')}/>
								</div>
								<div className="form-group col-md-12 inputPaddingMachine">
									<label  className="col-md-3">NIPL CODE</label>
										<input type="text" className="form-control col-md-9" onChange={this.onChangeSetToState('')}/>
								</div>
								<div className="form-group col-md-12 inputPaddingMachine">
									<label  className="col-md-3">License Plate</label>
										<input type="text" className="form-control col-md-9" onChange={this.onChangeSetToState('')}/>
								</div>
								<div className="form-group col-md-12 inputPaddingMachine">
									<label  className="col-md-3">Type</label>
										<input type="text" className="form-control col-md-9" onChange={this.onChangeSetToState('')}/>
								</div>
								<div className="form-group col-md-12 inputPaddingMachine">
									<label  className="col-md-3">Make</label>
										<input type="text" className="form-control col-md-9" onChange={this.onChangeSetToState('')}/>
								</div>
								<div className="form-group col-md-12 inputPaddingMachine">
									<label  className="col-md-3">Model</label>
										<input type="text" className="form-control col-md-9" onChange={this.onChangeSetToState('')}/>
								</div>
								<div className="form-group col-md-12 inputPaddingMachine">
									<label  className="col-md-3">Year</label>
										<input type="text" className="form-control col-md-9" onChange={this.onChangeSetToState('')}/>
								</div>
								<div className="form-group col-md-12 inputPaddingMachine">
									<label  className="col-md-3">Registration State</label>
										<input type="text" className="form-control col-md-9" onChange={this.onChangeSetToState('')}/>
								</div>
								<div className="form-group col-md-12 inputPaddingMachine">
									<label  className="col-md-3">Status</label>
										<input type="text" className="form-control col-md-9" onChange={this.onChangeSetToState('')}/>
								</div>
								<div className="form-group col-md-12 inputPaddingMachine">
									<label  className="col-md-3">Ownership</label>
										<input type="text" className="form-control col-md-9" onChange={this.onChangeSetToState('')}/>
								</div>
								<div className="form-group col-md-12 inputPaddingMachine">
									<label  className="col-md-3">Colour</label>
										<input type="text" className="form-control col-md-9" onChange={this.onChangeSetToState('')}/>
								</div>
								<div className="form-group col-md-12 inputPaddingMachine">
									<label  className="col-md-3">Body Type</label>
										<input type="text" className="form-control col-md-9" onChange={this.onChangeSetToState('')}/>
								</div>
								<div className="form-group col-md-12 inputPaddingMachine">
									<label  className="col-md-3">Universe</label>
										<input type="text" className="form-control col-md-9" onChange={this.onChangeSetToState('')}/>
								</div>
							</div>
							}
							{this.state.navbar==="specs" && 
							<div style={{width:'100%'}}>
								<div className="form-group col-md-12 inputPaddingMachine">
									<label  className="col-md-3">Dimensions</label>
										<input type="text" className="form-control col-md-9" onChange={this.onChangeSetToState('')}/>
								</div>
								<div className="form-group col-md-12 inputPaddingMachine">
									<label  className="col-md-3">Width</label>
										<input type="text" className="form-control col-md-9" onChange={this.onChangeSetToState('')}/>
								</div>
								<div className="form-group col-md-12 inputPaddingMachine">
									<label  className="col-md-3">Length</label>
										<input type="text" className="form-control col-md-9" onChange={this.onChangeSetToState('')}/>
								</div>
								<div className="form-group col-md-12 inputPaddingMachine">
									<label  className="col-md-3">Height</label>
										<input type="text" className="form-control col-md-9" onChange={this.onChangeSetToState('')}/>
								</div>
								<div className="form-group col-md-12 inputPaddingMachine">
									<label  className="col-md-3">Interior Volume</label>
										<input type="text" className="form-control col-md-9" onChange={this.onChangeSetToState('')}/>
								</div>
								<div className="form-group col-md-12 inputPaddingMachine">
									<label  className="col-md-3">Passenger Volume</label>
										<input type="text" className="form-control col-md-9" onChange={this.onChangeSetToState('')}/>
								</div>
								<div className="form-group col-md-12 inputPaddingMachine">
									<label  className="col-md-3">Cargo Volume</label>
										<input type="text" className="form-control col-md-9" onChange={this.onChangeSetToState('')}/>
								</div>
								<div className="form-group col-md-12 inputPaddingMachine">
									<label  className="col-md-3">Weight</label>
										<input type="text" className="form-control col-md-9" onChange={this.onChangeSetToState('')}/>
								</div>
								<div className="form-group col-md-12 inputPaddingMachine">
									<label  className="col-md-3">Curb Weight</label>
										<input type="text" className="form-control col-md-9" onChange={this.onChangeSetToState('')}/>
								</div>
								<div className="form-group col-md-12 inputPaddingMachine">
									<label  className="col-md-3">Gross Vehicle Weight Rating</label>
										<input type="text" className="form-control col-md-9" onChange={this.onChangeSetToState('')}/>
								</div>
								<div className="form-group col-md-12 inputPaddingMachine">
									<label  className="col-md-3">Performance</label>
										<input type="text" className="form-control col-md-9" onChange={this.onChangeSetToState('')}/>
								</div>
								<div className="form-group col-md-12 inputPaddingMachine">
									<label  className="col-md-3">Towing Capacity</label>
										<input type="text" className="form-control col-md-9" onChange={this.onChangeSetToState('')}/>
								</div>
								<div className="form-group col-md-12 inputPaddingMachine">
									<label  className="col-md-3">Max Payload</label>
										<input type="text" className="form-control col-md-9" onChange={this.onChangeSetToState('')}/>
								</div>
								<div className="form-group col-md-12 inputPaddingMachine">
									<label  className="col-md-3">Fuel Economy</label>
										<input type="text" className="form-control col-md-9" onChange={this.onChangeSetToState('')}/>
								</div>
							</div>
							}
							{this.state.navbar==="engine" && 
							<div style={{width:'100%'}}>
								<div className="form-group col-md-12 inputPaddingMachine">
									<label  className="col-md-3">Engine Brand</label>
										<input type="text" className="form-control col-md-9" onChange={this.onChangeSetToState('')}/>
								</div>
								<div className="form-group col-md-12 inputPaddingMachine">
									<label  className="col-md-3">Cylinder</label>
										<input type="text" className="form-control col-md-9" onChange={this.onChangeSetToState('')}/>
								</div>
								<div className="form-group col-md-12 inputPaddingMachine">
									<label  className="col-md-3">Compression</label>
										<input type="text" className="form-control col-md-9" onChange={this.onChangeSetToState('')}/>
								</div>
								<div className="form-group col-md-12 inputPaddingMachine">
									<label  className="col-md-3">Stroke</label>
										<input type="text" className="form-control col-md-9" onChange={this.onChangeSetToState('')}/>
								</div>
								<div className="form-group col-md-12 inputPaddingMachine">
									<label  className="col-md-3">Max Torque</label>
										<input type="text" className="form-control col-md-9" onChange={this.onChangeSetToState('')}/>
								</div>
							</div>
							}
							{this.state.navbar==="wheels" && 
							<div style={{width:'100%'}}>
								<div className="form-group col-md-12 inputPaddingMachine">
									<label  className="col-md-3">Drive Type</label>
										<input type="text" className="form-control col-md-9" onChange={this.onChangeSetToState('')}/>
								</div>
								<div className="form-group col-md-12 inputPaddingMachine">
									<label  className="col-md-3">Brake System</label>
										<input type="text" className="form-control col-md-9" onChange={this.onChangeSetToState('')}/>
								</div>
								<div className="form-group col-md-12 inputPaddingMachine">
									<label  className="col-md-3">No. of Wheels</label>
										<input type="text" className="form-control col-md-9" onChange={this.onChangeSetToState('')}/>
								</div>
							</div>
							}
							{this.state.navbar==="fluids" && 
							<div style={{width:'100%'}}>
								<div className="form-group col-md-12 inputPaddingMachine">
									<label  className="col-md-3">Fuel Type</label>
										<input type="text" className="form-control col-md-9" onChange={this.onChangeSetToState('')}/>
								</div>
								<div className="form-group col-md-12 inputPaddingMachine">
									<label  className="col-md-3">Fuel Tank Capacity</label>
										<input type="text" className="form-control col-md-9" onChange={this.onChangeSetToState('')}/>
								</div>
							</div>
							}
							{this.state.navbar==="status" && 
							<div style={{width:'100%'}}>
								<div className="form-group col-md-12 inputPaddingMachine">
									<label  className="col-md-3">Current Reading</label>
										<input type="text" className="form-control col-md-9" onChange={this.onChangeSetToState('')}/>
								</div>
								<div className="form-group col-md-12 inputPaddingMachine">
									<label  className="col-md-3">Avg Users Per Day</label>
										<input type="text" className="form-control col-md-9" onChange={this.onChangeSetToState('')}/>
								</div>
								<div className="form-group col-md-12 inputPaddingMachine">
									<label  className="col-md-3">Service Requires After</label>
										<input type="text" className="form-control col-md-9" onChange={this.onChangeSetToState('')}/>
								</div>
								<div className="form-group col-md-12 inputPaddingMachine">
									<label  className="col-md-3">Available at Site</label>
										<input type="text" className="form-control col-md-9" onChange={this.onChangeSetToState('')}/>
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
								<button type="submit" className="btn btn-primary btn-sm saveButtonFooterMachine" >Submit</button>
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