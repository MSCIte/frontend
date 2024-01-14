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

//   /bg-(red|green|glue|orange|yellow|blue|purple|pink|indigo|gray)-[0-9]{1,2}00/,
export const courseData: CourseData = {
  "1A": [
    {
      courseCode: "CHE 100",
      longName: "Chemical Engineering Concepts I",
      description:
        "This course introduces students to the fundamental concepts of chemical engineering. Topics include: material and energy balances, fluid flow, heat transfer, and mass transfer. The course also introduces students to the chemical engineering profession and the role of chemical engineers in society.",
      tags: [
        { name: "TE", color: "red" },
        { name: "Mandatory", color: "yellow" },
        { name: "Roged", color: "purple" },
      ],
    },
    {
      courseCode: "CHE 102",
      longName: "Chemistry for Engineers",
      tags: [{ name: "Mandatory", color: "green" }],
    },
    {
      courseCode: "CHE 180",
      longName: "Computer Literacy & Programming",
      tags: [{ name: "Mandatory", color: "blue" }],
    },
    {
      courseCode: "MATH 115",
      longName: "Linear Algebra for Engineering",
      tags: [{ name: "Mandatory", color: "orange" }],
    },
    {
      courseCode: "CHE 120",
      longName: "Chemical Engineering Design Stu...",
      tags: [{ name: "Mandatory", color: "yellow" }],
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
      tags: [{ name: "Mandatory", color: "purple" }],
    },
    {
      courseCode: "CHE 161",
      longName: "Chemistry for Engineers",
      tags: [{ name: "Mandatory", color: "pink" }],
    },
    {
      courseCode: "CHE 181",
      longName: "Computer Literacy & Programming",
      tags: [{ name: "Mandatory", color: "indigo" }],
    },
    {
      courseCode: "MATH 118",
      longName: "Linear Algebra for Engineering",
      tags: [{ name: "Mandatory", color: "gray" }],
    },
    {
      courseCode: "PHY 115",
      longName: "Chemical Engineering Design Stu...",
      tags: [{ name: "Mandatory", color: "red" }],
    },
    {
      courseCode: "SPCOM",
      longName: "Calculus I for Engineering",
      tags: [{ name: "Mandatory", color: "green" }],
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

export const courseList: Course[] = [
  {
    courseCode: "CHE 100",
    longName: "Chemical Engineering Concepts I",
    description:
      "This course introduces students to the fundamental concepts of chemical engineering. Topics include: material and energy balances, fluid flow, heat transfer, and mass transfer. The course also introduces students to the chemical engineering profession and the role of chemical engineers in society. Students will learn how to apply these concepts to solve real-world problems in chemical engineering.",
    tags: [
      { name: "TE", color: "red" },
      { name: "Mandatory", color: "yellow" },
      { name: "Roged", color: "purple" },
    ],
  },
  {
    courseCode: "CHE 102",
    longName: "Chemistry for Engineers",
    description:
      "This course provides an introduction to the principles of chemistry, with a focus on applications relevant to engineering. Students will learn about atomic structure, chemical bonding, reaction kinetics, and thermodynamics. The course also covers the properties of gases, liquids, and solids, as well as the behavior of solutions.",
    tags: [{ name: "Mandatory", color: "green" }],
  },
  {
    courseCode: "CHE 180",
    longName: "Computer Literacy & Programming",
    description:
      "This course introduces students to the basics of computer literacy and programming, with a focus on applications in engineering. Students will learn how to use common software tools, write simple programs, and understand the basics of computer hardware. The course also covers data structures, algorithms, and object-oriented programming.",
    tags: [{ name: "Mandatory", color: "blue" }],
  },
  {
    courseCode: "MATH 115",
    longName: "Linear Algebra for Engineering",
    description:
      "This course covers the fundamental concepts of linear algebra, with a focus on applications in engineering. Students will learn about vectors, matrices, determinants, eigenvalues and eigenvectors, and how to apply these concepts to solve problems in engineering. The course also covers the theory of linear equations and introduces students to abstract vector spaces.",
    tags: [{ name: "Mandatory", color: "orange" }],
  },
  {
    courseCode: "CHE 120",
    longName: "Chemical Engineering Design Stu...",
    description:
      "This course introduces students to the principles of chemical engineering design, with a focus on practical applications. Students will learn how to design chemical processes and equipment, and how to use simulation software to analyze and optimize these designs. The course also covers safety and environmental considerations in chemical engineering design.",
    tags: [{ name: "Mandatory", color: "yellow" }],
  },
  {
    courseCode: "MATH 116",
    longName: "Calculus I for Engineering",
    description:
      "This course covers the fundamental concepts of calculus, with a focus on applications in engineering. Students will learn about limits, derivatives, integrals, and series, and how to apply these concepts to solve problems in engineering. The course also introduces students to the concepts of multivariable calculus.",
    tags: [{ name: "Mandatory", color: "blue" }],
  },
  {
    courseCode: "CHE 101",
    longName: "Chemical Engineering Concepts I",
    description:
      "This course introduces students to the fundamental concepts of chemical engineering. Topics include: material and energy balances, fluid flow, heat transfer, and mass transfer. The course also introduces students to the chemical engineering profession and the role of chemical engineers in society. Students will learn how to apply these concepts to solve real-world problems in chemical engineering.",
    tags: [{ name: "Mandatory", color: "purple" }],
  },
  {
    courseCode: "CHE 161",
    longName: "Chemistry for Engineers",
    description:
      "This course provides an introduction to the principles of chemistry, with a focus on applications relevant to engineering. Students will learn about atomic structure, chemical bonding, reaction kinetics, and thermodynamics. The course also covers the properties of gases, liquids, and solids, as well as the behavior of solutions.",
    tags: [{ name: "Mandatory", color: "pink" }],
  },
  {
    courseCode: "CHE 181",
    longName: "Computer Literacy & Programming",
    description:
      "This course introduces students to the basics of computer literacy and programming, with a focus on applications in engineering. Students will learn how to use common software tools, write simple programs, and understand the basics of computer hardware. The course also covers data structures, algorithms, and object-oriented programming.",
    tags: [{ name: "Mandatory", color: "indigo" }],
  },
  {
    courseCode: "MATH 118",
    longName: "Linear Algebra for Engineering",
    description:
      "This course covers the fundamental concepts of linear algebra, with a focus on applications in engineering. Students will learn about vectors, matrices, determinants, eigenvalues and eigenvectors, and how to apply these concepts to solve problems in engineering. The course also covers the theory of linear equations and introduces students to abstract vector spaces.",
    tags: [{ name: "Mandatory", color: "gray" }],
  },

  {
    courseCode: "ME 101",
    longName: "Introduction to Mechanical Engineering",
    description:
      "This course provides an overview of the field of mechanical engineering, including the role of mechanical engineers, the various subfields within mechanical engineering, and the types of problems mechanical engineers solve. Students will also be introduced to the fundamental principles of mechanical engineering, including mechanics, thermodynamics, and materials science.",
    tags: [{ name: "Mandatory", color: "purple" }],
  },
  {
    courseCode: "ME 201",
    longName: "Mechanics of Materials",
    description:
      "This course covers the behavior of materials under different loading conditions. Topics include stress and strain, axial loading, torsion, bending, and more. The course also introduces students to the concepts of deformation, strain hardening, and failure theories.",
    tags: [{ name: "Mandatory", color: "pink" }],
  },
  {
    courseCode: "ME 202",
    longName: "Thermodynamics",
    description:
      "This course introduces the principles of thermodynamics, including the first and second laws, and their applications to engineering systems. Topics include properties of substances, heat and work, energy transfer, and energy conversion processes.",
    tags: [{ name: "Mandatory", color: "indigo" }],
  },
  {
    courseCode: "ME 203",
    longName: "Fluid Mechanics",
    description:
      "This course covers the fundamental principles of fluid mechanics, including fluid statics, fluid dynamics, and the basic equations of fluid flow. The course also introduces students to the concepts of laminar and turbulent flow, boundary layers, and flow around bodies.",
    tags: [{ name: "Mandatory", color: "gray" }],
  },
  {
    courseCode: "ME 204",
    longName: "Heat Transfer",
    description:
      "This course introduces the principles of heat transfer, including conduction, convection, and radiation. Students will learn how to analyze and solve problems involving steady and transient heat conduction, forced and natural convection, and thermal radiation.",
    tags: [{ name: "Mandatory", color: "blue" }],
  },
  {
    courseCode: "ME 205",
    longName: "Mechanical Design",
    description:
      "This course introduces the principles of mechanical design, including the design process, material selection, and manufacturing considerations. Students will learn how to design mechanical components and systems, and how to use computer-aided design (CAD) software.",
    tags: [{ name: "Mandatory", color: "green" }],
  },
];
