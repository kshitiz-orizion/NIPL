import React,{Component} from 'react';
import history from '../../Inits/history';
class ListEnginemodel extends Component{
	componentWillMount(){
	}
	AddEnginemodel=()=>{
		history.push('/enginemodel/create');
	}
	editEnginemodel=(enginemodel)=>{
		history.push('/enginemodels/'+enginemodel.id);
	}
	deleteEnginemodel=(enginemodel)=>{
		 this.props.enginemodelInfo.deleteEnginemodel(enginemodel);
	}
	render(){
		return (
			<div style={{marginTop:'175px'}}>
				
				<div className="container">
				<div style={{float:'right',display:'inline-block'}}>
					<button type="button" className="btn btn-success"  onClick={this.AddEnginemodel}><i className="fa fa-plus" aria-hidden="true"></i>Add</button>
				</div>
					<table className="table table-hover table-bordered">
					    <thead>
					      <tr>
					        <th>Sl no</th>
					        <th>Enginemodel Name</th>
					        <th>Enginemodel Brand</th>
					        <th>Actions</th>
					      </tr>
					    </thead>
					    <tbody>
					    {this.props.enginemodelInfo.enginemodels.map((enginemodel,i)=>(
						<tr key={i}>
							<td>{i+1}</td>
							<td>{enginemodel.name}</td>
							<td>{enginemodel.enginebrandname}</td>
							<td>
								<button className="btn btn-default btn-sm" onClick={()=>this.editEnginemodel(enginemodel)}><i className="fa fa-pencil" aria-hidden="true"></i>Edit</button>
								<button className="btn btn-danger btn-sm" onClick={()=>this.deleteEnginemodel(enginemodel)}><i className="fa fa-trash" aria-hidden="true"></i>Delete</button>
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

export default ListEnginemodel;