import { BrowserRouter as Router , Route } from 'react-router-dom';
import Login from './login/login';
import EditData from "./DataUpdate/EditData"
const LoginAction = () => {
    return ( 
        <>
       <Router>
       <Route path="/Login">
          <Login />
        </Route>

        <Route path='/update/:id' element={<EditData/>}/>
       </Router>
        </>
     );
}
 
export default LoginAction;