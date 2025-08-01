import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import { DarkModeProvider } from "./context/DarkModeContext";
import { LanguageProvider } from "./context/LanguageContext";


function App() {
  return (
    <LanguageProvider>
      <DarkModeProvider>
        <Router>
          
            <Navbar />
            <Switch>
              <Route exact path="/">
                <Hero />
                <Skills />
                <Profile />
                <Projects />
                <Footer />
              </Route>
              <Route path="/contact">
                <Contact />
              </Route>
            </Switch>
          
        </Router>
        <ToastContainer position="bottom-right" autoClose={3000} />
      </DarkModeProvider>
    </LanguageProvider>
  );
}

export default App;
