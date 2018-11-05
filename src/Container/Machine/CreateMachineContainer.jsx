import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import history from '../../Inits/history';
import { createStudent, getStudentByID, editStudent} from '../../Store/Actions/student/student.action';
import CreateMachine from '../../Component/Machine/CreateMachine';
class CreateMachinesContainer extends Component {
  state = {
    mode:'CREATE',
    studentToBeEdit: null,
  };
  componentWillMount() {
    const { params } = this.props.match;
    this.setState({
      mode: params && params.id ? 'EDIT' : 'CREATE',
    });
    if (params.id) {
      this.getStudent(params.id);
      window.bread=[{page:'Student',location:'/students'},{page:'Student Edit',location:'/students/'+params.id}]
    }
    else{
      window.bread=[{page:'Student',location:'/students'},{page:'Student Create',location:'/student/create'}]
    }
  }
  getStudent = async (studentID) => {
    try {
      const studentToBeEdit =await this.props.getStudentByID(studentID);
      this.setState(prevState => {
        return {
          ...prevState,
          studentToBeEdit,
        };
      });
    } catch (error) {
      history.push('/students');
    }
  };
  render() {
    if (this.state.mode === 'EDIT' && !this.state.studentToBeEdit) {
      return <h1>Loading...</h1>
    }
    if(this.props.isCreating){
      return <h1>Creating...</h1>
    }
    const { createStudent, editStudent } = this.props;
    return (
      <div style={{marginTop:'-100px',backgroundColor:'#eee',width:'100%',height:'auto'}}>
      <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
              {window.bread && window.bread.map((bread,i)=>(
                <li className="breadcrumb-item" key={i}><Link to={bread.location}>{bread.page}</Link></li>
                ))}
          </ol>
        </nav>
      <section>
        <CreateMachine
          onCreate={createStudent}
          onEdit={editStudent}
          initialValues={this.state.studentToBeEdit}
          mode={this.state.mode}
        />
      </section>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isCreating: state.student.isCreating,
  };
};
const mapDispatchToProps = {
  createStudent,
  getStudentByID,
  editStudent,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateMachinesContainer);