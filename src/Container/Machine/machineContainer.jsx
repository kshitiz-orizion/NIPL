import React,{Component} from 'react';
import { connect } from 'react-redux';
import { getMachines,deleteMachine,searchMachines,filterMachines,purchaseCounter,purchaseCounterDecrease} from '../../Store/Actions/machine/machine.action';
import { getCategorys} from '../../Store/Actions/category/category.action';
import {getMachinemodelByID} from '../../Store/Actions/machine-model/machine-model.action';
import {getEnginemodels} from '../../Store/Actions/engine-model/engine-model.action';
import ListMachine from '../../Component/Machine/machines';
import PageLoader from '../Common/pageloader';
class MachineContainer extends Component{
	componentWillMount(){
		this.getMachinesClearSearch();
		this.setState({
			pageCount:'',
			activePage:1
		})
	}
	getMachinesClearSearch=async()=>{
		const {getMachines,getCategorys,getEnginemodels}=this.props;
		await Promise.all([getMachines(),getCategorys(),getEnginemodels()]);
	}
	activePage=async (i)=>{
		await this.props.getMachines();
		this.setState({
			activePage:i
		})
	}
	render(){
		var machineCount=this.props.pageCount;
				var pageCount=machineCount/50;
				var pageRemainder=machineCount%50;
				if(pageRemainder!==0){
					pageCount=Math.floor(pageCount)+1;
				}
				var totalPage=[];
				for(var i=0;i<pageCount;i++){
					totalPage.push(i);
				}
	const {purchaseCounterDecrease,machines,deleteMachine,getMachines,isFetching,searchMachines,filterMachines,isFetchingCategory,categories,isFetchingEngineModel,enginemodels,purchaseCounter}=this.props;
	const machineInfo = {purchaseCounterDecrease,purchaseCounter,enginemodels,categories,machines,deleteMachine,getMachines,filterMachines,searchMachines,getPages:this.getPages,getMachinesClearSearch:this.getMachinesClearSearch};
	if(isFetching || isFetchingCategory ||isFetchingEngineModel){
		return(
			<PageLoader/>
			)
	}
	else{
		return (
			<div>
				<section className="container-fluid" style={{marginTop:'-114px'}} >
					<ListMachine machineInfo={machineInfo} />
					<nav aria-label="Page navigation" style={{'display':'flex','justifyContent':'center'}}>
						  <ul className="pagination">
						  	{totalPage?totalPage.map((page,i)=>(
						  			<li key={i}className={'page-item'+(this.state.activePage-1===i?" active":'')} onClick={()=>this.activePage(i+1)}><div className="page-link" >{i+1}</div></li>
						  		)):''}
						  </ul>
					</nav>
				</section>
			</div>
			)
		}
	}
}

const mapStateToProps = state => {
  return {
  	isFetching:state.machine.isFetching,
    machines:state.machine.list,
    pageCount:state.machine.pageCount,
    categories:state.category.list,
    isFetchingCategory:state.category.isFetching,
    enginemodels:state.enginemodel.list,
    isFetchingEngineModel:state.enginemodel.isFetching
  };
};
const mapDispatchToProps = {
   getMachines,
   deleteMachine,
   getMachinemodelByID,
   searchMachines,
   getCategorys,
   getEnginemodels,
   filterMachines,
   purchaseCounter,
   purchaseCounterDecrease
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MachineContainer);