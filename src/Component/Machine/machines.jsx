import React,{Component} from 'react';
import history from '../../Inits/history';
class ListMachine extends Component{
	componentWillMount(){
		this.getStudents();
		this.props.machineInfo.machines=[
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
			  "name": "Machine1",
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
			  "name": "Machine2",
			  "purchase_year": 2016,
			  "site_id": "JNU",
			  "engine_model_id": "Diesel",
			  "sub_category_id": "MUV",
			  "model_id": "Brezza",
			  "engine_brand_id": "Spark Ignited Engine",
			  "remark": "very nice vehicle"
		}]
	}
	getStudents=async()=>{
		// await this.props.machineInfo.getMachines();
	}
	AddStudent=()=>{
		history.push('/machine/create');
	}
	editStudent=(machine)=>{
		history.push('/machines/'+machine.id);
	}
	deleteStudent=(machine)=>{
		 this.props.machineInfo.deleteStudent(machine);
	}
	render(){
		return (
			<div style={{marginTop:'175px'}}>
				<div style={{float:'right',display:'inline-block'}}>
					<button type="button" className="btn btn-success"  onClick={this.AddStudent}><i className="fa fa-plus" aria-hidden="true"></i>Add</button>
				</div>
				<div className="machineContainerFlex">
					{this.props.machineInfo.machines.map((machine,i)=>(
						<div key={i} className="eachMachineContainer">
							<div className="row">
								<div className="col-md-4">
									<div className="row">
										<div className="col-md-4 col-sm-6">Warranty</div>
										<div className="col-md-8 col-sm-6">:{machine.warranty}</div>
									</div>
								</div>
								<div className="col-md-4">
									<div className="row">
										<div className="col-md-4">Engine Sl no</div>
										<div className="col-md-8">:{machine.engine_serial_no}</div>
									</div>
								</div>
								<div className="col-md-4">
									<div className="row">
										<div className="col-md-4">Code</div>
										<div className="col-md-8">:{machine.code}</div>
									</div>
								</div>
								<div className="col-md-4">
									<div className="row">
										<div className="col-md-4">Chassis</div>
										<div className="col-md-8">:{machine.chassis_no}</div>
									</div>
								</div>
								<div className="col-md-4">
									<div className="row">
										<div className="col-md-4">Serial No</div>
										<div className="col-md-8">:{machine.serial_no}</div>
									</div>
								</div>
								<div className="col-md-4">
									<div className="row">
										<div className="col-md-4">Brand</div>
										<div className="col-md-8">:{machine.brand_id}</div>
									</div>
								</div>
								<div className="col-md-4">
									<div className="row">
										<div className="col-md-4">Price</div>
										<div className="col-md-8">:{machine.price}</div>
									</div>
								</div>
								<div className="col-md-4">
									<div className="row">
										<div className="col-md-4">Registration Number</div>
										<div className="col-md-8">:{machine.reg_no}</div>
									</div>
								</div>
								<div className="col-md-4">
									<div className="row">
										<div className="col-md-4">Catgory</div>
										<div className="col-md-8">:{machine.category_id}</div>
									</div>
								</div>
							</div>
								<button className="btn btn-default btn-sm" onClick={()=>this.editStudent(machine)}><i className="fa fa-pencil" aria-hidden="true"></i>Edit</button>
								<button className="btn btn-danger btn-sm" onClick={()=>this.deleteStudent(machine)}><i className="fa fa-trash" aria-hidden="true"></i>Delete</button>
						</div>
					))}
				</div>
			</div>
		)
	}
}

export default ListMachine;