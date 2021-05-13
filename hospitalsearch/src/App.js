import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import HospitalSearchLogo from "./TopMenu/HospitalSearchLogo";
import Searchbar from "./TopMenu/SearchBar";
import TopMenu from "./TopMenu/TopMenu";
import Hospitals from "./view/Hospitals";
import HomePage from "./view/HomePage";
import axios from 'axios';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import { faAddressBook, faHome, faInfoCircle, faSyringe } from "@fortawesome/free-solid-svg-icons";
import { faBed } from "@fortawesome/free-solid-svg-icons";
import About from "./view/About";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HospitalFilter from "./view/HospitalFilter";
import Login from "./view/Login";
import history from './TopMenu/history';
import VaccineBookings from "./view/VaccineBookings";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      svg: false,
      hospitalData: [],
      hospitalFlag: false
    }
  }
  onSearchWithHospitalName = (value) =>{
    this.setState({
      hospitalFlag: true
    })
    axios.get('http://localhost:3000/hospitals',{ params: { name: value } })
    .then(res => {
      const data = res.data;
      this.setState({ hospitalData: data });
    },()=>{
      history.push('/home');
    })
  }
 
  listenScrollEvent = e => {
    console.log("sgdvg")
    if (window.scrollY > 400) {
      console.log("sgdvg")
      this.setState({top: 0})
      document.getElementsByTagName('nav').removeProperty('top');
    } else {
      this.setState({top: 90})
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.listenScrollEvent)
  }

  render() {
    return (

      <Router history={history}>
        <div className="topmenu">
          <HospitalSearchLogo />
          <Searchbar onSearchWithHospitalName = {this.onSearchWithHospitalName}/>
          <TopMenu />
        </div>
       
          <Route render={({ location, history }) => (
          <React.Fragment>
            <SideNav
                onSelect={(selected) => {
                    const to = '/' + selected;
                    if (location.pathname !== to) {
                        history.push(to);
                    }
                }}
            >
                <SideNav.Toggle />
                <SideNav.Nav defaultSelected="home">
                    <NavItem eventKey="home">
                        <NavIcon>
                            {/* <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} /> */}
                            <FontAwesomeIcon icon={faHome} />
                        </NavIcon>
                        <NavText>
                            Home
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="filterhospitals">
                        <NavIcon>
                        <FontAwesomeIcon icon={faBed} />
                        </NavIcon>
                        <NavText>
                            Hospitals
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="vaccinebookings">
                        <NavIcon>
                        <FontAwesomeIcon icon={faSyringe} />
                        </NavIcon>
                        <NavText>
                            Covid Vaccince 
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="about">
                        <NavIcon>
                        <FontAwesomeIcon icon={faInfoCircle} />
                        </NavIcon>
                        <NavText>
                            About
                        </NavText>
                    </NavItem>
                </SideNav.Nav>
            </SideNav>
            <main>
                <Route path="/" exact component={props => <HomePage data={this.state.hospitalData} hospitalFlag={this.state.hospitalFlag}/>} />
                <Route path="/home" exact component={props => <HomePage data={this.state.hospitalData} hospitalFlag={this.state.hospitalFlag}/>} />
                <Route path="/hospitals" component={() => <Hospitals  data={this.state.hospitalData}  />} />
                <Route path="/login" component={() => <Login/>}/>
                <Route path="/about" component={() => <About/>} />
                <Route path="/vaccinebookings" component={() => <VaccineBookings/>} />
                <Route path="/filterhospitals" component={() => <HospitalFilter  data={this.state.hospitalData}  />} />
            </main>
        </React.Fragment>
    )}
    />
      </Router>
    );
  }
}

export default App;