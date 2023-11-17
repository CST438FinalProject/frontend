import React from "react";

class MainPage extends React.Component() {
  constructor(props){
    super(props);
  }

  render() {
    return(
      (onAvaliable ? 
        <div>
          <Navbar location={'AvaliableFlights'} username={this.props.username}/>
          <AvaliableFlights />
        </div> : 
        <div>
          <Navbar location={'UserFlights'} username={this.props.username}/>
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
