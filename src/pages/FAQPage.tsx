import { FAQBlock } from "~/components/faqBlock/FAQBlock";

const FAQData = [
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
  {
    question: "How do I see my course requirements?",
    answer: "You can see your course requirements",
  },
];

export const FAQPage = () => {
  return (
    <div>
      <h1>Frequently Asked Questions</h1>
      <div className="space-y-4">
        {FAQData.map((faq) => (
          <FAQBlock {...faq} />
        ))}
      </div>
    </div>
  );
};
