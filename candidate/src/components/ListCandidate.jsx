import React, { Component } from 'react';
import CandidateService from '../services/CandidateService';
class ListCandidate extends Component {
    constructor(props){
        super(props)
        this.state={
            candidate: []
        }
        this.editCandidate= this.editCandidate.bind(this);
        this.deleteCandidate=this.deleteCandidate.bind(this);
    }
    editCandidate(candidateId) {
        this.props.history.push(`/UpdateCandidate/${candidateId}`);
    }
                   
    deleteCandidate(candidateId) {
        CandidateService.deleteCandidate(candidateId).then((res) => {
        this.setState({ candidate: this.state.candidate.filter(candidate => candidate.candidateId !==candidateId)});
        });
    }
    componentDidMount() {
        CandidateService.getCandidates().then((res) => {
            this.setState({candidate: res.data});
        });
    }

    render() {
        return (
            <div>
                <h2 className="text-center"> Candidates List</h2>
                <div className="row">
                    <table className="table table-stripped table-bordered">
                        <thead>
                            <tr>
                                <th>candidateId</th>
                                <th>FirstName</th>
                                <th>LastName</th>
                                <th>Gender</th>
                                <th>Age</th>
                                <th>PhoneNumber</th>
                                <th>EmailId</th>
                                <th>Constituency</th>
                                <th>Password</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.candidate.map(
                                    candidate =>
                                    <tr key={candidate.candidateId}>
                                        <td>{candidate.candidateId}</td>
                                        <td>{candidate.firstName}</td>
                                        <td>{candidate.lastName}</td>
                                        <td>{candidate.gender}</td>
                                        <td>{candidate.age}</td>
                                        <td>{candidate.phoneNumber}</td>
                                        <td>{candidate.emailId}</td>
                                        <td>{candidate.constituency}</td>
                                        <td>{candidate.password}</td>
                                        <td>{/* <button onClick={ ()=> this.editCandidate(candidate.candidateId)} className="btn btn-info">Update</button> */}
                                        <button onClick={ ()=> this.deleteCandidate(candidate.candidateId)} className="btn btn-info" >Delete</button>
                                        {/* <button style={{marginLeft="10px"}} onClick={ () => this.deleteCandidate(candidate.candidateId)} className="btn btn-danger">Delete</button> */}
                                        </td>
                                        
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
                
            </div>
        );
    }
}

export default ListCandidate;