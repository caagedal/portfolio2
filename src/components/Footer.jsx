import { useScrollReveal } from "./AnimatedSection";

export default function Footer() {
  const [footerRef, footerVisible] = useScrollReveal({ threshold: 0.1 });
  
  return (
    <footer 
      ref={footerRef}
      className="container mx-auto px-4 mb-16 relative z-10 transition-all duration-1000"
      style={{
        opacity: footerVisible ? 1 : 0,
        transform: footerVisible ? 'translateY(0)' : 'translateY(40px)'
      }}
    >
      <div id="contact" className="flex flex-col md:flex-row justify-between gap-8">
        <div className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-12">
          <div className="text-center">
            <h4 className="text-lg font-semibold mb-2">Email</h4>
            <p className="text-teal hover:text-shadow transition-all duration-300">caagedal@gmail.com</p>
          </div>
          <div className="hidden md:block w-0.5 h-24 bg-border"></div>
          <div className="text-center">
            <h4 className="text-lg font-semibold mb-2">Phone</h4>
            <p className="text-teal hover:text-shadow transition-all duration-300">+47 993 87 262</p>
          </div>
          <div className="hidden md:block w-0.5 h-24 bg-border"></div>
          <div className="text-center">
            <h4 className="text-lg font-semibold mb-2">Location</h4>
            <p className="text-teal hover:text-shadow transition-all duration-300">Kristiansand, NO</p>
          </div>
        </div>
        <div className="flex justify-center md:justify-end gap-6 text-5xl">
          <a 
            href="https://github.com/caagedal" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-teal transition-colors duration-300 transform hover:scale-110"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a 
            href="https://www.instagram.com" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-teal transition-colors duration-300 transform hover:scale-110"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a 
            href="https://www.linkedin.com/in/cecilie-aagedal-b442b82b6/" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-teal transition-colors duration-300 transform hover:scale-110"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}