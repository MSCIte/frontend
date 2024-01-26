import { useSamplePathSamplePathGet } from "~/api/endpoints";

export const AboutPage = () => {
  const { data, isLoading } = useSamplePathSamplePathGet();
  return (
    <div>
      <h1>Gaze upon the majesty of a degree planner</h1>
      {isLoading ? <p>Loading...</p> : <p>{JSON.stringify(data?.data)}</p>}
    </div>
  );
};
