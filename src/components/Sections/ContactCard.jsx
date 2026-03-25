import BentoCard from '../UI/BentoCard';
import { Mail, Globe, Phone } from 'lucide-react';

export default function ContactCard() {
  return (
    <BentoCard className="flex flex-col md:flex-row gap-8 justify-between">
      <div className="flex flex-col justify-start">
        <h3 className="text-2xl font-bold mb-4">Let's Connect</h3>
        <p className="text-zinc-500 text-sm mb-6 max-w-xs">
          Actualmente busco nuevos desafíos para mejorar mis conocimientos y contribuir a equipos innovadores.
        </p>

        <div className="space-y-4">
          <a href="mailto:antoniohernandez49@aragon.unam.mx" className="flex items-center gap-3 text-sm text-zinc-600 dark:text-zinc-400 hover:text-malachite transition-colors group">
            <div className="p-2 rounded-full bg-black/5 dark:bg-white/5 group-hover:bg-mint/20 transition-colors">
              <Mail size={18} className="text-mint" />
            </div>
            antoniohernandez49@aragon.unam.mx
          </a>
          <a href="https://linkedin.com/in/antoniodroioz/" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-sm text-zinc-600 dark:text-zinc-400 hover:text-malachite transition-colors group">
            <div className="p-2 rounded-full bg-black/5 dark:bg-white/5 group-hover:bg-mint/20 transition-colors">
              <Globe size={18} className="text-mint" />
            </div>
            linkedin.com/in/antoniodroioz/
          </a>
          <div className="flex items-center gap-3 text-sm text-zinc-600 dark:text-zinc-400">
            <div className="p-2 rounded-full bg-black/5 dark:bg-white/5">
              <Phone size={18} className="text-mint" />
            </div>
            55 3494 1351
          </div>
        </div>
      </div>

      {/* <div className="flex-1 w-full max-w-sm">
        <form action="https://formspree.io/f/mqkenkyr" method="POST" className="flex flex-col gap-3">
          <input
            type="email"
            name="email"
            placeholder="Tu Email"
            required
            className="input-field"
          />
          <textarea
            name="message"
            placeholder="Tu Mensaje"
            required
            rows={3}
            className="input-field resize-none"
          />
          <button
            type="submit"
            className="w-full bg-malachite/10 dark:bg-malachite/20 hover:bg-malachite text-zinc-900 dark:text-malachite border border-malachite/20 hover:text-white dark:hover:text-white font-bold py-3 rounded-xl transition-all duration-300"
          >
            Enviar Mensaje
          </button>
        </form>
      </div> */}

    </BentoCard>
  );
}

