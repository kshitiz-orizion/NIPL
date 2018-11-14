import React,{Component} from 'react';
import history from '../../Inits/history';
class ListMachinebrand extends Component{
	componentWillMount(){
		this.getMachinebrands();
		this.setState({
			machinebrands:[
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
			  "name": "Machinebrand1",
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
			  "name": "Machinebrand2",
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
	getMachinebrands=async()=>{
		// await this.props.machinebrandInfo.getMachinebrands();
	}
	AddMachinebrand=()=>{
		history.push('/machinebrand/create');
	}
	editMachinebrand=(machinebrand)=>{
		history.push('/machinebrands/'+machinebrand.id);
	}
	deleteMachinebrand=(machinebrand)=>{
		 this.props.machinebrandInfo.deleteMachinebrand(machinebrand);
	}
	render(){
		return (
			<div style={{marginTop:'175px'}}>
				
				<div className="container">
				<div style={{float:'right',display:'inline-block'}}>
					<button type="button" className="btn btn-success"  onClick={this.AddMachinebrand}><i className="fa fa-plus" aria-hidden="true"></i>Add</button>
				</div>
					<table className="table table-hover table-bordered">
					    <thead>
					      <tr>
					        <th>Sl no</th>
					        <th>Machinebrand Name</th>
					        <th>Machinebrand Brand</th>
					        <th>Machinebrand Model</th>
					        <th>Actions</th>
					      </tr>
					    </thead>
					    <tbody>
					    {this.state.machinebrands.map((machinebrand,i)=>(
						<tr key={i}>
							<td>{machinebrand.serial_no}</td>
							<td>{machinebrand.name}</td>
							<td>{machinebrand.brand_id}</td>
							<td>{machinebrand.model_id}</td>
							<td>
								<button className="btn btn-default btn-sm" onClick={()=>this.editMachinebrand(machinebrand)}><i className="fa fa-pencil" aria-hidden="true"></i>Edit</button>
								<button className="btn btn-danger btn-sm" onClick={()=>this.deleteMachinebrand(machinebrand)}><i className="fa fa-trash" aria-hidden="true"></i>Delete</button>
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

export default ListMachinebrand;