import { motion } from "framer-motion";

const Experience = () => {
  return (
    <section className="min-h-screen px-6 md:px-16 py-20 text-white">

      <h2 className="text-4xl font-bold text-center">
        Work{" "}
        <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Experience
        </span>
      </h2>

      <div className="mt-12 max-w-4xl mx-auto">

        {/* Company */}
        <div className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur">
          <h3 className="text-xl font-semibold">
            Volkswagen Digital Solutions
          </h3>
          <p className="text-gray-400 text-sm">
            Full Stack Developer | Aug 2022 – Present | Pune
          </p>

          <ul className="mt-4 text-gray-400 list-disc pl-5 space-y-2">
            <li>
              Built enterprise applications for Audi, VW Middle East, and Skoda.
            </li>
            <li>
              Developed scalable REST APIs and modular frontend architectures.
            </li>
            <li>
              Led Agile teams, code reviews, sprint planning & system design.
            </li>
            <li>
              Integrated AI and SAP systems for automation & business workflows.
            </li>
          </ul>
        </div>

        {/* Key Projects */}
        <div className="mt-10 space-y-6">

          {[
            {
              title: "IRIS – Invoice Recognition System",
              desc: "AI-powered invoice processing with OCR, OpenAI & SAP integration."
            },
            {
              title: "Tactical Campaign Management",
              desc: "React + Node.js system for campaign lifecycle & analytics dashboard."
            },
            {
              title: "MBR – Business Reporting System",
              desc: "Automated workforce tracking, payroll & billing dashboards."
            },
            {
              title: "Vendor Onboarding System",
              desc: "Role-based onboarding workflows with OTP-based approvals."
            },
            {
              title: "AISHA – AI Chatbot",
              desc: "AI chatbot for HR & IT automation using OpenAI integration."
            }
          ].map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-5 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition"
            >
              <h4 className="font-semibold">{project.title}</h4>
              <p className="text-gray-400 text-sm mt-1">{project.desc}</p>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Experience;