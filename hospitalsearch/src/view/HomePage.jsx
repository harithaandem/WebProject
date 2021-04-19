import React,{ Component } from "react";

class  HomePage extends Component {

  constructor(props){
      super(props);
      this.state ={
      }
  }

  componentDidMount() {
  }

  render(){
  return (
      <div className="homepagewrapper">
      <img src="https://user-images.githubusercontent.com/36616708/114968353-c593f800-9e3b-11eb-89e5-0a0dcd3a18a6.jpeg" alt="Home Page"/>
    </div>
  );
  }
}

export default HomePage;