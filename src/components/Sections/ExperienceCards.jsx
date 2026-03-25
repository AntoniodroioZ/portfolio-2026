import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import BentoCard from '../UI/BentoCard';
import { Briefcase, X } from 'lucide-react';

const experiences = [
  {
    id: 'urdaten-exp',
    company: 'Urdaten',
    role: 'Ingeniero de Software | Backend',
    period: 'Enero 2023 - Presente',
    location: 'CDMX, México',
    shortDesc: 'Desarrollando servicios backend escalables, despliegue en la nube y monetización.',
    bullets: [
      'Desarrollo de servicios con Golang y Python enfocados en el cliente frontend.',
      'Implementación de APIs ("Extractores") para recuperación y organización de datos.',
      'Despliegue de plataforma usando Docker, Kubernetes, Azure y Argo.',
      'Automatización de creación de imágenes Docker mediante GitHub Actions.',
      'Mejora del sistema de solicitudes e integración del sistema de créditos para monetización.',
      'Generación de estadísticas desde Postgres DB y almacenamiento seguro.'
    ]
  },
  {
    id: 'seivoc-exp',
    company: 'SEIVOC | UNAM DGOAE',
    role: 'Desarrollador Full Stack | Becario',
    period: 'Mayo 2021 - Mayo 2022',
    location: 'CDMX, México',
    shortDesc: 'Desarrollo backend y frontend apoyando el acceso a opciones de carrera usando Laravel.',
    bullets: [
      'Desarrollé servicios backend y componentes frontend para guiar a cientos de estudiantes.',
      'Contribuí a la integración de un nuevo diseño para asesores de carrera.',
      'Utilice Laravel como framework principal, manteniendo un stack unificado.'
    ]
  }
];

export default function ExperienceCards() {
  const [selectedExp, setSelectedExp] = useState(null);

  return (
    <>
      <BentoCard className="md:col-span-2 flex flex-col w-full">
        <h3 className="text-lg md:text-xl font-bold flex items-center gap-2 mb-4">
          <Briefcase className="text-mint" size={20} />
          Experiencia Profesional
        </h3>
        
        <div className="flex flex-col md:flex-row gap-4 w-full">
          {experiences.map((exp) => (
            <motion.div
              layoutId={`card-container-${exp.id}`}
              key={exp.id}
              onClick={() => setSelectedExp(exp)}
              transition={{ type: "spring", stiffness: 350, damping: 30 }}
              className="glass-card glass-card-hover rounded-2xl p-4 md:p-5 cursor-pointer flex flex-col relative overflow-hidden group border border-zinc-200 dark:border-white/5"
              style={{ transition: 'none' }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-malachite/0 via-transparent to-malachite/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10 flex flex-col">
                <h4 className="text-sm md:text-base font-bold text-zinc-800 dark:text-zinc-100 mb-0.5 leading-tight group-hover:text-malachite transition-colors">
                  {exp.company}
                </h4>
                <h5 className="text-[10px] md:text-xs text-mint mb-1 font-medium">
                  {exp.role}
                </h5>
                <p className="text-[9px] md:text-[10px] text-zinc-500 mb-2 uppercase tracking-tight font-bold">
                  {exp.period}
                </p>
                <p className="text-[11px] md:text-xs text-zinc-500 dark:text-zinc-400 line-clamp-2 leading-snug">
                  {exp.shortDesc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </BentoCard>

      <AnimatePresence>
        {selectedExp && (
          <div key="modal-portal" className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
            <motion.div
              key="modal-dimmer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedExp(null)}
              className="absolute inset-0 bg-white/80 dark:bg-page-dark/80 backdrop-blur-md"
            />
            
            <motion.div
              key="modal-content-card"
              layoutId={`card-container-${selectedExp.id}`}
              transition={{ type: "spring", stiffness: 350, damping: 30 }}
              className="glass-card relative w-full h-auto max-w-2xl rounded-3xl p-6 md:p-10 shadow-2xl overflow-hidden z-10 border border-zinc-200 dark:border-white/10 bg-white dark:bg-page-dark"
              style={{ transition: 'none' }}
            >
              <button
                key="modal-close-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedExp(null);
                }}
                className="absolute top-6 right-6 text-zinc-500 hover:text-malachite transition-colors shadow-sm bg-black/5 dark:bg-white/10 p-2 rounded-full cursor-pointer z-20"
              >
                <X size={20} />
              </button>

              <div className="absolute -top-32 -left-32 w-64 h-64 bg-emerald opacity-[0.05] rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10">
                <h4 className="text-2xl md:text-3xl font-extrabold text-zinc-900 dark:text-zinc-100 mb-2">
                  {selectedExp.company}
                </h4>
                <h5 className="text-lg text-mint font-bold mb-2">
                  {selectedExp.role}
                </h5>
                <p className="text-sm text-zinc-500 font-bold mb-6">
                  {selectedExp.period} | {selectedExp.location}
                </p>
                
                <div className="space-y-4 mt-8">
                  {selectedExp.bullets.map((bullet, i) => (
                    <motion.div 
                      key={`bullet-${i}`}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * i + 0.1 }}
                      className="flex items-start gap-4"
                    >
                      <div className="w-2.5 h-2.5 rounded-full bg-malachite mt-1.5 shrink-0 shadow-[0_0_10px_rgba(12,226,94,0.5)]" />
                      <p className="text-sm md:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed font-medium">{bullet}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
