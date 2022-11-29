import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Landing from './Components/Landing';
// import AdminCRUDForm from './Components/AdminCRUDForm';

function App() {
  return (
    <div className="">
      <Header />
      <Landing />
      {/* <AdminCRUDForm /> */}
      <Footer />
    </div>
  );
}

export default App;
