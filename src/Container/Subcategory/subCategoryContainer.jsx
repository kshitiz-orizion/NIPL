import React,{Component} from 'react';
import { connect } from 'react-redux';
import { getSubcategorys,deleteSubcategory} from '../../Store/Actions/sub-category/sub-category.action';
import Listsubcategory from '../../Component/Subcategory/subcategorys';
import PageLoader from '../Common/pageloader';
class subcategoryContainer extends Component{
	componentWillMount(){
		this.getsubcategorys();
	}
	getsubcategorys=async()=>{
		await this.props.getSubcategorys();
	}
	render(){
	const {subcategorys,deleteSubcategory,getSubcategorys,isFetching}=this.props;
	const subcategoryInfo = {subcategorys,deleteSubcategory,getSubcategorys};
	if(isFetching){
		return <PageLoader/>
	}
	return (
		<div>
			<section className="container-fluid" style={{marginTop:'-100px'}}>
				<Listsubcategory subcategoryInfo={subcategoryInfo} />
			</section>
		</div>
		)
	}
}

const mapStateToProps = state => {
  return {
    subcategorys:state.subcategory.list,
    isFetching:state.subcategory.isFetching
  };
};
const mapDispatchToProps = {
   getSubcategorys,
   deleteSubcategory
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(subcategoryContainer);