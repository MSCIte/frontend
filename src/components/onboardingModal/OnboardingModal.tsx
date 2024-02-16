import { Dialog, Transition } from "@headlessui/react";
import { useDegreesDegreeGet } from "~/api/endpoints";
import { usePlanStore } from "~/stores";
import { Pane } from "../pane/Pane";
import { Fragment } from "react";
import { Button } from "../Button";

interface OnboardingModalProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export const OnboardingModal = (props: OnboardingModalProps) => {
  const { major, setMajor, resetCourses } = usePlanStore();

  const { data: degrees, isLoading } = useDegreesDegreeGet();

  return (
    <Transition
      show={props.isOpen}
      // enter="transition duration-100 ease-out"
      // enterFrom="transform scale-95 opacity-0"
      // enterTo="transform scale-100 opacity-100"
      // leave="transition duration-75 ease-out"
      // leaveFrom="transform scale-100 opacity-100"
      // leaveTo="transform scale-95 opacity-0"
      as={Fragment}
    >
      <Dialog
        open={props.isOpen}
        onClose={() => {
          props.setIsOpen(false);
          localStorage.setItem("onboardingComplete", "true");
        }}
        className="relative z-50"
      >
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
            <Dialog.Panel className="h-128 w-128">
              <Pane className="h-[inherit] p-4">
                <div className="space-y-4">
                  <h1 className="text-3xl font-medium">
                    Prefill Course Information
                  </h1>

                  <p className="">
                    Welcome to your planner! Before you get started, enter your
                    program and the year you started that program to
                    automatically fill out your mandatory courses.
                  </p>
                  <p className="">
                    We also use this information to set the tags for your degree
                    completion.
                  </p>
                  <p className="font-bold text-red-800">
                    !!! If this is changed your current plan will be erased !!!
                  </p>
                  {!degrees?.data || isLoading ? (
                    <p>Loading...</p>
                  ) : (
                    <div>
                      <div>
                        <label
                          htmlFor="major"
                          className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Major:{" "}
                        </label>
                        <select
                          id="major"
                          value={major.name}
                          onChange={(e) =>
                            setMajor({ name: e.target.value, year: major.year })
                          }
                          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                        >
                          {degrees?.data?.map((degree) => (
                            <option key={degree} value={degree}>
                              {degree}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="mt-4">
                        <label
                          htmlFor="year"
                          className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Entrance Year:{" "}
                        </label>
                        <input
                          type="number"
                          id="year"
                          value={major.year}
                          min={2020}
                          max={2023}
                          onChange={(e) =>
                            setMajor({
                              name: major.name,
                              year: +e.target.value,
                            })
                          }
                          aria-describedby="helper-text-explanation"
                          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                          placeholder="90210"
                          required
                        />
                      </div>
                    </div>
                  )}

                  <Button
                    text="Get Started"
                    className="mx-auto block"
                    onClick={() => {
                      props.setIsOpen(false);
                      resetCourses();
                      localStorage.setItem("onboardingComplete", "true");
                    }}
                  />
                </div>
              </Pane>
            </Dialog.Panel>
          </div>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
};
