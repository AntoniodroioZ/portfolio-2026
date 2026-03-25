import BentoCard from '../UI/BentoCard';

const skills = [
  "Golang", "Python", "Docker", "Kubernetes", "Azure", 
  "Argo", "GitHub Actions", "PostgreSQL", "Laravel", "React", "Linux"
];

export default function TechStackCard() {
  return (
    <BentoCard className="flex flex-col justify-start w-full">
      <h3 className="text-xl font-bold mb-4">Tech Stack</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span 
            key={skill} 
            className="px-3 py-1 text-xs md:text-sm bg-black/5 dark:bg-white/5 border border-zinc-200 dark:border-white/10 text-zinc-600 dark:text-zinc-300 hover:bg-white/80 dark:hover:bg-white/10 hover:border-malachite/50 transition-colors cursor-default font-bold"

          >
            {skill}
          </span>
        ))}
      </div>
    </BentoCard>
  );
}
