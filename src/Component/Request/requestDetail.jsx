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
                        <h3>Request Detail</h3>
                    </div>
                    <div className="saveButtonHeader" >
                        <button className="btn btn-sm btn-primary" style={{marginRight:'100px'}} onClick={this.AddCondition}><i className="fa fa-plus" aria-hidden="true"></i>Add Request</button>
                    </div>
                </div>
                <div className="mainContainer" style={{marginLeft:'0px'}}>
                    <div style={{width:'98vw',marginTop:'50px'}}>
                        <table className="table table-hover table-bordered">
                            <tbody>
                                <tr>
                                    <td><b>Sl no</b></td>
                                    <td>abcd</td>
                                </tr>
                                <tr>
                                    <td><b>Request Id</b></td>
                                    <td>12345</td>
                                </tr>
                                <tr>
                                    <td><b>Status</b></td>
                                    <td>Under Process</td>
                                </tr>
                                <tr>
                                    <td><b>Assigned to</b></td>
                                    <td>Mr. ABC</td>
                                </tr>
                                <tr>
                                    <td><b>Updated At</b></td>
                                    <td>{new Date().toLocaleDateString()}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="commentBox" style={{margin:'0 auto'}}>
                        <div>
                            <textarea className="form-control" placeholder="Add Comment...">

                            </textarea>
                            <div style={{float:'right'}}>
                                <button className="btn btn-primary">Post Comment</button>
                            </div>
                        </div>
                        <div style={{clear:'both'}}>
                            <h1>
                                Comments:
                            </h1>
                            <b>
                                Ravi Bhatiya
                            </b>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                                dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                <span>
                                   <b> Date</b> {new Date().toLocaleDateString()}
                                   <b> Time</b> {new Date().toLocaleTimeString()}
                                </span>
                            </p>
                        </div>
                        <div style={{clear:'both'}}>
                            <b>
                                Manju Shree
                            </b>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                                dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                <span>
                                   <b> Date</b> {new Date().toLocaleDateString()}
                                    <b> Time</b> {new Date().toLocaleTimeString()}
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ListRequest;