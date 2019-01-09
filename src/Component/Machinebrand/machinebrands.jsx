import React,{Component} from 'react';
import history from '../../Inits/history';
class ListMachinebrand extends Component{
	componentWillMount(){
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
				<div className="topHeadingContainer">
					<div className="headingCreateMachine">
						<h3>Machine Brand List</h3>
					</div>
					<div className="saveButtonHeader" >
						<button className="btn btn-sm btn-primary" style={{marginRight:'100px'}} onClick={this.AddMachinebrand}><i className="fa fa-plus" aria-hidden="true"></i>Add Machine Brand</button>
					</div>
				</div>
				<div className="mainContainer">
					<div className="TableContainer">
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
								<td>{i+1}</td>
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
			</div>
		)
	}
}

export default ListMachinebrand;