import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const IntegrationsExperience = () => {
  const { ref, inView } = useInView({
    threshold: 0.2, // Adjust as needed
    triggerOnce: true, // Only trigger once
  });

  return (
    <div className="xl:h-screen  w-full flex justify-center items-center flex-col gap-10 px-3 py-14">
      <motion.h2
        className="text-5xl xl:text-[80px] font-bold text-center mt-10"
        initial={{ opacity: 0, y: -20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
      >
        Integration Expertise
      </motion.h2>
      <p className="text-center text-2xl xl:w-[70%] font-semibold mt-4 text-black">
        With years of experience, I have successfully integrated various tools and platforms to create seamless solutions, including:
      </p>
      <ul
        ref={ref}
        className="grid grid-cols-4 sm:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-4 w-full justify-center text-center px-4"
      >
        {[
          {
            icon: '/google1.webp',
            title: "Google",
          },
          {
            icon: '/zoom.png',
            title: "Zoom",
          },
          {
            icon: '/zapier.png',
            title: "Zapier",
          },
          {
            icon: '/stripe.jpeg',
            title: "Stripe",
          },
          {
            icon: '/cashfree.png',
            title: "Cashfree",
          },
          {
            icon: '/microsoft.png',
            title: "Microsoft",
          },
          {
            icon: '/pabbly.jpeg',
            title: "Pabbly",
          },
        ].map((item, index) => (
          <motion.li
            key={index}
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: -50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <div className="border p-2  h-full md:h-32  w-full md:w-[45%] shadow-xl rounded-xl bg-primary/10 border-primary/20 mb-2">
              <img
                src={item.icon}
                alt={item.title}
                className="h-full w-full object-contain"
              />
            </div>
            <h3 className="text-lg md:text-2xl font-bold">{item.title}</h3>
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default IntegrationsExperience;
