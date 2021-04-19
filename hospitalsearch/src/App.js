import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import HospitalSearchLogo from "./TopMenu/HospitalSearchLogo";
import Searchbar from "./TopMenu/SearchBar";
import TopMenu from "./TopMenu/TopMenu";
import Hospitals from "./view/Hospitals";
import HomePage from "./view/HomePage";
import axios from 'axios';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      svg: false,
      hospitalData: []
    }
  }

  onSearchWithHospitalName = (value) =>{
    axios.get('http://localhost:3000/hospitals',{ params: { name: value } })
    .then(res => {
      const data = res.data;
      this.setState({ hospitalData: data });
    })
  }

  render() {
    return (
      <Router>
        <div className="topmenu">
          <HospitalSearchLogo />
          <Searchbar onSearchWithHospitalName = {this.onSearchWithHospitalName}/>
          <TopMenu />
        </div>
        <Route exact path="/hospitals" component={() => <Hospitals data={this.state.hospitalData}  /> } />
        <Route exact path="/" component={HomePage}/>
      </Router>
    );
  }
}

export default App;