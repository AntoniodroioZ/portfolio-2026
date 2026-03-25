import BentoCard from '../UI/BentoCard';
import { Terminal } from 'lucide-react';

export default function HeroCard() {
  return (
    <BentoCard className="md:col-span-2 md:row-span-2 text-left justify-end flex-col group">
      <div className="absolute top-8 right-8 text-emerald/20 dark:text-malachite/10 transition-colors duration-500">

        <Terminal size={120} strokeWidth={1} />
      </div>
      <div className="mt-auto relative z-10 w-full">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-4 leading-tight">
          José Antonio <br />
          <span className="text-zinc-400 dark:text-zinc-500">García Hernández</span>

        </h1>
        <h2 className="text-2xl md:text-3xl text-gradient font-bold mb-6 inline-block">
          Ingeniero de Software
        </h2>
        <p className="text-zinc-600 dark:text-zinc-400 text-sm md:text-base leading-relaxed max-w-lg mb-4 font-medium">

          Más de cuatro años desarrollando servicios robustos para clientes internos y externos.
          Enfocado en <span className="text-emerald font-bold">Golang</span> y <span className="text-emerald font-bold">Python</span>,
          con experiencia en integraciones escalables.
        </p>
      </div>
    </BentoCard>
  );
}

