import React,{Component} from 'react';
import { connect } from 'react-redux';
import { getSubcategorys,deleteSubcategory} from '../../Store/Actions/sub-category/sub-category.action';
import { Link } from 'react-router-dom';
import Listsubcategory from '../../Component/Subcategory/subcategorys';
import {Header} from '../Common/Header';
class subcategoryContainer extends Component{
	componentWillMount(){
	}
	render(){
	const {subcategorys,deletesubcategory,getsubcategorys}=this.props;
	const subcategoryInfo = {subcategorys,deletesubcategory,getsubcategorys};
	return (
		<div>
		<Header/>
			<section className="container-fluid" style={{marginTop:'-100px'}}>
				<Listsubcategory subcategoryInfo={subcategoryInfo} />
			</section>
		</div>
		)
	}
}

const mapStateToProps = state => {
  return {
    subcategorys:state.subcategory.list
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