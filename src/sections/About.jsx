import { motion } from 'framer-motion';
import { FaAws, FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';

const About = () => {
  const skills = [
    {
      category: "Frontend",
      items: ["React.js", "Redux", "HTML5", "CSS3", "JavaScript"]
    },
    {
      category: "Backend",
      items: ["Node.js", "PHP (Symfony)", "REST APIs"]
    },
    {
      category: "Database",
      items: ["SQL", "MongoDB", "DynamoDB"]
    },
    {
      category: "Cloud & DevOps",
      items: ["AWS (EC2, Lambda)", "CI/CD", "Cloud Formation"]
    }
  ];

  return (
    <section id="about" className="bg-white py-16">
      <div className="container mx-auto max-w-4xl px-4">
        <h2 className="text-3xl font-bold text-center mb-8">About Me</h2>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Professional Summary */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900">
                Senior Software Engineer
              </h3>
              <p className="text-gray-600">
                With over 6 years of experience in software development, I specialize in building 
                full-stack applications with a focus on custom integrations and cloud solutions. 
                Currently working as a Senior Software Engineer at Velaris, where I lead the 
                Google Calendar Integration project.
              </p>
              <p className="text-gray-600">
                My expertise spans across modern web technologies, cloud architecture, and 
                system integrations. I have a proven track record of delivering complex 
                projects in various domains including SaaS, E-commerce, and IoT.
              </p>
            </div>

            {/* Key Skills */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-gray-900">Core Competencies</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <FaReact className="text-primary" />
                  <span>Frontend Development</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FaNodeJs className="text-primary" />
                  <span>Backend Development</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FaAws className="text-primary" />
                  <span>Cloud Architecture</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FaDatabase className="text-primary" />
                  <span>Database Design</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Skills & Education */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Technical Skills */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-gray-900">Technical Expertise</h4>
              <div className="space-y-4">
                {skills.map((skillGroup, index) => (
                  <div key={index} className="space-y-2">
                    <h5 className="font-medium text-gray-800">{skillGroup.category}</h5>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill, i) => (
                        <span key={i} className="px-3 py-1 bg-purple-50 text-primary rounded-full text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-gray-900">Education</h4>
              <div className="card">
                <h5 className="font-medium text-gray-900">Bachelor of Science</h5>
                <p className="text-gray-600">Electronics & IT</p>
                <p className="text-gray-600">University of Colombo, Sri Lanka</p>
                <p className="text-sm text-gray-500">2014 - 2017</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
