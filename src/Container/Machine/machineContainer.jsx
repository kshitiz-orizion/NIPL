import React,{Component} from 'react';
import { connect } from 'react-redux';
import { getMachines,deleteMachine,searchMachines} from '../../Store/Actions/machine/machine.action';
import {getMachinemodelByID} from '../../Store/Actions/machine-model/machine-model.action';
import ListMachine from '../../Component/Machine/machines';
import PageLoader from '../Common/pageloader';
class MachineContainer extends Component{
	componentWillMount(){
		this.mounted=true;
		this.getMachines();
		this.setState({
			pageCount:''
		})
	}
	getMachines=async()=>{
		if(this.mounted){
		await this.props.getMachines();
		await this.getPages();
		}
	}
	componentWillUnmount(){
		 this.mounted=false;
	}
	getPages=()=>{
		if(this.mounted)
		{
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
				this.setState({
					pageCount:totalPage,
					activePage:1
				})}
	}
	activePage=async (i)=>{
		await this.props.getMachines();
		this.setState({
			activePage:i
		})
	}
	render(){
	const {machines,deleteMachine,getMachines,isFetching,searchMachines}=this.props;
	const machineInfo = {machines,deleteMachine,getMachines,searchMachines,getPages:this.getPages};
	if(isFetching){
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
						  	{this.state.pageCount?this.state.pageCount.map((page,i)=>(
						  			<li key={i}className={'page-item'+(this.state.activePage-1===i?" active":'')} onClick={()=>this.activePage(i+1)}><a className="page-link" href="#">{i+1}</a></li>
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
    pageCount:state.machine.pageCount
  };
};
const mapDispatchToProps = {
   getMachines,
   deleteMachine,
   getMachinemodelByID,
   searchMachines,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MachineContainer);