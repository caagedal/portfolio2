import { useScrollReveal } from "./AnimatedSection";

export default function About() {
  const [titleRef, titleVisible] = useScrollReveal();
  
  const paragraphs = [
    "Hello there! I am Cecilie Aagedal, a 32-year-old Front-End Development enthusiast from the picturesque city of Kristiansand. Currently, I'm navigating through the intriguing world of code and design at Noroff University, where my passion for the digital realm flourishes.",
    "My journey into the vast universe of the internet began early on, fueled by gaming adventures and explorations of the web's endless corridors. This virtual playground became my second home. After years in a field that didn't quite fit, I decided to pivot towards a career that resonated with my interests and aspirations.",
    "Front-End Development emerged as the perfect blend of creativity and logic—a canvas where I could bring my ideas to life and solve puzzles that intrigued me. This field has captivated me from the start, offering a satisfying mix of HTML/CSS/JavaScript coding and website design that keeps my creative juices flowing. My first year has been an exhilarating learning curve, filled with growth, challenges, and a lot of fun.",
    "As I look towards the future, I'm excited about the endless possibilities that lie ahead. The world of Front-End Development is a playground of ideas, solutions, and perspectives, and I can't wait to contribute my voice to the community."
  ];
  
  const skills = ['HTML', 'CSS', 'JavaScript'];
  
  // Refs for paragraph animations
  const paraRefs = paragraphs.map(() => useScrollReveal({ threshold: 0.05 }));
  
  // Ref for skills section
  const [skillsRef, skillsVisible] = useScrollReveal({ threshold: 0.1 });

  return (
    <section id="about" className="py-16 border-b-2 border-border mb-16">
      <div className="max-w-4xl mx-auto">
        <div 
          ref={titleRef}
          className="transition-all duration-1000"
          style={{
            opacity: titleVisible ? 1 : 0,
            transform: titleVisible ? 'translateY(0)' : 'translateY(40px)'
          }}
        >
          <h2 className="text-4xl md:text-6xl font-semibold mb-8 text-center">
            Who <span className="gradient-text font-bold">am I?</span>
          </h2>
        </div>
        
        <div className="text-center mb-10">
          <div className="space-y-6 text-lg md:text-xl">
            {paragraphs.map((paragraph, index) => {
              const [ref, isVisible] = paraRefs[index];
              return (
                <p 
                  key={index}
                  ref={ref}
                  className="transition-all duration-1000"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
                    transitionDelay: `${index * 150}ms`
                  }}
                >
                  {paragraph}
                </p>
              );
            })}
          </div>
        </div>
        
        <div 
          ref={skillsRef}
          className="transition-all duration-1000"
          style={{
            opacity: skillsVisible ? 1 : 0,
            transform: skillsVisible ? 'translateY(0)' : 'translateY(40px)',
            transitionDelay: '600ms'
          }}
        >
          <div className="flex flex-wrap justify-center items-center gap-6 border-2 border-teal p-6 rounded-md bg-background/80 backdrop-blur-sm">
            <p className="font-semibold text-xl">Skillset:</p>
            {skills.map((skill, index) => (
              <p 
                key={index} 
                className="text-teal font-bold text-xl relative inline-block after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-teal after:bottom-0 after:left-0 after:scale-x-0 after:origin-left hover:after:scale-x-100 after:transition-transform after:duration-300"
              >
                {skill}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}