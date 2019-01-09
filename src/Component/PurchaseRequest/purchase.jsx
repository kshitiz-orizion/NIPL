import React,{Component,Fragment} from 'react';
import history from '../../Inits/history';
import {RemoveModal} from '../Machine/machines.jsx';
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
	showModal=(type,i,label)=>{
		if(label==='machines'){
			this.setState({
				machineToRepairID:type.id,
				machineToRepairName:type.name,
				machineToRepairCondition:type.condition.name,
				i:i,
				label:label,
			});
		}
		if(label==='vehicles'){
			this.setState({
				machineToRepairID:type.id,
				machineToRepairName:`${type.model.make.name} ${type.model.name}`,
				machineToRepairCondition:type.status.name,
				i:i,
				label:label,
			});
		}
		document.getElementById('removeModal').style.top="50px";
		document.getElementById("modalSurround").style.top="0";
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
								<button className="btn btn-danger btn-sm" onClick={()=>this.showModal(machine,i,'machines')}><i className="fa fa-trash" aria-hidden="true"></i>Remove</button>
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
					        <th>Status</th>
					        <th>Reason</th>
					      </tr>
					    </thead>
					    <tbody>
					    {this.props.purchaseInfo.vehiclesList.map((vehicle,i)=>(
						<tr key={i}>
							<td>{i+1}</td>
							<td>{vehicle.model.make.name}{' '}{vehicle.model.name}</td>
							<td>{vehicle.site.name}</td>
							<td>{vehicle.status.name}</td>
							<td>{vehicle.reason}</td>
							<td>
								<button className="btn btn-danger btn-sm" onClick={()=>this.showModal(vehicle,i,'vehicles')}><i className="fa fa-trash" aria-hidden="true"></i>Remove</button>
							</td>
						</tr>
					))}
					    </tbody>
	  				</table>
	  			</div>
		  			<RemoveModal 
		  			id={this.state?this.state.machineToRepairID:''} 
		  			name={this.state?this.state.machineToRepairName:''}
		  			condition={this.state?this.state.machineToRepairCondition:''}
		  			label={this.state?this.state.label:''}
		  			i={this.state?this.state.i:''}
		  			removeGPRfunction={this.removeFromList}
		  			/>
			</div>
		)
	}
}

export default ListPurchase;