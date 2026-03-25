import React from 'react';
import BentoCard from '../UI/BentoCard';
import { Gamepad2, Database, Code } from 'lucide-react';

export default function HobbiesCard() {
  const hobbies = [
    { icon: <Database size={16} />, title: "Gestión de Servidores" },
    { icon: <Code size={16} />, title: "Exploración de Lenguajes" },
    { icon: <Gamepad2 size={16} />, title: "Videojuegos" },
  ];

  return (
    <BentoCard className="md:col-span-1 md:row-span-1 bg-gradient-to-br from-white to-black/5 dark:from-card-dark dark:to-malachite/10">
      <div className="flex flex-col h-full">
        <div className="flex items-center gap-2 mb-6 text-mint">
          <Gamepad2 size={24} />
          <h3 className="font-bold text-lg underline underline-offset-4 decoration-emerald">Hobbies</h3>
        </div>

        <div className="space-y-6 mt-2 overflow-y-auto max-h-56 scrollbar-hide">
          {hobbies.map((hobby, i) => (
            <div key={i} className="flex items-center gap-4 transition-transform hover:translate-x-2">
              <div className="p-3 rounded-2xl bg-black/5 dark:bg-white/5 border border-zinc-200 dark:border-white/5 text-mint shadow-inner">
                {hobby.icon}
              </div>
              <span className="text-zinc-900 dark:text-white font-bold text-sm md:text-base tracking-tight">
                {hobby.title}
              </span>
            </div>
          ))}
        </div>


        <div className="mt-auto pt-6">
          <p className="text-[10px] text-gray-500 font-mono italic">
            // SIEMPRE EXPLORANDO NUEVAS TECS
          </p>
        </div>
      </div>
    </BentoCard>
  );
}
