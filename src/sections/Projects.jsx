import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaQuoteLeft } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: "Velaris - Customer Success SaaS",
      description: "Led the development of calendar and email integration features for a Customer Success SaaS platform. Implemented robust Google Calendar sync and email integration systems. Designed database architecture and worked extensively with AWS services.",
      technologies: ["React.js", "Node.js", "Redux", "SQL", "AWS Lambda", "EC2", "SQS"],
      company: "Velaris",
      period: "Feb 2022 - May 2023",
      role: "Feature Lead - Calendar & Email Integration",
      achievements: "Promoted to Senior position within a short timeframe"
    },
    {
      title: "Europe Rail - Ticket Booking System",
      description: "Developed a comprehensive train ticket booking system for European railways. Implemented payment gateway integration using Stripe and handled ticket booking management.",
      technologies: ["React.js", "Node.js", "DynamoDB", "AWS", "Stripe"],
      company: "Client Project",
      period: "Feb 2022 - Jul 2022",
      role: "Full Stack Developer",
      achievements: "Received recognition for implementing duplicate card prevention system"
    },
    {
      title: "Careers360 - Job Platform",
      description: "Built a full-featured job recruitment platform connecting recruiters and job seekers. Developed frontend interfaces and created well-documented APIs.",
      technologies: ["React.js", "Node.js", "MongoDB", "DynamoDB", "AWS"],
      company: "Sezenta",
      period: "Mar 2021 - Feb 2022",
      role: "Full Stack Developer"
    },
    {
      title: "STEM Labs Education Platform",
      description: "Co-founded and developed a STEM education web application. Handled end-to-end development including frontend, backend, database design, and server management.",
      technologies: ["PHP", "MySQL", "JavaScript", "HTML/CSS"],
      company: "STEM Labs",
      period: "Feb 2020 - Mar 2021",
      role: "Co-founder & Lead Developer"
    },
    {
      title: "TyreOnline E-Commerce",
      description: "Developed an e-commerce platform for automotive parts and accessories. Created RESTful APIs and implemented frontend features using Symfony framework.",
      technologies: ["PHP (Symfony)", "JavaScript", "HTML/CSS", "MySQL"],
      company: "Effective Solutions",
      period: "Jul 2019 - Jan 2020",
      role: "Full Stack Developer"
    },
    {
      title: "Trinity - Student Enrollment",
      description: "Developed a student enrollment web platform with comprehensive backend APIs and frontend interfaces.",
      technologies: ["PHP (Symfony)", "JavaScript", "HTML/CSS", "Twig"],
      company: "Effective Solutions",
      period: "Feb 2019 - Jul 2019",
      role: "Full Stack Developer"
    },
    {
      title: "Route Radar - GPS Tracking",
      description: "Implemented GPS tracking system API integration for vehicles. Created REST APIs for server communication and handled device installations.",
      technologies: ["Node.js", "HTML/CSS", "GPS Integration"],
      company: "Effective Solutions",
      period: "May 2018 - Feb 2019",
      role: "Developer"
    },
    {
      title: "Softlogic E-Commerce",
      description: "Contributed to building an e-commerce platform with payment gateway integration and RESTful APIs.",
      technologies: ["PHP (Symfony)", "JavaScript", "HTML/CSS"],
      company: "Effective Solutions",
      period: "Oct 2017 - Jun 2018",
      role: "Developer"
    },
    {
      title: "STEMtronics Learning Platform",
      description: "Created an electronics & IoT platform for teaching coding and robotics to students. Developed sample projects and documentation.",
      technologies: ["Arduino", "Node.js", "HTML/CSS"],
      company: "STEM Labs",
      period: "Jun 2017 - Oct 2017",
      role: "Developer"
    },
    {
      title: "PipeGain - IoT Health Monitor",
      description: "Developed an IoT device for measuring construction workers' health. Contributed to R&D and created APIs for data transmission.",
      technologies: ["Arduino", "Node.js", "IoT"],
      company: "Effective Solutions",
      period: "Jan 2017 - Sep 2017",
      role: "Developer"
    }
  ];

  const recommendations = [
    {
      name: "Shayne Weerakoon",
      role: "1st",
      date: "November 11, 2024",
      relationship: "Shayne managed Newumal directly",
      content: `I hired Newumal as a full-stack engineer, and he quickly proved to be one of the finest professionals I've ever worked with. Newumal joined the team as a Software Engineer (SE), and I had the pleasure of mentoring him to Senior Software Engineer (SSE) in just two short years. Beyond his technical skills, Newumal is extremely hard-working and cooperative. He consistently goes the extra mile to complete his tasks, always with a smile on his face. Even during the busiest times, he never hesitates to assist others, displaying a level of patience and enthusiasm that is truly exemplary.

His continuous drive for self-improvement, exceptional problem-solving abilities, logical thinking, and receptiveness to feedback have all contributed to his ongoing growth in his career.

I am happy I got the chance to work with Newumal and have learned alot from him myself. I wish him the very best in his career.`
    },
    {
      name: "Supun Induwara",
      role: "Co-founder of Sezenta",
      date: "October 19, 2023",
      relationship: "Supun managed Newumal directly",
      content: `As a full-stack software engineer, Newumal consistently demonstrated a strong command of React, Node.js, and SQL, dynamodb stack. Their ability to tackle complex technical challenges and deliver high-quality solutions is truly impressive.

Newumal's dedication to our projects and their commitment to driving results is commendable. They excel not only in technical skills but also in their communication and collaboration with the team. Newumal is known for their problem-solving abilities, attention to detail, and the enthusiasm they bring to every project.`
    }
  ];

  return (
    <>
      <section id="projects" className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px]">
          <h2 className="text-3xl font-bold text-center mb-4 dark:text-white">Featured Projects</h2>
          <p className="text-gray-600 dark:text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Showcasing my journey through various technologies and industries, from SaaS platforms to IoT solutions.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden h-full"
              >
                <div className="flex flex-col h-full">
                  {/* Project Preview */}
                  <div className="relative h-[200px] bg-gray-100 dark:bg-gray-800 p-6 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center">
                        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-base font-semibold text-gray-900 dark:text-white">
                          {project.role}
                        </h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {project.period}
                        </p>
                        {project.achievements && (
                          <p className="text-sm text-primary font-medium">
                            {project.achievements}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                        {project.title}
                      </h3>
                      <span className="text-sm text-primary">{project.company}</span>
                    </div>

                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 text-xs bg-purple-50 dark:bg-purple-900/30 text-primary rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recommendations Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px]">
          <h2 className="text-3xl font-bold text-center mb-4 dark:text-white">Recommendations</h2>
          <p className="text-gray-600 dark:text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            What people say about my work and collaboration
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {recommendations.map((recommendation, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8"
              >
                <FaQuoteLeft className="text-primary/20 text-4xl mb-4" />
                <div className="space-y-4">
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed whitespace-pre-line">
                    {recommendation.content}
                  </p>
                  <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      {recommendation.name}
                    </h4>
                    <p className="text-primary text-sm">{recommendation.role}</p>
                    <div className="flex items-center gap-2 mt-2 text-xs text-gray-500 dark:text-gray-400">
                      <span>{recommendation.date}</span>
                      <span>•</span>
                      <span>{recommendation.relationship}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects; 