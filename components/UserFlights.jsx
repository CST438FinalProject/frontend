import React from "react";

class UserFlights extends React.Component() {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <h1>Your Reserved Flights</h1>

        <div>
          <ul>
            <li>My Flight 1</li>
            <li>My Flight 1</li>
            <li>My Flight 1</li>
          </ul>
        </div>
      </div>
    )
  }
}
