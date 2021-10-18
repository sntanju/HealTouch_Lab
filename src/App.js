import { BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import Banner from './pages/Banner/Banner';
import Header from './pages/Header/Header';
import Home from './pages/Home/Home';

function App() {
  return (
    <div className="App">
        <Router>
          <Switch>
          <Home></Home>
          
          </Switch>
       </Router>
    </div>
  );
}

export default App;
