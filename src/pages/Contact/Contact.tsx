import { motion } from "framer-motion";
import { useState } from "react";

const Contact = () => {
  const [copied, setCopied] = useState("");

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(""), 2000);
  };

  return (
    <section className="min-h-screen px-6 md:px-16 py-20 text-white">

      {/* 🔥 Title */}
      <h2 className="text-4xl md:text-5xl font-bold text-center">
        Get In{" "}
        <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Touch
        </span>
      </h2>

      <div className="mt-16 grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">

        {/* 📬 Left: Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="space-y-6"
        >
          <h3 className="text-2xl font-semibold">Let's Connect</h3>

          <p className="text-gray-400">
            Feel free to reach out for collaborations, freelance work, or just a tech discussion.
          </p>

          {/* Email */}
          <div
            onClick={() => handleCopy("aniketchoudhari2001@gmail.com", "email")}
            className="p-4 rounded-xl bg-white/5 border border-white/10 cursor-pointer hover:bg-white/10 transition"
          >
            <p className="text-sm text-gray-400">Email</p>
            <p className="font-medium">
              aniketchoudhari2001@gmail.com
              {copied === "email" && (
                <span className="ml-2 text-green-400 text-sm">Copied!</span>
              )}
            </p>
          </div>

          {/* Phone */}
          <div
            onClick={() => handleCopy("+918329545518", "phone")}
            className="p-4 rounded-xl bg-white/5 border border-white/10 cursor-pointer hover:bg-white/10 transition"
          >
            <p className="text-sm text-gray-400">Phone</p>
            <p className="font-medium">
              +91 8329545518
              {copied === "phone" && (
                <span className="ml-2 text-green-400 text-sm">Copied!</span>
              )}
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-4 mt-4">
            <a
              href="#"
              className="px-4 py-2 rounded-lg border border-white/20 hover:bg-white/10 transition"
            >
              LinkedIn
            </a>
            <a
              href="#"
              className="px-4 py-2 rounded-lg border border-white/20 hover:bg-white/10 transition"
            >
              GitHub
            </a>
          </div>
        </motion.div>

        {/* 📝 Right: Contact Form */}
        <motion.form
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur space-y-4"
        >
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded-lg bg-transparent border border-white/20 focus:outline-none focus:border-primary"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 rounded-lg bg-transparent border border-white/20 focus:outline-none focus:border-primary"
          />

          <textarea
            placeholder="Your Message"
            rows={4}
            className="w-full p-3 rounded-lg bg-transparent border border-white/20 focus:outline-none focus:border-primary"
          />

          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-gradient-to-r from-primary to-secondary hover:scale-105 transition"
          >
            Send Message
          </button>
        </motion.form>

      </div>

    </section>
  );
};

export default Contact;