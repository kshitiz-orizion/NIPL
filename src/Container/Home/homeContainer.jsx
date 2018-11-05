import React,{Component} from 'react';
import { connect } from 'react-redux';
import { todayAttendence,takeAttendence} from '../../Store/Actions/attendence/attendence.action';
import { Link } from 'react-router-dom';
import TodayAttendence from '../../Component/Home/homeComponent';
// import {Header} from '../Common/Header';
class HomeContainer extends Component{
	componentWillMount(){
	    window.bread=[{page:'Home',location:'/today'}]
	}
	render(){
	const {students,todayAttendence,isFetching,takeAttendence}=this.props;
	const studentInfo = {students,todayAttendence,isFetching,takeAttendence};
	return (
		<div>
			<section className="container-fluid" style={{marginTop:'-100px'}}>
				<TodayAttendence studentInfo={studentInfo} />
			</section>
		</div>
		)
	}
}

const mapStateToProps = state => {
  return {
    students: state.today.list,
    isFetching:state.today.isFetching
  };
};
const mapDispatchToProps = {
   todayAttendence,
   takeAttendence
};

export default connect(
  mapStateToProps,  
  mapDispatchToProps
)(HomeContainer);