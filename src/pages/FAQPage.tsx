import { Navbar } from "~/components/navbar/NavBar";
import Markdown from "react-markdown";
import { ReactNode } from "react";

interface FAQEntry {
  question: string;
  answer: string;
}

const OptionFAQData: FAQEntry[] = [
  {
    question:
      "Do you allow a course to count toward the Management Sciences option if it is being counted toward another option, or do I need a unique set of courses for each one?",
    answer:
      "Courses counted toward an academic plan's requirements (i.e., major, minor, option, specialization, and diploma) can only be used to satisfy a **maximum of two** credentials. However, when a course(s) is listed as a requirement in both the major and its associated specialization, it is considered a single use of the course.",
  },
  {
    question:
      "There is a time conflict between the Management Sciences course and another course I need to take. What should I do?",
    answer: `You would need to contact the course instructor to sign a [Course Override Form](https://uwaterloo.ca/forms/undergraduate-studies/course-override). However, an override may or may not be granted depending on the case. In the case where you are not able to enroll in a course of desire, we recommend you to consider other alternative courses.`,
  },
  {
    question:
      "I would like to officially register for the Management Sciences option. Where do I submit my [plan modification form](https://uwaterloo.ca/forms/undergraduate-studies/plan-modification-form)?",
    answer:
      "Please submit the plan modification form to the academic advisor in your department. It is up to your home department to approve your registration request.",
  },
  {
    question: `The [Management Sciences Option](http://ugradcalendar.uwaterloo.ca/page/ENG-Management-Sciences-Option) lists several electives, but sometimes not all are scheduled. How can I find out which courses will be offered so that I can plan better?`,
    answer: `The course schedule might change every term, and the schedule details might not be available until the Add Course Period. Once the course schedule has become available, the MSCI option course planner allows you to see the courses offered each term. You can also find out more about course schedule details on the [Undergraduate Schedule of Classes](https://classes.uwaterloo.ca/under.html).`,
  },
  {
    question: `Should I make an appointment to see the option coordinator early in my studies?`,
    answer: `The full listing of eligible courses can be found in the undergraduate calendar. The MSCI option course planner also allows you to plan your terms accordingly. However, you must submit a [plan modification form](https://uwaterloo.ca/forms/undergraduate-studies/plan-modification-form) to your academic advisor for approval and then identify the Management Sciences option in your 4B [application to graduate](https://uwaterloo.ca/forms/undergraduate-studies/#graduation-diplomas). If you successfully complete the requirements, you will receive the designation on your transcript at graduation.`,
  },
  {
    question: `Do I need to be an engineering student to earn the Management Sciences option?`,
    answer: `Yes, the MSCI option is only offered to engineering students, except for Management Engineering students.`,
  },
  {
    question: `If I want more information about a course I am considering, should I reach out to the option coordinator?`,
    answer: `The MSCIte course planner allows you to see course details. Alternatively, the [Undergraduate Studies Academic Calendar](https://ugradcalendar.uwaterloo.ca/page/uWaterloo-Undergraduate-Calendar-Access) contains descriptions of every course. If you have further questions, you could directly contact the course instructor to find out more about a course as well.`,
  },
  {
    question: `Can I take courses outside of Management Sciences that will count toward the option?`,
    answer: `Yes. The MSCI option course planner allows you to see equivalent courses you could take towards the MSCI option. There is also a list of equivalent courses in the [undergraduate calendar](http://ugradcalendar.uwaterloo.ca/page/ENG-Management-Sciences-Option). Alternatively, you could reach out to the [option coordinator](https://uwaterloo.ca/management-sciences/contacts?title=&group[73]=73) if a specific course either in another department (such as economics or math) or at another university can count toward the option. Remember, three courses must be labeled MSCI in order to fulfill the requirements. `,
  },
  {
    question: `What happens if I want to take both MSCI 211 and MSCI 311? How will they count?`,
    answer: `You may take both MSCI 211 and MSCI 311, however, only one will count towards fulfilling the required courses for the MSCI option, whereas the other will be counted as an elective course.`,
  },
  {
    question: `Will I need to take extra terms to complete the option?`,
    answer: `Historically, students are able to complete the option in eight terms. The course planner allows you to plan out your academic pathway in advance, so you can project the completion of your program as well as the MSCI option. If you have further concerns about this, you could reach out to your undergraduate academic advisor for help.`,
  },
  {
    question: `Can I take graduate level courses in Management Sciences to count toward the option?`,
    answer: `The general answer is no, since these classes are reserved for our graduate students and are often similar to the undergraduate version of the classes (e.g. 211/605; 331/603).`,
  },
  {
    question: `Should I contact the academic advisor or the MSCI option coordinator to help me plan out my academic path?`,
    answer: `We advise you to use the MSCIte course planner before pursuing further assistance since it allows you to understand the background, benefits and requirements of the MSCI option. You can plan your terms ahead to see the possible pathways to fulfill both your program specific and option requirements. However, if your concerns or situation lie outside of the scope of the tool, please contact your academic advisor for questions about your undergraduate program or degree. Please contact the MSCI option coordinator for questions specifically about the MSCI option.`,
  },
  {
    question: `What is the general process/timeline if I want to pursue the MSCI option?`,
    answer: `This is dependent on your engineering department and the amount of time left before graduation. You can generally start the process once you are able to have elective courses. To be enrolled in the MSCI option, you must submit the plan modification form to your home department. After enrolling and completing the required courses (meeting the minimum grade of 60%), you will need to identify the MSCI option on the intent to graduate form in your 4B term.`,
  },
];

const MarkdownWrapper = ({ children }: { children: string }): ReactNode => {
  return (
    <Markdown
      components={{
        a: ({ node, ...props }) => (
          <a
            {...props}
            target="_blank"
            className="text-blue-500 hover:text-blue-600"
          />
        ),
      }}
    >
      {children}
    </Markdown>
  );
};

export const FAQPage = () => {
  return (
    <div>
      <Navbar />
      <div className="m-auto my-8 max-w-screen-lg">
        <h1 className="text-3xl font-medium">
          MSCI Option Frequently Asked Questions
        </h1>
        <div className="mt-6 space-y-4">
          {OptionFAQData.map((faq, ind) => (
            <div key={`faq=${ind}`}>
              <div className="flex space-x-4  border-l-4 border-purple-500 bg-gray-400 p-3 text-black">
                <div className="text-3xl">Q.</div>
                <MarkdownWrapper>{faq.question}</MarkdownWrapper>
              </div>
              <div className="flex space-x-4 border-l-4 border-gray-500 bg-white p-3 text-black">
                <div className="text-3xl">A. </div>
                <MarkdownWrapper>{faq.answer}</MarkdownWrapper>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
