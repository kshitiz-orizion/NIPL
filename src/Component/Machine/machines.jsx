import React,{Component} from 'react';
import history from '../../Inits/history';
class ListMachine extends Component{
	componentWillMount(){
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
				
				<div className="container">
				<div style={{float:'right',display:'inline-block'}}>
					<button type="button" className="btn btn-success"  onClick={this.AddStudent}><i className="fa fa-plus" aria-hidden="true"></i>Add</button>
				</div>
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
							<td>{machine.brand_id}</td>
							<td>{machine.model_id}</td>
							<td>
								<button className="btn btn-default btn-sm" onClick={()=>this.editStudent(machine)}><i className="fa fa-pencil" aria-hidden="true"></i>Edit</button>
								<button className="btn btn-danger btn-sm" onClick={()=>this.deleteStudent(machine)}><i className="fa fa-trash" aria-hidden="true"></i>Delete</button>
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