import { motion } from 'framer-motion';

export default function BentoCard({ children, className = '', ...props }) {
  return (
    <motion.div
      className={`glass-card glass-card-hover rounded-3xl p-6 md:p-8 flex flex-col items-start justify-start relative overflow-hidden ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      {...props}
    >
      {/* Subtle green ambient light inside the card */}
      <div className="absolute -top-32 -right-32 w-64 h-64 bg-malachite opacity-[0.03] rounded-full blur-3xl pointer-events-none" />
      <div className="relative z-10 w-full">
        {children}
      </div>
    </motion.div>
  );
}
