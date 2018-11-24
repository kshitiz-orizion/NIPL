import React,{Component} from 'react';
import history from '../../Inits/history';
class ListMachinemodel extends Component{
	componentWillMount(){
	}
	AddMachinemodel=()=>{
		history.push('/machinemodel/create');
	}
	editMachinemodel=(machinemodel)=>{
		history.push('/machinemodels/'+machinemodel.id);
	}
	deleteMachinemodel=(machinemodel)=>{
		 this.props.machinemodelInfo.deleteMachinemodel(machinemodel);
	}
	render(){
		return (
			<div style={{marginTop:'175px'}}>
				
				<div className="container">
				<div style={{float:'right',display:'inline-block'}}>
					<button type="button" className="btn btn-success"  onClick={this.AddMachinemodel}><i className="fa fa-plus" aria-hidden="true"></i>Add</button>
				</div>
					<table className="table table-hover table-bordered">
					    <thead>
					      <tr>
					        <th>Sl no</th>
					        <th>Machinemodel Name</th>
					        <th>Machinemodel Brand</th>
					        <th>Actions</th>
					      </tr>
					    </thead>
					    <tbody>
					    {this.props.machinemodelInfo.machinemodels.map((machinemodel,i)=>(
						<tr key={i}>
							<td>{i+1}</td>
							<td>{machinemodel.name}</td>
							<td>{machinemodel.machinebrandname}</td>
							<td style={{textAlign:'center'}}>
								<button className="btn btn-default btn-sm" onClick={()=>this.editMachinemodel(machinemodel)}><i className="fa fa-pencil" aria-hidden="true"></i>Edit</button>
								<button className="btn btn-danger btn-sm" onClick={()=>this.deleteMachinemodel(machinemodel)}><i className="fa fa-trash" aria-hidden="true"></i>Delete</button>
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

export default ListMachinemodel;