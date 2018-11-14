import React,{Component} from 'react';
import history from '../../Inits/history';
class ListCondition extends Component{
	componentWillMount(){
		this.getConditions();
		this.setState({
			conditions:[
		{
			  "warranty": 4,
			  "engine_serial_no": "1231414",
			  "code": "Code-2",
			  "chassis_no": "CH 1200",
			  "serial_no": "SR100",
			  "brand_id": "Hyundai",
			  "price": "100.00",
			  "reg_no": "123141",
			  "id": "a1283eea-831d-4637-bed4-86241f9768bc",
			  "category_id": "hatchbag",
			  "condition_id": "good",
			  "description": "Testing purpose",
			  "name": "Condition1",
			  "purchase_year": 2016,
			  "site_id": "JNU",
			  "engine_model_id": "Diesel",
			  "sub_category_id": "small hatchbag",
			  "model_id": "i10",
			  "engine_brand_id": "Spark Ignited Engine",
			  "remark": "very nice vehicle"
		},
		{
			  "warranty": 4,
			  "engine_serial_no": "1231414",
			  "code": "Code-3",
			  "chassis_no": "CH 1200",
			  "serial_no": "SR100",
			  "brand_id": "Maruti Suzuki",
			  "price": "100.00",
			  "reg_no": "123141",
			  "id": "a1283eea-831d-4637-bed4-86241f9768bc",
			  "category_id": "SUV",
			  "condition_id": "good",
			  "description": "Testing purpose",
			  "name": "Condition2",
			  "purchase_year": 2016,
			  "site_id": "JNU",
			  "engine_model_id": "Diesel",
			  "sub_category_id": "MUV",
			  "model_id": "Brezza",
			  "engine_brand_id": "Spark Ignited Engine",
			  "remark": "very nice vehicle"
		}]
	})
	}
	getConditions=async()=>{
		// await this.props.conditionInfo.getConditions();
	}
	AddCondition=()=>{
		history.push('/condition/create');
	}
	editCondition=(condition)=>{
		history.push('/conditions/'+condition.id);
	}
	deleteCondition=(condition)=>{
		 this.props.conditionInfo.deleteCondition(condition);
	}
	render(){
		return (
			<div style={{marginTop:'175px'}}>
				
				<div className="container">
				<div style={{float:'right',display:'inline-block'}}>
					<button type="button" className="btn btn-success"  onClick={this.AddCondition}><i className="fa fa-plus" aria-hidden="true"></i>Add</button>
				</div>
					<table className="table table-hover table-bordered">
					    <thead>
					      <tr>
					        <th>Sl no</th>
					        <th>Condition Name</th>
					        <th>Condition Brand</th>
					        <th>Condition Model</th>
					        <th>Actions</th>
					      </tr>
					    </thead>
					    <tbody>
					    {this.state.conditions.map((condition,i)=>(
						<tr key={i}>
							<td>{condition.serial_no}</td>
							<td>{condition.name}</td>
							<td>{condition.brand_id}</td>
							<td>{condition.model_id}</td>
							<td>
								<button className="btn btn-default btn-sm" onClick={()=>this.editCondition(condition)}><i className="fa fa-pencil" aria-hidden="true"></i>Edit</button>
								<button className="btn btn-danger btn-sm" onClick={()=>this.deleteCondition(condition)}><i className="fa fa-trash" aria-hidden="true"></i>Delete</button>
							</td>
						</tr>
					))}
					    </tbody>
	  				</table>
	  			</div>
			</div>
		)
	}
}

export default ListCondition;