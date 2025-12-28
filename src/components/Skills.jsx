import { motion } from "framer-motion";

const Skills = () => {
  const skillGroups = [
    {
      title: "Programming Languages",
      skills: ["C", "C++", "Python", "Go"],
    },
    {
      title: "Frontend Development",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React.js",
        "Next.js",
        "Responsive UI",
      ],
    },
    {
      title: "Backend Development",
      skills: [
        "Node.js",
        "Express.js",
        "RESTful APIs",
        "JWT",
        "Authentication & Authorization",
      ],
    },
    {
      title: "Databases",
      skills: ["MySQL", "MongoDB", "Firebase"],
    },
    {
      title: "Dev Tools & Platforms",
      skills: [
        "Git",
        "GitHub",
        "VS Code",
        "Postman",
        "Docker (Basics)",
        "CI/CD",
      ],
    },
    {
      title: "CS Fundamentals",
      skills: ["DSA", "OOPS", "DBMS", "Computer Networks"],
    },
    {
      title: "Methodologies",
      skills: ["SDLC", "Agile Basics", "Team Collaboration"],
    },
  ];

  return (
    <section id="skills" className="py-28 px-6 bg-slate-900/40">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Skills & Expertise
          </h2>
          <p className="text-slate-400 max-w-3xl leading-relaxed">
            A structured overview of my technical skill set, covering programming
            languages, web development, tools, and core computer science
            fundamentals used in real-world software development.
          </p>
        </motion.div>

        {/* Skill Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillGroups.map((group, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              viewport={{ once: true }}
              className="bg-slate-950 border border-slate-800 rounded-2xl p-7
                         hover:border-sky-400 transition-shadow hover:shadow-lg"
            >
              <h3 className="text-lg font-semibold mb-5 text-sky-400">
                {group.title}
              </h3>

              <ul className="space-y-3 text-slate-300 text-sm">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-start gap-2 leading-relaxed"
                  >
                    <span className="text-sky-400 mt-1">▹</span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
