import { Navbar } from "~/components/navbar/NavBar";
import AppScreenshot from "~/assets/appScreenshot.png";

export const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <div className="mt-4 flex items-center justify-center space-x-4 p-12">
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
        <div className="m-auto max-w-[50rem] -skew-x-3 skew-y-3 rounded-lg border drop-shadow-lg">
          <img src={AppScreenshot} />
        </div>
      </div>
      <iframe
        // src={`https://docs.google.com/viewer?embedded=true&url=${"https://docs.google.com/document/d/1Xt597D3OcmTYx51GUvW9QGghasvJFMxZwjeWQ74d1so/edit?usp=sharing"}`}
        src="https://docs.google.com/document/d/1Xt597D3OcmTYx51GUvW9QGghasvJFMxZwjeWQ74d1so/edit?usp=sharing"
        className="mx-auto my-8 min-h-[56rem] w-4/6"
      />
    </div>
  );
};
