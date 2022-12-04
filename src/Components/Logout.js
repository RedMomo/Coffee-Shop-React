import AdminPage from './AdminPage.js';
import UserPage from './UserPage.js';
// import { Route, Switch } from 'react-router-dom';



function Logout() {
  return (
    <div className="header-right" >
      <p> Logout </p>
      {/* <div className="logout-button"></div> */}
    </div>
  )
  // return (
       /* <Switch>
        <Route exact path="/admin" component={AdminPage} />
        <Route exact path="/user" component={UserPage} />
      </Switch> */
  // );
}







export default Logout; 