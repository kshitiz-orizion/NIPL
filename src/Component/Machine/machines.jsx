import React,{Component} from 'react';
import history from '../../Inits/history';
class ListMachine extends Component{
	componentWillMount(){
		this.getStudents();
		this.props.studentInfo.students=this.props.studentInfo.students.sort(function(a, b) {
         var x = a['roll']; var y = b['roll'];
         return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    	});
	}
	getStudents=async()=>{
		await this.props.studentInfo.getStudents();
	}
	AddStudent=()=>{
		history.push('/student/create');
	}
	editStudent=(student)=>{
		history.push('/students/'+student.id);
	}
	deleteStudent=(student)=>{
		 this.props.studentInfo.deleteStudent(student);
	}
	sort=()=>{
		this.props.studentInfo.students=this.props.studentInfo.students.sort(function(a, b) {
			var x = a['rollno']; var y = b['rollno'];
         	return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    	});
	}
	render(){
		return (
			<div style={{marginTop:'150px'}}>
			<div style={{float:'right',display:'inline-block'}}>
				<button type="button" className="btn btn-success"  onClick={this.AddStudent}><i className="fa fa-plus" aria-hidden="true"></i>Add</button>
			</div>
			<table className="table table-bordered well">
				<thead>
					<tr>
						<th>Roll No</th>
						<th>Name</th>
						<th>DOB</th>
						<th>Image</th>
						<th>Standard</th>
						<th>Email</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{this.props.studentInfo.students.map((student,i)=>(
						<tr key={i}>
							<td>{student.roll}</td>
							<td onClick={()=>history.push('/calendar/'+student.id)}><a style={{color:'blue',cursor:'pointer'}}>{student.name}</a></td>
							<td>{student.dob}</td>
							<td><img style={{width:'100px',height:'100px'}} src={"http://echo.kindkonnect.in"+student.photo} /></td>
							<td>{student.std}</td>
							<td>{student.email}</td>
							<td>
								<button className="btn btn-default" onClick={()=>this.editStudent(student)}><i className="fa fa-pencil" aria-hidden="true"></i>Edit</button>
								<button className="btn btn-danger" onClick={()=>this.deleteStudent(student)}><i className="fa fa-trash" aria-hidden="true"></i>Delete</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
			</div>
		)
	}
}

export default ListMachine;