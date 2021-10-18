import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import AllServices from './pages/AllServices/AllServices';
import AllService from './pages/AllService/AllService';
import Login from './pages/Login/Login/Login';

function App() {
  return (
    <div className="App">
        <Router>
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

              <Route path="/allservices/:serviceId">
                <AllServices></AllServices>
              </Route>

              <Route path="/allservice">
                <AllService></AllService>
              </Route>

              <Route path="*">
                <NotFound></NotFound>
              </Route>

          </Switch>
       </Router>
    </div>
  );
}

export default App;
