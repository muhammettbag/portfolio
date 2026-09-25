"use client";
import { motion } from "framer-motion";
import { Hash } from "lucide-react";

export default function Skills() {
  const skills = [
    { name: ".NET", icon: "devicon-dot-net-plain colored", color: "#512bd4" },
    { name: "C#", icon: "devicon-csharp-plain colored", color: "#9b4f96" },
    { name: "ASP.NET Core", icon: "devicon-dotnetcore-plain colored", color: "#512bd4" },
    { name: "Java", icon: "devicon-java-plain colored", color: "#f89820" },
    { name: "Spring Boot", icon: "devicon-spring-original colored", color: "#6db33f" },
    { name: "React", icon: "devicon-react-original colored", color: "#61dafb" },
    { name: "JavaScript", icon: "devicon-javascript-plain colored", color: "#f7df1e" },
    { name: "SQL Server", icon: "devicon-microsoftsqlserver-plain colored", color: "#cc292b" },
    { name: "PostgreSQL", icon: "devicon-postgresql-plain colored", color: "#336791" },
    { name: "Docker", icon: "devicon-docker-plain colored", color: "#2496ed" },
    { name: "Git", icon: "devicon-git-plain colored", color: "#f05032" },
    { name: "Linux", icon: "devicon-linux-plain", color: "#fcc624" },
    { name: "Flutter", icon: "devicon-flutter-plain colored", color: "#02569b" }
  ];

  return (
    <section id="yetenekler" className="py-[100px] w-full">
      <div className="max-w-[1200px] mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title text-center mx-auto justify-center mb-[40px] text-[2rem] font-bold text-[#ccd6f6] flex items-center whitespace-nowrap after:hidden">
            <Hash className="text-[#64ffda] mr-[15px]" size={28} /> Kullandığım Teknolojiler
          </h2>

          <div className="flex flex-wrap gap-[15px] justify-center items-center mt-[50px]">
            {skills.map((skill, index) => (
              <div 
                key={skill.name} 
                className="tech-box inline-flex"
                style={{ '--hover-color': skill.color } as React.CSSProperties}
              >
                <i className={skill.icon}></i>
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
