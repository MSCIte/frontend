import { useSamplePathSamplePathGet } from "~/api/endpoints";
import { Navbar } from "~/components/navbar/NavBar";

export const AboutPage = () => {
  const { data, isLoading } = useSamplePathSamplePathGet();
  return (
    <div>
      <Navbar />
      <div className="p-4">
        <h1 className="text-3xl">About the MSCI Option</h1>

        <div>Interesting stuff about specific degrees</div>
        <div>Insert sample paths here</div>
        <div>
          If you have more questions about the MSCI option, check out the{" "}
          <a href="/faq" target="_blank" className="text-blue-500">
            FAQs
          </a>
          .
        </div>
        <hr className="my-4" />
        <h1 className="text-2xl">Testing connection to backend</h1>
        <p>
          If it stays loading for more than a few seconds you probably don't
          have connectivity. Please wait a minute and try again, the backend
          might be sleeping.
        </p>
        {isLoading ? <p>Loading...</p> : <p>{JSON.stringify(data?.data)}</p>}
      </div>

      {/* CTA */}
    </div>
  );
};
