import Aside from "./components/Aside";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Projects from "./pages/projects";
import SingleProject from "./pages/single-project";
import Feedback from "./pages/feedback";

function App() {
  return (
    <Router>
      <Switch>
        <div className="d-flex flex-column flex-root">
          <div className="page d-flex flex-row flex-column-fluid">
            <Aside />
            <div
              className="flex-column flex-row-fluid"
              style={{ marginTop: 38, marginLeft: 265, padding: "0 30px" }}
            >
              <Route path="/projects">
                <Projects />
              </Route>
              <Route path="/project/:id">
                <SingleProject />
              </Route>
              <Route path="/feedback">
                <Feedback />
              </Route>
            </div>
          </div>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
