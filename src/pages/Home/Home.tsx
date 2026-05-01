import { motion } from "framer-motion";

const Home = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark text-white">

      {/* 🔥 Glow Background */}
      <div className="absolute w-[500px] h-[500px] bg-indigo-500 opacity-20 blur-3xl rounded-full top-[-100px] left-[-100px]" />
      <div className="absolute w-[400px] h-[400px] bg-pink-500 opacity-20 blur-3xl rounded-full bottom-[-100px] right-[-100px]" />

      <div className="z-10 max-w-4xl text-center px-6">

        {/* 👤 Name */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-extrabold"
        >
          Aniket{" "}
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Choudhari
          </span>
        </motion.h1>

        {/* 💼 Role */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-4 text-xl md:text-2xl text-gray-400"
        >
          Full Stack Developer (Angular | React | Node.js | AI Integration)
        </motion.h2>

        {/* 📍 Contact Strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-4 text-sm text-gray-500 flex flex-wrap justify-center gap-3"
        >
          <span>Pune, India</span>
          <span>•</span>
          <span>aniketchoudhari2001@gmail.com</span>
          <span>•</span>
          <span>+91 8329545518</span>
        </motion.div>

        {/* 🧠 Summary */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-6 text-gray-400 leading-relaxed"
        >
          Full Stack Developer with 3.5+ years of experience building scalable
          enterprise applications using Angular, React, Node.js, and AI
          integration. Passionate about crafting high-performance systems,
          modern UI architectures, and intelligent applications powered by AI.
        </motion.p>

        {/* 🚀 CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-8 flex justify-center gap-4 flex-wrap"
        >
          <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-secondary hover:scale-105 transition">
            View Projects
          </button>

          <button className="px-6 py-3 rounded-xl border border-white/20 hover:bg-white/10 transition">
            Download Resume
          </button>
        </motion.div>

      </div>
    </section>
  );
};

export default Home;