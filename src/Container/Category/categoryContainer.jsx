import React,{Component} from 'react';
import { connect } from 'react-redux';
import { getCategorys,deleteCategory} from '../../Store/Actions/category/category.action';
import ListCategory from '../../Component/Category/categorys';
import {Header} from '../Common/Header';
class CategoryContainer extends Component{
	componentWillMount(){
	}
	render(){
	const {categorys,deleteCategory,getCategorys}=this.props;
	const machineInfo = {categorys,deleteCategory,getCategorys};
	return (
		<div>
		<Header/>
			<section className="container-fluid" style={{marginTop:'-100px'}}>
				<ListCategory machineInfo={machineInfo} />
			</section>
		</div>
		)
	}
}

const mapStateToProps = state => {
  return {
   	categorys:state.category.list
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