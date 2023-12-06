import React from "react";
import '../style.css';
import UserFlights from "../UserFlights";
import NavBar from "../NavBar";
import AvailableFlights from "../AvailableFlights";
function MainPage() {
// class MainPage extends React.Component() {
//   constructor(props){
//     super(props);
//   }

  // render() {
    return(
      (true ?
        <div>
          <NavBar location={'AvailableFlights'} username={"username"}/>
          <AvailableFlights />
        </div> : 
        <div>
          <NavBar location={'UserFlights'} username={"username"}/>
          <UserFlights />
        </div>
      )
    )

}

// MainPage.defaultProps = {
//   onAvaliable: true,
//   username: ''
// }
//
// MainPage.propTypes = {
//   onAvaliable: PropTypes.bool.isRequired,
//   username: PropTypes.string.isRequired
// }
export default MainPage