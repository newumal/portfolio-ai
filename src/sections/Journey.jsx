import { motion } from 'framer-motion';
import { FaBuilding, FaCode, FaBriefcase } from 'react-icons/fa';

const Journey = () => {
  const experiences = [
    {
      company: "Velaris",
      logo: "/velaris-logo.png", // You'll need to add this logo to your public folder
      position: "Senior Software Engineer",
      period: "Jun 2023 - Present",
      location: "Hybrid",
      type: "Full-time",
      skills: ["React.js", "JavaScript", "Node.js", "AWS", "Cloud Architecture"],
      description: "Leading Google Calendar Integration and sync implementation"
    },
    {
      company: "Velaris",
      position: "Full Stack Engineer",
      period: "Jul 2022 - Jul 2023",
      location: "Sri Lanka",
      type: "Full-time",
      skills: ["React Hooks", "Node.js", "Full Stack Development"],
      description: "Developed and maintained full-stack applications"
    },
    {
      company: "Sezenta (Pvt) Ltd",
      position: "Full Stack Engineer",
      period: "Mar 2021 - Jul 2022",
      location: "Colombo, Western, Sri Lanka",
      type: "Full-time",
      skills: ["React.js", "JavaScript", "Full Stack Development"],
      description: "Worked on various full-stack projects"
    },
    {
      company: "STEM Labs - Institute of STEM Education (Pvt) Ltd.",
      position: "Co-Founder | Product Development Engineer",
      period: "Feb 2019 - Feb 2021",
      location: "Colombo, Western, Sri Lanka",
      type: "Self-employed",
      skills: ["Product Development", "STEM Education", "Technical Leadership"],
      description: "Led product development initiatives in STEM education"
    },
    {
      company: "Effective Solutions Pvt Ltd",
      position: "Full Stack Developer (PHP)",
      period: "Feb 2017 - Oct 2019",
      location: "Moratuwa",
      type: "Full-time",
      skills: ["PHP", "SQL", "Web Development"],
      description: "Developed web applications using PHP and SQL"
    }
  ];

  return (
    <section id="journey" className="py-16 bg-gray-50">
      <div className="container mx-auto max-w-4xl px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Professional Journey</h2>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-primary/20"></div>
          
          {/* Experience items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row gap-4 md:gap-8 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full"></div>
                
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                  <div className="bg-white p-6 rounded-xl shadow-lg">
                    <div className="flex items-center gap-3 mb-2">
                      <FaBuilding className="text-primary" />
                      <h3 className="text-xl font-bold">{exp.company}</h3>
                    </div>
                    <h4 className="text-lg font-semibold text-gray-800">{exp.position}</h4>
                    <p className="text-gray-600 mt-1">{exp.period}</p>
                    <p className="text-gray-500 text-sm">{exp.location} • {exp.type}</p>
                    
                    <div className="mt-4">
                      <p className="text-gray-700">{exp.description}</p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {exp.skills.map((skill, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 bg-purple-50 text-primary rounded-full text-sm"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Spacer for timeline alignment */}
                <div className="flex-1 hidden md:block"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
