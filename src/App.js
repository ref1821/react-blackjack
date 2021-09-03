import './App.css';
import {
  BrowserRouter as Router, Switch, Route
} from "react-router-dom";
import Home from "./components/home";
import Play from "./components/play";
import Games from "./components/games";
import About from "./components/about";


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/games" exact>
            <Games></Games>
          </Route>
          <Route path="/about" exact>
            <About></About>
          </Route> 
          <Route path="/play">
            <Play></Play>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
