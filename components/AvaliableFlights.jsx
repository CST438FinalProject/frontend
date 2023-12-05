import React from "react";

class AvaliableFlights extends React.Component() {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <h1>All Avaliable Flights</h1>

        <div>
          <ul>
            <li><span>Flight 1<button class="right">Reserve</button></span></li>
            <li><span>Flight 1<button class="right">Reserve</button></span></li>
            <li><span>Flight 1<button class="right">Reserve</button></span></li>
          </ul>
        </div>
      </div>
    )
  }
}
