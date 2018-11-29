import React,{Component} from 'react';
import { connect } from 'react-redux';
import { getCategorys,deleteCategory} from '../../Store/Actions/category/category.action';
import ListCategory from '../../Component/Category/categorys';
import PageLoader from '../Common/pageloader';
class CategoryContainer extends Component{
	componentWillMount(){
		this.getCategorys();
	}

	getCategorys=async()=>{
		await this.props.getCategorys();
	}
	render(){
	const {categorys,deleteCategory,getCategorys,isFetching}=this.props;
	const categoryInfo = {categorys,deleteCategory,getCategorys};
	if(isFetching){
		return <PageLoader/>
	}
	return (
		<div>
			<section className="container-fluid" style={{marginTop:'-114px'}}>
				<ListCategory categoryInfo={categoryInfo} />
			</section>
		</div>
		)
	}
}

const mapStateToProps = state => {
  return {
   	categorys:state.category.list,
   	isFetching:state.category.isFetching
  };
};
const mapDispatchToProps = {
   getCategorys,
   deleteCategory
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryContainer);