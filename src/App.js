import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import About from "./components/About";
import "./styles/App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useTheme } from "./hooks/useTheme";
import "./styles/ModeToggle.css";
import Projects from "./components/Projects";
import Gallery from "./components/Gallery";

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
            <Route path="/projects" exact component={Projects} />
            <Route path="/gallery" exact component={Gallery} />
          </Switch>
          <Sidebar categoryNumb={2} />
        </div>
      </Router>
    </>
  );
}

export default App;
