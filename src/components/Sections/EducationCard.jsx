import React from 'react';
import BentoCard from '../UI/BentoCard';
import { GraduationCap } from 'lucide-react';

export default function EducationCard() {
  return (
    <BentoCard className="md:col-span-1 md:row-span-1">
      <div className="flex flex-col h-full">
        <div className="flex items-center gap-2 mb-4 text-emerald">
          <GraduationCap size={20} />
          <h3 className="font-bold text-lg">Educación</h3>
        </div>
        
        <div className="space-y-4 mt-auto">
          <div className="border-l-2 border-emerald/20 pl-4 py-1">
            <h4 className="text-gray-900 dark:text-white font-bold text-sm md:text-base leading-tight">
              UNAM FES Aragón
            </h4>
            <p className="text-mint text-xs md:text-sm font-medium mt-1">
              Ingeniería en Computación
            </p>
            <span className="inline-block mt-2 px-2 py-0.5 rounded-full bg-emerald/10 text-emerald text-[10px] uppercase tracking-wider font-bold">
              2018 - 2022
            </span>
          </div>

          <div className="border-l-2 border-emerald/20 pl-4 py-1">
            <h4 className="text-gray-900 dark:text-white font-bold text-sm md:text-base leading-tight">
              DevF
            </h4>
            <p className="text-mint text-xs md:text-sm font-medium mt-1">
              Professional in Coding
            </p>
            <span className="inline-block mt-2 px-2 py-0.5 rounded-full bg-emerald/10 text-emerald text-[10px] uppercase tracking-wider font-bold">
              2022
            </span>
          </div>
        </div>
      </div>
    </BentoCard>
  );
}
