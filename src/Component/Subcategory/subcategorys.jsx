import React,{Component} from 'react';
import history from '../../Inits/history';
class ListSubcategory extends Component{
	componentWillMount(){
	}
	AddSubcategory=()=>{
		history.push('/subcategory/create');
	}
	editSubcategory=(subcategory)=>{
		history.push('/subcategorys/'+subcategory.id);
	}
	deleteSubcategory=(subcategory)=>{
		 this.props.subcategoryInfo.deleteSubcategory(subcategory);
	}
	render(){
		return (
			<div style={{marginTop:'175px'}}>
				
				<div className="container">
				<div style={{float:'right',display:'inline-block'}}>
					<button type="button" className="btn btn-success"  onClick={this.AddSubcategory}><i className="fa fa-plus" aria-hidden="true"></i>Add</button>
				</div>
					<table className="table table-hover table-bordered">
					    <thead>
					      <tr>
					        <th>#</th>
					        <th>Subcategory Name</th>
					        <th>Actions</th>
					      </tr>
					    </thead>
					    <tbody>
					    {this.props.subcategoryInfo.subcategorys.map((subcategory,i)=>(
						<tr key={i}>
							<td>{i+1}</td>
							<td>{subcategory.name}</td>
							<td>
								<button className="btn btn-default btn-sm" onClick={()=>this.editSubcategory(subcategory)}><i className="fa fa-pencil" aria-hidden="true"></i>Edit</button>
								<button className="btn btn-danger btn-sm" onClick={()=>this.deleteSubcategory(subcategory)}><i className="fa fa-trash" aria-hidden="true"></i>Delete</button>
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

export default ListSubcategory;