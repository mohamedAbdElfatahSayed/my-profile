"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const skills = [
  { name: "JavaScript", level: 95 },
  { name: "TypeScript", level: 90 },
  { name: "C++", level: 85 },

  { name: "React.js", level: 92 },
  { name: "Next.js", level: 90 },
  { name: "Tailwind CSS", level: 95 },

  { name: "Node.js", level: 88 },
  { name: "Express.js", level: 85 },
  { name: "Prisma ORM", level: 85 },

  { name: "PostgreSQL", level: 80 },
  { name: "MongoDB", level: 82 },

  { name: "Git & GitHub", level: 90 },
];

const AboutPage = () => {
  const [projectsCount, setProjectsCount] = useState(0);

  useEffect(() => {
    const end = 12;
    const duration = 1500;
    const startTime = performance.now();

    let animationFrame: number;

    const update = (time: number) => {
      const progress = Math.min((time - startTime) / duration, 1);
      const value = Math.floor(progress * end);

      setProjectsCount(value);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(update);
      }
    };

    animationFrame = requestAnimationFrame(update);

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <section className="relative py-28 px-6 text-white overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#0f172a]" />

      <div className="absolute top-[-150px] left-[-150px] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[140px] animate-pulse" />
      <div className="absolute bottom-[-150px] right-[-150px] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[140px] animate-pulse" />

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="relative w-72 h-72 rounded-3xl overflow-hidden border border-white/10 shadow-2xl hover:scale-105 transition duration-500">
            <Image
              src="/mohamed1.png"
              alt="Mohamed"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          <motion.h2 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            About Me
          </motion.h2>

          <motion.p className="text-gray-300 leading-relaxed mb-6 text-lg">
            I'm Mohamed Abdelfatah, a Full Stack Developer specialized in
            building modern scalable web applications.
          </motion.p>

          {/* CV Buttons */}
          <div className="flex flex-wrap gap-4 mb-8">
            <a
              href="/Mohamed_Abdelfatah_Sayed_16-6-2026.pdf"
              download
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl 
                         bg-gradient-to-r from-purple-500 to-blue-500 
                         hover:from-purple-600 hover:to-blue-600 
                         text-white font-medium shadow-lg 
                         transition-all duration-300 hover:scale-105"
            >
              📄 Download CV
            </a>

            <a
              href="/Mohamed_Abdelfatah_Sayed_16-6-2026.pdf"
              target="_blank"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl 
                         bg-white/10 hover:bg-white/20 
                         border border-white/10
                         text-white font-medium 
                         transition-all duration-300 hover:scale-105"
            >
              👁 View CV
            </a>
          </div>

          {/* Counter */}
          <div className="mb-8">
            <span className="text-4xl font-bold text-blue-400">
              {projectsCount}+
            </span>
            <span className="ml-2 text-gray-400">Projects Completed</span>
          </div>

          {/* Skills */}
          <div className="space-y-4">
            {skills.map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between mb-1 text-sm">
                  <span>{skill.name}</span>
                </div>

                <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                  />
                </div>
              </div>
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default AboutPage;