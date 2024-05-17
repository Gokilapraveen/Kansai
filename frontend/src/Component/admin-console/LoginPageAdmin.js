import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./login/login";

const LoginAction = () => {
  return (
    <>
      <Router>
        <Route path="/Login">
          <Login />
        </Route>
      </Router>
    </>
  );
};

export default LoginAction;
