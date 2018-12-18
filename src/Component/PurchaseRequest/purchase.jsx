import React,{Component} from 'react';
import history from '../../Inits/history';
class ListPurchase extends Component{
	componentWillMount(){
	}
	AddCategory=()=>{
		history.push('/purchase/create');
	}
	editCategory=(purchase)=>{
		history.push('/purchases/'+purchase.id);
	}
	deleteCategory=(purchase)=>{
		 this.props.purchaseInfo.deleteCategory(purchase);
	}
	removeFromList=(machine,i,label)=>{
		var a =JSON.parse(localStorage['cart']);
		delete a[label][machine];
		localStorage['cart']=JSON.stringify(a);
		var list=label+'List';
		this.props.purchaseInfo[list].splice(i,1);
		this.props.purchaseInfo.purchaseCounterDecrease();
		this.forceUpdate();
	}
	render(){
		return (
			<div style={{marginTop:'175px'}}>
				<div className="topHeadingContainer">
					<div className="headingCreateMachine">
						<h3>Purchase List</h3>
					</div>
				</div>
				<div className="container">
					<h3>Machine Purchase Order Request</h3>
					<table className="table table-hover table-bordered">
					    <thead>
					      <tr>
					        <th>#</th>
					        <th>Machine Name</th>
					        <th>Site</th>
					        <th>Condition</th>
					        <th>Reason</th>
					      </tr>
					    </thead>
					    <tbody>
					    {this.props.purchaseInfo.machinesList.map((machine,i)=>(
						<tr key={i}>
							<td>{i+1}</td>
							<td>{machine.name}</td>
							<td>{machine.site.name}</td>
							<td>{machine.condition.name}</td>
							<td>{machine.reason}</td>
							<td>
								<button className="btn btn-danger btn-sm" onClick={()=>this.removeFromList(machine.id,i,'machines')}><i className="fa fa-trash" aria-hidden="true"></i>Remove</button>
							</td>
						</tr>
					))}
					    </tbody>
	  				</table>
	  				<h3>Vehicle Purchase Order Request</h3>
					<table className="table table-hover table-bordered">
					    <thead>
					      <tr>
					        <th>#</th>
					        <th>Vehicle Name</th>
					        <th>Site</th>
					      </tr>
					    </thead>
					    <tbody>
					    {this.props.purchaseInfo.vehiclesList.map((vehicle,i)=>(
						<tr key={i}>
							<td>{i+1}</td>
							<td>{vehicle.model.make.name}{' '}{vehicle.model.name}</td>
							<td>{vehicle.site.name}</td>
							<td>
								<button className="btn btn-danger btn-sm" onClick={()=>this.removeFromList(vehicle.id,i,'vehicles')}><i className="fa fa-trash" aria-hidden="true"></i>Remove</button>
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

export default ListPurchase;