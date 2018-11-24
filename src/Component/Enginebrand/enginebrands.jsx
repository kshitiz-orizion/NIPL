import React,{Component} from 'react';
import history from '../../Inits/history';
class ListEnginebrand extends Component{
	componentWillMount(){
	}
	AddEnginebrand=()=>{
		history.push('/enginebrand/create');
	}
	editEnginebrand=(enginebrand)=>{
		history.push('/enginebrands/'+enginebrand.id);
	}
	deleteEnginebrand=(enginebrand)=>{
		 this.props.enginebrandInfo.deleteEnginebrand(enginebrand);
	}
	render(){
		return (
			<div style={{marginTop:'175px'}}>
				
				<div className="container">
				<div style={{float:'right',display:'inline-block'}}>
					<button type="button" className="btn btn-success"  onClick={this.AddEnginebrand}><i className="fa fa-plus" aria-hidden="true"></i>Add</button>
				</div>
					<table className="table table-hover table-bordered">
					    <thead>
					      <tr>
					        <th>#</th>
					        <th>Enginebrand Name</th>
					        <th>Actions</th>
					      </tr>
					    </thead>
					    <tbody>
					    {this.props.enginebrandInfo.enginebrands.map((enginebrand,i)=>(
						<tr key={i}>
							<td>{i+1}</td>
							<td>{enginebrand.name}</td>
							<td>
								<button className="btn btn-default btn-sm" onClick={()=>this.editEnginebrand(enginebrand)}><i className="fa fa-pencil" aria-hidden="true"></i>Edit</button>
								<button className="btn btn-danger btn-sm" onClick={()=>this.deleteEnginebrand(enginebrand)}><i className="fa fa-trash" aria-hidden="true"></i>Delete</button>
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

export default ListEnginebrand;