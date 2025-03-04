import { motion } from 'framer-motion';

const qualificationData = [
  {
    type: 'Education',
    items: [
      {
        title: 'Master in Interactive Design',
        institution: 'Design University',
        year: '2018 - 2020',
        description: 'Specialized in user experience and interface design.',
      },
      {
        title: 'Bachelor in Digital Arts',
        institution: 'Creative College',
        year: '2014 - 2018',
        description: 'Foundation in digital design and visual communication.',
      },
    ],
  },
  {
    type: 'Certifications',
    items: [
      {
        title: 'Advanced UX Design',
        institution: 'Google',
        year: '2022',
        description: 'Professional certification in UX design principles.',
      },
      {
        title: 'Web Development',
        institution: 'Frontend Masters',
        year: '2021',
        description: 'Comprehensive web development certification.',
      },
    ],
  },
];

const Qualification = () => {
  return (
    <section id="qualification" className="bg-gray-50">
      <div className="section-container">
        <h2 className="section-title">Qualifications</h2>
        <div className="grid md:grid-cols-2 gap-12">
          {qualificationData.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h3 className="text-2xl font-semibold text-center mb-8">
                {category.type}
              </h3>
              {category.items.map((item, itemIndex) => (
                <motion.div
                  key={itemIndex}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: itemIndex * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg p-6 shadow-sm"
                >
                  <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                  <p className="text-gray-600 mb-2">{item.institution}</p>
                  <p className="text-primary font-medium mb-3">{item.year}</p>
                  <p className="text-gray-500">{item.description}</p>
                </motion.div>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Qualification;
