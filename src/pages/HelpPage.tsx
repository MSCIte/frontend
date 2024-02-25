import { Navbar } from "~/components/navbar/NavBar";
import Markdown from "react-markdown";

export interface FAQEntry {
  question: string;
  answer: string;
}

const AppFAQData: FAQEntry[] = [
  {
    question: "How do I use this website?",
    answer:
      "You can use this website to plan out your degree. You can add courses to your plan by searching for them in the search bar.",
  },
  {
    question: "How do I use the search bar?",
    answer:
      "You can use the search bar to search for courses by their course code, course name, or description. You can also use the search bar to search for courses by their tags. You can add tags to courses when you add them to your plan.",
  },
  {
    question: "How do I add a course to my plan?",
    answer:
      "You can add a course to your plan by searching for it in the search bar and clicking on the course card. You can also click on the course card's add button.",
  },
  {
    question: "How do I remove a course from my plan?",
    answer:
      "You can remove a course from your plan by clicking on the course card's remove button.",
  },
  {
    question: "How do I see my plan?",
    answer:
      "You can see your plan by clicking on the plan button on the top right of the screen.",
  },
  {
    question: "How do I see my requirements?",
    answer:
      "You can see your requirements by clicking on the requirements button on the top right of the screen.",
  },
  {
    question: "How do I see my courses?",
    answer:
      "You can see your courses by clicking on the courses button on the top right of the screen.",
  },
  {
    question: "How do I see my degree?",
    answer:
      "You can see your degree by clicking on the degree button on the top right of the screen.",
  },
  {
    question: "How do I see my calendar?",
    answer:
      "You can see your calendar by clicking on the calendar button on the top right of the screen.",
  },
  {
    question: "How do I see my degree audit?",
    answer:
      "You can see your degree audit by clicking on the degree audit button on the top right of the screen.",
  },
  {
    question: "How do I see my GPA?",
    answer:
      "You can see your GPA by clicking on the GPA button on the top right of the screen.",
  },
  {
    question: "How do I see my course history?",
    answer:
      "You can see your course history by clicking on the course history button on the top right of the screen.",
  },
];

export const HelpPage = () => {
  return (
    <div>
      <Navbar />
      <div className="m-auto my-8 max-w-screen-lg">
        <h1 className="text-3xl font-medium">Help with MSCIte</h1>
        <div className="mt-6 space-y-4">
          {AppFAQData.map((faq, ind) => (
            <div key={`faq=${ind}`}>
              <div className="flex space-x-4  border-l-4 border-purple-500 bg-gray-400 p-3 text-black">
                <div className="text-3xl">Q.</div>
                <Markdown>{faq.question}</Markdown>
              </div>
              <div className="flex space-x-4 border-l-4 border-gray-500 bg-white p-3 text-black">
                <div className="text-3xl">A. </div>
                <Markdown>{faq.answer}</Markdown>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
