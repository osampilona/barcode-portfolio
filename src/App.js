import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import About from "./components/About";
import "./styles/App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useTheme } from "./hooks/useTheme";
import "./styles/ModeToggle.css";

function App() {
  const { mode } = useTheme();

  return (
    <>
      <Router>
        <div className={`App ${mode}`}>
          <Sidebar categoryNumb={1} />
          <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/about" exact component={About} />
          </Switch>
          <Sidebar categoryNumb={2} />
        </div>
      </Router>
    </>
  );
}

export default App;
