import React from 'react';
import BentoCard from '../UI/BentoCard';
import { ExternalLink, Code2 } from 'lucide-react';

export default function ProjectCard() {
  return (
    <BentoCard className="md:col-span-1 md:row-span-1 border-malachite/20">
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2 text-malachite">
            <Code2 size={20} />
            <h3 className="font-bold text-lg">Proyecto Personal</h3>
          </div>
          <a
            href="https://codetogift.art"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-white transition-colors"
          >
            <ExternalLink size={18} />
          </a>
        </div>

        <div className="mt-2">
          <h4 className="text-zinc-900 dark:text-white font-extrabold text-xl tracking-tight mb-2">
            codetogift.art
          </h4>
          <p className="text-zinc-500 dark:text-zinc-400 text-xs md:text-sm mb-4 leading-relaxed font-medium">
            Un proyecto personal que busca generar regalos interactivos utilizando la programación como herramienta principal para la creación de experiencias únicas.
          </p>

        </div>

      </div>
    </BentoCard>
  );
}
