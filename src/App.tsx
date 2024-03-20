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

import { TourProvider } from "@reactour/tour";
import { tourSteps } from "./tourSteps";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TourProvider
        className="z-50"
        steps={tourSteps}
        // onClickMask={({ setCurrentStep, currentStep, steps, setIsOpen }) => {
        //   if (steps) {
        //     if (currentStep === steps.length - 1) {
        //       setIsOpen(false);
        //     }
        //     setCurrentStep((s) => (s === steps.length - 1 ? 0 : s + 1));
        //   }
        // }}
      >
        <Switch>
          <Route path="/about" component={AboutPage} />
          <Route path="/faq" component={FAQPage} />
          <Route path="/plan" component={PlanningPage} />
          {/* <Route path="/user-guide" component={UserGuidePage} /> */}
          <Route path="/demo" component={DemoPage} />
          <Route path="/" component={LandingPage} />
        </Switch>
      </TourProvider>
      <ToastContainer />
    </QueryClientProvider>
  );
}

export default App;
