import React,{Component} from 'react';
import history from '../../Inits/history';
class ListCondition extends Component{
	componentWillMount(){
	}
	AddCondition=()=>{
		history.push('/condition/create');
	}
	editCondition=(condition)=>{
		history.push('/conditions/'+condition.id);
	}
	deleteCondition=(condition)=>{
		 this.props.conditionInfo.deleteCondition(condition);
	}
	render(){
		return (
			<div style={{marginTop:'175px'}}>
				<div className="topHeadingContainer">
					<div className="headingCreateMachine">
						<h3>Condition List</h3>
					</div>
					<div className="saveButtonHeader" >
						<button className="btn btn-sm btn-primary" style={{marginRight:'100px'}} onClick={this.AddCondition}><i className="fa fa-plus" aria-hidden="true"></i>Add Condition</button>
					</div>
				</div>
				<div className="container">
					<table className="table table-hover table-bordered">
					    <thead>
					      <tr>
					        <th>#</th>
					        <th>Condition Name</th>
					        <th>Actions</th>
					      </tr>
					    </thead>
					    <tbody>
					    {this.props.conditionInfo.conditions.map((condition,i)=>(
						<tr key={i}>
							<td>{i+1}</td>
							<td>{condition.name}</td>
							<td style={{textAlign:"center"}}>
								<button className="btn btn-default btn-sm" onClick={()=>this.editCondition(condition)}><i className="fa fa-pencil" aria-hidden="true"></i>Edit</button>
								<button className="btn btn-danger btn-sm" onClick={()=>this.deleteCondition(condition)}><i className="fa fa-trash" aria-hidden="true"></i>Delete</button>
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

export default ListCondition;