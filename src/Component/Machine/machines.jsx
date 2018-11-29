import React,{Component} from 'react';
import history from '../../Inits/history';
class ListMachine extends Component{
	componentWillMount(){
	}
	AddMachine=()=>{
		history.push('/machine/create');
	}
	editMachine=(machine)=>{
		history.push('/machines/'+machine.id);
	}
	deleteMachine=(machine)=>{
		 this.props.machineInfo.deleteMachine(machine);
	}
	detailMachine=(machine)=>{
		history.push('/machines/'+machine.id,{noEdit:true});
	}
	render(){
		return (
			<div style={{marginTop:'175px'}}>
				<div className="topHeadingContainer">
					<div className="headingCreateMachine">
						<h3>Machine List</h3>
					</div>
					<div className="saveButtonHeader" >
						<button className="btn btn-sm btn-primary" style={{marginRight:'100px'}} onClick={this.AddMachine}><i className="fa fa-plus" aria-hidden="true"></i>Add Machine</button>
					</div>
				</div>
				<div className="container">
					<table className="table table-hover table-bordered">
					    <thead>
					      <tr>
					        <th>Sl no</th>
					        <th>Machine Name</th>
					        <th>Machine Brand</th>
					        <th>Machine Model</th>
					        <th>Actions</th>
					      </tr>
					    </thead>
					    <tbody>
					    {this.props.machineInfo.machines.map((machine,i)=>(
						<tr key={i}>
							<td>{machine.serial_no}</td>
							<td>{machine.name}</td>
							<td>{machine.machinebrandname}</td>
							<td>{machine.machinemodelname}</td>
							<td>
								<button className="btn btn-default btn-sm" onClick={()=>this.detailMachine(machine)}><i className="fa fa-pencil" aria-hidden="true"></i>Details</button>
								<button className="btn btn-danger btn-sm" onClick={()=>this.deleteMachine(machine)}><i className="fa fa-trash" aria-hidden="true"></i>Delete</button>
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

export default ListMachine;