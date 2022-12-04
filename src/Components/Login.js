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
      <h1>Login</h1>
      <form>
        <div>
          <input type="text" name="username" placeholder="Username" />
        </div>
        <div>
          <input type="password" name="password" placeholder="Password" />
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Login;







// export default Login; 