import React from "react";
import { NavBar } from 'components/NavBar.jsx';
import { AvaliableFlights } from 'components/AvaliableFlights.jsx';
import { UserFlights } from 'components/UserFlights.jsx';

class MainPage extends React.Component() {
  constructor(props){
    super(props);
  }

  render() {
    return(
      (onAvaliable ? 
        <div>
          <NavBar location={'AvaliableFlights'} username={this.props.username}/>
          <AvaliableFlights />
        </div> : 
        <div>
          <NavBar location={'UserFlights'} username={this.props.username}/>
          <UserFlights />
        </div>
      )
    )
  }
}

MainPage.defaultProps = {
  onAvaliable: true,
  username: ''
}

MainPage.propTypes = {
  onAvaliable: PropTypes.bool.isRequired,
  username: PropTypes.string.isRequired
}
