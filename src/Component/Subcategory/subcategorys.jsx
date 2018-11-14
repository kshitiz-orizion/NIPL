import React,{Component} from 'react';
import history from '../../Inits/history';
class ListSubcategory extends Component{
	componentWillMount(){
		this.getSubcategorys();
		this.setState({
			subcategorys:[
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
			  "name": "Subcategory1",
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
			  "name": "Subcategory2",
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
	getSubcategorys=async()=>{
		// await this.props.subcategoryInfo.getSubcategorys();
	}
	AddSubcategory=()=>{
		history.push('/subcategory/create');
	}
	editSubcategory=(subcategory)=>{
		history.push('/subcategorys/'+subcategory.id);
	}
	deleteSubcategory=(subcategory)=>{
		 this.props.subcategoryInfo.deleteSubcategory(subcategory);
	}
	render(){
		return (
			<div style={{marginTop:'175px'}}>
				
				<div className="container">
				<div style={{float:'right',display:'inline-block'}}>
					<button type="button" className="btn btn-success"  onClick={this.AddSubcategory}><i className="fa fa-plus" aria-hidden="true"></i>Add</button>
				</div>
					<table className="table table-hover table-bordered">
					    <thead>
					      <tr>
					        <th>Sl no</th>
					        <th>Subcategory Name</th>
					        <th>Subcategory Brand</th>
					        <th>Subcategory Model</th>
					        <th>Actions</th>
					      </tr>
					    </thead>
					    <tbody>
					    {this.state.subcategorys.map((subcategory,i)=>(
						<tr key={i}>
							<td>{subcategory.serial_no}</td>
							<td>{subcategory.name}</td>
							<td>{subcategory.brand_id}</td>
							<td>{subcategory.model_id}</td>
							<td>
								<button className="btn btn-default btn-sm" onClick={()=>this.editSubcategory(subcategory)}><i className="fa fa-pencil" aria-hidden="true"></i>Edit</button>
								<button className="btn btn-danger btn-sm" onClick={()=>this.deleteSubcategory(subcategory)}><i className="fa fa-trash" aria-hidden="true"></i>Delete</button>
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

export default ListSubcategory;