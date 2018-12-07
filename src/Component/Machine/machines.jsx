import React,{Component} from 'react';
import history from '../../Inits/history';
class ListMachine extends Component{
	componentWillMount(){
		this.setState({
			sortsl:true,
			sortname:true,
			sortbrand:true,
			sortmodel:true
		})
	}
	componentDidMount(){
		this.mounted=true;
		
	}
	componentWillUnmount(){
		this.mounted=false;
	}
	AddMachine=()=>{
		history.push('/machine/create');
	}
	editMachine=(machine)=>{
		history.push('/machines/'+machine.id);
	}
	deleteMachine=(machine)=>{
		 this.props.machineInfo.deleteMachine(machine);
	}
	detailMachine=(machine)=>{
		history.push('/machines/'+machine.id,{noEdit:true});
	}
	Search=async (e)=>{
		if(e.target.value){
		await this.props.machineInfo.searchMachines(e.target.value);
		this.props.machineInfo.getPages();
		}	else{
			this.props.machineInfo.getMachines();
		}
	}
	sortSlno=()=>{
		if(this.mounted)
		{this.setState({
					sortsl:!this.state.sortsl
				});
				if(this.state.sortsl===true){
					this.props.machineInfo.machines=this.props.machineInfo.machines.sort(function(a, b) {
						var x = a['snumber'].toLowerCase(); var y = b['snumber'].toLowerCase();
			         	return ((x < y) ? -1 : ((x > y) ? 1 : 0));
			    	});
				}else{
					this.props.machineInfo.machines=this.props.machineInfo.machines.sort(function(a, b) {
						var x = a['snumber']; var y = b['snumber'];
			         	return ((x > y) ? -1 : ((x < y) ? 1 : 0));
			    	});
				}
		    	this.forceUpdate();}
	}
	sortName=()=>{
		if(this.mounted)
		{this.setState({
					sortname:!this.state.sortname
				})
				if(this.state.sortname===true){
					this.props.machineInfo.machines=this.props.machineInfo.machines.sort(function(a, b) {
						var x = a['name'].toLowerCase(); var y = b['name'].toLowerCase();
			         	return ((x < y) ? -1 : ((x > y) ? 1 : 0));
			    	});
		    	}
		    	else{
		    		this.props.machineInfo.machines=this.props.machineInfo.machines.sort(function(a, b) {
						var x = a['name'].toLowerCase(); var y = b['name'].toLowerCase();
			         	return ((x > y) ? -1 : ((x < y) ? 1 : 0));
			    	});
		    	}
		    	this.forceUpdate();}
	}
	sortBrand=()=>{
		if(this.mounted)
		{this.setState({
					sortbrand:!this.state.sortbrand
				});
				if(this.state.sortbrand===true){
					this.props.machineInfo.machines=this.props.machineInfo.machines.sort(function(a, b) {
						var x = a.model.brand.name.toLowerCase(); var y = b.model.brand.name.toLowerCase();
			         	return ((x < y) ? -1 : ((x > y) ? 1 : 0));
			    	});
				}
				else{
					this.props.machineInfo.machines=this.props.machineInfo.machines.sort(function(a, b) {
						var x = a.model.brand.name.toLowerCase(); var y = b.model.brand.name.toLowerCase();
			         	return ((x > y) ? -1 : ((x < y) ? 1 : 0));
			        });
				}
		    	this.forceUpdate();}
	}
	sortModel=()=>{
		if(this.mounted)
		{this.setState({
					sortmodel:!this.state.sortmodel
				})
				if(this.state.sortmodel===true){
					this.props.machineInfo.machines=this.props.machineInfo.machines.sort(function(a, b) {
						var x = a.model.name.toLowerCase(); var y = b.model.name.toLowerCase();
			         	return ((x < y) ? -1 : ((x > y) ? 1 : 0));
			    	});
				}
				else{
					this.props.machineInfo.machines=this.props.machineInfo.machines.sort(function(a, b) {
						var x = a.model.name.toLowerCase(); var y = b.model.name.toLowerCase();
			         	return ((x > y) ? -1 : ((x < y) ? 1 : 0));
			    	});
				}
		    	this.forceUpdate();}
	}
	render(){
		return (
			<div style={{marginTop:'175px'}}>
				<div className="topHeadingContainer">
					<div className="headingCreateMachine">
						<h3>Machine List</h3>
					</div>
					<div className="saveButtonHeader" >
						<button className="btn btn-sm btn-primary" style={{marginRight:'100px'}} onClick={this.AddMachine}><i className="fa fa-plus" aria-hidden="true"></i>Add Machine</button>
					</div>
				</div>
				<div className="container-fluid TableContainer">
					<div className="searchTableContainer">
						<h3 style={{'display':'inline-block'}}>Search :</h3>
						<input type="text" placeholder="Search" style={{display:'inline-block'}}className="searchTable form-control" onChange={this.Search}/>
					</div>
					<table className="table table-hover table-bordered">
					    <thead>
					      <tr>
					        <th onClick={()=>this.sortSlno()}>
					        	<div style={{display:'inline-block'}}>Sl no</div>
					        	<div style={{display:'inline-block',float:'right'}}>
					        		{this.state.sortsl?<i className="fa fa-angle-double-down"></i>:<i className="fa fa-angle-double-up"></i>}
					        	</div>
					        </th>
					        <th onClick={()=>this.sortName()}>
					        	<div style={{display:'inline-block'}}>Name</div>
					        	<div style={{display:'inline-block',float:'right'}}>
					        		{this.state.sortname?<i className="fa fa-angle-double-down"></i>:<i className="fa fa-angle-double-up"></i>}
					        	</div>
					        </th>
					        <th onClick={()=>this.sortBrand()}>
					        	<div style={{display:'inline-block'}}>Brand</div>
					        	<div style={{display:'inline-block',float:'right'}}>
					        		{this.state.sortbrand?<i className="fa fa-angle-double-down"></i>:<i className="fa fa-angle-double-up"></i>}
					        	</div>
					        </th>
					        <th onClick={()=>this.sortModel()}>
					        	<div style={{display:'inline-block'}}>Model</div>
					        	<div style={{display:'inline-block',float:'right'}}>
					        		{this.state.sortmodel?<i className="fa fa-angle-double-down"></i>:<i className="fa fa-angle-double-up"></i>}
					        	</div>
					        </th>
					        <th>Actions</th>
					      </tr>
					    </thead>
					    <tbody>
					    {this.props.machineInfo.machines.map((machine,i)=>(
						<tr key={i}>
							<td>{machine.snumber}</td>
							<td>{machine.name}</td>
							<td>{machine.model.brand.name}</td>
							<td>{machine.model.name}</td>
							<td>
								<button className="btn btn-default btn-sm" onClick={()=>this.detailMachine(machine)}><i className="fa fa-pencil" aria-hidden="true"></i>Details</button>
								<button className="btn btn-danger btn-sm" onClick={()=>this.deleteMachine(machine)}><i className="fa fa-trash" aria-hidden="true"></i>Delete</button>
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

export default ListMachine;