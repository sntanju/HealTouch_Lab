import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import AllServices from './pages/AllServices/AllServices';
import Login from './pages/Login/Login/Login';
import Header from './pages/Header/Header';
import Footer from './pages/Footer/Footer';
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './pages/PrivateRoute/PrivateRoute';
import ShowServices from './pages/ShowServices/ShowServices';
import Appointment from './pages/Appointment/Appointment';
import Aboutus from './pages/Aboutus/Aboutus';
import Contact from './pages/Contact/Contact';
import Register from './pages/Register/Register';

function App() {
  return (
    <div className="App">
        <AuthProvider>
        <Router>
        <Header></Header>
          <Switch>

              <Route exact path="/">
                <Home></Home>
              </Route>

              <Route path="/home">
                <Home></Home>
              </Route>

              <Route path="/login">
                <Login></Login>
              </Route>

              <Route path="/register">
                <Register></Register>
              </Route>

              <PrivateRoute path="/allservices/:serviceId">
                <AllServices></AllServices>
              </PrivateRoute>

              <PrivateRoute path="/showservices">
                <ShowServices></ShowServices>
              </PrivateRoute>
              
              <PrivateRoute path="/appoinment">
                <Appointment></Appointment>
              </PrivateRoute>

              <Route path="/aboutus">
                <Aboutus></Aboutus>
              </Route>
              
              <Route path="/contact">
                <Contact></Contact>
              </Route>
              <Route path="*">
                <NotFound></NotFound>
              </Route>


          </Switch>
          <Footer></Footer>
       </Router>
        </AuthProvider>
    </div>
  );
}

export default App;
