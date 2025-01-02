import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  jobit,
  travel, 
  tripguide,
  threejs,
  interneex,
 auriv_learning_cover,
 brl,
 modgenics_technology_solutions_logo,
 fitness_tracker,
 safarnama,
 pestControl,
 freelance,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Cloud Engineer",
    icon: mobile,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Full-stack Developer Intern",
    company_name: "Auriv Learning ",
    icon: auriv_learning_cover,
    iconBg: "#383E56",
    date: "Nov 2024 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "SDE Intern",
    company_name: "Modgenics Technology Solutions",
    icon: modgenics_technology_solutions_logo,
    iconBg: "#E6DEDD",
    date: "Jun 2024 - Oct 2024",
    points: [
      "Re-architected and redeveloped the company's website, improving performance by 35%, and streamlined deployment of client backend servers on AWS.",
      "Solely Designed and Developed and handled production of website for company's internal projects using MERN and AWS",
      "Worked closely integrating various features on client side for German based company DueDash",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Freelance",
    icon: freelance,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Created a customized pest control website for a Lucknow-based client, providing seamless online booking and detailed service information.",
      "Developed a feature-rich itinerary booking website for a Hyderabad-based client, integrating article publishing and blog functionality to enhance user engagement and SEO.",
      "Currently building a robust backend system for a Mumbai-based client, ensuring seamless data management, API integration, and scalability to support their business operations.",
    ],
  },
//   {
//     title: "Full stack Developer",
//     company_name: "Meta",
//     icon: meta,
//     iconBg: "#E6DEDD",
//     date: "Jan 2023 - Present",
//     points: [
//       "Developing and maintaining web applications using React.js and other related technologies.",
//       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//       "Implementing responsive design and ensuring cross-browser compatibility.",
//       "Participating in code reviews and providing constructive feedback to other developers.",
//     ],
//   },
];

const testimonials = [
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Sakshi Verma",
    designation: "Founder",
    company: "The Safarnama Tales",
    image: "https://i.ibb.co/xjMGCkm/Screenshot-2025-01-02-142602.png",
  },
  {
    testimonial:
      "After Jatin optimized our website, our traffic increased by 50%. We can't thank them enough!.",
    name: "Satish Mishra",
    designation: "COO",
    company: "Pest Control Initial",
    image: "https://i.ibb.co/JKqDjVd/Screenshot-2025-01-02-143152.png",
  },
  {
    testimonial:
      "Helped Scaling our existing website to handle 10x more traffic. Jatin is a true professional.",
    name: "Lisa Wang",
    designation: "CTO",
    company: "Noyo Rides",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "TheSafarnamaTales",
    description:
      "A MERN-based travel itinerary platform offering customizable plans, secure Razorpay payments, and seamless user experience, hosted on AWS for scalability.",
    tags: [
      {
        name: "Reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "Nodejs",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: safarnama,
    source_code_link: "https://thesafarnamatales.in/",
  },
  {
    name: "Edtech website",
    description:
      "Built a MERN-based website for an Ed-tech startup with secure authentication and course management. Enhanced the UI using TailwindCSS for improved user experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: interneex,
    source_code_link: "https://interneex.com/",
  },
  {
    name: "Trip Booking",
    description:
      "Web-based platform that allows users to search, book, and manage hotel, villa  from various providers, providing a convenient and efficient solution for stay needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "NodeJS",
        color: "white-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: travel,
    source_code_link: "https://dream-nest-backend-eta.vercel.app/",
  },
  {
    name: "Fitness Tracker",
    description:
      "Executed to build a fitness-tracking application enabling users to monitor workout progress and manage fitness goals. Webaite using MERN",
    tags: [
      {
        name: "Reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "Nodejs",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: fitness_tracker,
    source_code_link: "https://fitness-tracker-client-three.vercel.app/",
  },
  {
    name: "Pest Control Sevice",
    description:
      "Developed a MERN-based pest control website for a client, featuring online booking, quote requests, and image upload functionality using Multer.",
    tags: [
      {
        name: "Ejs",
        color: "blue-text-gradient",
      },
      {
        name: "Nodejs",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: pestControl,
    source_code_link: "https://pest-control-initial.onrender.com/",
  },

];

export { services, technologies, experiences, testimonials, projects };
