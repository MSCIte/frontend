import { CourseWithTagsSchema } from "./api/endpoints";
import { Tag } from "./components/courseLarge/CourseLarge";

export interface Course {
  courseCode: string;
  courseName: string;
  description?: string;
  tags: Tag[];
}

export interface CourseData {
  [key: string]: CourseWithTagsSchema[];
}

//   /bg-(red|green|glue|orange|yellow|blue|purple|pink|indigo|gray)-[0-9]{1,2}00/,
export const courseData: CourseData = {
  "1A": [
    {
      courseCode: "CHE 100",
      courseName: "Chemical Engineering Concepts I",
      description:
        "This course introduces students to the fundamental concepts of chemical engineering. Topics include: material and energy balances, fluid flow, heat transfer, and mass transfer. The course also introduces students to the chemical engineering profession and the role of chemical engineers in society.",
      tags: [
        {
          code: "TE",
          longName: "Technical Elective",
          shortName: "TE",
          color: "red",
        },
        {
          code: "mand",
          longName: "Mandatory",
          shortName: "Mand",
          color: "yellow",
        },
        {
          code: "Roged",
          longName: "Rogooogog",
          shortName: "rogo",
          color: "purple",
        },
      ],
    },
    {
      courseCode: "CHE 102",
      courseName: "Chemistry for Engineers",
      tags: [
        {
          code: "mand",
          longName: "Mandatory",
          shortName: "Mand",
          color: "green",
        },
      ],
    },
    {
      courseCode: "CHE 180",
      courseName: "Computer Literacy & Programming",
      tags: [
        {
          code: "mand",
          longName: "Mandatory",
          shortName: "Mand",
          color: "blue",
        },
      ],
    },
    {
      courseCode: "MATH 115",
      courseName: "Linear Algebra for Engineering",
      tags: [
        {
          code: "mand",
          longName: "Mandatory",
          shortName: "Mand",
          color: "orange",
        },
      ],
    },
    {
      courseCode: "CHE 120",
      courseName: "Chemical Engineering Design Stu...",
      tags: [
        {
          code: "mand",
          longName: "Mandatory",
          shortName: "Mand",
          color: "yellow",
        },
      ],
    },
    {
      courseCode: "MATH 116",
      courseName: "Calculus I for Engineering",
      tags: [
        {
          code: "mand",
          longName: "Mandatory",
          shortName: "Mand",
          color: "blue",
        },
      ],
    },
  ],
  "1B": [
    {
      courseCode: "CHE 101",
      courseName: "Chemical Engineering Concepts I",
      tags: [
        {
          code: "mand",
          longName: "Mandatory",
          shortName: "Mand",
          color: "purple",
        },
      ],
    },
    {
      courseCode: "CHE 161",
      courseName: "Chemistry for Engineers",
      tags: [
        {
          code: "mand",
          longName: "Mandatory",
          shortName: "Mand",
          color: "pink",
        },
      ],
    },
    {
      courseCode: "CHE 181",
      courseName: "Computer Literacy & Programming",
      tags: [
        {
          code: "mand",
          longName: "Mandatory",
          shortName: "Mand",
          color: "indigo",
        },
      ],
    },
    {
      courseCode: "MATH 118",
      courseName: "Linear Algebra for Engineering",
      tags: [
        {
          code: "mand",
          longName: "Mandatory",
          shortName: "Mand",
          color: "gray",
        },
      ],
    },
    {
      courseCode: "PHY 115",
      courseName: "Chemical Engineering Design Stu...",
      tags: [
        {
          code: "mand",
          longName: "Mandatory",
          shortName: "Mand",
          color: "red",
        },
      ],
    },
    {
      courseCode: "SPCOM",
      courseName: "Calculus I for Engineering",
      tags: [
        {
          code: "mand",
          longName: "Mandatory",
          shortName: "Mand",
          color: "green",
        },
      ],
    },
  ],
  "2A": [
    {
      courseCode: "CHE 200",
      courseName: "Chemical Engineering Concepts I",
      tags: [
        {
          code: "mand",
          longName: "Mandatory",
          shortName: "Mand",
          color: "blue",
        },
      ],
    },
    {
      courseCode: "CHE 220",
      courseName: "Chemistry for Engineers",
      tags: [
        {
          code: "mand",
          longName: "Mandatory",
          shortName: "Mand",
          color: "blue",
        },
      ],
    },
    {
      courseCode: "CHE 230",
      courseName: "Computer Literacy & Programming",
      tags: [
        {
          code: "mand",
          longName: "Mandatory",
          shortName: "Mand",
          color: "blue",
        },
      ],
    },
  ],
  "2B": [
    {
      courseCode: "CHE 211",
      courseName: "Chemical Engineering Concepts I",
      tags: [
        {
          code: "mand",
          longName: "Mandatory",
          shortName: "Mand",
          color: "blue",
        },
      ],
    },
    {
      courseCode: "CHE 225",
      courseName: "Chemistry for Engineers",
      tags: [
        {
          code: "mand",
          longName: "Mandatory",
          shortName: "Mand",
          color: "blue",
        },
      ],
    },
    {
      courseCode: "CHE 231",
      courseName: "Computer Literacy & Programming",
      tags: [
        {
          code: "mand",
          longName: "Mandatory",
          shortName: "Mand",
          color: "blue",
        },
      ],
    },
    {
      courseCode: "CHE 291",
      courseName: "Linear Algebra for Engineering",
      tags: [
        {
          code: "mand",
          longName: "Mandatory",
          shortName: "Mand",
          color: "blue",
        },
      ],
    },
    {
      courseCode: "MATH 218",
      courseName: "Chemical Engineering Design Stu...",
      tags: [
        {
          code: "mand",
          longName: "Mandatory",
          shortName: "Mand",
          color: "blue",
        },
      ],
    },
  ],
  "3A": [
    {
      courseCode: "CHE 200",
      courseName: "Chemical Engineering Concepts I",
      tags: [
        {
          code: "mand",
          longName: "Mandatory",
          shortName: "Mand",
          color: "blue",
        },
      ],
    },
    {
      courseCode: "CHE 220",
      courseName: "Chemistry for Engineers",
      tags: [
        {
          code: "mand",
          longName: "Mandatory",
          shortName: "Mand",
          color: "blue",
        },
      ],
    },
    {
      courseCode: "CHE 230",
      courseName: "Computer Literacy & Programming",
      tags: [
        {
          code: "mand",
          longName: "Mandatory",
          shortName: "Mand",
          color: "blue",
        },
      ],
    },
    {
      courseCode: "CHE 290",
      courseName: "Linear Algebra for Engineering",
      tags: [
        {
          code: "mand",
          longName: "Mandatory",
          shortName: "Mand",
          color: "blue",
        },
      ],
    },
    {
      courseCode: "CHE 262",
      courseName: "Chemical Engineering Design Stu...",
      tags: [
        {
          code: "mand",
          longName: "Mandatory",
          shortName: "Mand",
          color: "blue",
        },
      ],
    },
    {
      courseCode: "MSCI 211",
      courseName: "Organizational Behavior",
      tags: [
        {
          code: "mand",
          longName: "Mandatory",
          shortName: "Mand",
          color: "blue",
        },
      ],
    },
  ],
  "3B": [
    {
      courseCode: "CHE 200",
      courseName: "Chemical Engineering Concepts I",
      tags: [
        {
          code: "mand",
          longName: "Mandatory",
          shortName: "Mand",
          color: "blue",
        },
      ],
    },
    {
      courseCode: "CHE 220",
      courseName: "Chemistry for Engineers",
      tags: [
        {
          code: "mand",
          longName: "Mandatory",
          shortName: "Mand",
          color: "blue",
        },
      ],
    },
    {
      courseCode: "CHE 230",
      courseName: "Computer Literacy & Programming",
      tags: [
        {
          code: "mand",
          longName: "Mandatory",
          shortName: "Mand",
          color: "blue",
        },
      ],
    },
    {
      courseCode: "CHE 290",
      courseName: "Linear Algebra for Engineering",
      tags: [
        {
          code: "mand",
          longName: "Mandatory",
          shortName: "Mand",
          color: "blue",
        },
      ],
    },
    {
      courseCode: "CHE 262",
      courseName: "Chemical Engineering Design Stu...",
      tags: [
        {
          code: "mand",
          longName: "Mandatory",
          shortName: "Mand",
          color: "blue",
        },
      ],
    },
    {
      courseCode: "CHE 521",
      courseName: "Process Optimization",
      tags: [
        {
          code: "mand",
          longName: "Mandatory",
          shortName: "Mand",
          color: "blue",
        },
      ],
    },
  ],
  "4A": [
    {
      courseCode: "CHE 200",
      courseName: "Chemical Engineering Concepts I",
      tags: [
        {
          code: "mand",
          longName: "Mandatory",
          shortName: "Mand",
          color: "blue",
        },
      ],
    },
    {
      courseCode: "CHE 220",
      courseName: "Chemistry for Engineers",
      tags: [
        {
          code: "mand",
          longName: "Mandatory",
          shortName: "Mand",
          color: "blue",
        },
      ],
    },
    {
      courseCode: "CHE 230",
      courseName: "Computer Literacy & Programming",
      tags: [
        {
          code: "mand",
          longName: "Mandatory",
          shortName: "Mand",
          color: "blue",
        },
      ],
    },
    {
      courseCode: "CHE 290",
      courseName: "Linear Algebra for Engineering",
      tags: [
        {
          code: "mand",
          longName: "Mandatory",
          shortName: "Mand",
          color: "blue",
        },
      ],
    },
    {
      courseCode: "MSCI 263",
      courseName: "Managerial Economics",
      tags: [
        {
          code: "mand",
          longName: "Mandatory",
          shortName: "Mand",
          color: "blue",
        },
      ],
    },
    {
      courseCode: "MSCI 311",
      courseName: "Organizational Design & Technol...",
      tags: [
        {
          code: "mand",
          longName: "Mandatory",
          shortName: "Mand",
          color: "blue",
        },
      ],
    },
  ],
  "4B": [
    {
      courseCode: "CHE 200",
      courseName: "Chemical Engineering Concepts I",
      tags: [
        {
          code: "mand",
          longName: "Mandatory",
          shortName: "Mand",
          color: "blue",
        },
      ],
    },
    {
      courseCode: "CHE 220",
      courseName: "Chemistry for Engineers",
      tags: [
        {
          code: "mand",
          longName: "Mandatory",
          shortName: "Mand",
          color: "blue",
        },
      ],
    },
    {
      courseCode: "CHE 230",
      courseName: "Computer Literacy & Programming",
      tags: [
        {
          code: "mand",
          longName: "Mandatory",
          shortName: "Mand",
          color: "blue",
        },
      ],
    },
    {
      courseCode: "CHE 290",
      courseName: "Linear Algebra for Engineering",
      tags: [
        {
          code: "mand",
          longName: "Mandatory",
          shortName: "Mand",
          color: "blue",
        },
      ],
    },
    {
      courseCode: "MSCI 261",
      courseName: "Managerial Economics",
      tags: [
        {
          code: "mand",
          longName: "Mandatory",
          shortName: "Mand",
          color: "blue",
        },
      ],
    },
    {
      courseCode: "MSCI 332",
      courseName: "Deterministic Optimization",
      tags: [
        {
          code: "mand",
          longName: "Mandatory",
          shortName: "Mand",
          color: "blue",
        },
      ],
    },
  ],
};

export const courseList: CourseWithTagsSchema[] = [
  {
    courseCode: "CHE 100",
    courseName: "Chemical Engineering Concepts I",
    description:
      "This course introduces students to the fundamental concepts of chemical engineering. Topics include: material and energy balances, fluid flow, heat transfer, and mass transfer. The course also introduces students to the chemical engineering profession and the role of chemical engineers in society. Students will learn how to apply these concepts to solve real-world problems in chemical engineering.",
    tags: [
      {
        code: "TE",
        longName: "Technical Elective",
        shortName: "TE",
        color: "red",
      },
      {
        code: "mand",
        longName: "Mandatory",
        shortName: "Mand",
        color: "yellow",
      },
      {
        code: "Roged",
        longName: "ROOOGED",
        shortName: "roged.?",
        color: "purple",
      },
    ],
  },
  {
    courseCode: "CHE 102",
    courseName: "Chemistry for Engineers",
    description:
      "This course provides an introduction to the principles of chemistry, with a focus on applications relevant to engineering. Students will learn about atomic structure, chemical bonding, reaction kinetics, and thermodynamics. The course also covers the properties of gases, liquids, and solids, as well as the behavior of solutions.",
    tags: [
      {
        code: "mand",
        longName: "Mandatory",
        shortName: "Mand",
        color: "green",
      },
    ],
  },
  {
    courseCode: "CHE 180",
    courseName: "Computer Literacy & Programming",
    description:
      "This course introduces students to the basics of computer literacy and programming, with a focus on applications in engineering. Students will learn how to use common software tools, write simple programs, and understand the basics of computer hardware. The course also covers data structures, algorithms, and object-oriented programming.",
    tags: [
      { code: "mand", longName: "Mandatory", shortName: "Mand", color: "blue" },
    ],
  },
  {
    courseCode: "MATH 115",
    courseName: "Linear Algebra for Engineering",
    description:
      "This course covers the fundamental concepts of linear algebra, with a focus on applications in engineering. Students will learn about vectors, matrices, determinants, eigenvalues and eigenvectors, and how to apply these concepts to solve problems in engineering. The course also covers the theory of linear equations and introduces students to abstract vector spaces.",
    tags: [
      {
        code: "mand",
        longName: "Mandatory",
        shortName: "Mand",
        color: "orange",
      },
    ],
  },
  {
    courseCode: "CHE 120",
    courseName: "Chemical Engineering Design Stu...",
    description:
      "This course introduces students to the principles of chemical engineering design, with a focus on practical applications. Students will learn how to design chemical processes and equipment, and how to use simulation software to analyze and optimize these designs. The course also covers safety and environmental considerations in chemical engineering design.",
    tags: [
      {
        code: "mand",
        longName: "Mandatory",
        shortName: "Mand",
        color: "yellow",
      },
    ],
  },
  {
    courseCode: "MATH 116",
    courseName: "Calculus I for Engineering",
    description:
      "This course covers the fundamental concepts of calculus, with a focus on applications in engineering. Students will learn about limits, derivatives, integrals, and series, and how to apply these concepts to solve problems in engineering. The course also introduces students to the concepts of multivariable calculus.",
    tags: [
      { code: "mand", longName: "Mandatory", shortName: "Mand", color: "blue" },
    ],
  },
  {
    courseCode: "CHE 101",
    courseName: "Chemical Engineering Concepts I",
    description:
      "This course introduces students to the fundamental concepts of chemical engineering. Topics include: material and energy balances, fluid flow, heat transfer, and mass transfer. The course also introduces students to the chemical engineering profession and the role of chemical engineers in society. Students will learn how to apply these concepts to solve real-world problems in chemical engineering.",
    tags: [
      {
        code: "mand",
        longName: "Mandatory",
        shortName: "Mand",
        color: "purple",
      },
    ],
  },
  {
    courseCode: "CHE 161",
    courseName: "Chemistry for Engineers",
    description:
      "This course provides an introduction to the principles of chemistry, with a focus on applications relevant to engineering. Students will learn about atomic structure, chemical bonding, reaction kinetics, and thermodynamics. The course also covers the properties of gases, liquids, and solids, as well as the behavior of solutions.",
    tags: [
      { code: "mand", longName: "Mandatory", shortName: "Mand", color: "pink" },
    ],
  },
  {
    courseCode: "CHE 181",
    courseName: "Computer Literacy & Programming",
    description:
      "This course introduces students to the basics of computer literacy and programming, with a focus on applications in engineering. Students will learn how to use common software tools, write simple programs, and understand the basics of computer hardware. The course also covers data structures, algorithms, and object-oriented programming.",
    tags: [
      {
        code: "mand",
        longName: "Mandatory",
        shortName: "Mand",
        color: "indigo",
      },
    ],
  },
  {
    courseCode: "MATH 118",
    courseName: "Linear Algebra for Engineering",
    description:
      "This course covers the fundamental concepts of linear algebra, with a focus on applications in engineering. Students will learn about vectors, matrices, determinants, eigenvalues and eigenvectors, and how to apply these concepts to solve problems in engineering. The course also covers the theory of linear equations and introduces students to abstract vector spaces.",
    tags: [
      { code: "mand", longName: "Mandatory", shortName: "Mand", color: "gray" },
    ],
  },

  {
    courseCode: "ME 101",
    courseName: "Introduction to Mechanical Engineering",
    description:
      "This course provides an overview of the field of mechanical engineering, including the role of mechanical engineers, the various subfields within mechanical engineering, and the types of problems mechanical engineers solve. Students will also be introduced to the fundamental principles of mechanical engineering, including mechanics, thermodynamics, and materials science.",
    tags: [
      {
        code: "mand",
        longName: "Mandatory",
        shortName: "Mand",
        color: "purple",
      },
    ],
  },
  {
    courseCode: "ME 201",
    courseName: "Mechanics of Materials",
    description:
      "This course covers the behavior of materials under different loading conditions. Topics include stress and strain, axial loading, torsion, bending, and more. The course also introduces students to the concepts of deformation, strain hardening, and failure theories.",
    tags: [
      { code: "mand", longName: "Mandatory", shortName: "Mand", color: "pink" },
    ],
  },
  {
    courseCode: "ME 202",
    courseName: "Thermodynamics",
    description:
      "This course introduces the principles of thermodynamics, including the first and second laws, and their applications to engineering systems. Topics include properties of substances, heat and work, energy transfer, and energy conversion processes.",
    tags: [
      {
        code: "mand",
        longName: "Mandatory",
        shortName: "Mand",
        color: "indigo",
      },
    ],
  },
  {
    courseCode: "ME 203",
    courseName: "Fluid Mechanics",
    description:
      "This course covers the fundamental principles of fluid mechanics, including fluid statics, fluid dynamics, and the basic equations of fluid flow. The course also introduces students to the concepts of laminar and turbulent flow, boundary layers, and flow around bodies.",
    tags: [
      { code: "mand", longName: "Mandatory", shortName: "Mand", color: "gray" },
    ],
  },
  {
    courseCode: "ME 204",
    courseName: "Heat Transfer",
    description:
      "This course introduces the principles of heat transfer, including conduction, convection, and radiation. Students will learn how to analyze and solve problems involving steady and transient heat conduction, forced and natural convection, and thermal radiation.",
    tags: [
      { code: "mand", longName: "Mandatory", shortName: "Mand", color: "blue" },
    ],
  },
  {
    courseCode: "ME 205",
    courseName: "Mechanical Design",
    description:
      "This course introduces the principles of mechanical design, including the design process, material selection, and manufacturing considerations. Students will learn how to design mechanical components and systems, and how to use computer-aided design (CAD) software.",
    tags: [
      {
        code: "mand",
        longName: "Mandatory",
        shortName: "Mand",
        color: "green",
      },
    ],
  },
];
