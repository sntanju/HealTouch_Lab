import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import AllServices from './pages/AllServices/AllServices';
import AllService from './pages/AllService/AllService';
import Login from './pages/Login/Login/Login';
import Header from './pages/Header/Header';
import Footer from './pages/Footer/Footer';
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './pages/PrivateRoute/PrivateRoute';

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

              <PrivateRoute path="/allservices/:serviceId">
                <AllServices></AllServices>
              </PrivateRoute>

              <Route path="/allservice">
                <AllService></AllService>
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
