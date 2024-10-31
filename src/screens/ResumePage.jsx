import ExperienceSection from "./ExperienceSection";
import ProfileHeader from "./ProfileHeader";

const experiences = [
  {
    title: "Senior Frontend Engineer",
    company: "HPE",
    dates: "August 1, 2022 - Present",
    responsibilities: [
      "Coordinated with 2 product managers and 11 developers to meet design objectives, contributing to the organization's design system documentation.",
      "Seamlessly integrated with various cloud services, enhancing application operability across public and private clouds, boosting enterprise agility and scalability by 30%.",
      "Used Apollo Client for GraphQL integration, resulting in a 40% reduction in API response time.",
      "Integrated Figma designs directly into React components for pixel-perfect UI/UX implementation across web applications.",
    ],
  },
  {
    title: "Senior Frontend Engineer",
    company: "Caseking",
    dates: "July 3, 2020 - July 30, 2021",
    responsibilities: [
      "Created new documentation for ChakraUI, reducing the need for a 3-week onboarding course.",
      "Improved payment module stability in collaboration with the team, increasing overall application performance by 15%.",
      "Led frontend transition from JavaScript to React and GraphQL, achieving a 10% increase in application speed.",
      "Collaborated with designers using Figma to create reusable design systems, later converted into modular React components to improve code maintainability.",
    ],
  },
  {
    title: "Software Engineer",
    company: "Planet",
    dates: "May 3, 2018 - June 30, 2020",
    responsibilities: [
      "Assisted in creating user interfaces using HTML5, JavaScript, React, GraphQL, and CSS, improving application performance by 10%.",
      "Reduced frontend build code size by 35% through script optimizations and module expansions.",
      "Redesigned a four-year-old SaaS application using Redux, GraphQL, and React 15, releasing the beta MVP in eight months.",
      "Mentored four junior front-end engineers, enhancing their JavaScript, React, and TypeScript skills.",
      "Utilized Figma's interactive prototypes to guide the development of dynamic React interfaces, enhancing user experience.",
    ],
  },
  {
    title: "Software Engineer",
    company: "Kaz Software",
    dates: "May 3, 2014 - April 3, 2018",
    responsibilities: [
      "Pioneered the use of the React.JS framework as one of the first wave of developers at the company.",
      "Revamped 'Sisigma,' a social networking platform, enhancing business collaboration and interaction, contributing to a 10% growth in the company.",
      "Led development of a video conferencing app for the health industry, benefiting thousands of patients, and integrated backend components with Java, JavaScript, RTC, Play Framework, and React Native.",
    ],
  },
  {
    title: "Software Engineer",
    company: "Accenture",
    dates: "May 2, 2009 - April 30, 2014",
    responsibilities: [
      "Led the development of the Summit Power Energy Dashboard using JavaScript, D3, Java, MySQL, and Git, reducing operational costs by 15%.",
      "Designed and implemented an Employee Management System (EMS) for Grameenphone, serving around 5000 employees and contributing to a 25% company growth.",
      "Earned relevant certifications to enhance interpersonal and communication skills, improving employment performance by 10%.",
    ],
  },
];

const ResumePage = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white text-gray-800">
      <ProfileHeader
        name="Md Aminul Hoque"
        title="Senior Software Engineer"
        email="gem007bd@gmail.com"
        phone="+14079465215"
        location="United States"
        linkedin="linkedin.com/in/aminul007bd"
        github="github.com/aminul007bd"
      />

      {/* Summary Section */}
      <section className="mb-8">
        <h3 className="text-2xl font-bold border-b-2 border-gray-200 mb-4 pb-2">
          Professional Summary
        </h3>
        <p className="text-gray-700">
          Experienced software engineer with 8+ years of expertise in full-stack
          development, specializing in React, Node.js, and cloud technologies.
          Proven track record of delivering scalable solutions and leading
          high-performing teams.
        </p>
      </section>

      {/* Experience Section */}
      <ExperienceSection experiences={experiences} />

      {/* Skills Section */}
      <section className="mb-8">
        <h3 className="text-2xl font-bold border-b-2 border-gray-200 mb-4 pb-2">
          Skills
        </h3>
        <div className="flex flex-wrap gap-2">
          {[
            "React",
            "Node.js",
            "TypeScript",
            "Python",
            "AWS",
            "Docker",
            "MongoDB",
            "GraphQL",
            "CI/CD",
            "Agile",
          ].map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section>
        <h3 className="text-2xl font-bold border-b-2 border-gray-200 mb-4 pb-2">
          Education
        </h3>
        <div className="flex justify-between items-start">
          <div>
            <h4 className="text-lg font-semibold text-gray-900">
              Bachelor of Science in Computer Science
            </h4>
            <h5 className="text-blue-600">University of Technology</h5>
          </div>
          <span className="text-gray-600">2014 - 2018</span>
        </div>
      </section>
    </div>
  );
};

export default ResumePage;
