import { useGetTopCoursesCoursesTopGet } from "~/api/endpoints";

export const AboutPage = () => {
  const { data, isLoading } = useGetTopCoursesCoursesTopGet();
  return (
    <div>
      <h1>Gaze upon the majesty of a degree planner</h1>
      {isLoading ? <p>Loading...</p> : <p>{JSON.stringify(data)}</p>}
    </div>
  );
};
