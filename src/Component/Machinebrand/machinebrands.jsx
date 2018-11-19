import React,{Component} from 'react';
import history from '../../Inits/history';
class ListMachinebrand extends Component{
	componentWillMount(){
		this.getMachinebrands();
	}
	getMachinebrands=async()=>{
		await this.props.machinebrandInfo.getMachinebrands();
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
					        <th>#</th>
					        <th>Machinebrand Name</th>
					        <th>Actions</th>
					      </tr>
					    </thead>
					    <tbody>
					    {this.props.machinebrandInfo.machinebrands.map((machinebrand,i)=>(
						<tr key={i}>
							<td>{i}</td>
							<td>{machinebrand.name}</td>
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