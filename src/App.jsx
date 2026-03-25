import React from 'react';
import BentoGrid from './components/Layout/BentoGrid';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import HeroCard from './components/Sections/HeroCard';
import ExperienceCards from './components/Sections/ExperienceCards';
import DevEnvCard from './components/Sections/DevEnvCard';
import TechStackCard from './components/Sections/TechStackCard';
import ContactCard from './components/Sections/ContactCard';
import EducationCard from './components/Sections/EducationCard';
import ProjectCard from './components/Sections/ProjectCard';
import CertificationsCard from './components/Sections/CertificationsCard';
import HobbiesCard from './components/Sections/HobbiesCard';

function App() {
  return (
    <div className="min-h-screen w-full relative overflow-x-hidden flex flex-col items-center pt-24 pb-12 selection:bg-malachite/30 selection:text-white bg-page-light dark:bg-page-dark transition-colors duration-500">

      <Header />

      <main className="w-full flex-grow flex flex-col items-center justify-center p-4">
        <BentoGrid>
          <HeroCard />
          <ExperienceCards />
          <DevEnvCard />
          <TechStackCard />
          <EducationCard />
          <ProjectCard />
          <CertificationsCard />
          <HobbiesCard />
        </BentoGrid>

        <div className="w-full max-w-7xl mx-auto px-4 md:px-8 mt-4 md:mt-6 flex justify-center">
          <div className="w-full max-w-2xl">
            <ContactCard />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
