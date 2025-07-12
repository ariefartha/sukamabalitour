import { motion } from 'framer-motion';

const WhyChooseUs = () => {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.3, duration: 0.6 },
    }),
  };

  const benefits = [
    {
      title: 'Affordable Prices',
      desc: 'We offer competitive pricing without compromising service quality.',
      icon: '💰',
    },
    {
      title: 'Experienced Tour Guides',
      desc: 'Guided by local professionals with deep knowledge of Bali.',
      icon: '🧭',
    },
    {
      title: 'Excellent Service',
      desc: 'We ensure comfort, safety, and satisfaction throughout your journey.',
      icon: '🌟',
    },
  ];

  return (
    <section className="py-12 px-4 bg-base-200">
      <div className="container mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-8"
        >
          Why Choose <span className=" font-title">Sukama Bali Tour?</span>
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8 ">
          {benefits.map((item, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={variants}
              className="card bg-white shadow-lg p-6 hover:shadow-xl transition duration-300"
            >
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
