import { useSamplePathSamplePathGet } from "~/api/endpoints";
import { Navbar } from "~/components/navbar/NavBar";

export const AboutPage = () => {
  const { data, isLoading } = useSamplePathSamplePathGet();
  return (
    <div>
      <Navbar />
      <div>
        <h1>Gaze upon the majesty of a degree planner</h1>
        {isLoading ? <p>Loading...</p> : <p>{JSON.stringify(data?.data)}</p>}
      </div>
    </div>
  );
};
