import React from "react";

class NavBar extends React.Component() {
  constructor(props){
    super(props);
  }

  render(){
    if(this.props.location == 'AvaliableFlights'){
      return(
        <nav>
          <button>My Flights</button>
          <p>{this.props.username}</p>
          <button>Logout</button>
        </nav>
      );
    }else if(this.props.location == 'UserFlights'){
      return(
        <nav>
          <button>Avaliable Flights</button>
          <p>{this.props.username}</p>
          <button>Logout</button>
        </nav>
      );
    }
  }
}

NavBar.defaultProps = {
  username: '',
  location: ''
}

NavBar.propTypes = {
  username: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired
}
