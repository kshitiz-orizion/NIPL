import React,{Component} from 'react';
import history from '../../Inits/history';
const $=require('jquery');
$.DataTable=require('datatables.net');
class ListVehicle extends Component{
	componentWillMount(){
	}
	componentDidMount(){
	}
	AddVehicle=()=>{
		history.push('/vehicle/create');
	}
	editVehicle=(vehicle)=>{
		history.push('/vehicles/'+vehicle.id);
	}
	deleteVehicle=(vehicle)=>{
		 this.props.vehicleInfo.deleteVehicle(vehicle);
	}
	detailVehicle=(vehicle)=>{
		history.push('/vehicles/'+vehicle.id,{noEdit:true});
	}
	render(){
		return (
			<div style={{marginTop:'175px'}}>
				<div className="topHeadingContainer">
					<div className="headingCreateMachine">
						<h3>Vehicle List</h3>
					</div>
					<div className="saveButtonHeader" >
						<button className="btn btn-sm btn-primary" style={{marginRight:'100px'}} onClick={this.AddVehicle}><i className="fa fa-plus" aria-hidden="true"></i>Add Vehicle</button>
					</div>
				</div>
				<div className="container-fluid TableContainer">
					
					<table className="table table-hover table-bordered">
					    <thead>
					      <tr>
					        <th>Vin</th>
					        <th>Code</th>
					        <th>Brand</th>
					        <th>Model</th>
					        <th>Actions</th>
					      </tr>
					    </thead>
					    <tbody>
					    {this.props.vehicleInfo.vehicles.map((vehicle,i)=>(
						<tr key={i}>
							<td>{vehicle.vin}</td>
							<td>{vehicle.code}</td>
							<td>{vehicle.model.make.name}</td>
							<td>{vehicle.model.name}</td>
							<td>
								<button className="btn btn-default btn-sm" onClick={()=>this.detailVehicle(vehicle)}><i className="fa fa-pencil" aria-hidden="true"></i>Details</button>
								<button className="btn btn-danger btn-sm" onClick={()=>this.deleteVehicle(vehicle)}><i className="fa fa-trash" aria-hidden="true"></i>Delete</button>
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

export default ListVehicle;