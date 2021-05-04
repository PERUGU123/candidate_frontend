import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div>
                <header>
                    <nav class="navbar navbar-expand-md navbar-dark bg-dark">
                    <div class="container-fluid">
                        <div class="navbar-header">
                            <div class="navbar-brand" href="#">Voting Management System</div>
                        </div>
                        <ul class="nav navbar-nav navbar-right" >
                            <li><a class="text-light" href="home"><span></span>Home</a></li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <li><a class="text-light" href="Register"><span></span>Register</a></li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            {/* <li><a class="text-light" href="UpdateCandidate"><span></span>Update</a></li>&nbsp;&nbsp;&nbsp;  */}
                            <li><a class="text-light" href="ListCandidate"><span></span>View Candidates</a></li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </ul>
                    </div>
                    </nav>
                </header>
            </div>
        );
    }
}

export default Header;