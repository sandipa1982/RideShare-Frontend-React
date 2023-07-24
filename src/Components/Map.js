import React, { Component } from "react"
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import data from "./data.json";
import { Form, Input, Button } from "antd";
let x = localStorage.getItem('latitude');
let y = localStorage.getItem('longitude');




// class MyFancyComponent extends React.PureComponent {
//   state = {
//     isMarkerShown: false,
//   }

//   componentDidMount() {
//     this.delayedShowMarker()
//   }

//   delayedShowMarker = () => {
//     setTimeout(() => {
//       this.setState({ isMarkerShown: true })
//     }, 3000)
//   }

//   handleMarkerClick = () => {
//     this.setState({ isMarkerShown: false })
//     this.delayedShowMarker()
//   }

//   render() {
//     return (
//       <MyMapComponent
//         isMarkerShown={this.state.isMarkerShown}
//         onMarkerClick={this.handleMarkerClick}
//       />
//     )
//   }
// }

const shoot = () => {
  alert('Thanks for your booking..Your Cab is on its way.')
}



class MyMapComponent extends Component {
  render() {
    return (
      <div style={{ height: `550px`, width: '70%', marginLeft:'30%', position:'fixed' }}>
        {data.map((item) => (
        
          <div key={item.id}>
            <h1>{item.title}</h1>
            <p>{item.vehicletype}</p>
            <p>{item.ETA}</p>
            <p>{item.Cost}</p>
            <Button
              type="primary"
              htmlType="submit"
              className="signup-form-button"
              onClick={shoot}
            >
              BOOK THIS CAB
            </Button>
          </div>
        ))}
      </div>
    );
  }
} 

export default MyMapComponent;