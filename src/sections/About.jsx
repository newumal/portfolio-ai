import { motion } from 'framer-motion';
import { FaAws, FaReact, FaNodeJs, FaDatabase, FaCode, FaTools, FaCloud, FaMobile, FaBrain, FaRobot } from 'react-icons/fa';

const About = () => {
  const skills = [
    {
      category: "Frontend",
      items: ["React.js", "Redux", "JavaScript", "HTML5", "CSS3", "Jest Testing"],
      icon: <FaReact className="w-6 h-6 text-blue-500" />
    },
    {
      category: "Backend",
      items: ["Node.js", "Express.js", "JWT Auth", "REST APIs", "MongoDB"],
      icon: <FaNodeJs className="w-6 h-6 text-green-500" />
    },
    {
      category: "Database",
      items: ["SQL", "MongoDB", "DynamoDB", "Redis", "PostgreSQL", "MySQL"],
      icon: <FaDatabase className="w-6 h-6 text-yellow-500" />
    },
    {
      category: "Cloud & DevOps",
      items: ["AWS (EC2, Lambda)", "CI/CD", "Docker", "Kubernetes", "GitHub Actions", "Jenkins", "Terraform"],
      icon: <FaCloud className="w-6 h-6 text-blue-400" />
    },
    {
      category: "AI & Machine Learning",
      items: [
        "Large Language Models",
        "ChatGPT Integration",
        "Prompt Engineering",
        "AI Application Design",
        "Neural Networks",
        "Machine Learning"
      ],
      icon: <FaBrain className="w-6 h-6 text-red-500" />
    }
  ];

  const coreCompetencies = [
    {
      icon: <FaCode className="w-7 h-7" />,
      title: "Full Stack Development",
      description: "End-to-end application development"
    },
    {
      icon: <FaCloud className="w-7 h-7" />,
      title: "Cloud Solutions",
      description: "AWS infrastructure & serverless"
    },
    {
      icon: <FaTools className="w-7 h-7" />,
      title: "System Integration",
      description: "API development & integration"
    },
    {
      icon: <FaMobile className="w-7 h-7" />,
      title: "Responsive Design",
      description: "Cross-platform compatibility"
    },
    {
      icon: <FaRobot className="w-7 h-7" />,
      title: "AI Integration",
      description: "Implementing intelligent AI solutions"
    }
  ];

  const keyProjects = [
    {
      title: "Node.js Boilerplate",
      description: "Template including authentication and JWT implementation",
      repo: "ms-template-v1"
    },
    {
      title: "MERN Redux CMS",
      description: "Content Management System using MERN stack with Redux and JWT",
      repo: "mern_redux_cms"
    },
    {
      title: "JavaScript Design Patterns",
      description: "Implementation of various design patterns in JavaScript",
      repo: "javaScript-design-pattern"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-gradient-to-br from-purple-100/30 to-transparent rounded-full blur-3xl dark:from-purple-900/20" />
        <div className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-gradient-to-tr from-blue-100/30 to-transparent rounded-full blur-3xl dark:from-blue-900/20" />
      </div>

      <div className="container mx-auto max-w-6xl px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Passionate software engineer crafting innovative solutions
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Senior Software Engineer
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg">
                With a strong foundation in full-stack development, I'm enthusiastically exploring 
                the integration of AI technologies. Currently learning and applying AI tools and 
                services in web applications, while maintaining expertise in custom integrations 
                and cloud solutions. Excited about the potential of AI to enhance application 
                functionality and user experience.
              </p>
              
              {/* Core Competencies Grid */}
              <div className="grid grid-cols-2 gap-4">
                {coreCompetencies.map((comp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="p-4 rounded-xl bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition-all"
                  >
                    <div className="text-primary mb-2">{comp.icon}</div>
                    <h4 className="font-bold text-gray-900 dark:text-white">{comp.title}</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">{comp.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all"
            >
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Education
              </h4>
              <div className="space-y-2">
                <h5 className="text-xl font-bold text-gray-900 dark:text-white">Bachelor of Science</h5>
                <p className="text-lg text-primary">University of Colombo, Sri Lanka</p>
                <p className="text-gray-600 dark:text-gray-400">Electronics & IT</p>
                <p className="text-gray-500">2014 - 2017</p>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Technical Skills */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all"
          >
            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-8">
              Technical Expertise
            </h4>
            <div className="space-y-8">
              {skills.map((skillGroup, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="space-y-4"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      {skillGroup.icon}
                    </div>
                    <h5 className="text-lg font-bold text-gray-800 dark:text-gray-200">
                      {skillGroup.category}
                    </h5>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {skillGroup.items.map((skill, i) => (
                      <motion.span
                        key={i}
                        whileHover={{ scale: 1.05 }}
                        className="px-4 py-2 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-600 transition-all"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
