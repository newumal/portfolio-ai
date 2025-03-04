import { motion } from 'framer-motion';
import {
  FaCode,
  FaDatabase,
  FaTools,
  FaGlobe,
  FaServer,
  FaTasks
} from 'react-icons/fa';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages & Frameworks",
      icon: <FaCode className="text-2xl" />,
      skills: ["Node.js", "React.js", "JavaScript", "Express", "Redux", "PHP"]
    },
    {
      title: "Databases & Technologies",
      icon: <FaDatabase className="text-2xl" />,
      skills: ["SQL", "NoSQL", "MongoDB", "MySQL", "PostgreSQL", "DynamoDB", "TypeORM"]
    },
    {
      title: "Tool & Technologies",
      icon: <FaTools className="text-2xl" />,
      skills: ["Git", "AWS", "CI/CD", "Jest"]
    },
    {
      title: "Web Technologies",
      icon: <FaGlobe className="text-2xl" />,
      skills: ["HTML", "CSS"]
    },
    {
      title: "API Development & Integration",
      icon: <FaServer className="text-2xl" />,
      skills: ["REST API", "Third-party Integrations"]
    },
    {
      title: "Development Practices",
      icon: <FaTasks className="text-2xl" />,
      skills: ["Agile", "JIRA", "Confluence"]
    }
  ];

  return (
    <section id="skills" className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto max-w-4xl px-4">
        <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">Technical Expertise</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center gap-3 mb-4 text-primary">
                {category.icon}
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-purple-50 dark:bg-purple-900/30 text-primary rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Achievements Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-16"
        >
          <h2 className="text-3xl font-bold text-center mb-8 dark:text-white">Achievements</h2>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Kotyak Watina Adahasak Season 2 (2018) - Final 24
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Participated in an innovative idea presenting program organized by Sirasa TV, 
              reaching the final 24 contestants.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
