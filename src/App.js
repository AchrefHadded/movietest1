import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from "react-router-dom";
import Home from "./components/Home";
import Trailer from "./components/Trailer";

function App() {
  return (
    <>
      <Router>
        <div>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/Trailer/:id">
              <Trailer />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
