import React from "react";
import { MainPage } from 'components/MainPage.jsx';
import { LoginPage } from 'components/LoginPage.jsx';

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
