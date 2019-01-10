import React, { Component } from 'react';
import {reduxForm } from 'redux-form';
import {Typeahead} from 'react-bootstrap-typeahead';
import history from '../../Inits/history';
class CreateMachinemodel extends Component{
	componentWillMount(){		
		if(this.props.mode==='EDIT'){
			const {name,machinebrand,id,brand}=this.props.initialValues;
			this.setState({
				 ...this.props.initialValues,
				 machinebrand:[brand],
			});
		}
		else{
			this.setState({
					name:'',
					machinebrand:[{name:'',id:''}]
			})
		}
	}
	componentDidMount(){
		if(this.props.machinebrandInfo.errorList!==undefined){
			const {brand_id}=this.props.machinebrandInfo.errorList;
			this.setState({
				brand_id
			});
			if(this.props.machinebrandInfo.errorList['brand_id']){
				var machinebrandx=document.getElementsByClassName("rbt-input-main form-control rbt-input machineBrand");
				machinebrandx[0].classList.add('has-error');
			}
		}
	}
	onChangeSetToState = stateKey => e => {
			this.setState({ [stateKey]: e.target.value });
  	};
  	submitUser=async()=>{ 
  		if(this.props.mode==='EDIT'){
  			const editValue=this.state;
  			for(var key in editValue){
  				if(typeof(editValue[key])==='object'){
  					editValue[key]=editValue[key]['id']
  				}
  			}
  			this.props.onEdit(editValue);
  			return
  		}
  		this.props.onCreate(this.state);
  	}
	render(){
		return (
			<div>
				<div className="topHeadingContainer">
					<div className="headingCreateMachine">
						<h3>Machinemodel/Create Machine model</h3>
					</div>
					<div className="saveButtonHeader" >
						<button className="btn btn-sm btn-primary">Save Machine model</button>
					</div>
					<div className="cancelHeading" onClick={()=>history.goBack()}>
						Cancel
					</div>
				</div>
				<div>			
								<div className="container">
								<h5>{this.props.mode==='EDIT'?'Edit Machine Model':'Create Machine Model'}</h5>
								</div>
								<div className="formContainer" >
									<form className="form-inline machineForm" >
										<div className=" col-md-12 inputPaddingMachine">
										  	<div className="row">
											    <label className="col-md-3">Machine Brand</label>
											    <div className="col-md-9">
											    <Typeahead
													  onChange={(selected) => {
													    this.setState({machinebrand:selected});
													    if(selected[0]!==undefined){
													    	this.setState({
													    		brand:selected[0].id
													    	})
													    }
													  }}
													  options={this.props.machinebrandInfo.machinebrand}
													  labelKey="name"
													  selected={this.state.machinebrand}
													  inputProps={{"className":"machineBrand"}}
													  onFocus={()=>{this.setState({
													  					brand_id:[]
													  			})
													   }}
													/>
												</div>
										  	</div>
										</div>
										  <div className="form-group col-md-12 inputPaddingMachine">
										    <label  className="col-md-3">Name</label>
										    <input type="text" className="form-control col-md-9" value={this.state.name} onChange={this.onChangeSetToState('name')}/>
										  </div>
									</form>
								</div>
								<div className="container footerContainerMachine">
									<div className="footerMachine" >
										<div className="cancelFooterMachine" onClick={()=>history.goBack()}>
										Cancel
										</div>
										<button type="submit" className="btn btn-primary btn-sm saveButtonFooterMachine" onClick={this.props.handleSubmit(this.submitUser)}>Submit</button>
										<button type="submit" className="btn btn-default btn-sm submitAndEditFooterMachine" >Save & Continue Editing</button>
									</div>
								</div>	
				</div>
			</div>
			)
	}

}

export default reduxForm({ form: 'CreateMachinemodel' })(CreateMachinemodel);