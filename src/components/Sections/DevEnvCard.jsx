import BentoCard from '../UI/BentoCard';
import { Monitor, Apple, LayoutPanelTop } from 'lucide-react';

export default function DevEnvCard() {
  return (
    <BentoCard className="flex flex-col items-center justify-center text-center">
      <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-mint animate-pulse" />
        Entornos
      </h3>
      <div className="flex gap-4 justify-center items-center">
        <div className="flex flex-col items-center gap-2 text-zinc-500 hover:text-malachite transition-colors">
          <LayoutPanelTop size={32} strokeWidth={1.5} />
          <span className="text-[10px] font-bold uppercase tracking-wider">Windows</span>
        </div>
        <div className="flex flex-col items-center gap-2 text-zinc-500 hover:text-malachite transition-colors">
          <Apple size={32} strokeWidth={1.5} />
          <span className="text-[10px] font-bold uppercase tracking-wider">macOS</span>
        </div>
        <div className="flex flex-col items-center gap-2 text-zinc-500 hover:text-malachite transition-colors">
          <Monitor size={32} strokeWidth={1.5} />
          <span className="text-[10px] font-bold uppercase tracking-wider">Linux</span>
        </div>
      </div>
    </BentoCard>
  );
}
