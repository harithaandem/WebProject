import React, { Component } from "react";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


class Hospitals extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data
    }
  }

  componentDidMount() {
    this.setState({
      data: this.props.data
    })
  }

  render() {
    return (
      this.state.data.length >0 ? <div className="hospitalWrapper">
        {this.state.data?.map((hos) => {
          return (
            <Card className="root hospital-cardwrapper" variant="outlined">
              <CardContent>
                <div className="hospital-card">
                <div className="hospital-name">
                  {hos.hospital_details}
                </div>
                <span class="pull-right">
                  <a target="_blank" href="http://maps.google.com/">
                    <img className = "googlemapnavigation" src="https://user-images.githubusercontent.com/36616708/115098474-e15bd480-9ef5-11eb-99e6-ad20e78c69c5.jpeg"  />
                  </a>
                </span>
                </div>
                <ul className="bedtypes">
                  <li>
                    <div>
                      Area
                    </div>
                    <div>
                      {hos.area}
                    </div>
                  </li>
                  <li>
                    <div>
                      Total Available beds
                  </div>
                    <div className="bedCount">
                      {hos.Vacant_Bed_of_ICU_Without_Ventilator +
                        hos.Vacant_Bed_of_Isolation_without_Oxygen +
                        hos.Vacant_ICU_Beds_With_Ventilator +
                        hos.Vacant_Isolation_with_Oxygen}
                    </div>
                  </li>
                  <li>
                    <div>
                      Ventilator beds
                  </div>
                    <div className="bedCount">
                      {
                        hos.Vacant_ICU_Beds_With_Ventilator
                      }
                    </div>
                  </li>
                  <li>
                    <div>
                      Oxygen beds
                  </div>
                    <div className="bedCount">
                      {
                        hos.Vacant_Isolation_with_Oxygen}
                    </div>
                  </li>

                </ul>
              </CardContent>
              <CardActions>
                <Button className= "learnMore" size="small">Learn More</Button>
              </CardActions>
            </Card>
          )
        })}

      </div>: <></>
    );
  }
}

export default Hospitals;