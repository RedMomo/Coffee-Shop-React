import Login from './Login';
import Logout from './Logout';
import About from './About';
import Contact from './Contact';
import Cart from './Cart';


function Header() {
    return (
        <div className="header">
            <h1>Header</h1>
            <Login />
            <Logout />
            <About />
            <Contact />
            <Cart />
        </div>
    )
}







export default Header;