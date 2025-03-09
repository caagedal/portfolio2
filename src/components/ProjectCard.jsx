import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReaveal';
import ImageModal from './ImageModal';

export default function ProjectCard({ project, index }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cardRef, cardVisible] = useScrollReveal({ 
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  });

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div
        ref={cardRef}
        className="transition-all duration-1000"
        style={{
          opacity: cardVisible ? 1 : 0,
          transform: cardVisible ? 'translateY(0)' : 'translateY(40px)',
          transitionDelay: `${index * 150}ms`
        }}
      >
        <article className="border-2 border-teal p-6 rounded-md hover:shadow-card transition-all duration-300 transform hover:-translate-y-2 bg-background/80 backdrop-blur-sm group">
          <h3 className="text-2xl font-bold text-teal text-center mb-4 group-hover:text-shadow">
            {project.title}
          </h3>
          <div>
            <div 
              className="overflow-hidden rounded-md mb-4 cursor-pointer"
              onClick={openModal}
            >
              <img 
                src={project.image} 
                alt={`Image of ${project.title}`} 
                loading="lazy"
                className="w-full h-60 object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <p className="font-medium mb-6">{project.description}</p>
            <div className="flex flex-col gap-3 mb-6">
              <a 
                href={project.repoUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-teal/80 transition-colors group"
              >
                <i className="fa-brands fa-github text-teal group-hover:animate-bounce-slow"></i> View repository
              </a>
              <a 
                href={project.liveUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-teal/80 transition-colors group"
              >
                <i className="fa-solid fa-globe text-teal group-hover:animate-pulse-slow"></i> View live site
              </a>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {project.skills.map((skill, idx) => (
              <span 
                key={idx} 
                className="px-3 py-1 border-2 border-teal text-teal transition-colors duration-300 hover:bg-teal/10"
              >
                {skill}
              </span>
            ))}
          </div>
        </article>
      </div>

      {isModalOpen && (
        <ImageModal 
          imageUrl={project.image} 
          altText={`Full view of ${project.title}`} 
          onClose={closeModal} 
        />
      )}
    </>
  );
}