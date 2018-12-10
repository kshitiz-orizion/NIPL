import React,{Component} from 'react';
import history from '../../Inits/history';
class ListMachine extends Component{
	componentWillMount(){
		this.setState({
			sortsl:true,
			sortname:true,
			sortbrand:true,
			sortmodel:true,
			category:[],
			code:'',
			snumber:'',
			regnum:'',
			engine_model:'',
			engine_snum:''
		});
		var codesFilter=[];
		var snumberFilter=[];
		var regnumFilter=[];
		var engine_snumFilter=[];
		for(var i=0;i<this.props.machineInfo.machines.length;i++){
			codesFilter.push(this.props.machineInfo.machines[i].code);
		}
		for(var i=0;i<this.props.machineInfo.machines.length;i++){
			snumberFilter.push(this.props.machineInfo.machines[i].snumber);
		}
		for(var i=0;i<this.props.machineInfo.machines.length;i++){
			regnumFilter.push(this.props.machineInfo.machines[i].regnum);
		}
		for(var i=0;i<this.props.machineInfo.machines.length;i++){
			engine_snumFilter.push(this.props.machineInfo.machines[i].engine_snum);
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
			const abcd=e.target.value;
			if(abcd!==''){
				setTimeout(async()=>{await this.props.machineInfo.searchMachines(abcd)},100);
				this.props.machineInfo.getPages();
				}	
			else{
					this.props.machineInfo.getMachinesClearSearch();
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
	setCategory=(id)=>{
		let data=id;
		if(id===this.state.category){
			data='';
		}
		this.setState({
			category:data
		},this.FilterResult);
	}
	setCode=(code)=>{
		let data=code;
		if(code===this.state.code){
			data=''
		}
		this.setState({
			code:data
		},this.FilterResult)
	}
	setSnumber=(snum)=>{
		let data=snum;
		if(snum===this.state.snumber){
			data=''
		}
		this.setState({
			snumber:data
		},this.FilterResult);
	}
	setRegnum=(regnum)=>{
		let data=regnum;
		if(regnum===this.state.regnum){
			data=''
		}
		this.setState({
			regnum:data
		},this.FilterResult)
	}
	setEmodel=(emodel)=>{
		let data=emodel;
		if(emodel===this.state.engine_model){
			data=''
		}
		this.setState({
			engine_model:data
		},this.FilterResult)
	}
	setEsnum=(esnum)=>{
		let data=esnum;
		if(esnum===this.state.engine_snum){
			data=''
		}
		this.setState({
			engine_snum:data
		},this.FilterResult)
	}
	FilterResult=()=>{
		const {category,code,snumber,regnum,engine_model,engine_snum}=this.state;
		const filterFields={category,code,snumber,regnum,engine_model,engine_snum};
		this.props.machineInfo.filterMachines(filterFields);
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
							<h3 onClick={this.FilterResult}>Filters</h3>
						</div>
						<div className="filterCategories">
							Category
							{this.props.machineInfo.categories.map((catgeory,i)=>(
								<div key={i}>
									<input type="checkbox" checked={this.state.category===catgeory.id} style={{'display':'inline-block'}} onChange={()=>this.setCategory(catgeory.id)}/>
									<h6 style={{display:'inline-block'}}>{catgeory.name}</h6>
								</div>
								))}
						</div>
						<div className="filterCategories">
							Code
							{this.state.codesFilter.map((code,i)=>(
								<div key={i}>
									<input type="checkbox" checked={this.state.code===code} style={{'display':'inline-block'}} onChange={()=>this.setCode(code)}/>
									<h6 style={{display:'inline-block'}}>{code}</h6>
									</div>
								))}
						</div>
						<div className="filterCategories">
							Serial No
							{this.state.snumberFilter.map((snumber,i)=>(
								<div key={i}>
									<input type="checkbox" checked={this.state.snumber===snumber} style={{'display':'inline-block'}} onChange={()=>this.setSnumber(snumber)}/>
									<h6 style={{display:'inline-block'}}>{snumber}</h6>
									</div>
								))}
						</div>
						<div className="filterCategories">
							Reg Num
							{this.state.regnumFilter.map((regnum,i)=>(
								<div key={i}>
									<input type="checkbox" checked={this.state.regnum===regnum} style={{'display':'inline-block'}} onChange={()=>this.setRegnum(regnum)}/>
									<h6 style={{display:'inline-block'}}>{regnum}</h6>
									</div>
								))}
						</div>
						<div className="filterCategories">
							Engine Model
							{this.props.machineInfo.enginemodels.map((emodel,i)=>(
								<div key={i}>
									<input type="checkbox" checked={this.state.engine_model===emodel.id} style={{'display':'inline-block'}} onChange={()=>this.setEmodel(emodel.id)}/>
									<h6 style={{display:'inline-block'}}>{emodel.name}</h6>
								</div>
								))}
						</div>
						<div className="filterCategories">
							Engine Snum
							{this.state.engine_snumFilter.map((esnum,i)=>(
								<div key={i}>
									<input type="checkbox" checked={this.state.engine_snum===esnum}style={{'display':'inline-block'}} onChange={()=>this.setEsnum(esnum)}/>
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
								<button className="btn btn-default btn-sm" onClick={()=>this.detailMachine(machine)}><i className="fa fa-pencil" aria-hidden="true"></i>Details</button>
								<button className="btn btn-danger btn-sm" onClick={()=>this.deleteMachine(machine)}><i className="fa fa-trash" aria-hidden="true"></i>Delete</button>
							</td>
						</tr>
					))}
					    </tbody>
	  				</table>
	  			</div>
	  			</div>
			</div>
		)
	}
}

export default ListMachine;