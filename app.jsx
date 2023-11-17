import React from "react";
import { MainPage } from 'components/MainPage';
import { LoginPage } from 'components/LoginPage';

export default class App extends React.Component() {
  constructor(props){
    super(props);
  }

  render() {
    return(
      (loggedIn ? 
        <MainPage /> :
        <LoginPage />
      )
    );
  }
}

App.defaultProps = {
  loggedIn: false
}

App.propTypes = {
  loggedIn: PropTypes.bool.isRequired
}


{/* code login() an logout() and pass to components*/}
