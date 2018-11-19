import React,{Component} from 'react';
import { connect } from 'react-redux';
import HomeComponent from '../../Component/Home/homeComponent';
class HomeContainer extends Component{
	componentWillMount(){
	    window.bread=[{page:'Home',location:'/today'}]
	}
	render(){
	const {students,isFetching}=this.props;
	const studentInfo = {students,isFetching};
	return (
		<div>
			<section className="container-fluid" style={{marginTop:'-100px'}}>
				<HomeComponent studentInfo={studentInfo} />
			</section>
		</div>
		)
	}
}

const mapStateToProps = state => {
  return {
  };
};
const mapDispatchToProps = {
};

export default connect(
  mapStateToProps,  
  mapDispatchToProps
)(HomeContainer);