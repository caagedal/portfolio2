import { useScrollReveal } from '../hooks/useScrollReaveal';
import ProjectCard from './ProjectCard';
import { projects } from '../data/projects';

export default function Projects() {
  const [titleRef, titleVisible] = useScrollReveal();
  
  return (
    <section id="projects" className="py-16 border-b-2 border-border">
      <div 
        ref={titleRef}
        className="mb-16 transition-all duration-1000"
        style={{
          opacity: titleVisible ? 1 : 0,
          transform: titleVisible ? 'translateY(0)' : 'translateY(40px)'
        }}
      >
        <h2 className="text-4xl md:text-6xl font-semibold text-center">
          My <span className="gradient-text font-bold">Projects</span>
        </h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard 
            key={project.id}
            project={project}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}