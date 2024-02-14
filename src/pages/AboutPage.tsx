import { useSamplePathSamplePathGet } from "~/api/endpoints";
import { Navbar } from "~/components/navbar/NavBar";

export const AboutPage = () => {
  const { data, isLoading } = useSamplePathSamplePathGet();
  return (
    <div>
      <Navbar />
      <div className="p-4">
        <h1 className="text-3xl">Testing connection to backend</h1>
        <p>
          If it stays loading for more than a few seconds you probably don't
          have connectivity.
        </p>
        {isLoading ? <p>Loading...</p> : <p>{JSON.stringify(data?.data)}</p>}
      </div>
    </div>
  );
};
