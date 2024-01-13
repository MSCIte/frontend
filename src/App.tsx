import { Route, Switch } from "wouter";
import "./App.css";
import { DemoPage } from "./pages/DemoPage";
import { FAQPage } from "./pages/FAQPage";
import { Navbar } from "./components/navbar/NavBar";
import { LandingPage } from "./pages/LandingPage";
import { PlanningPage } from "./pages/PlanningPage";
import { AboutPage } from "./pages/AboutPage";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/about" component={AboutPage} />
        <Route path="/faq" component={FAQPage} />
        <Route path="/plan" component={PlanningPage} />
        <Route path="/demo" component={DemoPage} />
        <Route path="/" component={LandingPage} />
      </Switch>
    </>
  );
}

export default App;
