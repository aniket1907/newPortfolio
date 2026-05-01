import { motion } from "framer-motion";

const projects = [
  {
    title: "IRIS – Invoice Recognition System",
    desc: "AI-powered invoice processing system with OCR, OpenAI & SAP integration for automated payment workflows.",
    tech: ["Angular", "Node.js", "OpenAI", "SAP"],
  },
  {
    title: "Tactical Campaign Management",
    desc: "End-to-end campaign lifecycle system with analytics dashboard and RBAC workflow for approvals.",
    tech: ["React", "Node.js", "RBAC", "Dashboard"],
  },
  {
    title: "MBR – Business Reporting System",
    desc: "Automated workforce tracking, payroll processing, and billing dashboards improving operational efficiency.",
    tech: ["Angular", "React", "Node.js"],
  },
  {
    title: "Vendor Onboarding System",
    desc: "Role-based onboarding workflows with OTP authentication and vendor lifecycle management.",
    tech: ["Angular", "Node.js", "JWT"],
  },
  {
    title: "AISHA – AI Chatbot",
    desc: "AI-powered chatbot automating HR & IT queries using OpenAI integration.",
    tech: ["React", "Node.js", "AI"],
  },
];

const Projects = () => {
  return (
    <section className="min-h-screen px-6 md:px-16 py-20 text-white">

      {/* 🔥 Title */}
      <h2 className="text-4xl md:text-5xl font-bold text-center">
        My{" "}
        <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Projects
        </span>
      </h2>

      {/* 🔥 Grid */}
      <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group p-6 rounded-xl bg-white/5 backdrop-blur border border-white/10 hover:scale-105 hover:border-primary/40 transition duration-300"
          >
            {/* Title */}
            <h3 className="text-xl font-semibold">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-gray-400 mt-3 text-sm leading-relaxed">
              {project.desc}
            </p>

            {/* Tech Stack */}
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="text-xs px-2 py-1 rounded bg-primary/20 text-primary"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Actions */}
            <div className="mt-6 flex gap-3">
              <button className="text-sm px-4 py-2 rounded bg-primary hover:opacity-80 transition">
                Live
              </button>
              <button className="text-sm px-4 py-2 rounded border border-white/20 hover:bg-white/10 transition">
                GitHub
              </button>
            </div>

          </motion.div>
        ))}

      </div>

    </section>
  );
};

export default Projects;