import React,{Component} from 'react';
import history from '../../Inits/history';
class ListPart extends Component{
	componentWillMount(){
	}
	AddPart=()=>{
		history.push('/part/create');
	}
	editPart=(part)=>{
		history.push('/parts/'+part.id);
	}
	deletePart=(part)=>{
		 this.props.partInfo.deletePart(part);
	}
	render(){
		return (
			<div style={{marginTop:'175px'}}>
				<div className="topHeadingContainer">
					<div className="headingCreateMachine">
						<h3>Spare Parts List</h3>
					</div>
					<div className="saveButtonHeader" >
						<button className="btn btn-sm btn-primary" style={{marginRight:'100px'}} onClick={this.AddPart}><i className="fa fa-plus" aria-hidden="true"></i>Add Part</button>
					</div>
				</div>
				<div className="mainContainer">
					<div className="TableContainer">
						<table className="table table-hover table-bordered">
						    <thead>
						      <tr>
						        <th>#</th>
						        <th>Category</th>
						        <th>Model</th>
						        <th>Particulars</th>
						        <th>Part Number</th>
						        <th>Quantity</th>
						        <th>Action</th>
						      </tr>
						    </thead>
						    <tbody>
						    {this.props.partInfo.parts.map((part,i)=>(
							<tr key={i}>
								<td>{i+1}</td>
								<td>{part.category}</td>
								<td>{part.model.name}</td>
								<td>{part.particulers}</td>
								<td>{part.partno}</td>
								<td>{part.quantity}</td>
								<td>
									<button className="btn btn-default btn-sm" onClick={()=>this.editPart(part)}><i className="fa fa-pencil" aria-hidden="true"></i>Edit</button>
									<button className="btn btn-danger btn-sm" onClick={()=>this.deletePart(part)}><i className="fa fa-trash" aria-hidden="true"></i>Delete</button>
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

export default ListPart;