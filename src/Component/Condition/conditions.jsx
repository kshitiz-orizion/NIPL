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
				
				<div className="container">
				<div style={{float:'right',display:'inline-block'}}>
					<button type="button" className="btn btn-success"  onClick={this.AddCondition}><i className="fa fa-plus" aria-hidden="true"></i>Add</button>
				</div>
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