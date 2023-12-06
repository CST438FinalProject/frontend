import React from "react";
import './style.css';
import PropTypes from "prop-types";
function NavBar() {


// class NavBar extends React.Component() {
//
//   constructor(props){
//     super(props);
//   }

    // render(){
    if ("location" == 'AvaliableFlights') {
        return (
            <nav>
                <button>My Flights</button>
                <p>{"username"}</p>
                <button>Logout</button>
            </nav>
        );
    } else if ("location" == 'UserFlights') {
        return (
            <nav>
                <button>Avaliable Flights</button>
                <p>{"username"}</p>
                <button>Logout</button>
            </nav>
        );
//
// }
//
// NavBar.defaultProps = {
//   username: '',
//   location: ''
// }
//
// NavBar.propTypes = {
//   username: PropTypes.string.isRequired,
//   location: PropTypes.string.isRequired
    }
}
export default NavBar
