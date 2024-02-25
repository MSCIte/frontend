import { Route, Switch } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query"; // Import the QueryClientProvider component
import "./App.css";
import { DemoPage } from "./pages/DemoPage";
import { FAQPage } from "./pages/FAQPage";
import { LandingPage } from "./pages/LandingPage";
import { PlanningPage } from "./pages/PlanningPage";
import { AboutPage } from "./pages/AboutPage";
import { queryClient } from "./queryClient"; // Import the queryClient variable
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { HelpPage } from "./pages/HelpPage";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Switch>
        <Route path="/about" component={AboutPage} />
        <Route path="/faq" component={FAQPage} />
        <Route path="/plan" component={PlanningPage} />
        <Route path="/help" component={HelpPage} />
        <Route path="/demo" component={DemoPage} />
        <Route path="/" component={LandingPage} />
      </Switch>
      <ToastContainer />
    </QueryClientProvider>
  );
}

export default App;
