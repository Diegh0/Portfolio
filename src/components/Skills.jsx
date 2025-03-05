import React, { useState, useEffect } from "react";
import { FaAngular, FaJava, FaSass, FaFigma, FaGitAlt, FaAws, FaJenkins, FaJsSquare } from "react-icons/fa";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const skills = [
  { title: "Angular & NGRX", description: "Desarrollo de aplicaciones escalables con arquitectura Redux en Angular.", icon: <FaAngular size={32} color="#DD0031" />, percentage: 90 },
  { title: "Spring Boot", description: "Creación de APIs robustas y microservicios con Spring Boot y Java.", icon: <FaJava size={32} color="#007396" />, percentage: 85 },
  { title: "SASS", description: "Estilización avanzada y modular con preprocesadores CSS.", icon: <FaSass size={32} color="#CC6699" />, percentage: 80 },
  { title: "UI/UX con Figma", description: "Diseño de interfaces atractivas y experiencia de usuario optimizada.", icon: <FaFigma size={32} color="#F24E1E" />, percentage: 75 },
  { title: "GitHub & Bitbucket", description: "Gestión de versiones y colaboración en proyectos con Git.", icon: <FaGitAlt size={32} color="#F1502F" />, percentage: 90 },
  { title: "AWS & Firebase", description: "Desarrollo en la nube con AWS y Firebase para almacenamiento y autenticación.", icon: <FaAws size={32} color="#FF9900" />, percentage: 70 },
  { title: "Jenkins", description: "Automatización de despliegues e integración continua.", icon: <FaJenkins size={32} color="#D24939" />, percentage: 75 },
  { title: "JavaScript & CSS", description: "Desarrollo front-end con tecnologías modernas.", icon: <FaJsSquare size={32} color="#F7DF1E" />, percentage: 95 },
];

export default function Skills() {
  const [animatedData, setAnimatedData] = useState(skills.map(skill => ({ title: skill.title, percentage: 0 })));

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimatedData(skills.map(skill => ({ title: skill.title, percentage: skill.percentage })));
    }, 500);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className="py-12 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Mis Habilidades</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="relative bg-gray-800 rounded-xl p-6 transition-all duration-500 overflow-hidden group cursor-pointer hover:scale-105"
            >
              <div className="absolute inset-0 bg-indigo-600 scale-0 group-hover:scale-100 transition-transform duration-500 rounded-xl" />

              <div className="relative z-10 flex flex-col items-center">
                {/* Ícono */}
                <div className="mb-3">{skill.icon}</div>
                
                {/* Título */}
                <h3 className="text-xl font-semibold transition-colors duration-300 group-hover:text-white text-center">
                  {skill.title}
                </h3>
                
                {/* Descripción */}
                <p className="mt-2 text-gray-400 transition-opacity duration-300 opacity-0 group-hover:opacity-100 text-center">
                  {skill.description}
                </p>

                {/* Gráfica de progreso */}
                <div className="w-full mt-4">
                  <ResponsiveContainer width="100%" height={50}>
                    <LineChart data={animatedData}>
                      <XAxis dataKey="title" hide />
                      <YAxis domain={[0, 100]} hide />
                      <Tooltip />
                      <Line type="monotone" dataKey="percentage" stroke="#4F46E5" strokeWidth={3} dot={false} animationDuration={2000} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
