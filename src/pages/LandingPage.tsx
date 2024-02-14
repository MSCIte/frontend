import { Navbar } from "~/components/navbar/NavBar";

export const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <div className="flex space-x-4 p-12">
        <div>
          <h1 className="text-3xl font-medium">Option planning made easy.</h1>
          <p className="mt-6 text-xl">
            Plan your degree with ease using our interactive degree planner.
          </p>
          <div className="mt-12">
            <a
              className="cursor-pointer rounded-md bg-blue-500 p-3 text-white"
              href="/plan"
            >
              Get Started
            </a>
          </div>
        </div>
        <div className="h-80 w-96 bg-slate-600">Placeholder image of tool</div>
      </div>
    </div>
  );
};
