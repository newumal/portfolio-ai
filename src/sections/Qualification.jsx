import { motion } from 'framer-motion';
import { FaGraduationCap, FaCertificate } from 'react-icons/fa';

const Qualification = () => {
  const qualifications = [
    {
      type: 'certification',
      title: 'AWS Certified Solutions Architect - Associate',
      institution: 'Amazon Web Services (AWS)',
      period: '2024',
      description: 'Certified in designing distributed systems and deploying applications on AWS infrastructure',
      icon: <FaCertificate className="w-6 h-6" />
    },
    {
      type: 'certification',
      title: 'Generative AI Fundamentals',
      institution: 'Coursera - DeepLearning.AI',
      period: '2024',
      description: 'Completed comprehensive training in Large Language Models, Prompt Engineering, and Generative AI applications',
      icon: <FaCertificate className="w-6 h-6" />
    },
    {
      type: 'education',
      title: 'Bachelor of Science in Computer Science',
      institution: 'University of Colombo School of Computing',
      period: '2019 - 2023',
      description: 'Specialized in Software Engineering and Computer Science fundamentals',
      icon: <FaGraduationCap className="w-6 h-6" />
    }
  ];

  return (
    <section id="qualification" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Qualification
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Education and Professional Certifications
          </p>
        </motion.div>

        <div className="space-y-8">
          {qualifications.map((qual, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6"
            >
              <div className="flex items-start gap-4">
                <div className="text-primary">
                  {qual.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {qual.title}
                  </h3>
                  <p className="text-primary font-medium">
                    {qual.institution}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {qual.period}
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mt-2">
                    {qual.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Qualification;
