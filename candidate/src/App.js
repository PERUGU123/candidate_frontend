//import ListCandidate from './components/ListCandidate';
import Header from './components/Header';
import Register from './components/Register';
import Home from './components/Home';
import ListCandidate from './components/ListCandidate';
import UpdateCandidate from './components/UpdateCandidate';
import {BrowserRouter as Router, Route , Link } from "react-router-dom";

function App() {
  return (
    <div className="Container" >
      <Router >
        <Header />
        <Route exact path="/home" component={Home} />
        <Route exact path="/Register" component={Register} />
        <Route exact path="/ListCandidate" component={ListCandidate} /> 
        <Route exact path="/UpdateCandidate/:candidateId" component={UpdateCandidate} />
        {/* <Route exact path="/Aboutus" component={AboutUs} />
        <Route exact path="/Login" component={Login} /> */}
      </Router>
    </div>
  );
}

export default App;
