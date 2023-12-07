import React from "react";
import '../style.css';
import '../LoginPage.css'
// class LoginPage extends React.Component() {
//   constructor(props){
//     super(props);
//   }
//
//   render(){
function LoginPage (){
    return(
        <div>
            <h1>User Login</h1>

            <form method="post">
                <fieldset>

                    <label for="username">Enter your Username: <input type="text" id="username" name="username" required></input></label>

                    <label for="password">Enter your Password: <input type="text" id="password" name="password" required></input></label>

                </fieldset>
            </form>

            <button onclick={"login"}>Login</button>
        </div>
    )

}
export default LoginPage