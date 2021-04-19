import React,{ Component } from "react";
import SearchBar from "material-ui-search-bar";
class  Searchbar extends Component {

  constructor(props){
      super(props);
      this.state ={
          value : "",
      }
  }

  componentDidMount() {
    
    navigator.geolocation.getCurrentPosition(function(position) {
        console.log("Latitude is :", position.coords.latitude);
        console.log("Longitude is :", position.coords.longitude);
      });
  }
  doSomethingWith = (value) => {
    this.props.onSearchWithHospitalName(value);
  }
  render(){
  return (
    <SearchBar
    className="searchBar"
    value={this.state.value}
    onChange={(newValue) => this.setState({ value: newValue })}
    onRequestSearch={() => this.doSomethingWith(this.state.value)}
  />
  );
  }
}

export default Searchbar;