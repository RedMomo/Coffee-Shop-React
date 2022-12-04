import AdminPage from './AdminPage.js';
import UserPage from './UserPage.js';
// import { Route, Switch } from 'react-router-dom';



// function Login() {
  // return (
    // <div>
       /* <Switch>
        <Route exact path="/admin" component={AdminPage} />
        <Route exact path="/user" component={UserPage} />
      </Switch> */
    // </div>
  // );
// };

import React from "react";

function Login() {
  return (
    <div>
      <h2 className='login-header'>Login</h2>
      <form className='form'>
        <div className='input'>
          <input type="text" name="username" placeholder="Username" />
        </div>
        <div className='input'>
          <input type="password" name="password" placeholder="Password" />
        </div>
        <button className='card-button-primary'>Login</button>
        {/* <input type="submit" value="Submit" /> */}
      </form>
    </div>
  );
}

export default Login;







// export default Login; 