import React,{Component} from 'react';
import { connect } from 'react-redux';
import { getStudents,deleteStudent} from '../../Store/Actions/student/student.action';
import { Link } from 'react-router-dom';
import ListStudent from '../../Component/Machine/machines';
import {Header} from '../Common/Header';
class MachineContainer extends Component{
	componentWillMount(){
	    window.bread=[{page:'Student',location:'/students'}]
	}
	render(){
	const {students,deleteStudent,getStudents}=this.props;
	const studentInfo = {students,deleteStudent,getStudents};
	return (
		<div>
		<Header/>
			<nav aria-label="breadcrumb">
		          <ol className="breadcrumb">
		              {window.bread && window.bread.map((bread,i)=>(
		                <li className="breadcrumb-item" key={i}><Link to={bread.location}>{bread.page}</Link></li>
		                ))}
		          </ol>
        	</nav>
			<section className="container-fluid" style={{marginTop:'-100px'}}>
				<ListStudent studentInfo={studentInfo} />
			</section>
		</div>
		)
	}
}

const mapStateToProps = state => {
  return {
    students: state.student.list,
  };
};
const mapDispatchToProps = {
   getStudents,
   deleteStudent,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MachineContainer);