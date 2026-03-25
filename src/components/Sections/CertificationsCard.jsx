import React from 'react';
import BentoCard from '../UI/BentoCard';
import { Award, ExternalLink } from 'lucide-react';

export default function CertificationsCard() {
  const certs = [
    {
      title: 'SKF100: Understanding the OWASP® Top 10 Security Threats',
      issuer: 'SKF (Security Knowledge Framework)',
      link: 'https://www.credly.com/badges/96a03eb7-837b-4131-bc5d-bd0f12ce9c44/public_url'
    },
    {
      title: 'DevF Professional in Coding',
      issuer: 'DEV.F - Curso de desarrollo web',
      link: 'https://www.linkedin.com/posts/antoniodroioz_coding-activity-6988384512959205376-yY16?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAC9dujsBbtXysJvCJTqAj6wqfY74kDSgDCg'
    },
    // { title: 'Nombre del Curso', issuer: 'Organización Emisora' },
  ];

  return (
    <BentoCard className="md:col-span-1 md:row-span-1 border-emerald/10">
      <div className="flex flex-col h-full">
        <div className="flex items-center gap-2 mb-6 text-emerald">
          <Award size={20} />
          <h3 className="font-bold text-lg">Certificaciones</h3>
        </div>

        <div className="space-y-4 overflow-y-auto max-h-40 scrollbar-hide">
          {certs.map((cert, i) => (
            <div key={i} className="flex flex-col border-l-2 border-emerald/20 pl-4 py-1">
              {cert.link ? (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 group/cert"
                >
                  <h4 className="text-zinc-900 dark:text-white font-bold text-xs uppercase tracking-tight group-hover/cert:text-malachite transition-colors">
                    {cert.title}
                  </h4>
                  <ExternalLink size={12} className="text-zinc-400 group-hover/cert:text-malachite transition-colors shrink-0" />
                </a>
              ) : (
                <h4 className="text-zinc-900 dark:text-white font-bold text-xs uppercase tracking-tight">
                  {cert.title}
                </h4>
              )}
              <p className="text-gray-500 text-[10px] mt-0.5">
                {cert.issuer}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-auto pt-4 flex justify-end">
          <div className="px-3 py-1 rounded-full bg-emerald/10 text-emerald text-[10px] uppercase font-black">
            LATEST
          </div>
        </div>
      </div>
    </BentoCard>
  );
}
