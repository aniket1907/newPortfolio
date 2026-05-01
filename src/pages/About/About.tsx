import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="min-h-screen px-6 md:px-16 py-20 bg-dark text-white">

      {/* 🔥 Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-center"
      >
        About{" "}
        <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Me
        </span>
      </motion.h2>

      {/* 🔥 Content */}
      <div className="mt-12 grid md:grid-cols-2 gap-10 items-center">

        {/* 🧠 Left Side (Text) */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          {/* <p className="text-gray-400 leading-relaxed">
            I'm a Full Stack Developer with 3.5+ years of experience building
            scalable enterprise applications using Angular, React, Node.js,
            and AI integration. I specialize in creating modern UI
            architectures, high-performance systems, and intelligent solutions
            powered by AI.
          </p>

          <p className="text-gray-400 mt-4 leading-relaxed">
            I have hands-on experience in system design, API development,
            database architecture, and performance optimization. I enjoy
            solving real-world problems and building products that deliver
            measurable business impact.
          </p> */}

          <p className="text-gray-400 leading-relaxed">
  Full Stack Developer with 3.5+ years of experience building scalable 
  enterprise applications for automotive clients like Volkswagen, Audi, 
  and Skoda. I specialize in Angular, React, Node.js, and AI-driven systems.
</p>

<p className="text-gray-400 mt-4 leading-relaxed">
  I’ve designed end-to-end systems including UI architecture, backend APIs, 
  and database design, along with AI and SAP integrations to enhance 
  business workflows and automation.
</p>

<p className="text-gray-400 mt-4 leading-relaxed">
  Passionate about solving real-world problems, I focus on building 
  high-performance, scalable, and intelligent applications that deliver 
  measurable business impact.
</p>
        </motion.div>

        {/* 📊 Right Side (Cards) */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-2 gap-6"
        >
          <div className="p-6 rounded-xl bg-white/5 backdrop-blur border border-white/10 text-center">
            <h3 className="text-3xl font-bold text-primary">3.5+</h3>
            <p className="text-gray-400 mt-2">Years Experience</p>
          </div>

          <div className="p-6 rounded-xl bg-white/5 backdrop-blur border border-white/10 text-center">
            <h3 className="text-3xl font-bold text-primary">10+</h3>
            <p className="text-gray-400 mt-2">Projects Delivered</p>
          </div>

          <div className="p-6 rounded-xl bg-white/5 backdrop-blur border border-white/10 text-center">
            <h3 className="text-3xl font-bold text-primary">5+</h3>
            <p className="text-gray-400 mt-2">Technologies</p>
          </div>

          <div className="p-6 rounded-xl bg-white/5 backdrop-blur border border-white/10 text-center">
            <h3 className="text-3xl font-bold text-primary">AI</h3>
            <p className="text-gray-400 mt-2">Integration Experience</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;