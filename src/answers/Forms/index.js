import React from "react";
import login from "./login";

/* As usual, change this file however you'd like. */

class LoginForm extends React.Component {
  state = { 
    user: null,
    email: '',
    password: ''
  };

  updateEmail = (value) => {
    this.setState({
      email: value
    })
  }

  updatePassword = (value) => {
    this.setState({
      password: value
    })
  }
  
  //Rather than use get document.getElementById, I chose to set the state with the the user email and password input.
  
  render() {
    const doit = async () => {
      // const email = document.getElementById("email").value;
      // const password = document.getElementById("password").value;
      // this.setState({ user: await login(email, password) });
      this.setState({ user: await login(this.state.email, this.state.password) });
    };
    
    if (this.state.user) return <div>Welcome {this.state.user.name}</div>;

    return (
      <div>
        Open <code>/src/answers/Forms/index.js</code> to start
        <br />
        <br />
        Email: <input type="email" id="email" onChange={(e) => {this.updateEmail(e.target.value)}}/>
        <br />
        <br />
        Password: <input type="password" id="password" onChange={(e) => {this.updatePassword(e.target.value)}}/>
        <br />
        <br />
        <span
          style={{
            background: "#eee",
            border: "1px solid #ccc",
            display: "inline-block",
            padding: "5px 20px"
          }}
          onClick={doit}
        >
          Log In
        </span>
      </div>
    );
  }
}

export default LoginForm;
