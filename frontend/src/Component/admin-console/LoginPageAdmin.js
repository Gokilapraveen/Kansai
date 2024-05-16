import { BrowserRouter as Router , Route, Link } from 'react-router-dom';
import Login from './login/login';

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
}
 
export default LoginAction;