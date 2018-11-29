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
				<div className="topHeadingContainer">
					<div className="headingCreateMachine">
						<h3>Sub Category List</h3>
					</div>
					<div className="saveButtonHeader" >
						<button className="btn btn-sm btn-primary" style={{marginRight:'100px'}} onClick={this.AddSubcategory}><i className="fa fa-plus" aria-hidden="true"></i>Add Sub Category</button>
					</div>
				</div>
				<div className="container">
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