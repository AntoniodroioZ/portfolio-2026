export default function BentoGrid({ children, className = '' }) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-4 md:grid-rows-[auto_auto_auto] gap-4 md:gap-6 w-full max-w-7xl mx-auto p-4 md:p-8 ${className}`}>
      {children}
    </div>
  );
}
