import { Route, Switch } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query"; // Import the QueryClientProvider component
import "./App.css";
import { DemoPage } from "./pages/DemoPage";
import { FAQPage } from "./pages/FAQPage";
import { Navbar } from "./components/navbar/NavBar";
import { LandingPage } from "./pages/LandingPage";
import { PlanningPage } from "./pages/PlanningPage";
import { AboutPage } from "./pages/AboutPage";
import { queryClient } from "./queryClient"; // Import the queryClient variable

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Switch>
        <Route path="/about" component={AboutPage} />
        <Route path="/faq" component={FAQPage} />
        <Route path="/plan" component={PlanningPage} />
        <Route path="/demo" component={DemoPage} />
        <Route path="/" component={LandingPage} />
      </Switch>
    </QueryClientProvider>
  );
}

export default App;
