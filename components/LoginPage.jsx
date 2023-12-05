import React from "react";

class LoginPage extends React.Component() {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <h1>User Login</h1>

        <form method="post">
          <feildset>
            
            <label for="username">Enter your Username: <input type="text" id="username" name="username" required></input></label>
            
            <label for="password">Enter your Password: <input type="text" id="password" name="password" required></input></label>
            
          </feildset>
        </form>

        <button onclick={this.props.loggedIn = True}>Login</button>
      </div>
    )
  }
}
