import React,{Component} from 'react';
import history from '../../Inits/history';
const Modal=(props)=>{
	const myFunction=()=>{
		document.getElementById("myModal").style.top="-500px";
		document.getElementById("modalSurround").style.top="-100vh";
	}
	const ShowData=()=>{
		props.GPRfunction(props.id,props.reason);
		document.getElementById("myModal").style.top="-500px";
		document.getElementById("modalSurround").style.top="-100vh";
	}
	return (
		<div>
			<div id="myModal" className="myModal">
				<div className="myModalHeadingContainer">
					{props.name}
					<div onClick={myFunction} className="closeModal">
					&times;
					</div>
				</div>
		  		<form style={{paddingTop:'60px'}}>
				  <div className="form-group row">
				    <h3 className="col-md-3">Condition</h3>
				    <input type="text" value={props.condition} disabled={true} className="form-control col-md-8"/>
				  </div>
				  <div className="form-group row bottomDivider">
				    <h3 className="col-md-3">Reason</h3>
				    <input type="text" value={props.reason} onChange={props.onChangeSetToState('reason')} className="form-control col-md-8"/>
				  </div>
				  <button type="button" className="btn btn-lg btn-primary modalButton"onClick={ShowData}>ADD TO CART</button>
				</form>
		  	</div>
		  	<div id="modalSurround" className="modalSurround">
		  	</div>
		</div>
		)
}
class ListMachine extends Component{
	componentWillMount(){
		this.setState({
			sortsl:true,
			sortname:true,
			sortbrand:true,
			sortmodel:true,
			category:[],
			code:[],
			snumber:[],
			regnum:[],
			engine_model:[],
			engine_snum:[],
			categoryShowFilter:false,
			codeShowFilter:false,
			slnoShowFilter:false,
			regnumShowFilter:false,
			emodelShowFilter:false,
			esnumShowFilter:false,
			machinesInCart:JSON.parse(localStorage['cart'])['machines'],
			status:'',
			reason:''
		});
		var codesFilter=[];
		var snumberFilter=[];
		var regnumFilter=[];
		var engine_snumFilter=[];
		if(this.props.machineInfo.machines!==undefined){
			for(let i=0;i<this.props.machineInfo.machines.length;i++){
				codesFilter.push(this.props.machineInfo.machines[i].code);
				engine_snumFilter.push(this.props.machineInfo.machines[i].engine_snum);
				snumberFilter.push(this.props.machineInfo.machines[i].snumber);
				regnumFilter.push(this.props.machineInfo.machines[i].regnum);
			}
		}	
		this.setState({
			codesFilter:codesFilter,
			snumberFilter:snumberFilter,
			regnumFilter:regnumFilter,
			engine_snumFilter:engine_snumFilter
		});
	}
	componentDidMount(){
		this.mounted=true;
		document.addEventListener('mousedown', this.handleClickOutside);
		
	}
	handleClickOutside=(e)=>{
		for(var i=0;i<e['path'].length;i++){
			if(e['path'][i].className ==='modalSurround'){
				document.getElementById("myModal").style.top="-500px";
				document.getElementById("modalSurround").style.top="-100vh";
			}
		}
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
	GPR=(machine,reason)=>{
		var a=JSON.parse(localStorage['cart']);
		a['machines'][machine]=reason;
		localStorage['cart']=JSON.stringify(a);
		this.setState({
			machinesInCart:JSON.parse(localStorage['cart'])['machines']
		});
		this.props.machineInfo.purchaseCounter();
	}
	RemoveGPR=(machine)=>{
		var a =JSON.parse(localStorage['cart']);
		delete a['machines'][machine];
		localStorage['cart']=JSON.stringify(a);
		this.setState({
			machinesInCart:JSON.parse(localStorage['cart'])['machines']
		});
		this.props.machineInfo.purchaseCounterDecrease();
	}
	Search=async (e)=>{
			const abcd=e.target.value;
			if(abcd){
				 this.props.machineInfo.searchMachines(abcd);
				 this.props.machineInfo.getPages();
				}	
			else{
					this.props.machineInfo.getMachinesClearSearch();
					this.props.machineInfo.getPages();
				}
	}
	onChangeSetToState = stateKey => e => {
		this.setState({
			[stateKey]:e.target.value
		});
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
		this.setState({
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
		    	this.forceUpdate();
	}
	sortModel=()=>{
		this.setState({
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
		    	this.forceUpdate();
	}
	setCategory=(id)=>{
		const obj=this.state.category;
		var objfound='';
		var index='';
		for(var i=0;i<obj.length;i++){
			if(obj[i]===id){
				objfound=true;
				index=i;
			}
		}
		if(objfound!==true){
			const arr=this.state.category;
			arr.push(id);
			this.setState({
				category:[...arr]
			},this.FilterResult);
		}else{
			obj.splice(index,1);
			this.setState({
				category:[...obj]
			},this.FilterResult);
		}

	}
	setCode=(code)=>{
		const obj=this.state.code;
		var objfound;
		var index;
		for(var i=0;i<obj.length;i++){
			if(obj[i]===code){
				objfound=true;
				index=i;
			}
		}
		if(objfound!==true){
			const arr=this.state.code;
			arr.push(code);
			this.setState({
				code:[...arr]
			},this.FilterResult);
		}else{
			obj.splice(index,1);
			this.setState({
				code:[...obj]
			},this.FilterResult);
		}
		console.log(this.state.code);
	}
	setSnumber=(snum)=>{
		const obj=this.state.snumber;
		var objfound='';
		var index='';
		for(var i=0;i<obj.length;i++){
			if(obj[i]===snum){
				objfound=true;
				index=i;
			}
		}
		if(objfound!==true){
			const arr=this.state.snumber;
			arr.push(snum);
			this.setState({
				snumber:[...arr]
			},this.FilterResult);
		}else{
			obj.splice(index,1);
			this.setState({
				snumber:[...obj]
			},this.FilterResult);
		}
	}
	setRegnum=(regnum)=>{
		const obj=this.state.regnum;
		var objfound='';
		var index='';
		for(var i=0;i<obj.length;i++){
			if(obj[i]===regnum){
				objfound=true;
				index=i;
			}
		}
		if(objfound!==true){
			const arr=this.state.regnum;
			arr.push(regnum);
			this.setState({
				regnum:[...arr]
			},this.FilterResult);
		}else{
			obj.splice(index,1);
			this.setState({
				regnum:[...obj]
			},this.FilterResult);
		}
	}
	setEmodel=(emodel)=>{
		const obj=this.state.engine_model;
		var objfound='';
		var index='';
		for(var i=0;i<obj.length;i++){
			if(obj[i]===emodel){
				objfound=true;
				index=i;
			}
		}
		if(objfound!==true){
			const arr=this.state.engine_model;
			arr.push(emodel);
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
	setEsnum=(esnum)=>{
		const obj=this.state.engine_snum;
		var objfound='';
		var index='';
		for(var i=0;i<obj.length;i++){
			if(obj[i]===esnum){
				objfound=true;
				index=i;
			}
		}
		if(objfound!==true){
			const arr=this.state.engine_snum;
			arr.push(esnum);
			this.setState({
				engine_snum:[...arr]
			},this.FilterResult);
		}else{
			obj.splice(index,1);
			this.setState({
				engine_snum:[...obj]
			},this.FilterResult);
		}
	}
	FilterResult=()=>{
		const {category,code,snumber,regnum,engine_model,engine_snum}=this.state;
		const filterFields={category,code,snumber,regnum,engine_model,engine_snum};
		this.props.machineInfo.filterMachines(filterFields);
	}
	showFilterDiv=(label)=>{
		this.setState({
			[label]:!this.state[label]
		});
	}
	showModal=(machine)=>{
		this.setState({
			machineToRepairID:machine.id,
			machineToRepairName:machine.name,
			machineToRepairCondition:machine.condition.name
		});
		document.getElementById("myModal").style.top="50px";
		document.getElementById("modalSurround").style.top="0";
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
				<div className="mainContainer">
				<div className="filterContainer">
					<div className="filterScroll">
						<div className="filterHeading">
							<h3>Filters</h3>
						</div>
						<div className="filterCategories">
							<div onClick={()=>this.showFilterDiv('categoryShowFilter')}>
								<div style={{display:'inline-block'}}>
								Category
								</div>
								<div style={{display:'inline-block',float:'right'}}>	
								{this.state.categoryShowFilter ? <i className="fa fa-angle-up"></i>:<i className="fa fa-angle-down"></i>}
								</div>
							</div>
							{this.state.categoryShowFilter && this.props.machineInfo.categories.map((category,i)=>(
								<div key={i}>
									<input type="checkbox" checked={this.state.category[category.id]} style={{'display':'inline-block'}} onChange={()=>this.setCategory(category.id)}/>
									<h6 style={{display:'inline-block'}}>{category.name}</h6>
								</div>
								))}
						</div>
						<div className="filterCategories">
							<div onClick={()=>this.showFilterDiv('codeShowFilter')}>
								<div style={{display:'inline-block'}}>
								Code
								</div>
								<div style={{display:'inline-block',float:'right'}}>	
								{this.state.codeShowFilter ? <i className="fa fa-angle-up"></i>:<i className="fa fa-angle-down"></i>}
								</div>
							</div>
							{this.state.codeShowFilter && this.state.codesFilter.map((code,i)=>(
								<div key={i}>
									<input type="checkbox" checked={this.state.code[{code}]} style={{'display':'inline-block'}} onChange={()=>this.setCode(code)}/>
									<h6 style={{display:'inline-block'}}>{code}</h6>
									</div>
								))}
						</div>
						<div className="filterCategories">
							<div onClick={()=>this.showFilterDiv('slnoShowFilter')}>
								<div style={{display:'inline-block'}}>
								Serial Number
								</div>
								<div style={{display:'inline-block',float:'right'}}>	
								{this.state.slnoShowFilter ? <i className="fa fa-angle-up"></i>:<i className="fa fa-angle-down"></i>}
								</div>
							</div>
							{this.state.slnoShowFilter && this.state.snumberFilter.map((snumber,i)=>(
								<div key={i}>
									<input type="checkbox" checked={this.state.snumber[{snumber}]} style={{'display':'inline-block'}} onChange={()=>this.setSnumber(snumber)}/>
									<h6 style={{display:'inline-block'}}>{snumber}</h6>
									</div>
								))}
						</div>
						<div className="filterCategories">
							<div onClick={()=>this.showFilterDiv('regnumShowFilter')}>
								<div style={{display:'inline-block'}}>
								Reg Number
								</div>
								<div style={{display:'inline-block',float:'right'}}>	
								{this.state.regnumShowFilter ? <i className="fa fa-angle-up"></i>:<i className="fa fa-angle-down"></i>}
								</div>
							</div>
							{this.state.regnumShowFilter && this.state.regnumFilter.map((regnum,i)=>(
								<div key={i}>
									<input type="checkbox" checked={this.state.regnum[{regnum}]} style={{'display':'inline-block'}} onChange={()=>this.setRegnum(regnum)}/>
									<h6 style={{display:'inline-block'}}>{regnum}</h6>
									</div>
								))}
						</div>
						<div className="filterCategories">
							<div onClick={()=>this.showFilterDiv('emodelShowFilter')}>
								<div style={{display:'inline-block'}}>
								Engine Model
								</div>
								<div style={{display:'inline-block',float:'right'}}>	
								{this.state.emodelShowFilter ? <i className="fa fa-angle-up"></i>:<i className="fa fa-angle-down"></i>}
								</div>
							</div>
							{this.state.emodelShowFilter && this.props.machineInfo.enginemodels.map((emodel,i)=>(
								<div key={i}>
									<input type="checkbox" checked={this.state.engine_model[emodel.id]} style={{'display':'inline-block'}} onChange={()=>this.setEmodel(emodel.id)}/>
									<h6 style={{display:'inline-block'}}>{emodel.name}</h6>
								</div>
								))}
						</div>
						<div className="filterCategories">
							<div onClick={()=>this.showFilterDiv('esnumShowFilter')}>
								<div style={{display:'inline-block'}}>
								Engine Snum
								</div>
								<div style={{display:'inline-block',float:'right'}}>	
								{this.state.esnumShowFilter ? <i className="fa fa-angle-up"></i>:<i className="fa fa-angle-down"></i>}
								</div>
							</div>
							{this.state.esnumShowFilter && this.state.engine_snumFilter.map((esnum,i)=>(
								<div key={i}>
									<input type="checkbox" checked={this.state.engine_snum[{esnum}]}style={{'display':'inline-block'}} onChange={()=>this.setEsnum(esnum)}/>
									<h6 style={{display:'inline-block'}}>{esnum}</h6>
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
					    {this.props.machineInfo.machines && this.props.machineInfo.machines.map((machine,i)=>(
						<tr key={i}>
							<td>{machine.snumber}</td>
							<td>{machine.name}</td>
							<td>{machine.model.brand.name}</td>
							<td>{machine.model.name}</td>
							<td>
								<button className="btn btn-default btn-sm paddingActionButton" onClick={()=>this.detailMachine(machine)}><i className="fa fa-pencil" aria-hidden="true"></i>Details</button>
								<button className="btn btn-primary btn-sm paddingActionButton" onClick={()=>this.deleteMachine(machine)}><i className="fa fa-trash" aria-hidden="true"></i>Delete</button>
								{JSON.parse(localStorage['cart'])['machines'][machine.id]===undefined
								?<button className="btn btn-success btn-sm paddingActionButton" onClick={()=>this.showModal(machine)}>Buy</button>
								:<button className="btn btn-danger btn-sm paddingActionButton" onClick={()=>this.RemoveGPR(machine.id)}>Remove</button>}
							</td>
						</tr>
					))}
					    </tbody>
	  				</table>
	  			</div>
	  			</div>
	  			<Modal 
	  			id={this.state.machineToRepairID} 
	  			onChangeSetToState={this.onChangeSetToState} 
	  			name={this.state.machineToRepairName}
	  			GPRfunction={this.GPR}
	  			condition={this.state.machineToRepairCondition}
	  			reason={this.state.reason} />
			</div>
		)
	}
}

export default ListMachine;