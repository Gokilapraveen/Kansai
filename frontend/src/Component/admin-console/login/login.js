import React, { useState } from "react";
import DataUpdate from "../DataUpdate/DataUpdate";


function Login() {
  const database = [
    {
      username: "user1",
      password: "pass1",
    },
    {
      username: "user2",
      password: "pass2",
    },
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password",
  };

  const [errorMessages, setErrorMessages] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    var { uname, pass } = document.forms[0];
    const userData = database.find((user) => user.username === uname.value);
    if (userData) {
      if (userData.password !== pass.value) {
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        sessionStorage.setItem("User", userData.username)
        sessionStorage.setItem("Loggedin", "true");
      }
    } else {
      setErrorMessages({ name: "uname", message: errors.uname });
    }
    window.location.reload();
  }

  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );



  const renderForm = (
    <div className="form">
      {
        sessionStorage.getItem("Loggedin") ? "" :
          <form onSubmit={handleSubmit}>
            <div className="input-container">
              <label>Username </label>
              <input type="text" name="uname" required />
              {renderErrorMessage("uname")}
            </div>
            <div className="input-container">
              <label>Password </label>
              <input type="password" name="pass" required />
              {renderErrorMessage("pass")}
            </div>
            <div className="button-container">
              <input type="submit" />
            </div>
          </form>
      }

    </div>

  );
  const renderContent = (
    <> {
      !sessionStorage.getItem("Loggedin") ? "Sign in PLease " :
        <div> Welcome
          <button className="btn btn-primary" onClick={() => logoutSession()} >Logout</button>
          <DataUpdate /> </div>
    }
    </>

  )

  return (
    <div className="app">
      <div className="login-form">
        {renderForm} {renderContent}
      </div>
    </div>
  );
}

function logoutSession() {
  sessionStorage.removeItem("User");
  sessionStorage.removeItem("Loggedin");
  window.location.reload();
}

export default Login;
