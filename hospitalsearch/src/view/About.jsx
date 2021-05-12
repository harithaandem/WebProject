import React,{ Component } from "react";
import Hospitals from "./Hospitals";

class  About extends Component {

  constructor(props){
      super(props);
      this.state ={
        hospitalFlag: false
      }
  }

  componentWillMount() {
    this.setState({
      data: this.props.data,
      hospitalFlag: this.props.hospitalFlag
    })
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      data: nextProps.data,
      hospitalFlag: nextProps.hospitalFlag
    },
    () =>{
      console.log(this.props.location)
    }
    )
  }

  render(){
  return (
    <>
     <div>
         <img src="https://user-images.githubusercontent.com/36616708/117752597-ae4aef00-b1dc-11eb-8111-bde877a8d217.PNG" alt="About Page"/>
     </div>
     
    </>
  );
  }
}

export default About;