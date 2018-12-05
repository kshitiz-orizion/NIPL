import React,{Component} from 'react';
import { connect } from 'react-redux';
import { getParts,deletePart} from '../../Store/Actions/part/part.action';
import ListPart from '../../Component/Sparepart/parts';
import PageLoader from '../Common/pageloader';
class PartContainer extends Component{
	componentWillMount(){
		this.getParts();
		this.setState({
			waiting:true
		})
	}
	getParts=async()=>{
		await this.props.getParts();
		this.setState({
			waiting:false
		})
	}
	render(){
	const {parts,deletePart,getParts,isFetching}=this.props;
	const partInfo = {parts,deletePart,getParts};
	if(isFetching || this.state.waiting){
		return(
			<PageLoader/>
			)
	}
	return (
		<div>
			<section className="container-fluid" style={{marginTop:'-114px'}} >
				<ListPart partInfo={partInfo} />
			</section>
		</div>
		)
	}
}

const mapStateToProps = state => {
  return {
  	isFetching:state.part.isFetching,
    parts:state.part.list
  };
};
const mapDispatchToProps = {
   getParts,
   deletePart,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PartContainer);