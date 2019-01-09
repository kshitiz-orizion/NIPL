import React,{Component} from 'react';
import history from '../../Inits/history';
import {Modal,RemoveModal} from '../Machine/machines.jsx';
class ListVehicle extends Component{
	componentWillMount(){
		this.setState({
			sortvin:true,
			sortcode:true,
			vin:[],
			code:[],
			site:[],
			vehicle_type:[],
			model:[],
			registration:[], 
			status:[],
			ownership:[],
			color:[],
			body:[],
			engine_model:[],
			vehiclesInCart:JSON.parse(localStorage['cart'])['vehicles']
		});
		var vinFilter=[];
		var codeFilter=[];
		var siteFilter=[];
		var vehicle_typeFilter=[];
		var modelFilter=[];
		var registrationFilter=[];
		var statusFilter=[];
		var ownershipFilter=[];
		var colorFilter=[];
		var bodyFilter=[];
		var engine_modelFilter=[];
		var snumberFilter=[];
		if(this.props.vehicleInfo.vehicles!==undefined){
			for(var i=0;i<this.props.vehicleInfo.vehicles.length;i++){
				vinFilter.push(this.props.vehicleInfo.vehicles[i].vin);
				codeFilter.push(this.props.vehicleInfo.vehicles[i].code);
				siteFilter.push(this.props.vehicleInfo.vehicles[i].site);
				vehicle_typeFilter.push(this.props.vehicleInfo.vehicles[i].vehicle_type);
				modelFilter.push(this.props.vehicleInfo.vehicles[i].model);
				registrationFilter.push(this.props.vehicleInfo.vehicles[i].registration);
				statusFilter.push(this.props.vehicleInfo.vehicles[i].status);
				ownershipFilter.push(this.props.vehicleInfo.vehicles[i].ownership);
				colorFilter.push(this.props.vehicleInfo.vehicles[i].color);
				bodyFilter.push(this.props.vehicleInfo.vehicles[i].body);
				engine_modelFilter.push(this.props.vehicleInfo.vehicles[i].engine_model);
				snumberFilter.push(this.props.vehicleInfo.vehicles[i].code);
			}
		}
		this.setState({
			vinFilter:vinFilter,
			codeFilter:codeFilter,
			siteFilter:siteFilter,
			vehicle_typeFilter:vehicle_typeFilter,
			registrationFilter:registrationFilter,
			modelFilter:modelFilter,
			statusFilter:statusFilter,
			ownershipFilter:ownershipFilter,
			colorFilter:colorFilter,
			bodyFilter:bodyFilter,
			engine_modelFilter:engine_modelFilter,
		});
	}
	componentDidMount(){
		if(document.getElementById('sidenav').style.width==='15vw'){
			document.getElementsByClassName('topHeadingContainer')[0].setAttribute("style","width:88vw");
		}
	}
	AddVehicle=()=>{
		history.push('/vehicle/create');
	}
	editVehicle=(vehicle)=>{
		history.push('/vehicles/'+vehicle.id);
	}
	deleteVehicle=(vehicle)=>{
		 this.props.vehicleInfo.deleteVehicle(vehicle);
	}
	detailVehicle=(vehicle)=>{
		history.push('/vehicles/'+vehicle.id,{noEdit:true});
	}
	GPR=(vehicle,reason)=>{
		var a=JSON.parse(localStorage['cart']);
		a['vehicles'][vehicle]=reason;
		localStorage['cart']=JSON.stringify(a);
		this.setState({
			vehiclesInCart:JSON.parse(localStorage['cart'])['vehicles']
		});
		this.props.vehicleInfo.purchaseCounter();
	}

	RemoveGPR=(vehicle)=>{
		var a =JSON.parse(localStorage['cart']);
		delete a['vehicles'][vehicle];
		localStorage['cart']=JSON.stringify(a);
		this.setState({
			vehiclesInCart:JSON.parse(localStorage['cart'])['vehicles']
		});
		this.props.vehicleInfo.purchaseCounterDecrease();
	}
	Search=async (e)=>{
			const abcd=e.target.value;
			if(abcd){
				this.props.vehicleInfo.searchVehicles(abcd);
				}	
			else{
				this.props.vehicleInfo.getVehicles();
				}
	}
	sortVin=()=>{
		this.setState({
					sortvin:!this.state.sortvin
				});
				if(this.state.sortvin===true){
					this.props.vehicleInfo.vehicles=this.props.vehicleInfo.vehicles.sort(function(a, b) {
						var x = a['vin'].toLowerCase(); var y = b['vin'].toLowerCase();
			         	return ((x < y) ? -1 : ((x > y) ? 1 : 0));
			    	});
				}else{
					this.props.vehicleInfo.vehicles=this.props.vehicleInfo.vehicles.sort(function(a, b) {
						var x = a['vin'].toLowerCase(); var y = b['vin'].toLowerCase();
			         	return ((x > y) ? -1 : ((x < y) ? 1 : 0));
			    	});
				}
		    	this.forceUpdate();
	}
	sortCode=()=>{
		this.setState({
					sortcode:!this.state.sortcode
				});
				if(this.state.sortcode===true){
					this.props.vehicleInfo.vehicles=this.props.vehicleInfo.vehicles.sort(function(a, b) {
						var x = a['code'].toLowerCase(); var y = b['code'].toLowerCase();
			         	return ((x < y) ? -1 : ((x > y) ? 1 : 0));
			    	});
				}else{
					this.props.vehicleInfo.vehicles=this.props.vehicleInfo.vehicles.sort(function(a, b) {
						var x = a['code'].toLowerCase(); var y = b['code'].toLowerCase();
			         	return ((x > y) ? -1 : ((x < y) ? 1 : 0));
			    	});
				}
		    	this.forceUpdate();
	}
	sortBrand=()=>{
		this.setState({
					sortbrand:!this.state.sortbrand
				});
				if(this.state.sortcode===true){
					this.props.vehicleInfo.vehicles=this.props.vehicleInfo.vehicles.sort(function(a, b) {
						var x = a.model.make.name.toLowerCase(); var y = b.model.make.name.toLowerCase();
			         	return ((x < y) ? -1 : ((x > y) ? 1 : 0));
			    	});
				}else{
					this.props.vehicleInfo.vehicles=this.props.vehicleInfo.vehicles.sort(function(a, b) {
						var x = a.model.make.name.toLowerCase(); var y = b.model.make.name.toLowerCase();
			         	return ((x > y) ? -1 : ((x < y) ? 1 : 0));
			    	});
				}
		    	this.forceUpdate();
	}
	sortModel=()=>{
		this.setState({
					sortmodel:!this.state.sortmodel
				});
				if(this.state.sortcode===true){
					this.props.vehicleInfo.vehicles=this.props.vehicleInfo.vehicles.sort(function(a, b) {
						var x = a.model.name.toLowerCase(); var y = b.model.name.toLowerCase();
			         	return ((x < y) ? -1 : ((x > y) ? 1 : 0));
			    	});
				}else{
					this.props.vehicleInfo.vehicles=this.props.vehicleInfo.vehicles.sort(function(a, b) {
						var x = a.model.make.toLowerCase(); var y = b.model.make.toLowerCase();
			         	return ((x > y) ? -1 : ((x < y) ? 1 : 0));
			    	});
				}
		    	this.forceUpdate();
	}
	setVin=(id)=>{
		const obj=this.state.vin;
		var objfound='';
		var index='';
		for(var i=0;i<obj.length;i++){
			if(obj[i]===id){
				objfound=true;
				index=i;
			}
		}
		if(objfound!==true){
			const arr=this.state.vin;
			arr.push(id);
			this.setState({
				vin:[...arr]
			},this.FilterResult);
		}else{
			obj.splice(index,1);
			this.setState({
				vin:[...obj]
			},this.FilterResult);
		}

	}
	setCode=(id)=>{
		const obj=this.state.code;
		var objfound='';
		var index='';
		for(var i=0;i<obj.length;i++){
			if(obj[i]===id){
				objfound=true;
				index=i;
			}
		}
		if(objfound!==true){
			const arr=this.state.code;
			arr.push(id);
			this.setState({
				code:[...arr]
			},this.FilterResult);
		}else{
			obj.splice(index,1);
			this.setState({
				code:[...obj]
			},this.FilterResult);
		}
	}
	setSite=(id)=>{
		const obj=this.state.site;
		var objfound='';
		var index='';
		for(var i=0;i<obj.length;i++){
			if(obj[i]===id){
				objfound=true;
				index=i;
			}
		}
		if(objfound!==true){
			const arr=this.state.site;
			arr.push(id);
			this.setState({
				site:[...arr]
			},this.FilterResult);
		}else{
			obj.splice(index,1);
			this.setState({
				site:[...obj]
			},this.FilterResult);
		}
	}
	setVtype=(id)=>{
		const obj=this.state.vehicle_type;
		var objfound='';
		var index='';
		for(var i=0;i<obj.length;i++){
			if(obj[i]===id){
				objfound=true;
				index=i;
			}
		}
		if(objfound!==true){
			const arr=this.state.vehicle_type;
			arr.push(id);
			this.setState({
				vehicle_type:[...arr]
			},this.FilterResult);
		}else{
			obj.splice(index,1);
			this.setState({
				vehicle_type:[...obj]
			},this.FilterResult);
		}
	}
	setModel=(id)=>{
		const obj=this.state.model;
		var objfound='';
		var index='';
		for(var i=0;i<obj.length;i++){
			if(obj[i]===id){
				objfound=true;
				index=i;
			}
		}
		if(objfound!==true){
			const arr=this.state.model;
			arr.push(id);
			this.setState({
				model:[...arr]
			},this.FilterResult);
		}else{
			obj.splice(index,1);
			this.setState({
				model:[...obj]
			},this.FilterResult);
		}
	}
	setRegistration=(id)=>{
		const obj=this.state.registration;
		var objfound='';
		var index='';
		for(var i=0;i<obj.length;i++){
			if(obj[i]===id){
				objfound=true;
				index=i;
			}
		}
		if(objfound!==true){
			const arr=this.state.registration;
			arr.push(id);
			this.setState({
				registration:[...arr]
			},this.FilterResult);
		}else{
			obj.splice(index,1);
			this.setState({
				registration:[...obj]
			},this.FilterResult);
		}
	}
	setStatus=(id)=>{
		const obj=this.state.status;
		var objfound='';
		var index='';
		for(var i=0;i<obj.length;i++){
			if(obj[i]===id){
				objfound=true;
				index=i;
			}
		}
		if(objfound!==true){
			const arr=this.state.status;
			arr.push(id);
			this.setState({
				status:[...arr]
			},this.FilterResult);
		}else{
			obj.splice(index,1);
			this.setState({
				status:[...obj]
			},this.FilterResult);
		}
	}
	setOwnership=(id)=>{
		const obj=this.state.ownership;
		var objfound='';
		var index='';
		for(var i=0;i<obj.length;i++){
			if(obj[i]===id){
				objfound=true;
				index=i;
			}
		}
		if(objfound!==true){
			const arr=this.state.ownership;
			arr.push(id);
			this.setState({
				ownership:[...arr]
			},this.FilterResult);
		}else{
			obj.splice(index,1);
			this.setState({
				ownership:[...obj]
			},this.FilterResult);
		}
	}
	setColor=(id)=>{
		const obj=this.state.color;
		var objfound='';
		var index='';
		for(var i=0;i<obj.length;i++){
			if(obj[i]===id){
				objfound=true;
				index=i;
			}
		}
		if(objfound!==true){
			const arr=this.state.color;
			arr.push(id);
			this.setState({
				color:[...arr]
			},this.FilterResult);
		}else{
			obj.splice(index,1);
			this.setState({
				color:[...obj]
			},this.FilterResult);
		}
	}
	setBody=(id)=>{
		const obj=this.state.body;
		var objfound='';
		var index='';
		for(var i=0;i<obj.length;i++){
			if(obj[i]===id){
				objfound=true;
				index=i;
			}
		}
		if(objfound!==true){
			const arr=this.state.body;
			arr.push(id);
			this.setState({
				body:[...arr]
			},this.FilterResult);
		}else{
			obj.splice(index,1);
			this.setState({
				body:[...obj]
			},this.FilterResult);
		}
	}
	setEmodel=(id)=>{
		const obj=this.state.engine_model;
		var objfound='';
		var index='';
		for(var i=0;i<obj.length;i++){
			if(obj[i]===id){
				objfound=true;
				index=i;
			}
		}
		if(objfound!==true){
			const arr=this.state.engine_model;
			arr.push(id);
			this.setState({
				engine_model:[...arr]
			},this.FilterResult);
		}else{
			obj.splice(index,1);
			this.setState({
				engine_model:[...obj]
			},this.FilterResult);
		}
	}
	showModal=(vehicle,label)=>{
		this.setState({
			vehicleToRepairID:vehicle.id,
			vehicleToRepairName:`${vehicle.model.make.name} ${vehicle.model.name}`,
			vehicleToRepairStatus:vehicle.status.name,
			reason:'',

		});
		if(label==='add'){
		document.getElementById("myModal").style.top="50px";
		document.getElementById("modalSurround").style.top="0";
		}
		else{
			document.getElementById('removeModal').style.top="50px";
			document.getElementById("modalSurroundRemove").style.top="0";
		}


	}
	onChangeSetToState = stateKey => e => {
		this.setState({
			[stateKey]:e.target.value
		});
	}
	FilterResult=()=>{
		const {vin, code, site, vehicle_type, model, registration, status, ownership, color,body, engine_model}=this.state;
		const filterFields={vin, code, site, vehicle_type, model, registration, status, ownership, color,body, engine_model};
		this.props.vehicleInfo.filterVehicles(filterFields);
	}
	render(){
		return (
			<div style={{marginTop:'175px'}}>
				<div className="topHeadingContainer">
					<div className="headingCreateMachine">
						<h3>Vehicle List</h3>
					</div>
					<div className="saveButtonHeader" >
						<button className="btn btn-sm btn-primary" style={{marginRight:'100px'}} onClick={this.AddVehicle}><i className="fa fa-plus" aria-hidden="true"></i>Add Vehicle</button>
					</div>
				</div>
				<div className="mainContainer">
				<div className="filterContainer">
					<div className="filterScroll">
						<div className="filterHeading">
							<h3>Filters</h3>
						</div>
						<div className="filterCategories">
							Vin
							{this.state.vinFilter.map((vin,i)=>(
								<div key={i}>
									<input type="checkbox" style={{'display':'inline-block'}} onChange={()=>this.setVin(vin)}/>
									<h6 style={{display:'inline-block'}}>{vin}</h6>
								</div>
								))}
						</div>
						<div className="filterCategories">
							Code
							{this.state.codeFilter.map((code,i)=>(
								<div key={i}>
									<input type="checkbox" style={{'display':'inline-block'}} onChange={()=>this.setCode(code)}/>
									<h6 style={{display:'inline-block'}}>{code}</h6>
								</div>
								))}
						</div>
						<div className="filterCategories">
							Site
							{this.props.vehicleInfo.sites.map((site,i)=>(
								<div key={i}>
									<input type="checkbox" checked={this.state.site[site.id]} style={{'display':'inline-block'}} onChange={()=>this.setSite(site.id)}/>
									<h6 style={{display:'inline-block'}}>{site.name}</h6>
								</div>
								))}
						</div>
						<div className="filterCategories">
							Vehicle Type
							{this.props.vehicleInfo.vehicleType.map((vtype,i)=>(
								<div key={i}>
									<input type="checkbox" checked={this.state.vehicle_type[vtype.id]} style={{'display':'inline-block'}} onChange={()=>this.setVtype(vtype.id)}/>
									<h6 style={{display:'inline-block'}}>{vtype.name}</h6>
								</div>
								))}
						</div>
						<div className="filterCategories">
							Model
							{this.props.vehicleInfo.model.map((model,i)=>(
								<div key={i}>
									<input type="checkbox" checked={this.state.model[model.id]} style={{'display':'inline-block'}} onChange={()=>this.setModel(model.id)}/>
									<h6 style={{display:'inline-block'}}>{model.name}</h6>
								</div>
								))}
						</div>
						<div className="filterCategories">
							Registration
							{this.state.registrationFilter.map((registration,i)=>(
								<div key={i}>
									<input type="checkbox" style={{'display':'inline-block'}} onChange={()=>this.setRegistration(registration)}/>
									<h6 style={{display:'inline-block'}}>{registration}</h6>
								</div>
								))}
						</div>
						<div className="filterCategories">
							Status
							{this.props.vehicleInfo.status.map((status,i)=>(
								<div key={i}>
									<input type="checkbox" checked={this.state.status[status.id]} style={{'display':'inline-block'}} onChange={()=>this.setStatus(status.id)}/>
									<h6 style={{display:'inline-block'}}>{status.name}</h6>
								</div>
								))}
						</div>
						<div className="filterCategories">
							Ownership
							{this.props.vehicleInfo.ownership.map((owner,i)=>(
								<div key={i}>
									<input type="checkbox" checked={this.state.ownership[owner.id]} style={{'display':'inline-block'}} onChange={()=>this.setOwnership(owner.id)}/>
									<h6 style={{display:'inline-block'}}>{owner.name}</h6>
								</div>
								))}
						</div>
						<div className="filterCategories">
							Color
							{this.props.vehicleInfo.color.map((color,i)=>(
								<div key={i}>
									<input type="checkbox" checked={this.state.color[color.id]} style={{'display':'inline-block'}} onChange={()=>this.setColor(color.id)}/>
									<h6 style={{display:'inline-block'}}>{color.name}</h6>
								</div>
								))}
						</div>
						<div className="filterCategories">
							Body
							{this.props.vehicleInfo.body.map((body,i)=>(
								<div key={i}>
									<input type="checkbox" checked={this.state.body[body.id]} style={{'display':'inline-block'}} onChange={()=>this.setBody(body.id)}/>
									<h6 style={{display:'inline-block'}}>{body.name}</h6>
								</div>
								))}
						</div>
						<div className="filterCategories">
							Engine Model
							{this.props.vehicleInfo.engineModel.map((emodel,i)=>(
								<div key={i}>
									<input type="checkbox" checked={this.state.engine_model[emodel.id]} style={{'display':'inline-block'}} onChange={()=>this.setEmodel(emodel.id)}/>
									<h6 style={{display:'inline-block'}}>{emodel.name}</h6>
								</div>
								))}
						</div>
					</div>
				</div>
				<div className="TableContainer">
					<div className="searchTableContainer">
						<h3 style={{'display':'inline-block'}}>Search :</h3>
						<input type="text" placeholder="Search" style={{display:'inline-block'}}className="searchTable form-control" onChange={this.Search}/>
					</div>
					<table className="table table-hover table-bordered">
					    <thead>
					      <tr>
					      	<th onClick={()=>this.sortVin()}>
					        	<div style={{display:'inline-block'}}>Vin</div>
					        	<div style={{display:'inline-block',float:'right'}}>
					        		{this.state.sortvin?<i className="fa fa-angle-double-down"></i>:<i className="fa fa-angle-double-up"></i>}
					        	</div>
					        </th>
					        <th onClick={()=>this.sortCode()}>
					        	<div style={{display:'inline-block'}}>Code</div>
					        	<div style={{display:'inline-block',float:'right'}}>
					        		{this.state.sortcode?<i className="fa fa-angle-double-down"></i>:<i className="fa fa-angle-double-up"></i>}
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
					    {this.props.vehicleInfo && this.props.vehicleInfo.vehicles.map((vehicle,i)=>(
						<tr key={i}>
							<td>{vehicle.vin}</td>
							<td>{vehicle.code}</td>
							<td>{vehicle.model.make.name}</td>
							<td>{vehicle.model.name}</td>
							<td>
								<button className="btn btn-default btn-sm paddingActionButton" onClick={()=>this.detailVehicle(vehicle)}><i className="fa fa-pencil" aria-hidden="true"></i>Details</button>
								<button className="btn btn-primary btn-sm paddingActionButton" onClick={()=>this.deleteVehicle(vehicle)}><i className="fa fa-trash" aria-hidden="true"></i>Delete</button>
								{JSON.parse(localStorage['cart'])['vehicles'][vehicle.id]===undefined
								?<button className="btn btn-success btn-sm paddingActionButton" onClick={()=>this.showModal(vehicle,'add')}>Buy</button>
								:<button className="btn btn-danger btn-sm paddingActionButton" onClick={()=>this.showModal(vehicle,'remove')}>Remove</button>}
							</td>
						</tr>
					))}
					    </tbody>
	  				</table>
	  			</div>
	  			</div>
				<Modal
					id={this.state.vehicleToRepairID}
					onChangeSetToState={this.onChangeSetToState}
					name={this.state.vehicleToRepairName}
					GPRfunction={this.GPR}
					condition={this.state.vehicleToRepairStatus}
					reason={this.state.reason}
				/>
	  			<RemoveModal 
		  			id={this.state.vehicleToRepairID} 
		  			name={this.state.vehicleToRepairName}
		  			condition={this.state.vehicleToRepairStatus}
		  			removeGPRfunction={this.RemoveGPR}
		  		/>
			</div>
		)
	}
}

export default ListVehicle;