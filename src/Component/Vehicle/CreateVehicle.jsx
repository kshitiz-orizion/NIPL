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
							{this.state.navbar==="details" && <div className="form-group col-md-12 inputPaddingMachine">
								<label  className="col-md-3">Name</label>
									<input type="text" className="form-control col-md-9" onChange={this.onChangeSetToState('')}/>
							</div>}
							{this.state.navbar==="specs" && <div className="form-group col-md-12 inputPaddingMachine">
								<label  className="col-md-3">Dimensions</label>
									<input type="text" className="form-control col-md-9" onChange={this.onChangeSetToState('')}/>
							</div>}
							{this.state.navbar==="engine" && <div className="form-group col-md-12 inputPaddingMachine">
								<label  className="col-md-3">Engine Brand</label>
									<input type="text" className="form-control col-md-9" onChange={this.onChangeSetToState('')}/>
							</div>}
							{this.state.navbar==="wheels" && <div className="form-group col-md-12 inputPaddingMachine">
								<label  className="col-md-3">Drive Type</label>
									<input type="text" className="form-control col-md-9" onChange={this.onChangeSetToState('')}/>
							</div>}
							{this.state.navbar==="fluids" && <div className="form-group col-md-12 inputPaddingMachine">
								<label  className="col-md-3">Fuel Type</label>
									<input type="text" className="form-control col-md-9" onChange={this.onChangeSetToState('')}/>
							</div>}
							{this.state.navbar==="status" && <div className="form-group col-md-12 inputPaddingMachine">
								<label  className="col-md-3">Current Reading</label>
									<input type="text" className="form-control col-md-9" onChange={this.onChangeSetToState('')}/>
							</div>}
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