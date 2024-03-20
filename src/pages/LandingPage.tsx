import { Navbar } from "~/components/navbar/NavBar";
import AppScreenshot from "~/assets/appScreenshot.png";

export const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <div className="mt-4 flex items-center justify-center space-x-4 p-12">
        <div>
          <h1 className="text-3xl font-medium">
            <img
              className="h-16 w-auto"
              src="/public/favicon.svg"
              alt="MSCIte"
            />{" "}
            Option planning made easy.
          </h1>
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
        <div className="m-auto max-w-[50rem] -skew-x-3 skew-y-3 rounded-lg border drop-shadow-lg">
          <img src={AppScreenshot} />
        </div>
      </div>
    </div>
  );
};
