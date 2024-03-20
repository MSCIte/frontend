import { ActionButton } from "~/components/actionButton/ActionButton";
import { CourseLarge } from "~/components/courseLarge/CourseLarge";
import { CourseSmall } from "~/components/courseSmall/CourseSmall";
import { RequirementsPane } from "~/components/requirementsPane/RequirementsPane";
import AllTermsView from "~/assets/allTermsView.svg?react";
import YearView from "~/assets/yearView.svg?react";
import TermView from "~/assets/termView.svg?react";
import { CourseSelectionPane } from "~/components/courseSelectionPane/CourseSelectionPane";
import { CourseWithTagsSchema } from "~/api/endpoints";
import { Navbar } from "~/components/navbar/NavBar";
import { Button } from "~/components/Button";
import { useState } from "react";
import { OnboardingModal } from "~/components/onboardingModal/OnboardingModal";

const courseData: CourseWithTagsSchema = {
  courseCode: "CHE 100",
  courseName: "Chemical Engineering Concepts I",
  minLevel: {},
  tags: [
    { code: "asdf", shortName: "afafa", longName: "Chemistry", color: "red" },
    { code: "asdf", shortName: "afafa", longName: "Chemistry", color: "blue" },
    {
      code: "asdf",
      shortName: "afafa",
      longName: "Chemistry",
      color: "indigo",
    },
  ],
};

const requirements = {
  title: "Degree Requirements",
  data: [
    {
      name: "Mandatory Courses",
      requirementsCompleted: 15,
      requirementsTotal: 20,
      color: "red",
    },
    {
      name: "Technical Electives",
      requirementsCompleted: 0,
      requirementsTotal: 6,
      color: "blue",
    },
    {
      name: "Degree Completion",
      requirementsCompleted: 36,
      requirementsTotal: 45,
      color: "green",
    },
  ],
};

export const DemoPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isOnboardingModalOpen, setIsOnboardingModalOpen] = useState(false);
  return (
    <div className="main space-y-10">
      <Navbar />

      <OnboardingModal
        isOpen={isOnboardingModalOpen}
        setIsOpen={setIsOnboardingModalOpen}
      />

      <ActionButton
        text="Open onboarding modal"
        onClick={() => {
          setIsOnboardingModalOpen(true);
        }}
        icon={undefined}
      />

      <Button
        text="Open modal"
        onClick={() => {
          console.log("isModalOpen", isModalOpen);
          setIsModalOpen((prevState) => {
            console.log("prevState", prevState);
            return !prevState;
          });
        }}
      />
      <CourseSelectionPane isOpen={isModalOpen} setIsOpen={setIsModalOpen} />

      <div style={{ width: "10rem" }}>
        <CourseSmall
          term="1A"
          onDelete={() => {}}
          onReplace={() => {}}
          onClick={() => {}}
          {...courseData}
        />
      </div>
      <div style={{ width: "20rem" }}>
        <CourseLarge
          onDelete={() => {}}
          onReplace={() => {}}
          onClick={() => {}}
          course={courseData}
        />
      </div>
      <div>
        <RequirementsPane {...requirements} />
      </div>
      <div className="space-y-2">
        <ActionButton text="All Terms" icon={<AllTermsView />} />
        <ActionButton text="Year" icon={<YearView />} />
        <ActionButton text="Term" icon={<TermView />} />
      </div>
    </div>
  );
};
