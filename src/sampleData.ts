import { Tag } from "./components/courseLarge/CourseLarge";

export interface Course {
  courseCode: string;
  longName: string;
  description?: string;
  tags: Tag[];
}

export interface CourseData {
  [key: string]: Course[];
}

export const courseData: CourseData = {
  "1A": [
    {
      courseCode: "CHE 100",
      longName: "Chemical Engineering Concepts I",
      description:
        "This course introduces students to the fundamental concepts of chemical engineering. Topics include: material and energy balances, fluid flow, heat transfer, and mass transfer. The course also introduces students to the chemical engineering profession and the role of chemical engineers in society.",
      tags: [{ name: "Mandatory", color: "blue" }],
    },
    {
      courseCode: "CHE 102",
      longName: "Chemistry for Engineers",
      tags: [{ name: "Mandatory", color: "blue" }],
    },
    {
      courseCode: "CHE 180",
      longName: "Computer Literacy & Programming",
      tags: [{ name: "Mandatory", color: "blue" }],
    },
    {
      courseCode: "MATH 115",
      longName: "Linear Algebra for Engineering",
      tags: [{ name: "Mandatory", color: "blue" }],
    },
    {
      courseCode: "CHE 120",
      longName: "Chemical Engineering Design Stu...",
      tags: [{ name: "Mandatory", color: "blue" }],
    },
    {
      courseCode: "MATH 116",
      longName: "Calculus I for Engineering",
      tags: [{ name: "Mandatory", color: "blue" }],
    },
  ],
  "1B": [
    {
      courseCode: "CHE 101",
      longName: "Chemical Engineering Concepts I",
      tags: [{ name: "Mandatory", color: "blue" }],
    },
    {
      courseCode: "CHE 161",
      longName: "Chemistry for Engineers",
      tags: [{ name: "Mandatory", color: "blue" }],
    },
    {
      courseCode: "CHE 181",
      longName: "Computer Literacy & Programming",
      tags: [{ name: "Mandatory", color: "blue" }],
    },
    {
      courseCode: "MATH 118",
      longName: "Linear Algebra for Engineering",
      tags: [{ name: "Mandatory", color: "blue" }],
    },
    {
      courseCode: "PHY 115",
      longName: "Chemical Engineering Design Stu...",
      tags: [{ name: "Mandatory", color: "blue" }],
    },
    {
      courseCode: "SPCOM",
      longName: "Calculus I for Engineering",
      tags: [{ name: "Mandatory", color: "blue" }],
    },
  ],
  "2A": [
    {
      courseCode: "CHE 200",
      longName: "Chemical Engineering Concepts I",
      tags: [{ name: "Mandatory", color: "blue" }],
    },
    {
      courseCode: "CHE 220",
      longName: "Chemistry for Engineers",
      tags: [{ name: "Mandatory", color: "blue" }],
    },
    {
      courseCode: "CHE 230",
      longName: "Computer Literacy & Programming",
      tags: [{ name: "Mandatory", color: "blue" }],
    },
  ],
  "2B": [
    {
      courseCode: "CHE 211",
      longName: "Chemical Engineering Concepts I",
      tags: [{ name: "Mandatory", color: "blue" }],
    },
    {
      courseCode: "CHE 225",
      longName: "Chemistry for Engineers",
      tags: [{ name: "Mandatory", color: "blue" }],
    },
    {
      courseCode: "CHE 231",
      longName: "Computer Literacy & Programming",
      tags: [{ name: "Mandatory", color: "blue" }],
    },
    {
      courseCode: "CHE 291",
      longName: "Linear Algebra for Engineering",
      tags: [{ name: "Mandatory", color: "blue" }],
    },
    {
      courseCode: "MATH 218",
      longName: "Chemical Engineering Design Stu...",
      tags: [{ name: "Mandatory", color: "blue" }],
    },
  ],
  "3A": [
    {
      courseCode: "CHE 200",
      longName: "Chemical Engineering Concepts I",
      tags: [{ name: "Mandatory", color: "blue" }],
    },
    {
      courseCode: "CHE 220",
      longName: "Chemistry for Engineers",
      tags: [{ name: "Mandatory", color: "blue" }],
    },
    {
      courseCode: "CHE 230",
      longName: "Computer Literacy & Programming",
      tags: [{ name: "Mandatory", color: "blue" }],
    },
    {
      courseCode: "CHE 290",
      longName: "Linear Algebra for Engineering",
      tags: [{ name: "Mandatory", color: "blue" }],
    },
    {
      courseCode: "CHE 262",
      longName: "Chemical Engineering Design Stu...",
      tags: [{ name: "Mandatory", color: "blue" }],
    },
    {
      courseCode: "MSCI 211",
      longName: "Organizational Behavior",
      tags: [{ name: "Mandatory", color: "blue" }],
    },
  ],
  "3B": [
    {
      courseCode: "CHE 200",
      longName: "Chemical Engineering Concepts I",
      tags: [{ name: "Mandatory", color: "blue" }],
    },
    {
      courseCode: "CHE 220",
      longName: "Chemistry for Engineers",
      tags: [{ name: "Mandatory", color: "blue" }],
    },
    {
      courseCode: "CHE 230",
      longName: "Computer Literacy & Programming",
      tags: [{ name: "Mandatory", color: "blue" }],
    },
    {
      courseCode: "CHE 290",
      longName: "Linear Algebra for Engineering",
      tags: [{ name: "Mandatory", color: "blue" }],
    },
    {
      courseCode: "CHE 262",
      longName: "Chemical Engineering Design Stu...",
      tags: [{ name: "Mandatory", color: "blue" }],
    },
    {
      courseCode: "CHE 521",
      longName: "Process Optimization",
      tags: [{ name: "Mandatory", color: "blue" }],
    },
  ],
  "4A": [
    {
      courseCode: "CHE 200",
      longName: "Chemical Engineering Concepts I",
      tags: [{ name: "Mandatory", color: "blue" }],
    },
    {
      courseCode: "CHE 220",
      longName: "Chemistry for Engineers",
      tags: [{ name: "Mandatory", color: "blue" }],
    },
    {
      courseCode: "CHE 230",
      longName: "Computer Literacy & Programming",
      tags: [{ name: "Mandatory", color: "blue" }],
    },
    {
      courseCode: "CHE 290",
      longName: "Linear Algebra for Engineering",
      tags: [{ name: "Mandatory", color: "blue" }],
    },
    {
      courseCode: "MSCI 263",
      longName: "Managerial Economics",
      tags: [{ name: "Mandatory", color: "blue" }],
    },
    {
      courseCode: "MSCI 311",
      longName: "Organizational Design & Technol...",
      tags: [{ name: "Mandatory", color: "blue" }],
    },
  ],
  "4B": [
    {
      courseCode: "CHE 200",
      longName: "Chemical Engineering Concepts I",
      tags: [{ name: "Mandatory", color: "blue" }],
    },
    {
      courseCode: "CHE 220",
      longName: "Chemistry for Engineers",
      tags: [{ name: "Mandatory", color: "blue" }],
    },
    {
      courseCode: "CHE 230",
      longName: "Computer Literacy & Programming",
      tags: [{ name: "Mandatory", color: "blue" }],
    },
    {
      courseCode: "CHE 290",
      longName: "Linear Algebra for Engineering",
      tags: [{ name: "Mandatory", color: "blue" }],
    },
    {
      courseCode: "MSCI 261",
      longName: "Managerial Economics",
      tags: [{ name: "Mandatory", color: "blue" }],
    },
    {
      courseCode: "MSCI 332",
      longName: "Deterministic Optimization",
      tags: [{ name: "Mandatory", color: "blue" }],
    },
  ],
};
