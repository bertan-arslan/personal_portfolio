import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <div className="App ">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Hero />
            <Skills />
            <Profile />
            <Projects />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
