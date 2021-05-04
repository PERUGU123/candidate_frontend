import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import CandidateService from '../services/CandidateService';

class UpdateCandidate extends Component {
    constructor(props){
        super(props);
        this.state={
            candidateId: this.props.match.params.candidateId,
            firstName:"",
            lastName:"",
            gender:"",
            age:"", 
            phoneNumber:"",
            emailId:"",
            constituency:"",
            password:"",
        }
        this.updateCandidate=this.updateCandidate.bind(this);
        this.firstNameHandler=this.firstNameHandler.bind(this);
        this.lastNameHandler=this.lastNameHandler.bind(this);
        this.ageHandler=this.ageHandler.bind(this);
        this.genderHandler=this.genderHandler.bind(this);
        this.phoneNumberHandler=this.phoneNumberHandler.bind(this);
        this.emailIdHandler=this.emailIdHandler.bind(this);
        this.constituencyHandler=this.constituencyHandler.bind(this);
        this.passwordHandler=this.passwordHandler.bind(this);
    
    }

    componentDidMount(){
        CandidateService.getCandidateById(this.state.candidateId).then((res)=> {
            let candidate=res.data;
            this.setState({firstName:candidate.firstName, lastName:candidate.lastName,gender:candidate.gender,age:candidate.age,
                phoneNumber:candidate.phoneNumber,emailId:candidate.emailId,constituency:candidate.constituency,password:candidate.password});
            });
    }
    updateCandidate=(event)=>{
        event.preventDefault();
        let candidate= {firstName:this.state.firstName, lastName:this.state.lastName,gender:this.state.gender,age:this.state.age,
            phoneNumber:this.state.phoneNumber,emailId:this.state.emailId,constituency:this.state.constituency,password:this.state.password};
            //console.log('candidate =>' + JSON.stringify(candidate));
            CandidateService.updateCandidate(candidate , this.state.candidateId).then((res)=>{
            this.props.history.push("/home");
            //alert("Candidate added Successfully");
            });
    }
    cancel(){
        this.props.history.push("/ListCandidate");
    }
        firstNameHandler = (event) =>{
            this.setState({firstName: event.target.value});
        }
        lastNameHandler = (event) =>{
            this.setState({lastName: event.target.value});
        }
        genderHandler =(event)=> {
             this.setState({gender: event.target.value});
    
        }
        ageHandler =(event)=> {
            this.setState({age: event.target.value});
        }
        phoneNumberHandler =(event)=>{
            this.setState({phoneNumber: event.target.value});
        } 
        emailIdHandler =(event)=>{
            this.setState({emailId: event.target.value});
          }  
        constituencyHandler =(event) =>{
            this.setState({constituency: event.target.value});
        }
            passwordHandler =(event) =>{
            this.setState({password: event.target.value});
        }
        render() {
            return (
                <div  style={{ backgroundImage: "url(/hom.jfif)" }}>
                    <div className="container">
                        <div className="row">
                             <div className="col-md-8 m-auto">
                                <h5 className=" display-5 text-center">Update Candidate</h5>
                  <hr />  
                  <form>
                  <div className="form-group">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="First Name"
                        name="firstName"
                        onChange={this.firstNameHandler}
                        value={this.state.firstName}
                      />  
                  </div>
                  <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Last Name"
                        name="lastName"
                        onChange={this.lastNameHandler}
                        value={this.state.lastName}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Gender "
                        name="gender"
                        onChange={this.genderHandler}
                        value={this.state.gender}
                      />
                    </div>
                     <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Age"
                        name="age"
                        onChange={this.ageHandler}
                        value={this.state.age}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        pattern="[6-9][0-9]{9}"
                        className="form-control"
                        name="phoneNumber"
                        placeholder="PhoneNumber"
                        onChange={this.phoneNumberHandler}
                        value={this.state.phoneNumber}
                      />
                    </div>
                   <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="EmailId"
                        name="email"
                        onChange={this.emailIdHandler}
                        value={this.state.emailId}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Constituency"
                        name="constituency"
                        onChange={this.constituencyHandler}
                        value={this.state.constituency}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Password"
                        name="Password"
                        onChange={this.passwordHandler}
                        value={this.state.password}
                      />
                    </div>
    
                      <button className="btn btn-primary"onClick={this.updateCandidate}>Update</button>
                      <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "100px"}}>Cancel</button>
                  </form>
                             </div>
                        </div>
                    </div>
                </div>
            );
        }
    }
export default UpdateCandidate;