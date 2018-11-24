import React,{Component} from 'react';
import history from '../../Inits/history';
class ListCondition extends Component{
	componentWillMount(){
	}
	AddCategory=()=>{
		history.push('/category/create');
	}
	editCategory=(category)=>{
		history.push('/categorys/'+category.id);
	}
	deleteCategory=(category)=>{
		 this.props.categoryInfo.deleteCategory(category);
	}
	render(){
		return (
			<div style={{marginTop:'175px'}}>
				
				<div className="container">
				<div style={{float:'right',display:'inline-block'}}>
					<button type="button" className="btn btn-success"  onClick={this.AddCategory}><i className="fa fa-plus" aria-hidden="true"></i>Add</button>
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
					    {this.props.categoryInfo.categorys.map((category,i)=>(
						<tr key={i}>
							<td>{i+1}</td>
							<td>{category.name}</td>
							<td>
								<button className="btn btn-default btn-sm" onClick={()=>this.editCategory(category)}><i className="fa fa-pencil" aria-hidden="true"></i>Edit</button>
								<button className="btn btn-danger btn-sm" onClick={()=>this.deleteCategory(category)}><i className="fa fa-trash" aria-hidden="true"></i>Delete</button>
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