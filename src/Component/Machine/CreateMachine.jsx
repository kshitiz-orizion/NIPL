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
				<div style={{width:"88vw",height:'50px',border:'1px solid #111',backgroundColor:'white',marginTop:'-15px'}}>
					<div style={{position:'relative',left:'20px',top:'5px',display:'inline-block'}}>
						<h3>Machine/Create Machine</h3>
					</div>
					<div style={{float:'right',display:'inline-block',marginLeft:'20px',position:'relative',right:'50px',top:'5px'}}>
						<button className="btn btn-sm btn-primary">Save Machine</button>
					</div>
					<div style={{float:'right',display:'inline-block',color:'blue',position:'relative',right:'50px',top:'5px'}}>
						Cancel
					</div>
				</div>
				<div>			<div className="container">
								<h5>{this.props.mode==='EDIT'?'Edit Machine':'Create Machine'}</h5>
								</div>
								<div className="container" style={{backgroundColor:'#fff',borderRadius:'5px' ,boxShadow:'1px 1px 1px 1px #666'}}>
									<form className="form-inline" style={{paddingTop:'50px',paddingBottom:'50px'}}onSubmit={this.props.handleSubmit(this.submitUser)}>
										  <div className="form-group col-md-12" style={{paddingBottom:'10px'}}>
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
										  <div className="form-group col-md-12" style={{paddingBottom:'10px'}}>
										    <label htmlFor="pwd" className="col-md-3">Sub Category</label>
										    <input type="text" className="form-control col-md-9" id="pwd" />
										  </div>
										  <div className="form-group col-md-12" style={{paddingBottom:'10px'}}>
										    <label htmlFor="email" className="col-md-3">Code</label>
										    <input type="text" className="form-control col-md-9" id="email"/>
										  </div>
										  <div className="form-group col-md-12" style={{paddingBottom:'10px'}}>
										    <label htmlFor="pwd" className="col-md-3">Make</label>
										    <input type="text" className="form-control col-md-9" id="pwd" />
										  </div>
										  <div className="form-group col-md-12" style={{paddingBottom:'10px'}}>
										    <label htmlFor="email" className="col-md-3">Year of Purchase</label>
										    <input type="text" className="form-control col-md-9" id="email"/>
										  </div>
										  <div className="form-group col-md-12" style={{paddingBottom:'10px'}}>
										    <label htmlFor="pwd" className="col-md-3">Model</label>
										    <input type="text" className="form-control col-md-9" id="pwd" />
										  </div>
										  <div className="form-group col-md-12" style={{paddingBottom:'10px'}}>
										    <label htmlFor="pwd" className="col-md-3">Serial Number</label>
										    <input type="text" className="form-control col-md-9" id="pwd" />
										  </div>
										  <div className="form-group col-md-12" style={{paddingBottom:'10px'}}>
										    <label htmlFor="pwd" className="col-md-3">Engine Make</label>
										    <input type="text" className="form-control col-md-9" id="pwd" />
										  </div>
										  <div className="form-group col-md-12" style={{paddingBottom:'10px'}}>
										    <label htmlFor="pwd" className="col-md-3">Engine Model</label>
										    <input type="text" className="form-control col-md-9" id="pwd" />
										  </div>
										  <div className="form-group col-md-12" style={{paddingBottom:'10px'}}>
										    <label htmlFor="pwd" className="col-md-3">Engine Serial Number</label>
										    <input type="text" className="form-control col-md-9" id="pwd" />
										  </div>
										  <div className="form-group col-md-12" style={{paddingBottom:'10px'}}>
										    <label htmlFor="pwd" className="col-md-3">Chassis Number</label>
										    <input type="text" className="form-control col-md-9" id="pwd" />
										  </div>
										  <div className="form-group col-md-12" style={{paddingBottom:'10px'}}>
										    <label htmlFor="pwd" className="col-md-3">Registration Number</label>
										    <input type="text" className="form-control col-md-9" id="pwd" />
										  </div>
										  <div className="form-group col-md-12" style={{paddingBottom:'10px'}}>
										    <label htmlFor="pwd" className="col-md-3">Condition</label>
										    <input type="text" className="form-control col-md-9" id="pwd" />
										  </div>
										  <div className="form-group col-md-12" style={{paddingBottom:'10px'}}>
										    <label htmlFor="pwd" className="col-md-3">Unit Price</label>
										    <input type="text" className="form-control col-md-9" id="pwd" />
										  </div>
										  <div className="form-group col-md-12" style={{paddingBottom:'10px'}}>
										    <label htmlFor="pwd" className="col-md-3">Remarks</label>
										    <input type="text" className="form-control col-md-9" id="pwd" />
										  </div>
										  <div className="form-group col-md-12" style={{paddingBottom:'10px'}}>
										    <label htmlFor="pwd" className="col-md-3">State</label>
										    <input type="text" className="form-control col-md-9" id="pwd" />
										  </div>
										  <div className="form-group col-md-12" style={{paddingBottom:'10px'}}>
										    <label htmlFor="pwd" className="col-md-3">District</label>
										    <input type="text" className="form-control col-md-9" id="pwd" />
										  </div>
										  <div className="form-group col-md-12" style={{paddingBottom:'10px'}}>
										    <label htmlFor="pwd" className="col-md-3">Site</label>
										    <input type="text" className="form-control col-md-9" id="pwd" />
										  </div>
										  <div className="form-group col-md-12" style={{paddingBottom:'10px'}}>
										    <label htmlFor="pwd" className="col-md-3">Operating System</label>
										    <input type="text" className="form-control col-md-9" id="pwd" />
										  </div>
										  <div className="form-group col-md-12" style={{paddingBottom:'10px'}}>
										    <label htmlFor="pwd" className="col-md-3">Warranty</label>
										    <input type="text" className="form-control col-md-9" id="pwd" />
										  </div>
									</form>
								</div>
								<div className="container"style={{height:'100px',marginTop:'50px',borderTop:'1px solid #101010'}}>
									<div style={{marginTop:'30px'}}>
										<div style={{display:'inline-block',color:'blue'}}>
										Cancel
										</div>
										<button type="submit" className="btn btn-primary btn-sm" style={{float:'right',display:'inline-block',marginLeft:'50px'}}>Submit</button>
										<button type="submit" className="btn btn-default btn-sm" style={{float:'right',display:'inline-block'}}>Save & Continue Editing</button>
									</div>
								</div>	
				</div>
			</div>
			)
	}

}

export default reduxForm({ form: 'CreateMachine' })(CreateMachine);