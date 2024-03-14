import { Dialog, Transition } from "@headlessui/react";
import { usePlanStore } from "~/stores";
import { Pane } from "../pane/Pane";
import { Fragment } from "react";
import { Button } from "../Button";

interface OnboardingModalProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export const InformationModal = (props: OnboardingModalProps) => {
  const { option, isMsciInfoModalOpen, setIsMsciInfoModalOpen } =
    usePlanStore();

  return (
    <Transition
      show={isMsciInfoModalOpen}
      // enter="transition duration-100 ease-out"
      // enterFrom="transform scale-95 opacity-0"
      // enterTo="transform scale-100 opacity-100"
      // leave="transition duration-75 ease-out"
      // leaveFrom="transform scale-100 opacity-100"
      // leaveTo="transform scale-95 opacity-0"
      as={Fragment}
    >
      <Dialog open={props.isOpen} onClose={() => {}} className="relative z-50">
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
            <Dialog.Panel className="h-[36rem] w-[40rem]">
              <Pane className="h-[inherit] p-4">
                <div className="space-y-4">
                  {option.year === 2020 && (
                    <div className="space-y-4 px-4">
                      <h1 className="text-3xl font-medium">
                        Management Science Option Requirements
                      </h1>
                      <p>
                        The MSCI option consists of six courses, including three
                        required courses (or their equivalents) and three
                        elective courses (or equivalents), all of which are
                        captured in the MSCIte course planner.
                      </p>
                      <h2 className="text-2xl font-medium">Notes:</h2>
                      <ul className="list-disc pl-6">
                        <li>
                          At least{" "}
                          <b>three of the six courses must be MSCI courses </b>
                          from the Department of Management Science and
                          Engineering.
                        </li>
                        <li>
                          Students may take both MSCI 221 and MSCI 311, in which
                          case, one will count towards the required courses and
                          the other toward the elective courses.
                        </li>
                        <li>
                          A maximum of one course from outside the approved list
                          may be counted towards the option, subject to written
                          approval of the MSCI option coordinator and the
                          associate chair of undergraduate studies in the
                          student’s home department.
                        </li>
                        <li>
                          For the designation Management Sciences Option to be
                          included on the transcript, the student must achieve a{" "}
                          <b>
                            minimum overall cumulative average of 60% in the six
                            courses
                          </b>
                          .
                        </li>
                      </ul>
                      <Button
                        text="Exit"
                        className="mx-auto block"
                        onClick={() => {
                          setIsMsciInfoModalOpen(false);
                        }}
                      />
                    </div>
                  )}
                  {option.year === 2021 && (
                    <div className="space-y-4 px-4">
                      <h1 className="text-3xl font-medium">
                        Management Science Option Requirements
                      </h1>
                      <p>
                        The MSCI option consists of six courses, including two
                        required courses (or their equivalents) and four
                        elective courses (or equivalents), all of which are
                        captured in the MSCIte course planner.
                      </p>
                      <h2 className="text-2xl font-medium">Notes:</h2>
                      <ul className="list-disc pl-6">
                        <li>
                          At least{" "}
                          <b>three of the six courses must be MSCI courses</b>
                          from the Department of Management Science and
                          Engineering.
                        </li>
                        <li>
                          Students may take both MSCI 221 and MSCI 311, in which
                          case, one will count towards the required courses and
                          the other toward the elective courses.
                        </li>
                        <li>
                          A maximum of one course from outside the approved list
                          may be counted towards the option, subject to written
                          approval of the MSCI option coordinator and the
                          associate chair of undergraduate studies in the
                          student’s home department.
                        </li>
                        <li>
                          For the designation Management Sciences Option to be
                          included on the transcript, the student must achieve a{" "}
                          <b>
                            minimum overall cumulative average of 60% in the six
                            courses
                          </b>
                          .
                        </li>
                      </ul>
                      <Button
                        text="Exit"
                        className="mx-auto block"
                        onClick={() => {
                          setIsMsciInfoModalOpen(false);
                        }}
                      />
                    </div>
                  )}
                  {option.year === 2022 && (
                    <div className="space-y-4 px-4">
                      <h1 className="text-3xl font-medium">
                        Management Science Option Requirements
                      </h1>
                      <p>
                        The MSCI option consists of six courses, including two
                        required courses (or their equivalents) and four
                        elective courses (or equivalents), all of which are
                        captured in the MSCIte course planner.
                      </p>
                      <h2 className="text-2xl font-medium">Notes:</h2>
                      <ul className="list-disc pl-6">
                        <li>
                          At least{" "}
                          <b>three of the six courses must be MSCI courses</b>
                          from the Department of Management Science and
                          Engineering.
                        </li>
                        <li>
                          Students may take both MSCI 221 and MSCI 311, in which
                          case, one will count towards the required courses and
                          the other toward the elective courses.
                        </li>
                        <li>
                          A maximum of one course from outside the approved list
                          may be counted towards the option, subject to approval
                          of the MSCI option coordinator.
                        </li>
                        <li>
                          For the designation of Management Sciences Option to
                          be included on the transcript, the student must
                          achieve a{" "}
                          <b>
                            minimum overall cumulative average of 60% in the six
                            courses
                          </b>
                          .
                        </li>
                      </ul>
                      <Button
                        text="Exit"
                        className="mx-auto block"
                        onClick={() => {
                          setIsMsciInfoModalOpen(false);
                        }}
                      />
                    </div>
                  )}
                  {option.year === 2023 && (
                    <div className="space-y-4 px-4">
                      <h1 className="text-3xl font-medium">
                        Management Science Option Requirements
                      </h1>
                      <p>
                        The MSCI option consists of six courses, including two
                        required courses (or their equivalents) and four
                        elective courses (or equivalents), all of which are
                        captured in the MSCIte course planner.
                      </p>
                      <h2 className="text-2xl font-medium">Notes:</h2>
                      <ul className="list-disc pl-6">
                        <li>
                          At least{" "}
                          <b>three of the six courses must be MSCI courses</b>
                          from the Department of Management Science and
                          Engineering.
                        </li>
                        <li>
                          Students may take both MSCI/MSE 211 and MSCI/MSE 311,
                          in which case, one will count towards the required
                          courses and the other toward the elective courses.
                        </li>
                        <li>
                          A maximum of one course from outside the approved list
                          may be counted towards the option, subject to approval
                          of the MSCI option coordinator.
                        </li>
                        <li>
                          For the designation Management Sciences Option to be
                          included on the transcript, the student must achieve a{" "}
                          <b>
                            minimum overall cumulative average of 60% in the six
                            courses
                          </b>
                          .
                        </li>
                      </ul>
                      <Button
                        text="Exit"
                        className="mx-auto block"
                        onClick={() => {
                          setIsMsciInfoModalOpen(false);
                        }}
                      />
                    </div>
                  )}
                </div>
              </Pane>
            </Dialog.Panel>
          </div>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
};
