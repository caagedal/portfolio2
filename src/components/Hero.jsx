// src/components/Hero.jsx
import { HashLink } from 'react-router-hash-link';
import { useScrollReveal } from './AnimatedSection';

export default function Hero() {
  const [textRef, textVisible] = useScrollReveal();
  const [imgRef, imgVisible] = useScrollReveal({ threshold: 0.2 });
  
  return (
    <section className="flex flex-col-reverse md:flex-row justify-between items-center gap-8 py-16 md:py-24">
      <div 
        ref={textRef}
        className="md:w-3/5 border-b-2 border-border pb-8 transition-all duration-1000"
        style={{
          opacity: textVisible ? 1 : 0,
          transform: textVisible ? 'translateY(0)' : 'translateY(40px)'
        }}
      >
        <div className="space-y-4">
          <h2 className="text-4xl md:text-6xl font-semibold">
            Hello, I'm <span className="gradient-text font-bold">Cecilie</span>!
          </h2>
          <p className="text-xl md:text-3xl mb-8 md:w-4/5">
            Up-and-coming <span className="text-teal">front-end developer</span>, studying at Noroff
          </p>
        </div>
        <div className="mt-8">
          <HashLink 
            smooth 
            to="#about" 
            className="inline-block px-6 py-3 border-2 border-teal text-teal hover:bg-teal/10 transition-all duration-300 hover:shadow-button hover:scale-105"
          >
            Read more
          </HashLink>
        </div>
      </div>
      
      <div 
        ref={imgRef}
        className="relative w-full md:w-2/5  animate-float transition-all duration-1000"
        style={{
          opacity: imgVisible ? 1 : 0,
          transform: imgVisible ? 'translateY(0)' : 'translateY(40px)'
        }}
      >
        <div className="absolute top-0 left-0 w-24 h-0.5 bg-border"></div>
        <div className="absolute top-0 left-0 w-0.5 h-24 bg-border"></div>
        <div className="absolute bottom-0 right-0 w-0.5 h-24 bg-border"></div>
        <div className="absolute bottom-0 right-0 w-24 h-0.5 bg-border"></div>
        <div className="p-8">
          <img 
            src="/media/cec.png" 
            alt="Image of me" 
            className="w-full shadow-image transition-all duration-500 hover:shadow-glow" 
          />
        </div>
      </div>
    </section>
  );
}