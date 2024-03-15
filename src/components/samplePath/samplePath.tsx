import { twMerge } from "tailwind-merge";
import { usePlanStore } from "~/stores";
import { blacklistedDegrees, disciplineNameToFriendly } from "~/utils";
import {
  useDegreesDegreeGet,
  useSamplePathSamplePathDegreeNameGet,
} from "~/api/endpoints";
import { CourseMini } from "../courseMini/CourseMini";

const SamplePaths = () => {
  const { major, setMajor } = usePlanStore((state) => ({
    major: state.major,
    setMajor: state.setMajor,
    resetCourses: state.resetCourses,
  }));

  const { data: degrees } = useDegreesDegreeGet();
  console.log(degrees);

  const { data: samplePath } = useSamplePathSamplePathDegreeNameGet(major.name);

  console.log(samplePath);

  return (
    <div>
      <h2 className="mt-4 text-2xl font-medium">Sample Paths</h2>
      <p>
        Sample paths are examples of common courses alumni have historically
        taken to successfully complete the MSCI Option.
      </p>
      <div style={{ marginBottom: "10px", marginTop: "10px" }}>
        <h3 className={twMerge("cursor-pointer text-lg font-medium")}>
          Select your major:{" "}
          <select
            className="cursor-pointer rounded-sm border bg-gray-100 hover:bg-white"
            value={major.name}
            onChange={(e) => {
              setMajor({ name: e.target.value, year: major.year });
            }}
          >
            {degrees?.data
              ?.filter((degree) => !blacklistedDegrees.includes(degree))
              ?.map((degree) => (
                <option key={degree} value={degree}>
                  {disciplineNameToFriendly(degree)}
                </option>
              ))}
          </select>
        </h3>
      </div>
      {samplePath?.data && samplePath.data.length > 0 ? (
        <div
          className="grid grid-cols-3 gap-4 rounded bg-slate-500 p-4"
          // style={{
          //   display: "grid",
          //   gridTemplateColumns: "repeat(3, 1fr)",
          // }}
        >
          {samplePath.data
            .sort((a, b) => a.orderNum - b.orderNum)
            .map((course) => (
              <CourseMini
                key={course.courseCode}
                courseCode={course.courseCode}
                orderNumber={course.orderNum}
              />
            ))}
        </div>
      ) : (
        <h3>Sorry not enough historical data to create a sample path</h3>
      )}
    </div>
  );
};

export default SamplePaths;
