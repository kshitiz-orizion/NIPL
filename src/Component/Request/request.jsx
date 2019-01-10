import React,{Component} from 'react';
import history from '../../Inits/history';
class ListRequest extends Component{
    componentWillMount(){
    }
    AddCondition=()=>{
        history.push('/condition/create');
    }
    editCondition=(condition)=>{
        history.push('/conditions/'+condition.id);
    }
    deleteCondition=(condition)=>{
        this.props.conditionInfo.deleteCondition(condition);
    }
    detailsCondition=(id)=>{
        history.push('/request/'+id);
    }
    render(){
        return (
            <div style={{marginTop:'175px'}}>
                <div className="topHeadingContainer">
                    <div className="headingCreateMachine">
                        <h3>Request List</h3>
                    </div>
                    <div className="saveButtonHeader" >
                        <button className="btn btn-sm btn-primary" style={{marginRight:'100px'}} onClick={this.AddCondition}><i className="fa fa-plus" aria-hidden="true"></i>Add Request</button>
                    </div>
                </div>
                <div className="mainContainer">
                    <div className="TableContainer">
                        <table className="table table-hover table-bordered">
                            <thead>
                            <tr>
                                <th>#</th>
                                <th>Request ID</th>
                                <th>Status</th>
                                <th>Assigned To</th>
                                <th>Updated At</th>
                                <th>Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                            {this.props.conditionInfo.conditions.map((condition,i)=>(
                                <tr key={i}>
                                    <td>{i+1}</td>
                                    <td>12345</td>
                                    <td>Under Process</td>
                                    <td>Mr. ABC</td>
                                    <td>{new Date().toLocaleDateString()}</td>
                                    <td style={{textAlign:"center"}}>
                                        <button className="btn btn-default btn-sm" onClick={()=>this.editCondition(condition)}><i className="fa fa-pencil" aria-hidden="true"></i>Edit</button>
                                        <button className="btn btn-danger btn-sm" onClick={()=>this.deleteCondition(condition)}><i className="fa fa-trash" aria-hidden="true"></i>Delete</button>
                                        <button className="btn btn-primary btn-sm" onClick={()=>this.detailsCondition(1)}><i className="fa fa-trash" aria-hidden="true"></i>Details</button>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default ListRequest;