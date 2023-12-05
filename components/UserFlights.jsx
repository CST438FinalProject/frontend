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
            <li><span>My Flight 1<button class="right" style="background-color:red;">Cancel</button></span></li>
            <li><span>My Flight 1<button class="right" style="background-color:red;">Cancel</button></span></li>
            <li><span>My Flight 1<button class="right" style="background-color:red;">Cancel</button></span></li>
          </ul>
        </div>
      </div>
    )
  }
}
